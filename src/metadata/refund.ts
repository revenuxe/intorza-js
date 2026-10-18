import { breadcrumbSchema } from "@/lib/seo";
import { createMetadata } from "@/lib/next-seo";
const TITLE = "Refund Policy — Intorza Subscription Refunds";
const DESCRIPTION =
  "Read Intorza's refund policy for subscription plans, eligibility, and the refund process.";
export const metadata = createMetadata({ title: TITLE, description: DESCRIPTION, path: "/refund" });
export const structuredData = [breadcrumbSchema([{ name: "Refund Policy", path: "/refund" }])];
