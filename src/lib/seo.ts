import {
  SITE_ADDRESS,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_LOGO,
  SITE_OG_IMAGE,
  SITE_PHONE_E164,
  SITE_URL,
  PRO_MONTHLY_PRICE,
} from "@/lib/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Intorza",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: SITE_LOGO, width: 1080, height: 219 },
    image: SITE_OG_IMAGE,
    description: SITE_DESCRIPTION,
    email: SITE_EMAIL,
    telephone: SITE_PHONE_E164,
    parentOrganization: {
      "@type": "Organization",
      name: "Revenuxe",
      url: "https://www.revenuxe.com",
    },
    address: { "@type": "PostalAddress", ...SITE_ADDRESS },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE_EMAIL,
        telephone: SITE_PHONE_E164,
        availableLanguage: ["English"],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Intorza - Interior Design Project Management Software",
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };
}

// FAQ content and structured data share the same source.
export const homepageFaqs = [
  {
    q: "What is Intorza?",
    a: "Intorza is an all-in-one interior design project management software that helps designers and contractors create quotations, generate GST-ready invoices, manage clients, track projects, and collaborate with teams from one dashboard.",
  },
  {
    q: "Is Intorza free to use?",
    a: "Yes. Intorza offers a free plan to get you started, plus affordable Pro plans with advanced quotation, invoicing and team features.",
  },
  {
    q: "Who is Intorza for?",
    a: "Intorza is built for interior designers, interior contractors, modular kitchen specialists, turnkey project firms and design studios who want to streamline operations and grow their business.",
  },
  {
    q: "Does Intorza work for international clients?",
    a: "Yes. Intorza supports multi-currency quotations and invoices and is used by interior professionals across India, the US, UK, UAE, Australia, Canada, Singapore and 40+ other countries.",
  },
  {
    q: "Can I generate professional quotations and invoices?",
    a: "Absolutely. Intorza includes a powerful quotation builder, branded PDF exports, GST/VAT-ready invoices, payment tracking and client approvals — built specifically for interior projects.",
  },
];

export function faqPageSchema(faqs: { q: string; a: string }[] = homepageFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function softwareAppSchema(opts?: {
  url?: string;
  price?: string;
  currency?: string;
  name?: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: opts?.name ?? "Intorza",
    operatingSystem: "Web Browser",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Interior Design Project Management",
    url: opts?.url ?? SITE_URL,
    description: opts?.description ?? SITE_DESCRIPTION,
    image: SITE_OG_IMAGE,
    offers: [
      {
        "@type": "Offer",
        name: "Free plan",
        price: opts?.price ?? "0",
        priceCurrency: opts?.currency ?? "INR",
        url: "https://app.intorza.com",
      },
      {
        "@type": "Offer",
        name: "Pro monthly plan",
        price: String(PRO_MONTHLY_PRICE),
        priceCurrency: "INR",
        url: "https://app.intorza.com",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: String(PRO_MONTHLY_PRICE),
          priceCurrency: "INR",
          unitText: "month",
        },
      },
    ],
    featureList: [
      "Quotation Builder",
      "Invoice Generator",
      "Client Management (CRM)",
      "Project & Site Measurement",
      "Team Collaboration",
      "GST & VAT Ready Invoicing",
      "Payment Tracking",
      "Branded PDF Exports",
    ],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    ],
  };
}
