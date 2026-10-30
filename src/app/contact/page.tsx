import { JsonLd } from "@/lib/next-seo";
import { structuredData } from "@/metadata/contact";
import { walkthroughServicePages } from "@/data/walkthrough-service-pages";
import View from "@/views/contact";
export { metadata } from "@/metadata/contact";
export default async function Page({ searchParams }: { searchParams: Promise<{ subject?: string }> }) {
  const { subject } = await searchParams;
  const initialSubject = ["Website development", "3D Walkthrough Project"].includes(subject ?? "")
    ? subject!
    : walkthroughServicePages.find((page) => page.name === subject)?.name ?? "";
  return (
    <>
      <JsonLd data={structuredData} />
      <View initialSubject={initialSubject} />
    </>
  );
}
