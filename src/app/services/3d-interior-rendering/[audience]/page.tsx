import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd, createMetadata } from "@/lib/next-seo";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { getThreeDRenderingAudience, threeDRenderingAudiencePath, threeDRenderingAudiences } from "@/data/3d-rendering-audience-pages";
import ThreeDRenderingAudiencePage from "@/views/3d-rendering-audience-page";

export function generateStaticParams() {
  return threeDRenderingAudiences.map(({ slug }) => ({ audience: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ audience: string }> }): Promise<Metadata> {
  const { audience } = await params;
  const page = getThreeDRenderingAudience(audience);
  if (!page) return {};
  return createMetadata({
    title: page.title,
    description: page.description,
    path: threeDRenderingAudiencePath(page.slug),
    keywords: [page.keyword, "3D interior rendering", "interior visualization services"].join(", "),
  });
}

export default async function Page({ params }: { params: Promise<{ audience: string }> }) {
  const { audience } = await params;
  const page = getThreeDRenderingAudience(audience);
  if (!page) notFound();

  const path = threeDRenderingAudiencePath(page.slug);
  const serviceId = `${SITE_URL}${path}#service`;
  const pageId = `${SITE_URL}${path}#webpage`;
  return (
    <>
      <JsonLd data={[
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": pageId,
          url: `${SITE_URL}${path}`,
          name: page.title,
          description: page.description,
          inLanguage: "en",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntity: { "@id": serviceId },
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": serviceId,
          name: page.title.replace(" | Intorza", ""),
          serviceType: "3D interior rendering and visualization services",
          description: page.description,
          url: `${SITE_URL}${path}`,
          provider: { "@id": `${SITE_URL}/#organization` },
          audience: { "@type": "Audience", audienceType: page.label },
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: `${SITE_URL}/contact?subject=${encodeURIComponent(page.keyword)}`,
          },
        },
        breadcrumbSchema([
          { name: "3D Interior Rendering", path: "/services/3d-interior-rendering" },
          { name: page.label, path },
        ]),
        faqPageSchema(page.faqs),
      ]} />
      <ThreeDRenderingAudiencePage page={page} />
    </>
  );
}
