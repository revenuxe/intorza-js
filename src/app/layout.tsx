import { JsonLd } from "@/lib/next-seo";
import { organizationSchema } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_NAME, SITE_OG_IMAGE, SITE_URL } from "@/lib/site";
import "@/styles.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/800.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F172A",
};
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  publisher: "Revenuxe",
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
  manifest: "/site.webmanifest",
  formatDetection: { telephone: false },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    images: [SITE_OG_IMAGE],
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={[organizationSchema()]} />
        {children}
      </body>
    </html>
  );
}
