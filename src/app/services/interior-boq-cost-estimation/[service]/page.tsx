import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd, createMetadata } from "@/lib/next-seo";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { boqDetailPages, boqDetailPath, boqDetailFaqs } from "@/data/boq-detail-pages";
import BoqDetailPage from "@/views/boq-detail-page";

export function generateStaticParams(){return boqDetailPages.map(({slug})=>({service:slug}));}
export async function generateMetadata({params}:{params:Promise<{service:string}>}):Promise<Metadata>{
  const slug=(await params).service;
  const data=boqDetailPages.find(item=>item.slug===slug);
  if(!data)return {};
  return createMetadata({title:data.title,description:data.description,path:boqDetailPath(data.slug),keywords:data.keyword});
}
export default async function Page({params}:{params:Promise<{service:string}>}){
  const slug=(await params).service;
  const page=boqDetailPages.find(item=>item.slug===slug);
  if(!page)notFound();
  const path=boqDetailPath(page.slug),url=SITE_URL+path;
  return <><JsonLd data={[
    {"@context":"https://schema.org","@type":"WebPage","@id":url+"#webpage",url,name:page.title,description:page.description,inLanguage:"en",isPartOf:{"@id":SITE_URL+"/#website"},publisher:{"@id":SITE_URL+"/#organization"},mainEntity:{"@id":url+"#service"}},
    {"@context":"https://schema.org","@type":"Service","@id":url+"#service",url,name:page.name,description:page.description,serviceType:page.keyword,provider:{"@id":SITE_URL+"/#organization"},audience:{"@type":"Audience",audienceType:"Interior designers, contractors, architects, studios and interior businesses"},availableChannel:{"@type":"ServiceChannel",serviceUrl:SITE_URL+"/contact?subject="+encodeURIComponent(page.name)}},
    breadcrumbSchema([{name:"BOQ & Cost Estimation",path:"/services/interior-boq-cost-estimation"},{name:page.name,path}]),faqPageSchema(boqDetailFaqs(page)),
  ]}/><BoqDetailPage page={page}/></>;
}
