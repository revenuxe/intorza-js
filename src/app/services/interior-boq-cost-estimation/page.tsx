import { JsonLd, createMetadata } from "@/lib/next-seo";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { boqFaqs } from "@/data/boq-service";
import BoqCostEstimationPage from "@/views/boq-cost-estimation";

const path = "/services/interior-boq-cost-estimation";
const title = "Interior BOQ & Cost Estimation Services | Intorza";
const description = "Interior BOQ and cost estimation services for designers, contractors and architects. Structure quantities, project costs and quotation inputs with Intorza.";
export const metadata = createMetadata({title,description,path,keywords:"interior BOQ services, interior cost estimation services, BOQ preparation services, interior quantity takeoff, interior project estimation"});

export default function Page() {
  const url = SITE_URL + path;
  return <><JsonLd data={[
    {"@context":"https://schema.org","@type":"WebPage","@id":url+"#webpage",url,name:title,description,inLanguage:"en",isPartOf:{"@id":SITE_URL+"/#website"},publisher:{"@id":SITE_URL+"/#organization"},mainEntity:{"@id":url+"#service"}},
    {"@context":"https://schema.org","@type":"Service","@id":url+"#service",url,name:"Interior BOQ & Cost Estimation Services",description,serviceType:"Interior Bill of Quantities preparation and cost estimation support",provider:{"@id":SITE_URL+"/#organization"},audience:{"@type":"Audience",audienceType:"Interior designers, contractors, architects, studios and interior businesses"},availableChannel:{"@type":"ServiceChannel",serviceUrl:SITE_URL+"/contact?subject=Interior%20BOQ%20and%20Cost%20Estimation"}},
    breadcrumbSchema([{name:"BOQ & Cost Estimation",path}]),
    faqPageSchema(boqFaqs),
  ]}/><BoqCostEstimationPage/></>;
}
