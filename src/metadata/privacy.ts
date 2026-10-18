import { breadcrumbSchema } from "@/lib/seo";
import { createMetadata } from "@/lib/next-seo";
const TITLE = "Privacy Policy — How Intorza Protects Your Data";
const DESCRIPTION =
  "Learn how Intorza collects, uses, and protects your personal and business data.";
export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/privacy",
});
export const structuredData = [breadcrumbSchema([{ name: "Privacy Policy", path: "/privacy" }])];
