import { JsonLd } from "@/lib/next-seo";
import { structuredData } from "@/metadata/about";
import View from "@/views/about";
export { metadata } from "@/metadata/about";
export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <View />
    </>
  );
}
