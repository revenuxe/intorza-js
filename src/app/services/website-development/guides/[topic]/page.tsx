import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd, createMetadata } from "@/lib/next-seo";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { getWebsiteFocusPage, websiteFocusPages, websiteFocusPath } from "@/data/website-audience-pages";
import WebsiteAudiencePage from "@/views/website-audience-page";

export function generateStaticParams() {
  return websiteFocusPages.map(({ slug }) => ({ topic: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }): Promise<Metadata> {
  const { topic } = await params;
  const page = getWebsiteFocusPage(topic);
  if (!page) return {};

  return createMetadata({
    title: page.title,
    description: page.description,
    path: websiteFocusPath(page.slug),
    keywords: page.keywords.join(", "),
  });
}

export default async function Page({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const page = getWebsiteFocusPage(topic);
  if (!page) notFound();

  const path = websiteFocusPath(page.slug);
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
          serviceType: "Interior website content and journey planning",
          description: page.description,
          url: `${SITE_URL}${path}`,
          provider: { "@id": `${SITE_URL}/#organization` },
          audience: { "@type": "Audience", audienceType: "Interior designers, design studios, architects and interior contractors" },
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
