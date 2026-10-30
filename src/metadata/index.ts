import { createMetadata } from "@/lib/next-seo";
import { faqPageSchema, softwareAppSchema, websiteSchema } from "@/lib/seo";
const TITLE = "Interior Design Project Management Software | Intorza";
const DESCRIPTION =
  "Manage interior design projects, create quotations and invoices, and organize clients in one workspace with Intorza.";
export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/",
});
export const structuredData = [websiteSchema(), softwareAppSchema(), faqPageSchema()];
