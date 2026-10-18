import { JsonLd } from "@/lib/next-seo";
import { structuredData } from "@/metadata/terms";
import View from "@/views/terms";
export { metadata } from "@/metadata/terms";
export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <View />
    </>
  );
}
