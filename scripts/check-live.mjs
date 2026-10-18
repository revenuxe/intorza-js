import fs from "node:fs";
const urls = [
  "http://intorza.com",
  "https://intorza.com",
  "https://www.intorza.com",
  "https://www.intorza.com/ai-quotation-builder",
  "https://www.intorza.com/robots.txt",
  "https://www.intorza.com/sitemap.xml",
  "https://app.intorza.com",
];
const results = await Promise.all(
  urls.map(async (url) => {
    try {
      const r = await fetch(url, { signal: AbortSignal.timeout(15000) });
      const html = await r.text();
      return {
        requested: url,
        url: r.url,
        status: r.status,
        title: html.match(/<title>([^<]+)<\/title>/)?.[1],
        canonical: html.match(/rel="canonical"[^>]*href="([^"]+)"/)?.[1],
        sitemapUrls: (html.match(/<loc>/g) || []).length,
        headers: {
          hsts: !!r.headers.get("strict-transport-security"),
          csp: !!r.headers.get("content-security-policy"),
          frameOptions: r.headers.get("x-frame-options"),
        },
      };
    } catch (e) {
      return { requested: url, error: e.name };
    }
  }),
);
fs.writeFileSync(
  "reports/live-production-audit.json",
  JSON.stringify(
    {
      auditedAt: new Date().toISOString(),
      scope: "Read-only checks against the current public deployment, independent of local fixes",
      results,
    },
    null,
    2,
  ) + "\n",
);
console.log(JSON.stringify(results, null, 2));
