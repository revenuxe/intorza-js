import { breadcrumbSchema } from "@/lib/seo";
import { createMetadata } from "@/lib/next-seo";
const TITLE = "Cookie Policy — How Intorza Uses Cookies";
const DESCRIPTION =
  "Understand how Intorza uses cookies and tracking technologies and how to manage them.";
export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/cookies",
});
export const structuredData = [breadcrumbSchema([{ name: "Cookie Policy", path: "/cookies" }])];
