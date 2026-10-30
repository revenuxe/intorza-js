import { JsonLd, createMetadata } from "@/lib/next-seo";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import ThreeDInteriorRenderingPage, { threeDInteriorRenderingFaqs } from "@/views/3d-interior-rendering";

const title = "3D Interior Rendering Services for Interior Designers & Architects | Intorza";
const description = "3D interior rendering for designers, architects and interior firms. Turn floor plans and concepts into professional visualizations with Intorza.";

export const metadata = createMetadata({
  title,
  description,
  path: "/services/3d-interior-rendering",
  keywords: [
    "3D interior rendering services",
    "3D interior design services",
    "interior rendering services",
    "3D visualization services",
    "architectural visualization services",
    "3D rendering for interior designers",
    "3D rendering for architects",
    "photorealistic interior rendering",
    "interior design visualization",
  ].join(", "),
});

export default function Page() {
  return (
    <>
      <JsonLd data={[
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${SITE_URL}/services/3d-interior-rendering#webpage`,
          url: `${SITE_URL}/services/3d-interior-rendering`,
          name: title,
          description,
          inLanguage: "en",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntity: { "@id": `${SITE_URL}/services/3d-interior-rendering#service` },
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${SITE_URL}/services/3d-interior-rendering#service`,
          name: "3D Interior Rendering Services for Interior Designers & Architects",
          serviceType: "3D interior rendering and visualization services",
          description,
          url: `${SITE_URL}/services/3d-interior-rendering`,
          provider: { "@id": `${SITE_URL}/#organization` },
          audience: {
            "@type": "Audience",
            audienceType: "Interior designers, design studios, architects, architecture firms, interior contractors and interior companies",
          },
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: `${SITE_URL}/contact?subject=3D%20Interior%20Rendering%20Project`,
          },
        },
        breadcrumbSchema([{ name: "3D Interior Rendering", path: "/services/3d-interior-rendering" }]),
        faqPageSchema(threeDInteriorRenderingFaqs),
      ]} />
      <ThreeDInteriorRenderingPage />
    </>
  );
}
