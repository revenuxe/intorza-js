import { JsonLd } from "@/lib/next-seo";
import { structuredData } from "@/metadata/privacy";
import View from "@/views/privacy";
export { metadata } from "@/metadata/privacy";
export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <View />
    </>
  );
}
