import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import ProCTA from "@/components/ProCTA";
import { JsonLd, createMetadata } from "@/lib/next-seo";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { crmArticle, crmArticleSections, crmArticleFaqs } from "@/data/crm-article";

const url = SITE_URL + crmArticle.path;
const wordCount = crmArticleSections.reduce(
  (count, section) => count + section.paragraphs.join(" ").split(/\s+/).length,
  0,
);
const readingMinutes = Math.ceil(wordCount / 200);
export const metadata = {
  ...createMetadata({ ...crmArticle }),
  openGraph: {
    ...createMetadata({ ...crmArticle }).openGraph,
    type: "article" as const,
    publishedTime: "2026-10-19T00:00:00+05:30",
    modifiedTime: "2026-10-19T00:00:00+05:30",
  },
};
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": url + "#article",
  headline: crmArticle.h1,
  description: crmArticle.description,
  url,
  mainEntityOfPage: { "@type": "WebPage", "@id": url },
  image: {
    "@type": "ImageObject",
    url: SITE_URL + "/dashboard-preview.webp",
    width: 1890,
    height: 890,
  },
  author: {
    "@type": "Organization",
    "@id": SITE_URL + "/#organization",
    name: "Intorza",
    url: SITE_URL + "/about",
  },
  publisher: { "@id": SITE_URL + "/#organization" },
  datePublished: "2026-10-19T00:00:00+05:30",
  dateModified: "2026-10-19T00:00:00+05:30",
  inLanguage: "en",
  articleSection: crmArticleSections.map((section) => section.title),
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd
        data={[
          articleSchema,
          breadcrumbSchema([{ name: "CRM & Quotation Guide", path: crmArticle.path }]),
          faqPageSchema(crmArticleFaqs),
        ]}
      />
      <Header />
      <main className="pt-28 md:pt-36">
        <article>
          <header className="container-custom pb-12 md:pb-20">
            <Breadcrumbs items={[{ name: "CRM & Quotation Guide", href: crmArticle.path }]} />
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end mt-10">
              <div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight max-w-4xl">
                  Interior Design <span className="text-primary">CRM & Quotation</span> Software
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-7 max-w-2xl">
                  A practical guide to keeping client conversations, interior proposals and project
                  billing connected—without losing the details that make each project different.
                </p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-7 text-sm text-muted-foreground">
                  <Link
                    href="/about"
                    className="text-foreground font-semibold underline underline-offset-4"
                  >
                    By Intorza
                  </Link>
                  <time dateTime="2026-10-19">19 October 2026</time>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4" aria-hidden="true" />
                    {readingMinutes} min read
                  </span>
                </div>
              </div>
              <aside
                className="frame-hard-sm p-6 md:p-8 bg-muted/30"
                aria-label="What you will learn"
              >
                <h2 className="font-display text-xl font-semibold mb-5">
                  From a client brief to a clear billing record
                </h2>
                <ul className="space-y-4 text-sm leading-relaxed">
                  {[
                    "What a useful client record should explain",
                    "How to prepare a reviewable interior quotation",
                    "What changes when a proposal is accepted",
                    "How to evaluate software with a real project",
                  ].map((text) => (
                    <li key={text} className="flex gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      {text}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://app.intorza.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hard btn-hard-hover mt-7"
                >
                  Explore Intorza <ArrowRight className="h-4 w-4" />
                </a>
              </aside>
            </div>
            <figure className="mt-12 border-2 border-foreground bg-muted/30 p-3 md:p-6">
              <Image
                src="/dashboard-preview.webp"
                alt="Intorza dashboard with quotation counts, converted projects, client records and recorded payment summaries"
                width={1890}
                height={890}
                sizes="(max-width: 768px) 100vw, 1200px"
                preload
                className="w-full h-auto border border-border"
              />
              <figcaption className="text-sm text-muted-foreground leading-relaxed mt-4">
                The business overview is a starting point. Open the underlying client, quotation or
                invoice to review the details before taking action.
              </figcaption>
            </figure>
          </header>
          <div className="border-y-2 border-foreground bg-muted/20">
            <div className="container-custom grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)] py-12 md:py-16">
              <aside className="min-w-0">
                <nav
                  aria-label="Article contents"
                  className="lg:sticky lg:top-28 border-l-2 border-primary pl-5"
                >
                  <h2 className="font-display text-xl font-semibold mb-5">In this guide</h2>
                  <ol className="space-y-4 text-sm leading-relaxed">
                    {crmArticleSections.map((section, index) => (
                      <li key={section.id}>
                        <a
                          href={"#" + section.id}
                          className="text-muted-foreground hover:text-primary underline underline-offset-4"
                        >
                          <span className="font-mono text-primary mr-2">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {section.title}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href="#getting-started"
                        className="text-primary underline underline-offset-4"
                      >
                        Your first-project checklist
                      </a>
                    </li>
                  </ol>
                </nav>
              </aside>
              <div className="max-w-3xl min-w-0">
                <div className="border-2 border-foreground bg-background p-6 md:p-8 mb-12">
                  <h2 className="font-display text-2xl font-bold mb-4">The short answer</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Choose interior CRM and quotation software by following one project all the way
                    through. Can you identify the client, explain the quoted scope, record the
                    decision and understand the invoice balance? Those connections matter more than
                    the length of a feature list.
                  </p>
                </div>
                {crmArticleSections.map((section, index) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28 mb-14 md:mb-20">
                    <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-6">
                      {section.title}
                    </h2>
                    <div className="space-y-5 text-base md:text-lg leading-[1.85] text-muted-foreground">
                      {section.paragraphs.map((text) => (
                        <p key={text}>{text}</p>
                      ))}
                    </div>
                    <Link
                      href={section.link.href}
                      className="inline-flex items-center gap-2 mt-6 text-primary font-semibold underline underline-offset-4"
                    >
                      {section.link.label}
                      <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </Link>
                    {index === 3 && (
                      <aside className="mt-10 p-6 md:p-8 border-2 border-foreground bg-secondary text-secondary-foreground">
                        <h3 className="font-display text-2xl font-semibold mb-4">
                          Start with a clearer quotation
                        </h3>
                        <p className="leading-relaxed text-secondary-foreground/80">
                          Review the structure of an interior proposal before building your next
                          one. Check descriptions, quantities, rates and terms against a practical
                          format.
                        </p>
                        <Link
                          href="/interior-quotation-format"
                          className="inline-flex items-center gap-2 text-intorza-amber font-semibold underline underline-offset-4 mt-5"
                        >
                          Explore the quotation format <ArrowRight className="w-4 h-4 shrink-0" />
                        </Link>
                      </aside>
                    )}
                  </section>
                ))}
                <section
                  id="getting-started"
                  className="scroll-mt-28 frame-hard-sm p-6 md:p-8 bg-background"
                >
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
                    Your first-project checklist
                  </h2>
                  <ul className="space-y-5 text-muted-foreground leading-relaxed">
                    {[
                      "Confirm the client, property, included rooms and open decisions.",
                      "Check measurements, item descriptions, units, quantities and rates.",
                      "Review exclusions, applicable taxes, payment terms and validity.",
                      "Confirm the accepted scope before recording the quotation decision.",
                      "Make the project handover understandable to the next team member.",
                      "Check supporting evidence before updating a payment record.",
                    ].map((text) => (
                      <li key={text} className="flex gap-3">
                        <Check className="w-5 h-5 shrink-0 mt-1 text-primary" aria-hidden="true" />
                        {text}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-7 text-muted-foreground leading-relaxed">
                    If several people handle the project, agree on who maintains each record.
                    Explore{" "}
                    <Link
                      href="/interior-team-management"
                      className="text-primary underline underline-offset-4"
                    >
                      team management for interior designers
                    </Link>{" "}
                    or return to the{" "}
                    <Link
                      href="/interior-design-dashboard"
                      className="text-primary underline underline-offset-4"
                    >
                      business dashboard guide
                    </Link>{" "}
                    for the wider overview.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </article>
        <ProCTA description="Bring client records, quotations, projects and billing into a clearer workflow. Review the available plan with the Intorza team against your studio’s requirements." />
        <FAQSection faqs={crmArticleFaqs} title="CRM and quotation software: common questions" />
        <section className="section-padding border-t-2 border-foreground bg-muted/30">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
              Bring one real project. Explore the complete workflow.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Tell us how your studio handles client details, proposals and billing. We’ll help you
              assess where Intorza fits and which requirements to check before getting started.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-hard btn-hard-hover">
                Discuss your workflow <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://app.intorza.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hard-ghost"
              >
                Open Intorza
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
