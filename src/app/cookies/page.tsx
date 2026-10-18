import { JsonLd } from "@/lib/next-seo";
import { structuredData } from "@/metadata/cookies";
import View from "@/views/cookies";
export { metadata } from "@/metadata/cookies";
export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <View />
    </>
  );
}
