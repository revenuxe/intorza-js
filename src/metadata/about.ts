import { breadcrumbSchema } from "@/lib/seo";
import { createMetadata } from "@/lib/next-seo";
import { SITE_URL } from "@/lib/site";
const TITLE = "About Intorza | Software for Interior Businesses";
const DESCRIPTION =
  "Learn how Intorza connects quotations, invoices, clients and project coordination for interior designers and contractors. Meet the product and contact our Bengaluru team.";
export const metadata = createMetadata({ title: TITLE, description: DESCRIPTION, path: "/about" });
export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: TITLE,
    url: `${SITE_URL}/about`,
    description: DESCRIPTION,
  },
  breadcrumbSchema([{ name: "About Intorza", path: "/about" }]),
];
