import { createMetadata } from "@/lib/next-seo";
import { breadcrumbSchema, faqPageSchema, softwareAppSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import type { FeatureLanding } from "@/data/feature-landings";
export function featureLandingSEO(page: FeatureLanding) {
  return {
    metadata: createMetadata({ title: page.title, description: page.description, path: page.path }),
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${SITE_URL}${page.path}#webpage`,
        url: SITE_URL + page.path,
        name: page.h1,
        description: page.description,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: { "@id": `${SITE_URL}/#software` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: SITE_URL + page.image,
          caption: page.imageAlt,
        },
        relatedLink: page.related.map((link) => SITE_URL + link.href),
      },
      {
        ...softwareAppSchema({ url: SITE_URL + page.path, description: page.description }),
        offers: undefined,
      },
      breadcrumbSchema([{ name: page.name, path: page.path }]),
      faqPageSchema(page.faqs),
    ],
  };
}
