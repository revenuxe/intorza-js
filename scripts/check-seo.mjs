import assert from "node:assert/strict";
import { articlePath, quotationArticles } from "../src/data/quotation-articles.ts";
import {
  quotationArticleSEO,
  quotationArticleDates,
  articleLibrarySEO,
} from "../src/data/quotation-article-seo.ts";
import { spawn } from "node:child_process";
import { once } from "node:events";
import fs from "node:fs";
import { setTimeout as delay } from "node:timers/promises";

const origin = "http://127.0.0.1:3199";
const canonicalOrigin = "https://www.intorza.com";
const paths = [
  "/",
  "/articles",
  ...quotationArticles.map((a) => articlePath(a.slug)),
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
  "/about",
  "/demo-videos",
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
      if (path === "/interior-design-crm-quotation-software") {
        const article = schemas.find((schema) => schema["@type"] === "Article");
        assert.equal(article?.headline, headings[0], "Article headline matches H1");
        assert.equal(article?.url, canonicalOrigin + path, "Article canonical URL");
        assert.equal(article?.description, descriptions[0], "Article description matches metadata");
        assert.equal(article?.author?.name, "Intorza", "Article organization author");
        assert.ok(main.includes(article.datePublished.slice(0, 10)), "Visible publication date");
        assert.equal(getMeta("og:type")[0], "article", "Article social metadata");
        const faq = schemas.find((schema) => schema["@type"] === "FAQPage");
        for (const question of faq.mainEntity) {
          assert.ok(
            plain(main).includes(question.name) &&
              plain(main).includes(question.acceptedAnswer.text),
            "Article FAQ matches visible content",
          );
        }
      }
      if (path.startsWith("/articles/")) {
        const slug = path.split("/").at(-1);
        const expected = quotationArticleSEO[slug];
        assert.equal(titles[0], expected.title, path + ": editorial search title");
        assert.equal(
          descriptions[0],
          expected.description,
          path + ": editorial search description",
        );
        assert.ok(titles[0].length <= 65, path + ": concise search title");
        assert.ok(
          descriptions[0].length >= 120 && descriptions[0].length <= 165,
          path + ": concise search description",
        );
        const article = schemas.find((schema) => schema["@type"] === "Article");
        assert.equal(article?.headline, headings[0], path + ": Article headline matches H1");
        assert.equal(
          article?.description,
          descriptions[0],
          path + ": Article description matches metadata",
        );
        assert.equal(article?.url, canonicalOrigin + path, path + ": Article URL");
        assert.equal(
          article?.publisher?.["@id"],
          canonicalOrigin + "/#organization",
          path + ": publisher entity",
        );
        assert.equal(
          article?.datePublished,
          quotationArticleDates.published,
          path + ": fixed publication date",
        );
        assert.equal(
          article?.dateModified,
          quotationArticleDates.modified,
          path + ": fixed modification date",
        );
        assert.ok(
          main.toLowerCase().includes(`datetime="${article.datePublished.toLowerCase()}"`),
          path + ": visible publication date",
        );
        assert.equal(getMeta("og:type")[0], "article", path + ": article social type");
        assert.equal(
          getMeta("article:published_time")[0],
          article.datePublished,
          path + ": social publication date",
        );
        assert.equal(
          getMeta("article:modified_time")[0],
          article.dateModified,
          path + ": social modification date",
        );
        assert.equal(getMeta("twitter:title")[0], titles[0], path + ": Twitter title");
        assert.equal(
          getMeta("twitter:description")[0],
          descriptions[0],
          path + ": Twitter description",
        );
        const faq = schemas.find((schema) => schema["@type"] === "FAQPage");
        for (const question of faq.mainEntity) {
          assert.ok(
            plain(main).includes(question.name) &&
              plain(main).includes(question.acceptedAnswer.text),
            path + ": visible FAQ matches schema",
          );
        }
      }
      if (path === "/articles") {
        assert.equal(titles[0], articleLibrarySEO.title, "Article hub title");
        assert.equal(
          schemas.find((s) => s["@type"] === "CollectionPage")?.mainEntity.itemListElement.length,
          quotationArticles.length,
          "Article hub lists every guide in schema",
        );
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
    for (const path of featurePaths.filter(
      (path) => path !== "/interior-design-crm-quotation-software",
    ))
      assert.ok(
        footer.includes('href="' + path + '"'),
        page.path + ": footer includes product guide " + path,
      );
    assert.ok(
      !footer.includes('href="/articles/'),
      page.path + ": article links stay out of footer",
    );
    assert.ok(
      !footer.includes('href="/interior-design-crm-quotation-software"'),
      page.path + ": existing article stays out of footer",
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
  for (const path of ["/articles", ...quotationArticles.map((a) => articlePath(a.slug))]) {
    const entry = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].find((match) =>
      match[1].includes(`<loc>${canonicalOrigin}${path}</loc>`),
    )?.[1];
    const lastModified = entry?.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
    assert.equal(
      new Date(lastModified).getTime(),
      new Date(quotationArticleDates.modified).getTime(),
      path + ": sitemap uses editorial modification date",
    );
  }
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
