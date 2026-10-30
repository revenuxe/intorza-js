import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd, createMetadata } from "@/lib/next-seo";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { boqRoomFaqs, boqRoomPages, boqRoomPath } from "@/data/boq-room-pages";
import BoqRoomPage from "@/views/boq-room-page";

export function generateStaticParams() {
  return boqRoomPages.map(({ slug }) => ({ room: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ room: string }> }): Promise<Metadata> {
  const slug = (await params).room;
  const page = boqRoomPages.find((item) => item.slug === slug);
  if (!page) return {};
  return createMetadata({ title: page.title, description: page.description, path: boqRoomPath(page.slug), keywords: page.keyword });
}

export default async function Page({ params }: { params: Promise<{ room: string }> }) {
  const slug = (await params).room;
  const page = boqRoomPages.find((item) => item.slug === slug);
  if (!page) notFound();
  const path = boqRoomPath(page.slug);
  const url = SITE_URL + path;
  return <><JsonLd data={[
    { "@context": "https://schema.org", "@type": "WebPage", "@id": `${url}#webpage`, url, name: page.title, description: page.description, inLanguage: "en", isPartOf: { "@id": `${SITE_URL}/#website` }, publisher: { "@id": `${SITE_URL}/#organization` }, mainEntity: { "@id": `${url}#service` } },
    { "@context": "https://schema.org", "@type": "Service", "@id": `${url}#service`, url, name: `${page.name} Interior BOQ and Cost Estimation`, description: page.description, serviceType: page.keyword, provider: { "@id": `${SITE_URL}/#organization` }, audience: { "@type": "Audience", audienceType: "Interior designers, contractors, architects, studios and interior businesses" }, availableChannel: { "@type": "ServiceChannel", serviceUrl: `${SITE_URL}/contact?subject=${encodeURIComponent(`${page.name} interior BOQ`)}` } },
    breadcrumbSchema([{ name: "Interior BOQ & Cost Estimation", path: "/services/interior-boq-cost-estimation" }, { name: "Room-wise BOQ", path: "/services/interior-boq-cost-estimation/room-wise-boq" }, { name: `${page.name} BOQ`, path }]),
    faqPageSchema(boqRoomFaqs(page)),
  ]}/><BoqRoomPage page={page}/></>;
}
