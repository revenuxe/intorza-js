import { JsonLd, createMetadata } from "@/lib/next-seo";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { drawingFaqs } from "@/data/working-drawings";
import WorkingDrawingsPage from "@/views/working-drawings";

const path = "/services/2d-interior-working-drawings";
const title = "Interior Working Drawing Services for Designers & Architects | Intorza";
const description = "Interior working drawing services for designers, architects and contractors. Discuss 2D layouts, elevations, ceiling plans and furniture details with Intorza.";

export const metadata = createMetadata({ title, description, path, keywords: "interior working drawing services, 2D interior design services, interior CAD drawing services, interior elevations, furniture working drawings, AutoCAD interior drawings" });

export default function Page() {
  return <><JsonLd data={[
    { "@context": "https://schema.org", "@type": "WebPage", "@id": `${SITE_URL}${path}#webpage`, url: `${SITE_URL}${path}`, name: title, description, inLanguage: "en", isPartOf: { "@id": `${SITE_URL}/#website` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntity: { "@id": `${SITE_URL}${path}#service` } },
    { "@context": "https://schema.org", "@type": "Service", "@id": `${SITE_URL}${path}#service`, name: "Interior Working Drawing Services", serviceType: "2D interior drawing and drafting support", description, url: `${SITE_URL}${path}`, provider: { "@id": `${SITE_URL}/#organization` }, audience: { "@type": "Audience", audienceType: "Interior designers, architects, studios, contractors and interior businesses" }, availableChannel: { "@type": "ServiceChannel", serviceUrl: `${SITE_URL}/contact?subject=Interior%20Working%20Drawing%20Project` } },
    breadcrumbSchema([{ name: "2D Interior & Working Drawings", path }]),
    faqPageSchema(drawingFaqs),
  ]}/><WorkingDrawingsPage/></>;
}
