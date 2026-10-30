import { JsonLd } from "@/lib/next-seo";
import { structuredData } from "@/metadata/contact";
import View from "@/views/contact";
export { metadata } from "@/metadata/contact";
export default async function Page({ searchParams }: { searchParams: Promise<{ subject?: string }> }) {
  const { subject } = await searchParams;
  const initialSubject = subject === "Website development" ? subject : "";
  return (
    <>
      <JsonLd data={structuredData} />
      <View initialSubject={initialSubject} />
    </>
  );
}
