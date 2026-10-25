import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, FileText, House, Table2 } from "lucide-react";
import { articlePath, quotationArticles } from "@/data/quotation-articles";
import ArticleFinder from "@/components/content/ArticleFinder";
import QuotationArticleCTA from "@/components/content/QuotationArticleCTA";
import { createMetadata, JsonLd } from "@/lib/next-seo";
import { SITE_URL } from "@/lib/site";
import { articleLibrarySEO, quotationArticleDates } from "@/data/quotation-article-seo";

export const metadata = createMetadata({
  ...articleLibrarySEO,
  path: "/articles",
});

export default function ArticlesPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Articles", item: `${SITE_URL}/articles` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${SITE_URL}/articles#webpage`,
            name: "Interior quotation articles",
            description: articleLibrarySEO.description,
            dateModified: quotationArticleDates.modified,
            inLanguage: "en",
            isPartOf: { "@id": `${SITE_URL}/#website` },
            publisher: { "@id": `${SITE_URL}/#organization` },
            url: `${SITE_URL}/articles`,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: quotationArticles.map((a, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: a.title,
                url: `${SITE_URL}${articlePath(a.slug)}`,
              })),
            },
          },
        ]}
      />
      <section className="container-custom pb-12 md:pb-16">
        <p className="mb-5 text-sm font-semibold text-primary">The Intorza resource library</p>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              Interior quotation guides
              <br />
              <span className="text-primary">for clearer proposals.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Know what to include, how to describe the work and what to check before you send a
              proposal. Practical articles for interior designers and contractors.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#guides"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-3 font-semibold text-secondary-foreground"
              >
                Find a guide <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href={articlePath("interior-quotation-format")}
                className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-border px-5 py-3 font-semibold hover:border-primary"
              >
                New to quotations? Start here <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-muted p-4 md:p-6">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" /> A clearer proposal starts with a
              clearer scope
            </div>
            <Image
              src="/quotation-preview.webp"
              alt="Intorza quotation builder showing itemized work descriptions, quantities and totals"
              width={1896}
              height={893}
              priority
              sizes="(min-width: 1024px) 45vw, 95vw"
              className="h-auto w-full rounded-lg border border-border"
            />
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Measurements &rarr; specifications &rarr; itemized quotation &rarr; client review
            </p>
          </div>
        </div>
      </section>
      <section
        aria-label="Choose a starting point"
        className="border-y border-border bg-muted/60 py-8"
      >
        <div className="container-custom grid gap-4 md:grid-cols-3">
          {[
            {
              icon: FileText,
              title: "I need a quotation format",
              text: "Understand the fields, scope and approval details.",
              slug: "interior-quotation-format",
            },
            {
              icon: Table2,
              title: "I work in Excel",
              text: "Set up quantities, formulas and reliable totals.",
              slug: "interior-quotation-format-excel",
            },
            {
              icon: House,
              title: "I'm quoting a home",
              text: "Break a 2BHK down into rooms and selected work.",
              slug: "2bhk-interior-quotation",
            },
          ].map(({ icon: Icon, title, text, slug }) => (
            <Link
              key={slug}
              href={articlePath(slug)}
              className="group flex items-start gap-4 rounded-xl border border-border bg-background p-5 hover:border-primary"
            >
              <Icon className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="font-display text-lg font-semibold group-hover:text-primary">
                  {title}
                </h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
              </div>
              <ArrowRight className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
      <ArticleFinder
        guides={quotationArticles.map(({ slug, title, category, description }) => ({
          slug,
          title,
          category,
          description,
        }))}
      />
      <section className="container-custom pb-16">
        <QuotationArticleCTA title="Put your next proposal together with Intorza." />
        <div className="mt-8 flex flex-col justify-between gap-3 rounded-xl border border-border p-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-xl font-semibold">Looking beyond the quotation?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore client follow-ups, project records and billing.
            </p>
          </div>
          <Link
            href="/interior-design-crm-quotation-software"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary"
          >
            Read the CRM & quotation guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
