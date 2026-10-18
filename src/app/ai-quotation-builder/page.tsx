import { JsonLd } from "@/lib/next-seo";
import { structuredData } from "@/metadata/ai-quotation-builder";
import AIQuotationBuilder from "@/views/ai-quotation-builder";
export { metadata } from "@/metadata/ai-quotation-builder";
export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <AIQuotationBuilder />
    </>
  );
}
