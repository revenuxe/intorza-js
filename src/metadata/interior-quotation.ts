import { createMetadata } from "@/lib/next-seo";
import { breadcrumbSchema, faqPageSchema, softwareAppSchema } from "@/lib/seo";
import { quotationFaqs } from "@/data/quotation-page";
import { SITE_URL } from "@/lib/site";

const title = "Interior Quotation Tool for Designers & Contractors | Intorza";
const description =
  "Create itemized interior quotations, export professional PDFs and connect accepted proposals to invoices. Explore Intorza's quotation tool and INR 499/month Pro plan.";
export const metadata = createMetadata({ title, description, path: "/interior-quotation" });
export const structuredData = [
  softwareAppSchema({
    url: `${SITE_URL}/interior-quotation`,
    description:
      "Interior quotation software for designers and contractors to prepare itemized proposals, export PDFs and connect accepted quotations to invoicing.",
  }),
  breadcrumbSchema([{ name: "Interior Quotation", path: "/interior-quotation" }]),
  faqPageSchema(quotationFaqs),
];
