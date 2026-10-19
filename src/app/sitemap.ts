import { SITE_URL } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/contact",
    "/interior-design-dashboard",
    "/interior-site-measurement",
    "/interior-quotation-management",
    "/interior-project-management",
    "/interior-invoice-software",
    "/interior-design-crm",
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
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path.startsWith("/interior-") || path === "/ai-quotation-builder"
          ? 0.8
          : 0.5,
  }));
}
