// Requires an authenticated Supabase CLI account with access to the linked project.
// Keys, generated links, sessions, and response bodies remain in memory and are never printed.
import assert from "node:assert/strict";
import { execFile, spawn } from "node:child_process";
import { promisify } from "node:util";
import { once } from "node:events";
import { setTimeout as delay } from "node:timers/promises";
import { createClient } from "@supabase/supabase-js";
import { createServerClient } from "@supabase/ssr";
import { randomUUID, randomBytes } from "node:crypto";

process.loadEnvFile();
const run = promisify(execFile);
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_PUBLISHABLE_KEY;
const ref = process.env.SUPABASE_PROJECT_ID || new URL(url).hostname.split(".")[0];
let keys;
try {
  const { stdout } = await run(
    process.execPath,
    [
      "node_modules/supabase/dist/supabase.js",
      "projects",
      "api-keys",
      "--project-ref",
      ref,
      "--reveal",
      "--output",
      "json",
    ],
    { maxBuffer: 1024 * 1024 },
  );
  const payload = JSON.parse(stdout);
  keys = Array.isArray(payload) ? payload : (payload.api_keys ?? payload.keys);
} catch {
  throw new Error(
    "Unable to retrieve project test credentials through the authenticated CLI. No credentials were logged.",
  );
}
const credential =
  keys?.find((item) => item.name === "service_role") ??
  keys?.find((item) => item.type === "secret");
assert.ok(credential?.api_key, "A server credential is needed for the private auth verification.");
const service = createClient(url, credential.api_key, {
  auth: { persistSession: false, autoRefreshToken: false },
});
keys = undefined;
const jar = new Map();
const session = createServerClient(url, key, {
  cookies: {
    getAll: () => [...jar].map(([name, value]) => ({ name, value })),
    setAll: (values) => values.forEach(({ name, value }) => jar.set(name, value)),
  },
});
const port = 3198,
  origin = `http://127.0.0.1:${port}`;
