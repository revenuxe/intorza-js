import { breadcrumbSchema } from "@/lib/seo";
import { createMetadata } from "@/lib/next-seo";
const TITLE = "Terms & Conditions — Intorza Service Agreement";
const DESCRIPTION =
  "Read Intorza's Terms and Conditions and understand your rights and responsibilities when using our software.";
export const metadata = createMetadata({ title: TITLE, description: DESCRIPTION, path: "/terms" });
export const structuredData = [
  breadcrumbSchema([{ name: "Terms and Conditions", path: "/terms" }]),
];
