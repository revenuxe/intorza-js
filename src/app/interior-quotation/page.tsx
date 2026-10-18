import { JsonLd } from "@/lib/next-seo";
import { structuredData } from "@/metadata/interior-quotation";
import InteriorQuotation from "@/views/interior-quotation";
export { metadata } from "@/metadata/interior-quotation";
export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <InteriorQuotation />
    </>
  );
}
