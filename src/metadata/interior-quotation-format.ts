import { breadcrumbSchema } from "@/lib/seo";
import { faqs } from "@/data/interior-quotation-format-faqs";
import { createMetadata } from "@/lib/next-seo";
const TITLE = "Interior Quotation Format: Free Sample & Template | Intorza";
const DESCRIPTION =
  "Use this free interior quotation format and sample to itemise rooms, materials, quantities, rates, GST and payment terms. Review the example or print it.";
export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/interior-quotation-format",
});
export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  breadcrumbSchema([{ name: "Interior Quotation Format", path: "/interior-quotation-format" }]),
];
