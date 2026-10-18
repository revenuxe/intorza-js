import {
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_OG_IMAGE_WIDTH,
  SITE_OG_IMAGE_HEIGHT,
  SITE_URL,
} from "@/lib/site";
import type { Metadata } from "next";

type PageSEO = { title: string; description: string; path: string; keywords?: string };
export function createMetadata({ title, description, path, keywords }: PageSEO): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: SITE_OG_IMAGE,
          width: SITE_OG_IMAGE_WIDTH,
          height: SITE_OG_IMAGE_HEIGHT,
          alt: title,
        },
      ],
    },
    twitter: { card: "summary_large_image", title, description, images: [SITE_OG_IMAGE] },
  };
}
export function JsonLd({ data }: { data: unknown[] }) {
  return (
    <>
      {data.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
