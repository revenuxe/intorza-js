import { breadcrumbSchema } from "@/lib/seo";
import { faqs } from "@/data/interior-cost-calculator-faqs";
import { createMetadata } from "@/lib/next-seo";
import { SITE_URL } from "@/lib/site";
const PATH = "/interior-cost-calculator";
const TITLE = "Interior Cost Calculator for Home Interiors | Intorza";
const DESCRIPTION =
  "Free interior cost calculator: pick your home size and finish level to estimate home interior design cost room by room, with GST. Then turn it into a quotation.";
export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/interior-cost-calculator",
});
export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Interior Design Cost Calculator",
    url: `${SITE_URL}${PATH}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  breadcrumbSchema([{ name: "Interior Cost Calculator", path: "/interior-cost-calculator" }]),
];
