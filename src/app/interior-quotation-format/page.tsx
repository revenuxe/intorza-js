import { JsonLd } from "@/lib/next-seo";
import { structuredData } from "@/metadata/interior-quotation-format";
import View from "@/views/interior-quotation-format";
export { metadata } from "@/metadata/interior-quotation-format";
export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <View />
    </>
  );
}
