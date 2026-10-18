import { breadcrumbSchema } from "@/lib/seo";
import { createMetadata } from "@/lib/next-seo";
import { SITE_URL, SITE_PHONE, SITE_PHONE_E164, SITE_ADDRESS, SITE_EMAIL } from "@/lib/site";
const TITLE = "Contact Intorza | Product Support and Sales in Bengaluru";
const DESCRIPTION = `Call Intorza on ${SITE_PHONE} for interior quotation software support. Find our RT Nagar, Bengaluru address or send a message to our team.`;
export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/contact",
});
export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: TITLE,
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Intorza",
      email: SITE_EMAIL,
      telephone: SITE_PHONE_E164,
      address: { "@type": "PostalAddress", ...SITE_ADDRESS },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE_EMAIL,
        telephone: SITE_PHONE_E164,
      },
    },
  },
  breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
];
