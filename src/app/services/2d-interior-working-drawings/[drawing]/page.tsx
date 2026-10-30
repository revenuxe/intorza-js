import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd, createMetadata } from "@/lib/next-seo";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { drawingServicePages, drawingServicePath, drawingDetailFaqs } from "@/data/drawing-service-pages";
import DrawingServicePage from "@/views/drawing-service-page";

function findPage(slug: string) { return drawingServicePages.find(item=>item.slug===slug); }
export function generateStaticParams() { return drawingServicePages.map(({slug})=>({drawing:slug})); }
export async function generateMetadata({params}: {params:Promise<{drawing:string}>}):Promise<Metadata> {
  const page=findPage((await params).drawing);
  if(!page)return {};
  return createMetadata({title:`${page.name} Services | Intorza`,description:page.intro.split('. ')[0]+'.',path:drawingServicePath(page.slug)});
}
export default async function Page({params}:{params:Promise<{drawing:string}>}) {
  const page=findPage((await params).drawing);
  if(!page)notFound();
  const url=SITE_URL+drawingServicePath(page.slug);
  return <><JsonLd data={[
    {"@context":"https://schema.org","@type":"WebPage","@id":url+"#webpage",url,name:page.name,description:page.intro,inLanguage:"en",isPartOf:{"@id":SITE_URL+"/#website"},publisher:{"@id":SITE_URL+"/#organization"},mainEntity:{"@id":url+"#service"}},
    {"@context":"https://schema.org","@type":"Service","@id":url+"#service",url,name:page.name,description:page.intro,serviceType:"Interior drawing and drafting support",provider:{"@id":SITE_URL+"/#organization"},audience:{"@type":"Audience",audienceType:"Interior designers, architects, contractors and interior businesses"}},
    breadcrumbSchema([{name:"Interior Working Drawings",path:"/services/2d-interior-working-drawings"},{name:page.name,path:drawingServicePath(page.slug)}]),
    faqPageSchema(drawingDetailFaqs(page)),
  ]}/><DrawingServicePage page={page}/></>;
}
