import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd, createMetadata } from "@/lib/next-seo";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { walkthroughServicePages, walkthroughServicePath, walkthroughServiceFaqs } from "@/data/walkthrough-service-pages";
import WalkthroughServicePage from "@/views/walkthrough-service-page";

export function generateStaticParams() {
  return walkthroughServicePages.map(({ slug }) => ({ service: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const slug = (await params).service;
  const page = walkthroughServicePages.find((item) => item.slug === slug);
  if (!page) return {};
  return createMetadata({ title: page.title, description: page.description, path: walkthroughServicePath(page.slug), keywords: page.keyword });
}

export default async function Page({ params }: { params: Promise<{ service: string }> }) {
  const slug = (await params).service;
  const page = walkthroughServicePages.find((item) => item.slug === slug);
  if (!page) notFound();
  const path = walkthroughServicePath(page.slug);
  const url = SITE_URL + path;
  return <><JsonLd data={[
    { "@context": "https://schema.org", "@type": "WebPage", "@id": `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: "en", isPartOf: { "@id": `${SITE_URL}/#website` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntity: { "@id": `${url}#service` } },
    { "@context": "https://schema.org", "@type": "Service", "@id": `${url}#service`, url, name: page.name, description: page.description, serviceType: page.keyword, provider: { "@id": `${SITE_URL}/#organization` }, audience: { "@type": "Audience", audienceType: "Interior designers, interior studios, architects, architecture firms, contractors and turnkey interior companies" }, availableChannel: { "@type": "ServiceChannel", serviceUrl: `${SITE_URL}/contact?subject=${encodeURIComponent(page.name)}` } },
    breadcrumbSchema([{ name: "3D Walkthrough & 360° Visualization", path: "/services/3d-walkthrough-360-visualization" }, { name: page.name, path }]),
    faqPageSchema(walkthroughServiceFaqs(page)),
  ]}/><WalkthroughServicePage page={page}/></>;
}
