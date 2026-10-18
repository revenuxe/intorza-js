import { JsonLd } from "@/lib/next-seo";
import { structuredData } from "@/metadata/refund";
import View from "@/views/refund";
export { metadata } from "@/metadata/refund";
export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <View />
    </>
  );
}
