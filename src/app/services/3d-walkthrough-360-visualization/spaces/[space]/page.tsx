import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd, createMetadata } from "@/lib/next-seo";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { walkthroughSpaceFaqs, walkthroughSpacePages, walkthroughSpacePath } from "@/data/walkthrough-space-pages";
import WalkthroughSpacePage from "@/views/walkthrough-space-page";

export function generateStaticParams() {
  return walkthroughSpacePages.map(({ slug }) => ({ space: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ space: string }> }): Promise<Metadata> {
  const slug = (await params).space;
  const page = walkthroughSpacePages.find((item) => item.slug === slug);
  if (!page) return {};
  return createMetadata({ title: page.title, description: page.description, path: walkthroughSpacePath(page.slug), keywords: page.keyword });
}

export default async function Page({ params }: { params: Promise<{ space: string }> }) {
  const slug = (await params).space;
  const page = walkthroughSpacePages.find((item) => item.slug === slug);
  if (!page) notFound();
  const path = walkthroughSpacePath(page.slug);
  const url = SITE_URL + path;
  return <><JsonLd data={[
    { "@context": "https://schema.org", "@type": "WebPage", "@id": `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: "en", isPartOf: { "@id": `${SITE_URL}/#website` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntity: { "@id": `${url}#service` } },
    { "@context": "https://schema.org", "@type": "Service", "@id": `${url}#service`, url, name: `${page.name} 3D Walkthrough`, description: page.description, serviceType: page.keyword, provider: { "@id": `${SITE_URL}/#organization` }, audience: { "@type": "Audience", audienceType: "Interior designers, architecture firms, studios, contractors and interior businesses" }, availableChannel: { "@type": "ServiceChannel", serviceUrl: `${SITE_URL}/contact?subject=${encodeURIComponent(`${page.name} Walkthrough`)}` } },
    breadcrumbSchema([{ name: "3D Walkthrough & 360° Visualization", path: "/services/3d-walkthrough-360-visualization" }, { name: `${page.name} Walkthrough`, path }]),
    faqPageSchema(walkthroughSpaceFaqs(page)),
  ]}/><WalkthroughSpacePage page={page}/></>;
}
