import { JsonLd } from "@/lib/next-seo";
import { structuredData } from "@/metadata/index";
import View from "@/views/index";
export { metadata } from "@/metadata/index";
export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <View />
    </>
  );
}
