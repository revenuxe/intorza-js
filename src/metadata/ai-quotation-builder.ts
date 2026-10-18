import { createMetadata } from "@/lib/next-seo";
import { breadcrumbSchema, faqPageSchema, softwareAppSchema } from "@/lib/seo";
import { aiQuotationFaqs } from "@/data/ai-quotation-page";
import { SITE_URL } from "@/lib/site";
const description =
  "Create an AI interior quotation from a floor plan or project details. Review editable drafts, refine room-wise scope and export client-ready proposals with Intorza.";
export const metadata = createMetadata({
  title: "AI Interior Design Quotation Tool | Intorza",
  description,
  path: "/ai-quotation-builder",
});
export const structuredData = [
  {
    ...softwareAppSchema({
      url: SITE_URL + "/ai-quotation-builder",
      description,
    }),
    // The standard free-plan offer does not establish a free AI credit allowance.
    offers: undefined,
  },
  breadcrumbSchema([{ name: "AI Quotation Builder", path: "/ai-quotation-builder" }]),
  faqPageSchema(aiQuotationFaqs),
];
