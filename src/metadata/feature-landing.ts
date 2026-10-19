import { createMetadata } from "@/lib/next-seo";
import { breadcrumbSchema, faqPageSchema, softwareAppSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import type { FeatureLanding } from "@/data/feature-landings";
export function featureLandingSEO(page: FeatureLanding) {
  return {
    metadata: createMetadata({ title: page.title, description: page.description, path: page.path }),
    structuredData: [
      {
        ...softwareAppSchema({ url: SITE_URL + page.path, description: page.description }),
        offers: undefined,
      },
      breadcrumbSchema([{ name: page.name, path: page.path }]),
      faqPageSchema(page.faqs),
    ],
  };
}
