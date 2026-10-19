import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import fs from "node:fs";
import { setTimeout as delay } from "node:timers/promises";

const origin = "http://127.0.0.1:3199";
const canonicalOrigin = "https://www.intorza.com";
const paths = [
  "/",
  "/interior-design-dashboard",
  "/interior-site-measurement",
  "/interior-quotation-management",
  "/interior-project-management",
  "/interior-invoice-software",
  "/interior-design-crm",
  "/interior-team-management",
  "/interior-quotation",
  "/ai-quotation-builder",
  "/about",
  "/contact",
  "/interior-quotation-format",
  "/interior-cost-calculator",
  "/privacy",
  "/terms",
  "/cookies",
  "/refund",
];
const server = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3199"],
  { stdio: ["ignore", "pipe", "pipe"] },
);
let logs = "";
server.stdout.on("data", (chunk) => {
  logs += chunk;
});
server.stderr.on("data", (chunk) => {
  logs += chunk;
});
const decode = (text) =>
  text
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
const imagesInHTML = (html, src) => Boolean(src && html.includes(src));
const plain = (text) =>
  decode(text.replace(/<[^>]*>/g, ""))
    .replace(/\s+/g, " ")
    .trim();
const attr = (tag, name) => tag.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`))?.[1];
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
  assert.ok(ready, "SEO audit server failed to start.");
  const pages = await Promise.all(
    paths.map(async (path) => {
      const response = await fetch(origin + path);
      assert.equal(response.status, 200, path);
      const html = await response.text();
      assert.doesNotMatch(
        html,
        /eyebrow-tag|Built for interior quotations|Built for interior professionals/,
        `${path}: no eyebrow labels`,
      );
      const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
      assert.ok(main, `${path}: main content landmark`);
      const contextualLinks = [...main.matchAll(/<a\b[^>]*>/g)]
        .map((match) => attr(match[0], "href"))
        .filter(Boolean)
        .map(decode)
        .filter((link) => link.startsWith("/") && new URL(link, origin).pathname !== path);
      const contextualDestinations = [
        ...new Set(contextualLinks.map((link) => new URL(link, origin).pathname)),
      ];
      assert.ok(
        contextualDestinations.length >= 2,
        `${path}: at least two relevant internal destinations in the body, independently of the footer`,
      );
      const tags = [...html.matchAll(/<meta\b[^>]*>/g)].map((match) => match[0]);
      const getMeta = (name) =>
        tags
          .filter((tag) => attr(tag, "name") === name || attr(tag, "property") === name)
          .map((tag) => decode(attr(tag, "content") ?? ""));
      const titles = [...html.matchAll(/<title>([^<]+)<\/title>/g)].map((match) =>
        decode(match[1]),
      );
      assert.equal(titles.length, 1, `${path}: single title`);
      const descriptions = getMeta("description");
      assert.equal(descriptions.length, 1, `${path}: single description`);
      assert.ok(descriptions[0].trim(), `${path}: nonempty description`);
      const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map((match) =>
        plain(match[1]),
      );
      assert.equal(headings.length, 1, `${path}: single H1`);
      const canonicals = [...html.matchAll(/<link\b[^>]*>/g)]
        .map((match) => match[0])
        .filter((tag) => attr(tag, "rel") === "canonical");
      assert.equal(canonicals.length, 1, `${path}: single canonical`);
      assert.equal(
        decode(attr(canonicals[0], "href")),
        canonicalOrigin + (path === "/" ? "" : path),
        `${path}: self canonical`,
      );
      assert.equal(getMeta("og:title")[0], titles[0], `${path}: matching Open Graph title`);
      assert.equal(getMeta("og:image:width")[0], "1536", `${path}: actual social image width`);
      assert.equal(getMeta("og:image:height")[0], "1024", `${path}: actual social image height`);
      assert.ok(
        !getMeta("robots").some((value) => value.includes("noindex")),
        `${path}: public page indexability`,
      );
      assert.ok(html.includes('href="tel:+919886579923"'), `${path}: click-to-call phone`);
      assert.ok(
        html.includes("Shop No 1, 1st Floor, 10/1, 10th Cross"),
        `${path}: visible street address`,
      );
      const schemas = [
        ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
      ].map((match) => JSON.parse(match[1]));
      const organization = schemas.find((schema) => schema["@type"] === "Organization");
      assert.equal(organization?.telephone, "+919886579923", `${path}: organization phone`);
      assert.equal(
        organization?.address?.postalCode,
        "560032",
        `${path}: organization postal code`,
      );
      assert.equal(
        organization?.address?.addressLocality,
        "Bengaluru",
        `${path}: organization locality`,
      );
      assert.ok(!schemas.some((schema) => schema.aggregateRating), `${path}: no invented ratings`);
      if (path !== "/")
        assert.ok(
          schemas.some((schema) => schema["@type"] === "BreadcrumbList"),
          `${path}: breadcrumb schema`,
        );
      const featurePaths = [
        "/interior-design-dashboard",
        "/interior-site-measurement",
        "/interior-quotation-management",
        "/interior-project-management",
        "/interior-invoice-software",
        "/interior-design-crm",
        "/interior-team-management",
      ];
      if (featurePaths.includes(path)) {
        const webpage = schemas.find((schema) => schema["@type"] === "WebPage");
        assert.equal(webpage?.url, canonicalOrigin + path, path + ": WebPage matches canonical");
        assert.equal(webpage?.name, headings[0], path + ": WebPage matches visible H1");
        assert.equal(
          webpage?.description,
          descriptions[0],
          path + ": schema description matches metadata",
        );
        assert.ok(
          imagesInHTML(html, webpage?.primaryImageOfPage?.url?.replace(canonicalOrigin, "")),
          path + ": schema image is visible",
        );
        const faq = schemas.find((schema) => schema["@type"] === "FAQPage");
        const visibleFaqs = [...main.matchAll(/<details\b[^>]*>([\s\S]*?)<\/details>/g)].map(
          (match) => plain(match[1]),
        );
        assert.equal(
          faq?.mainEntity.length,
          visibleFaqs.length,
          path + ": FAQ count matches visible content",
        );
        for (const [index, question] of faq.mainEntity.entries()) {
          assert.ok(visibleFaqs[index].includes(question.name), path + ": FAQ question is visible");
          assert.ok(
            visibleFaqs[index].includes(question.acceptedAnswer.text),
            path + ": FAQ answer is visible",
          );
        }
      }
      const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
      assert.equal(ids.length, new Set(ids).size, `${path}: unique HTML IDs`);
      const images = [...html.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);
      for (const image of images) {
        assert.ok(attr(image, "alt"), `${path}: descriptive image alt`);
        assert.ok(
          Number(attr(image, "width")) > 0 && Number(attr(image, "height")) > 0,
          `${path}: image dimensions reserve space`,
        );
      }
      const links = [...html.matchAll(/<a\b[^>]*>/g)]
        .map((match) => attr(match[0], "href"))
        .filter(Boolean)
        .map(decode);
      return {
        path,
        title: titles[0],
        description: descriptions[0],
        h1: headings[0],
        imageCount: images.length,
        htmlBytes: Buffer.byteLength(html),
        schemaTypes: schemas.map((schema) => schema["@type"]),
        links,
        contextualDestinations,
        mainContentWords: plain(main).split(/\s+/).filter(Boolean).length,
        ids,
        html,
      };
    }),
  );
  assert.equal(new Set(pages.map((page) => page.title)).size, paths.length, "Unique page titles");
  assert.equal(
    new Set(pages.map((page) => page.description)).size,
    paths.length,
    "Unique page descriptions",
  );
  assert.equal(new Set(pages.map((page) => page.h1)).size, paths.length, "Distinct page H1s");
  for (const page of pages) {
    page.inboundContextualPages = pages
      .filter((source) => source.contextualDestinations.includes(page.path))
      .map((source) => source.path);
    assert.ok(page.inboundContextualPages.length, `${page.path}: has an incoming contextual link`);
  }
  const publicPaths = new Set(paths);
  const shortestPaths = (contextualOnly) => {
    const distances = new Map([["/", 0]]);
    const queue = ["/"];
    for (let index = 0; index < queue.length; index++) {
      const source = pages.find((page) => page.path === queue[index]);
      const targets = contextualOnly
        ? source.contextualDestinations
        : source.links
            .filter((link) => link.startsWith("/"))
            .map((link) => new URL(link, origin).pathname);
      for (const target of targets) {
        if (publicPaths.has(target) && !distances.has(target)) {
          distances.set(target, distances.get(source.path) + 1);
          queue.push(target);
        }
      }
    }
    return distances;
  };
  const navigationDepth = shortestPaths(false);
  const contextualDepth = shortestPaths(true);
  const featurePaths = paths.filter(
    (path) => path.startsWith("/interior-") || path === "/ai-quotation-builder",
  );
  for (const page of pages) {
    page.clickDepthFromHome = navigationDepth.get(page.path);
    page.contextualClickDepthFromHome = contextualDepth.get(page.path) ?? null;
    assert.ok(navigationDepth.has(page.path), page.path + ": reachable from homepage");
    assert.ok(page.clickDepthFromHome <= 2, page.path + ": within two navigation clicks");
    if (featurePaths.includes(page.path)) {
      assert.ok(
        contextualDepth.has(page.path) && contextualDepth.get(page.path) <= 2,
        page.path + ": within two contextual clicks",
      );
      assert.ok(
        page.inboundContextualPages.length >= 2,
        page.path + ": linked from multiple relevant pages",
      );
    }
  }
  for (const page of pages) {
    const footer = page.html.match(/<footer\b[^>]*>([\s\S]*?)<\/footer>/)?.[1] ?? "";
    for (const path of featurePaths)
      assert.ok(
        footer.includes('href="' + path + '"'),
        page.path + ": footer includes product guide " + path,
      );
  }
  for (const page of pages)
    for (const link of page.links.filter((link) => link.startsWith("/") || link.startsWith("#"))) {
      const parsed = new URL(link, origin + page.path);
      const destination = pages.find((item) => item.path === parsed.pathname);
      assert.ok(destination, `${page.path}: valid internal link ${link}`);
      if (parsed.hash)
        assert.ok(
          destination.ids.includes(decodeURIComponent(parsed.hash.slice(1))),
          `${page.path}: valid anchor ${link}`,
        );
    }
  const quotation = pages.find((page) => page.path === "/interior-quotation");
  assert.equal(quotation.h1, "Best Interior Quotation Tool for Designers & Contractors");
  assert.ok(quotation.html.includes("₹499"), "Visible INR Pro price");
  assert.ok(
    quotation.links.includes("/interior-quotation-format") &&
      quotation.links.includes("/interior-cost-calculator"),
    "Quotation content links to related tools",
  );
  assert.ok(pages[0].links.includes("/interior-quotation"), "Homepage links to the quotation page");
  const sitemap = await (await fetch(origin + "/sitemap.xml")).text();
  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(
    sitemapUrls.sort(),
    paths.map((path) => canonicalOrigin + (path === "/" ? "" : path)).sort(),
    "Sitemap matches public pages",
  );
  const missing = await fetch(origin + "/not-an-existing-seo-page");
  assert.equal(missing.status, 404, "Real 404 for a nonexistent route");
  const report = {
    auditedAt: new Date().toISOString(),
    scope: "Local production build; not a live deployment or search-index audit",
    result: "passed",
    checks: [
      "Unique titles/descriptions/H1s",
      "Self-canonicals",
      "Indexability",
      "Organization contact consistency",
      "Breadcrumb schemas",
      "Valid JSON-LD",
      "Internal URLs and anchors",
      "Contextual body links on every page and no orphan pages",
      "Homepage click depth and multiple contextual links to product guides",
      "Complete product and business workflow footer navigation",
      "No eyebrow labels",
      "Intrinsic image dimensions and alt text",
      "Social image dimensions",
      "Quotation intent and pricing",
      "Sitemap coverage",
      "HTTP 404",
    ],
    pages: pages.map(({ html, ids, links, ...page }) => ({
      ...page,
      titleCharacters: page.title.length,
      descriptionCharacters: page.description.length,
      internalLinkCount: links.filter((link) => link.startsWith("/") || link.startsWith("#"))
        .length,
    })),
  };
  fs.mkdirSync("reports", { recursive: true });
  fs.writeFileSync("reports/seo-audit.json", JSON.stringify(report, null, 2) + "\n");
  console.log(
    `Passed SEO checks across ${paths.length} public pages. Report: reports/seo-audit.json`,
  );
} finally {
  server.kill();
  if (server.exitCode === null) await once(server, "exit");
}
