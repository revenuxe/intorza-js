import { SITE_URL } from "@/lib/site";
import { articlePath, quotationArticles } from "@/data/quotation-articles";
import type { MetadataRoute } from "next";
import { quotationArticleDates } from "@/data/quotation-article-seo";
import { websiteAudiencePages, websiteAudiencePath } from "@/data/website-audience-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/articles",
    ...quotationArticles.map((a) => articlePath(a.slug)),
    "/about",
    "/demo-videos",
    "/contact",
    "/services/website-development",
    ...websiteAudiencePages.map(({ slug }) => websiteAudiencePath(slug)),
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
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    ...(path === "/articles" || path.startsWith("/articles/")
      ? { lastModified: quotationArticleDates.modified }
      : {}),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path.startsWith("/interior-") || path === "/ai-quotation-builder" || path.startsWith("/services/website-development")
          ? 0.8
          : 0.5,
  }));
}
