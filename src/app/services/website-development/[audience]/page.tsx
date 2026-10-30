import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd, createMetadata } from "@/lib/next-seo";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { getWebsiteAudiencePage, websiteAudiencePages, websiteAudiencePath } from "@/data/website-audience-pages";
import WebsiteAudiencePage from "@/views/website-audience-page";

export function generateStaticParams() {
  return websiteAudiencePages.map(({ slug }) => ({ audience: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ audience: string }> }): Promise<Metadata> {
  const { audience } = await params;
  const page = getWebsiteAudiencePage(audience);
  if (!page) return {};

  return createMetadata({
    title: page.title,
    description: page.description,
    path: websiteAudiencePath(page.slug),
    keywords: page.keywords.join(", "),
  });
}

export default async function Page({ params }: { params: Promise<{ audience: string }> }) {
  const { audience } = await params;
  const page = getWebsiteAudiencePage(audience);
  if (!page) notFound();

  const path = websiteAudiencePath(page.slug);
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
          serviceType: "Website design and development",
          description: page.description,
          url: `${SITE_URL}${path}`,
          provider: { "@id": `${SITE_URL}/#organization` },
          audience: { "@type": "Audience", audienceType: page.label },
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: `${SITE_URL}/contact?subject=${encodeURIComponent(page.focusKeyword)}`,
          },
        },
        breadcrumbSchema([
          { name: "Website Development", path: "/services/website-development" },
          { name: page.label, path },
        ]),
        faqPageSchema(page.faq),
      ]} />
      <WebsiteAudiencePage page={page} />
    </>
  );
}
