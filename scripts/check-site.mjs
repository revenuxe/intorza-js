import legacyRedirects from "../src/data/legacy-redirects.json" with { type: "json" };
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { setTimeout as delay } from "node:timers/promises";

const port = 3197;
const origin = `http://127.0.0.1:${port}`;
const server = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", String(port)],
  { stdio: ["ignore", "pipe", "pipe"] },
);
let logs = "";
server.stdout.on("data", (chunk) => {
  logs += chunk;
});
server.stderr.on("data", (chunk) => {
  logs += chunk;
});
const pages = [
  "/",
  "/about",
  "/contact",
  "/interior-design-dashboard",
  "/interior-site-measurement",
  "/interior-quotation-management",
  "/interior-project-management",
  "/interior-invoice-software",
  "/interior-design-crm",
  "/interior-design-crm-quotation-software",
  "/interior-team-management",
  "/interior-quotation",
  "/ai-quotation-builder",
  "/interior-quotation-format",
  "/interior-cost-calculator",
  "/privacy",
  "/terms",
  "/cookies",
  "/refund",
];
try {
  let ready = false;
  for (let attempt = 0; attempt < 100; attempt++) {
    if (server.exitCode !== null) throw new Error(`Server exited: ${logs}`);
    if (logs.includes("Ready in")) {
      ready = true;
      break;
    }
    await delay(100);
  }
  assert.ok(ready, `Server did not start: ${logs}`);
  const htmlPages = await Promise.all(
    pages.map(async (path) => {
      const response = await fetch(origin + path);
      assert.equal(response.status, 200, path);
      const html = await response.text();
      assert.match(html, /<title>[^<]+<\/title>/, `${path}: server-rendered title`);
      assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${path}: one server-rendered H1`);
      const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
      assert.equal(
        canonical,
        `https://www.intorza.com${path === "/" ? "" : path}`,
        `${path}: canonical`,
      );
      assert.match(html, /name="description" content="[^"]+"/, `${path}: description`);
      assert.match(html, /property="og:image"/, `${path}: social image`);
      assert.doesNotMatch(
        html,
        /noindex|application\/rss\+xml|application\/atom\+xml/,
        `${path}: indexable metadata`,
      );
      for (const match of html.matchAll(
        /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
      ))
        JSON.parse(match[1]);
      for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
        const href = match[1];
        if (href.startsWith("/"))
          assert.ok(
            pages.includes(href.split(/[?#]/)[0] || "/"),
            `${path}: broken internal link ${href}`,
          );
      }
      assert.equal(response.headers.get("x-content-type-options"), "nosniff");
      const start = html.indexOf("<!--email_off-->");
      const end = html.indexOf("<!--/email_off-->");
      assert.ok(start >= 0 && end > start, "Cloudflare email opt-out markers");
      for (const match of html.matchAll(/<a\b[^>]*href="mailto:[^"]+"/g)) {
        assert.ok(
          match.index > start && match.index < end,
          "Email anchors remain inside the opt-out boundary",
        );
      }
      assert.doesNotMatch(
        html,
        /href="[^"\s]*\/cdn-cgi\/l\/email-protection/,
        "No broken Cloudflare links in rendered pages",
      );
      return html;
    }),
  );
  for (const [label, href] of [
    ["Complete Business Overview", "/interior-design-dashboard"],
    ["Build Professional Quotations", "/interior-quotation"],
    ["Track Quotation Status", "/interior-quotation-management"],
    ["Manage Converted Projects", "/interior-project-management"],
    ["Effortless Invoicing & Payments", "/interior-invoice-software"],
    ["Build Lasting Client Relationships", "/interior-design-crm"],
    ["Collaborate with Your Team", "/interior-team-management"],
    ["Organize Site Visits Efficiently", "/interior-site-measurement"],
  ]) {
    assert.ok(htmlPages[0].includes(`href="${href}"`), `Homepage feature link: ${label}`);
    assert.ok(htmlPages[0].includes(label.replaceAll("&", "&amp;")));
  }
  const redirected = [
    "/india",
    "/india/mumbai",
    "/india/delhi",
    "/india/bangalore",
    "/united-states",
    "/blog",
    "/blog/example",
    "/careers",
    "/rss.xml",
    "/atom.xml",
    "/cdn-cgi/l/email-protection",
    "/auth",
    ...[...legacyRedirects.countries, ...legacyRedirects.countryCodes].flatMap((country) => [
      `/${country}`,
      `/${country}/legacy-city`,
    ]),
  ];
  for (const path of redirected) {
    const response = await fetch(origin + path, { redirect: "manual" });
    assert.equal(response.status, 308, `${path}: permanent legacy redirect`);
    assert.equal(
      response.headers.get("location"),
      "https://www.intorza.com/",
      `${path}: homepage destination`,
    );
  }
  const removed = ["/admin/posts", "/api/public/seed-blog", "/not-a-page"];
  await Promise.all(
    removed.map(async (path) =>
      assert.equal((await fetch(origin + path)).status, 404, `${path}: retired route`),
    ),
  );
  const login = await fetch(origin + "/admin/login");
  assert.equal(login.status, 200, "Admin login");
  assert.match(await login.text(), /admin@intorza.com/, "Owner login email");
  for (const path of [
    "/admin",
    "/admin/inquiries",
    "/admin/feedback",
    "/admin/users",
    "/admin/activity",
  ]) {
    const response = await fetch(origin + path, { redirect: "manual" });
    assert.equal(response.status, 307, `${path}: anonymous access redirects`);
    assert.equal(new URL(response.headers.get("location"), origin).pathname, "/admin/login");
    assert.match(response.headers.get("cache-control"), /no-store/);
    assert.match(response.headers.get("x-robots-tag"), /noindex/);
  }
  const sitemap = await (await fetch(origin + "/sitemap.xml")).text();
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(
    urls.sort(),
    pages.map((path) => `https://www.intorza.com${path === "/" ? "" : path}`).sort(),
  );
  const robots = await (await fetch(origin + "/robots.txt")).text();
  assert.match(robots, /Sitemap: https:\/\/www.intorza.com\/sitemap.xml/);
  const image =
    htmlPages[0].match(/<img[^>]+src="([^"]+)"[^>]+alt="Intorza dashboard preview"/)?.[1] ??
    htmlPages[0].match(/<img[^>]+alt="Intorza dashboard preview"[^>]+src="([^"]+)"/)?.[1];
  assert.ok(image, "Homepage hero image");
  assert.equal(
    (await fetch(origin + image.replaceAll("&amp;", "&"))).status,
    200,
    "Optimized hero image",
  );
  console.log(
    `Passed: ${pages.length} rendered pages, ${redirected.length} legacy redirects, ${removed.length} genuine 404 URLs, metadata, structured data, internal links, sitemap, robots, and hero image.`,
  );
} catch (error) {
  console.error(logs);
  throw error;
} finally {
  server.kill();
  if (server.exitCode === null) await once(server, "exit");
}
