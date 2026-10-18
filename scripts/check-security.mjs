import http from "node:http";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import fs from "node:fs";
import { setTimeout as delay } from "node:timers/promises";
const origin = "http://127.0.0.1:3204";
const server = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3204"],
  { stdio: ["ignore", "pipe", "pipe"] },
);
let logs = "";
server.stdout.on("data", (c) => (logs += c));
server.stderr.on("data", (c) => (logs += c));
const results = [];
try {
  for (let i = 0; i < 100 && !logs.includes("Ready in"); i++) {
    if (server.exitCode !== null) throw Error("Security test server exited");
    await delay(100);
  }
  assert.ok(logs.includes("Ready in"));
  const canonicalRedirect = await new Promise((resolve, reject) => {
    http
      .get(
        origin + "/ai-quotation-builder?ref=audit",
        { headers: { host: "intorza.com" } },
        (response) => {
          response.resume();
          response.on("end", () =>
            resolve({ status: response.statusCode, location: response.headers.location }),
          );
        },
      )
      .on("error", reject);
  });
  assert.equal(canonicalRedirect.status, 308, "Apex domain redirects permanently");
  assert.equal(
    canonicalRedirect.location,
    "https://www.intorza.com/ai-quotation-builder?ref=audit",
    "Canonical redirect preserves path and query",
  );
  for (const path of [
    "/",
    "/contact",
    "/ai-quotation-builder",
    "/admin/login",
    "/admin",
    "/missing-security-check",
  ]) {
    const r = await fetch(origin + path, { redirect: "manual" });
    assert.equal(r.headers.get("x-powered-by"), null);
    assert.equal(r.headers.get("x-content-type-options"), "nosniff");
    assert.equal(r.headers.get("x-frame-options"), "DENY");
    assert.match(r.headers.get("strict-transport-security"), /max-age=31536000/);
    assert.match(r.headers.get("permissions-policy"), /camera=\(\)/);
    const csp = r.headers.get("content-security-policy");
    for (const rule of [
      "default-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "media-src 'self'",
    ])
      assert.ok(csp.includes(rule), `${path}: ${rule}`);
    assert.ok(!csp.includes("unsafe-eval"), "Production CSP excludes eval");
    if (path.startsWith("/admin")) {
      assert.match(r.headers.get("cache-control"), /no-store/);
      assert.match(r.headers.get("x-robots-tag"), /noindex/);
    }
    results.push({ path, status: r.status, headers: "passed" });
  }
  for (const path of [
    "/.env",
    "/.git/config",
    "/src/app/admin/actions.ts",
    "/supabase/config.toml",
    "/package-lock.json",
  ]) {
    assert.equal((await fetch(origin + path)).status, 404, `${path}: private file unavailable`);
  }
  const html = await (await fetch(origin + "/admin/login")).text();
  const form = [...html.matchAll(/<form\b[^>]*>([\s\S]*?)<\/form>/g)].find((m) =>
    m[1].includes('name="password"'),
  );
  assert.ok(form, "Login form found");
  const body = new FormData();
  for (const m of form[1].matchAll(/<input\b([^>]*)>/g)) {
    const name = m[1].match(/name="([^"]+)"/)?.[1];
    if (name) body.set(name, m[1].match(/value="([^"]*)"/)?.[1] ?? "");
  }
  body.set("email", "csrf-test@example.invalid");
  body.set("password", "invalid-test-password");
  const attack = await fetch(origin + "/admin/login", {
    method: "POST",
    headers: { origin: "https://untrusted.example" },
    body,
    redirect: "manual",
  });
  assert.ok(attack.status >= 400, "Cross-origin server action rejected");
  assert.ok(
    !attack.headers.getSetCookie().some((c) => c.startsWith("sb-")),
    "No auth cookies for rejected action",
  );
  fs.mkdirSync("reports", { recursive: true });
  fs.writeFileSync(
    "reports/security-http-audit.json",
    JSON.stringify(
      {
        auditedAt: new Date().toISOString(),
        scope: "Local production build",
        results,
        privateFiles: "404",
        crossOriginAction: "rejected",
        strictCsp: false,
        cspLimitation: "Inline hydration scripts/styles remain allowed for prerendered pages",
      },
      null,
      2,
    ) + "\n",
  );
  console.log(
    "Passed: production security headers, protected cache/index settings, private-file denial and cross-origin action rejection.",
  );
} finally {
  server.kill();
  if (server.exitCode === null) await once(server, "exit");
}
