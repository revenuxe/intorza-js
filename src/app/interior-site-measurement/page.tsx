import { JsonLd } from "@/lib/next-seo";
import { siteMeasurementLanding } from "@/data/feature-landings";
import { featureLandingSEO } from "@/metadata/feature-landing";
import FeatureLandingPage from "@/views/feature-landing";
const seo = featureLandingSEO(siteMeasurementLanding);
export const metadata = seo.metadata;
export default function Page() {
  return (
    <>
      <JsonLd data={seo.structuredData} />
      <FeatureLandingPage page={siteMeasurementLanding} />
    </>
  );
}
