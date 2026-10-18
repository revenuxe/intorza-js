import RelatedLinks from "./RelatedLinks";
const links = {
  privacy: {
    href: "/privacy",
    title: "Privacy Policy",
    description:
      "Read how personal and business information is covered by our privacy information.",
  },
  cookies: {
    href: "/cookies",
    title: "Cookie Policy",
    description: "Understand cookie use and how browser settings can affect your session.",
  },
  terms: {
    href: "/terms",
    title: "Terms & Conditions",
    description: "Review the service, account and subscription terms together.",
  },
  refund: {
    href: "/refund",
    title: "Refund Policy",
    description: "Find the existing refund conditions and instructions for sending a request.",
  },
  contact: {
    href: "/contact",
    title: "Contact the Intorza team",
    description: "Find our phone number, Bengaluru address and website inquiry form.",
  },
};
export default function PolicyLinks({
  page,
}: {
  page: "privacy" | "cookies" | "terms" | "refund";
}) {
  const related =
    page === "privacy"
      ? [links.cookies, links.terms, links.contact]
      : page === "cookies"
        ? [links.privacy, links.terms, links.contact]
        : page === "terms"
          ? [links.privacy, links.refund, links.contact]
          : [links.terms, links.privacy, links.contact];
  return (
    <RelatedLinks
      title="Related policies and support"
      intro="Use the relevant policy for your question, or contact our team for help with your account or request."
      links={related}
    />
  );
}