let logs = "";
let testUserId;
let testRoleId;
let testInquiryId;
const server = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", String(port)],
  { stdio: ["ignore", "pipe", "pipe"] },
);
server.stdout.on("data", (chunk) => {
  logs += chunk;
});
server.stderr.on("data", (chunk) => {
  logs += chunk;
});
try {
  let ready = false;
  for (let i = 0; i < 100; i++) {
    if (logs.includes("Ready in")) {
      ready = true;
      break;
    }
    if (server.exitCode !== null) break;
    await delay(100);
  }
  assert.ok(ready, "Production server did not start.");
  // generateLink creates a verification link without sending an email or changing the password.
  const generated = await service.auth.admin.generateLink({
    type: "magiclink",
    email: "admin@intorza.com",
  });
  assert.ok(
    !generated.error && generated.data.properties?.hashed_token,
    "Unable to create an in-memory test session.",
  );
  const verified = await session.auth.verifyOtp({
    type: "magiclink",
    token_hash: generated.data.properties.hashed_token,
  });
  assert.ok(
    !verified.error && verified.data.user?.email === "admin@intorza.com",
    "Owner session verification failed.",
  );
  const cookie = [...jar].map(([name, value]) => `${name}=${value}`).join("; ");
  assert.ok(cookie, "SSR cookie session was not created.");
  const pages = [
    ["/admin", "Overview"],
    ["/admin/inquiries", "Inquiries"],
    ["/admin/feedback", "Feedback"],
    ["/admin/users", "Account access"],
    ["/admin/activity", "Admin activity"],
  ];
  let inquiryHtml = "";
  for (const [path, heading] of pages) {
    const response = await fetch(origin + path, { headers: { cookie }, redirect: "manual" });
    assert.equal(response.status, 200, `${path}: authenticated rendering`);
    const html = await response.text();
    assert.ok(html.includes(heading), `${path}: expected content`);
    assert.match(html, /admin@intorza.com/, `${path}: owner identity`);
    assert.match(response.headers.get("cache-control"), /no-store/, `${path}: cache protection`);
    assert.match(response.headers.get("x-robots-tag"), /noindex/, `${path}: indexing protection`);
    assert.doesNotMatch(
      html,
      /sb_secret_|service_role|encrypted_password|hashed_token/,
      `${path}: no privileged credentials`,
    );
    if (path === "/admin/inquiries") inquiryHtml = html;
  }
  const login = await fetch(origin + "/admin/login", { headers: { cookie }, redirect: "manual" });
  assert.equal(login.status, 307, "Signed-in owner skips login");
  const contactHtml = await (await fetch(origin + "/contact")).text();
  const contactForm = [...contactHtml.matchAll(/<form\b[^>]*>([\s\S]*?)<\/form>/g)].find((match) =>
    match[1].includes('name="message"'),
  );
  assert.ok(contactForm, "Contact form is rendered");
  const contactInput = new FormData();
  const decode = (value) =>
    value
      .replaceAll("&quot;", '"')
      .replaceAll("&#x27;", "'")
      .replaceAll("&lt;", "<")
      .replaceAll("&gt;", ">")
      .replaceAll("&amp;", "&");
  for (const match of contactForm[1].matchAll(/<input\b([^>]*)>/g)) {
    const name = match[1].match(/name="([^"]+)"/)?.[1];
    if (name) contactInput.set(decode(name), decode(match[1].match(/value="([^"]*)"/)?.[1] ?? ""));
  }
  const testContactEmail = `contact-check-${randomUUID()}@intorza-test.invalid`;
  contactInput.set("name", "Integration verification");
  contactInput.set("email", testContactEmail);
  contactInput.set("subject", "Temporary integration verification");
  contactInput.set(
    "message",
    "Temporary test message; automatically removed by the integration test.",
  );
  contactInput.set("website", "");
  const contactResponse = await fetch(origin + "/contact", {
    method: "POST",
    headers: { origin },
    body: contactInput,
  });
  assert.equal(contactResponse.status, 200, "Contact submission succeeds");
  assert.ok(
    (await contactResponse.text()).includes("Your message has been received"),
    "Contact success state",
  );
  const savedInquiry = await service
    .from("inquiries")
    .select("id, read")
    .eq("email", testContactEmail)
    .single();
  testInquiryId = savedInquiry.data?.id;
  assert.ok(
    !savedInquiry.error && testInquiryId && savedInquiry.data.read === false,
    "Public message reaches the admin inbox as unread",
  );
  // A forged cookie must never be enough to display the dashboard.
  const forged = [...jar].map(([name]) => `${name}=forged-session`).join("; ");
  const denied = await fetch(origin + "/admin", {
    headers: { cookie: forged },
    redirect: "manual",
  });
  assert.equal(denied.status, 307, "Forged session is rejected");
  const updateForm = [...inquiryHtml.matchAll(/<form\b[^>]*>([\s\S]*?)<\/form>/g)].find((match) =>
    match[1].includes("Mark as"),
  );
  assert.ok(updateForm, "An inquiry action form is available for authorization testing.");
  const input = new FormData();
  for (const match of updateForm[1].matchAll(/<input\b([^>]*)>/g)) {
    const name = match[1].match(/name="([^"]+)"/)?.[1];
    const value = match[1].match(/value="([^"]*)"/)?.[1] ?? "";
    if (name) input.set(name, value);
  }
  assert.ok(
    [...input.keys()].some((name) => name.startsWith("$ACTION_ID_")),
    "Server action identifier",
  );
  const blocked = await fetch(origin + "/admin/inquiries", {
    method: "POST",
    headers: { origin },
    body: input,
    redirect: "manual",
  });
  assert.equal(blocked.status, 303, "Anonymous server-action invocation is redirected");
  assert.equal(
    new URL(blocked.headers.get("location"), origin).pathname,
    "/admin/login",
    "Mutation requires admin authorization",
  );
  // Exercise the real password-login action with a temporary account, leaving the
  // owner's password unchanged. Admin API creation sends no invitation email.
  const testEmail = `admin-check-${randomUUID()}@intorza-test.invalid`;
  const testPassword = randomBytes(32).toString("base64url");
  const created = await service.auth.admin.createUser({
    email: testEmail,
    password: testPassword,
    email_confirm: true,
  });
  assert.ok(!created.error && created.data.user, "Temporary auth account creation");
  testUserId = created.data.user.id;
  const grant = await session.rpc("admin_set_access", { target_email: testEmail, enabled: true });
  assert.equal(grant.error, null, "Owner can grant administrator access");
  const role = await service
    .from("user_roles")
    .select("id")
    .eq("user_id", testUserId)
    .eq("role", "admin")
    .single();
  testRoleId = role.data?.id;
  const loginHtml = await (await fetch(origin + "/admin/login")).text();
  const passwordForm = [...loginHtml.matchAll(/<form\b[^>]*>([\s\S]*?)<\/form>/g)].find((match) =>
    match[1].includes('name="password"'),
  );
  assert.ok(passwordForm, "Password login form");
  const passwordInput = new FormData();
  for (const match of passwordForm[1].matchAll(/<input\b([^>]*)>/g)) {
    const name = match[1].match(/name="([^"]+)"/)?.[1];
    if (name) passwordInput.set(name, match[1].match(/value="([^"]*)"/)?.[1] ?? "");
  }
  passwordInput.set("email", testEmail);
  passwordInput.set("password", testPassword);
  const signedIn = await fetch(origin + "/admin/login", {
    method: "POST",
    headers: { origin },
    body: passwordInput,
    redirect: "manual",
  });
  assert.equal(signedIn.status, 303, "Password login redirects");
  assert.equal(
    new URL(signedIn.headers.get("location"), origin).pathname,
    "/admin",
    "Password login succeeds",
  );
  const sessionCookies = signedIn.headers.getSetCookie().filter((value) => value.startsWith("sb-"));
  assert.ok(sessionCookies.length, "Password login sets session cookies");
  for (const value of sessionCookies) {
    assert.match(value, /httponly/i, "HTTP-only session cookie");
    assert.match(value, /secure/i, "Secure production session cookie");
    assert.match(value, /samesite=lax/i, "SameSite session cookie");
  }
  const testCookie = sessionCookies.map((value) => value.split(";")[0]).join("; ");
  assert.equal(
    (await fetch(origin + "/admin", { headers: { cookie: testCookie }, redirect: "manual" }))
      .status,
    200,
    "New administrator has dashboard access",
  );
  const revoke = await session.rpc("admin_set_access", { target_email: testEmail, enabled: false });
  assert.equal(revoke.error, null, "Owner can revoke administrator access");
  assert.equal(
    (await fetch(origin + "/admin", { headers: { cookie: testCookie }, redirect: "manual" }))
      .status,
    307,
    "Role revocation immediately removes dashboard access",
  );
  await session.auth.signOut({ scope: "local" });
  const clearedCookie = [...jar].map(([name, value]) => `${name}=${value}`).join("; ");
  const afterSignOut = await fetch(origin + "/admin", {
    headers: { cookie: clearedCookie },
    redirect: "manual",
  });
  assert.equal(afterSignOut.status, 307, "Signed-out browser is redirected");
  console.log(
    "Passed: owner authentication, five private SSR dashboard pages, real password login, secure cookies, grant/revoke access, forged-cookie denial, unauthenticated mutation denial, and sign-out. No email sent or owner password changed.",
  );
} finally {
  if (testInquiryId) await service.from("inquiries").delete().eq("id", testInquiryId);
  if (testUserId) {
    const removed = await service.auth.admin.deleteUser(testUserId);
    if (removed.error)
      console.error("Temporary auth account cleanup failed; check the test account in Supabase.");
  }
  if (testRoleId) await service.from("admin_audit_log").delete().eq("record_id", testRoleId);
  await session.auth.signOut({ scope: "local" });
  jar.clear();
  server.kill();
  if (server.exitCode === null) await once(server, "exit");
}
