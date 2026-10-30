import { JsonLd, createMetadata } from "@/lib/next-seo";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import Walkthrough360Page, { walkthroughFaqs } from "@/views/walkthrough-360";

const path = "/services/3d-walkthrough-360-visualization";
const title = "3D Interior Walkthrough & 360° Visualization Services | Intorza";
const description = "Professional 3D interior walkthrough and 360° visualization services for interior designers, architects and interior firms. Present your designs through immersive interior visuals with Intorza.";
export const metadata = createMetadata({
  title,
  description,
  path,
  keywords: [
    "3D interior walkthrough services",
    "3D walkthrough services",
    "3D interior walkthrough",
    "interior walkthrough animation",
    "architectural walkthrough services",
    "interior animation services",
    "3D architectural walkthrough",
    "360 interior visualization",
    "360 interior rendering",
    "virtual interior walkthrough",
    "interior design walkthrough",
    "3D walkthrough animation",
    "architectural visualization services",
    "interior visualization services",
    "walkthrough rendering services",
    "3D walkthrough for interior designers",
    "3D walkthrough for architects",
  ].join(", "),
});

export default function Page() {
  const url = SITE_URL + path;
  return <><JsonLd data={[
    { "@context": "https://schema.org", "@type": "WebPage", "@id": `${url}#webpage`, url, name: title, description, inLanguage: "en", isPartOf: { "@id": `${SITE_URL}/#website` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntity: { "@id": `${url}#service` } },
    { "@context": "https://schema.org", "@type": "Service", "@id": `${url}#service`, name: "3D Interior Walkthrough & 360° Visualization Services", serviceType: "3D interior walkthrough and 360° visualization services", description, url, provider: { "@id": `${SITE_URL}/#organization` }, audience: { "@type": "Audience", audienceType: "Interior designers, interior design studios, architects, architecture firms, interior contractors and turnkey interior companies" }, availableChannel: { "@type": "ServiceChannel", serviceUrl: `${SITE_URL}/contact?subject=3D%20Walkthrough%20Project` } },
    breadcrumbSchema([{ name: "3D Walkthrough & 360° Visualization", path }]),
    faqPageSchema(walkthroughFaqs),
  ]}/><Walkthrough360Page/></>;
}
