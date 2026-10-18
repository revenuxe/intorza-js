import { createMetadata } from "@/lib/next-seo";
import { faqPageSchema, softwareAppSchema, websiteSchema } from "@/lib/seo";
const TITLE = "Interior Design Project Management Software | Intorza";
const DESCRIPTION =
  "Manage interior projects, create quotations, generate invoices and organize clients with Intorza. Explore the tools, free plan and Pro pricing for your business.";
export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/",
});
export const structuredData = [websiteSchema(), softwareAppSchema(), faqPageSchema()];
