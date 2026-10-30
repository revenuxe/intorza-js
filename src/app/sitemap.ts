import { SITE_URL } from "@/lib/site";
import { articlePath, quotationArticles } from "@/data/quotation-articles";
import type { MetadataRoute } from "next";
import { quotationArticleDates } from "@/data/quotation-article-seo";
import { websiteAudiencePages, websiteAudiencePath, websiteFocusPages, websiteFocusPath } from "@/data/website-audience-pages";
import { threeDRenderingAudiencePath, threeDRenderingAudiences } from "@/data/3d-rendering-audience-pages";
import { renderingServices, renderingServicePath } from "@/data/3d-rendering-services";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/articles",
    ...quotationArticles.map((a) => articlePath(a.slug)),
    "/about",
    "/demo-videos",
    "/contact",
    "/services/3d-interior-rendering",
    ...renderingServices.map(({slug}) => renderingServicePath(slug)),
    ...threeDRenderingAudiences.map(({ slug }) => threeDRenderingAudiencePath(slug)),
    "/services/website-development",
    ...websiteAudiencePages.map(({ slug }) => websiteAudiencePath(slug)),
    ...websiteFocusPages.map(({ slug }) => websiteFocusPath(slug)),
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
        : path.startsWith("/interior-") || path === "/ai-quotation-builder" || path.startsWith("/services/")
          ? 0.8
          : 0.5,
  }));
}
