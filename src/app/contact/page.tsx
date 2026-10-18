import { JsonLd } from "@/lib/next-seo";
import { structuredData } from "@/metadata/contact";
import View from "@/views/contact";
export { metadata } from "@/metadata/contact";
export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <View />
    </>
  );
}
