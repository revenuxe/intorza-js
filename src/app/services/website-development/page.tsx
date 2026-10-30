import { JsonLd } from "@/lib/next-seo";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { createMetadata } from "@/lib/next-seo";
import { SITE_URL } from "@/lib/site";
import WebsiteDevelopmentPage, { websiteDevelopmentFaqs } from "@/views/website-development";

const title = "Interior Designer Website Design & Development | Intorza";
const description =
  "Get a custom website for your interior design studio. Showcase projects with context, explain your services and make it easier for prospective clients to enquire.";

export const metadata = createMetadata({
  title,
  description,
  path: "/services/website-development",
  keywords: [
    "website design for interior designers",
    "interior designer website development",
    "interior design studio website",
    "architect website design",
    "interior design portfolio website",
  ].join(", "),
});

export default function Page() {
  return (
    <>
      <JsonLd data={[
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${SITE_URL}/services/website-development#webpage`,
          url: `${SITE_URL}/services/website-development`,
          name: title,
          description,
          inLanguage: "en",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntity: { "@id": `${SITE_URL}/services/website-development#service` },
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${SITE_URL}/services/website-development#service`,
          name: "Website design and development for interior designers",
          serviceType: "Website design and development",
          description,
          url: `${SITE_URL}/services/website-development`,
          provider: { "@id": `${SITE_URL}/#organization` },
          audience: {
            "@type": "Audience",
            audienceType: "Interior designers, design studios, architects and interior contractors",
          },
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: `${SITE_URL}/contact?subject=Website%20development`,
          },
        },
        breadcrumbSchema([{ name: "Website Development", path: "/services/website-development" }]),
        faqPageSchema(websiteDevelopmentFaqs),
      ]} />
      <WebsiteDevelopmentPage faqs={websiteDevelopmentFaqs} />
    </>
  );
}
