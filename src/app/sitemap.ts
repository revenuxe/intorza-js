import { SITE_URL } from "@/lib/site";
import { boqDetailPages, boqDetailPath } from "@/data/boq-detail-pages";
import { drawingServicePages, drawingServicePath } from "@/data/drawing-service-pages";
import { articlePath, quotationArticles } from "@/data/quotation-articles";
import type { MetadataRoute } from "next";
import { quotationArticleDates } from "@/data/quotation-article-seo";
import { websiteAudiencePages, websiteAudiencePath, websiteFocusPages, websiteFocusPath } from "@/data/website-audience-pages";
import { threeDRenderingAudiencePath, threeDRenderingAudiences } from "@/data/3d-rendering-audience-pages";
import { renderingServices, renderingServicePath } from "@/data/3d-rendering-services";
import { boqRoomPages, boqRoomPath } from "@/data/boq-room-pages";
import { walkthroughServicePages, walkthroughServicePath } from "@/data/walkthrough-service-pages";
import { walkthroughSpacePages, walkthroughSpacePath } from "@/data/walkthrough-space-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/articles",
    ...quotationArticles.map((a) => articlePath(a.slug)),
    "/about",
    "/demo-videos",
    "/contact",
    "/services/3d-interior-rendering",
    "/services/2d-interior-working-drawings",
    "/services/interior-boq-cost-estimation",
    "/services/3d-walkthrough-360-visualization",
    ...walkthroughServicePages.map(({ slug }) => walkthroughServicePath(slug)),
    ...walkthroughSpacePages.map(({ slug }) => walkthroughSpacePath(slug)),
    ...boqDetailPages.map(({slug})=>boqDetailPath(slug)),
    ...boqRoomPages.map(({slug})=>boqRoomPath(slug)),
    ...drawingServicePages.map(({slug})=>drawingServicePath(slug)),
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
