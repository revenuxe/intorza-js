import { JsonLd } from "@/lib/next-seo";
import { structuredData } from "@/metadata/interior-cost-calculator";
import View from "@/views/interior-cost-calculator";
export { metadata } from "@/metadata/interior-cost-calculator";
export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <View />
    </>
  );
}
