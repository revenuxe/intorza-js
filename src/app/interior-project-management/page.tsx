import { JsonLd } from "@/lib/next-seo";
import { projectManagementLanding } from "@/data/business-feature-landings";
import { featureLandingSEO } from "@/metadata/feature-landing";
import FeatureLandingPage from "@/views/feature-landing";
const seo = featureLandingSEO(projectManagementLanding);
export const metadata = seo.metadata;
export default function Page() {
  return (
    <>
      <JsonLd data={seo.structuredData} />
      <FeatureLandingPage page={projectManagementLanding} />
    </>
  );
}
