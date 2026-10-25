import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Lightbulb,
  ChevronDown,
} from "lucide-react";
import { articlePath, quotationArticles } from "@/data/quotation-articles";
import { articleExamples, categoryLabels } from "@/data/quotation-article-examples";
import ArticleChecklist from "@/components/content/ArticleChecklist";
import QuotationArticleCTA from "@/components/content/QuotationArticleCTA";
import { createMetadata, JsonLd } from "@/lib/next-seo";
import { SITE_URL } from "@/lib/site";
import { quotationArticleSEO, quotationArticleDates } from "@/data/quotation-article-seo";

export function generateStaticParams() {
  return quotationArticles.map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = quotationArticles.find((a) => a.slug === slug);
  if (!article) return {};
  const meta = createMetadata({
    ...quotationArticleSEO[slug],
    path: articlePath(slug),
  });
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: "article",
      publishedTime: quotationArticleDates.published,
      modifiedTime: quotationArticleDates.modified,
      authors: [`${SITE_URL}/about`],
      section: "Interior quotation guides",
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = quotationArticles.find((a) => a.slug === slug);
  if (!article) notFound();
  const example = articleExamples[slug];
  const words = [
    article.title,
    article.description,
    article.takeaway,
    ...article.sections.flatMap((s) => [s.title, ...s.paragraphs, ...(s.checklist ?? [])]),
    ...article.rows.flat(),
    ...article.mistakes,
    ...article.faq.flatMap((f) => [f.question, f.answer]),
    example.intro,
    example.before,
    example.after,
    example.explanation,
  ]
    .join(" ")
    .split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  const sections = [
    { id: "overview", title: "The essentials" },
    ...article.sections.map((s, i) => ({ id: `section-${i}`, title: s.title })),
    { id: "example", title: "Worked example" },
    { id: "sample", title: "Sample schedule" },
    { id: "mistakes", title: "Common mistakes" },
    { id: "checklist", title: "Your preparation checklist" },
    { id: "questions", title: "Frequently asked questions" },
  ];
  const contents = (
    <ol className="space-y-1">
      {sections.map((s) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className="block rounded-lg px-3 py-2 text-sm leading-6 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
          >
            {s.title}
          </a>
        </li>
      ))}
    </ol>
  );
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": `${SITE_URL}${articlePath(slug)}#article`,
            headline: article.title,
            description: quotationArticleSEO[slug].description,
            url: `${SITE_URL}${articlePath(slug)}`,
            mainEntityOfPage: `${SITE_URL}${articlePath(slug)}`,
            author: {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "Intorza",
              url: `${SITE_URL}/about`,
            },
            publisher: { "@id": `${SITE_URL}/#organization` },
            isPartOf: { "@id": `${SITE_URL}/articles#webpage` },
            datePublished: quotationArticleDates.published,
            dateModified: quotationArticleDates.modified,
            image: `${SITE_URL}/og-image.jpg`,
            articleSection: "Quotation",
            wordCount: words,
            inLanguage: "en",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Articles", item: `${SITE_URL}/articles` },
              {
                "@type": "ListItem",
                position: 3,
                name: article.title,
                item: `${SITE_URL}${articlePath(slug)}`,
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: article.faq.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          },
        ]}
      />
      <div className="container-custom">
        <nav
          aria-label="Breadcrumb"
          className="mb-7 flex flex-wrap gap-2 text-sm text-muted-foreground"
        >
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/articles" className="hover:text-primary">
            Articles
          </Link>
          <span aria-hidden="true">/</span>
          <span>{categoryLabels[article.category]}</span>
        </nav>
        <header className="max-w-4xl pb-10 md:pb-14">
          <Link
            href="/articles#guides"
            className="mb-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All quotation articles
          </Link>
          <h1 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            {article.description}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <Link
              href="/about"
              rel="author"
              className="font-medium text-foreground underline underline-offset-4"
            >
              By Intorza
            </Link>
            <span>
              Published{" "}
              <time dateTime={quotationArticleDates.published}>{quotationArticleDates.label}</time>
            </span>
            <span className="flex items-center gap-2">
              <Clock3 className="h-4 w-4" aria-hidden="true" />
              {minutes} min read
            </span>
            <span>Examples & practical checklist</span>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#example"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold hover:border-primary"
            >
              See a worked example <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#checklist"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
            >
              Use the preparation checklist <Check className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </header>
        <div className="grid items-start gap-8 border-t border-border py-8 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-14">
          <aside className="lg:sticky lg:top-28">
            <details className="rounded-xl border border-border bg-background lg:hidden">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 p-4 font-semibold">
                Jump to a section <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </summary>
              <nav aria-label="On this page" className="px-2 pb-3">
                {contents}
              </nav>
            </details>
            <div className="hidden lg:block">
              <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-primary">
                On this page
              </p>
              <nav aria-label="On this page">{contents}</nav>
              <div className="mt-6 rounded-xl border border-border bg-muted p-4">
                <p className="font-display text-lg font-semibold">Ready to make a quotation?</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Put your scope and measurements into a client-ready proposal.
                </p>
                <a
                  href="https://app.intorza.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary"
                >
                  Open Intorza <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </aside>
          <article className="min-w-0 max-w-[760px] pb-10">
            <section
              id="overview"
              className="mb-10 scroll-mt-28 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8"
            >
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary">
                <Lightbulb className="h-5 w-5" aria-hidden="true" />
                The essentials
              </div>
              <p className="font-display text-xl leading-relaxed md:text-2xl">{article.takeaway}</p>
              <div className="mt-6 grid gap-4 border-t border-primary/20 pt-5 sm:grid-cols-3">
                {example.steps.map(([title, text]) => (
                  <div key={title}>
                    <h2 className="text-sm font-semibold">{title}</h2>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </section>
            {article.sections.map((section, i) => (
              <div key={section.title}>
                <section id={`section-${i}`} className="mb-10 scroll-mt-28">
                  <h2 className="mb-5 font-display text-2xl font-semibold leading-snug md:text-3xl">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((p) => (
                    <p key={p} className="mb-5 text-base leading-8 text-foreground/80">
                      {p}
                    </p>
                  ))}
                  {section.checklist && (
                    <div className="mt-6 rounded-xl bg-muted p-5">
                      <h3 className="mb-4 text-sm font-semibold">What to include</h3>
                      <ul className="space-y-3">
                        {section.checklist.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm leading-6">
                            <Check
                              className="mt-1 h-4 w-4 shrink-0 text-primary"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
                {i === 1 && <QuotationArticleCTA title={example.cta} compact />}
              </div>
            ))}
            <section id="example" className="mb-12 scroll-mt-28">
              <p className="mb-3 text-sm font-semibold text-primary">Worked example</p>
              <h2 className="mb-5 font-display text-2xl font-semibold md:text-3xl">
                {example.label}
              </h2>
              <p className="mb-6 leading-8 text-foreground/80">{example.intro}</p>
              <div className="space-y-4">
                <div className="rounded-xl border border-border bg-muted p-5">
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Too vague to approve
                  </h3>
                  <p className="leading-7">{example.before}</p>
                </div>
                <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
                  <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    <Check className="h-4 w-4" aria-hidden="true" />A clearer version
                  </h3>
                  <p className="leading-8">{example.after}</p>
                </div>
              </div>
              <p className="mt-6 leading-8 text-foreground/80">{example.explanation}</p>
            </section>
            <section id="sample" className="mb-12 scroll-mt-28">
              <h2 className="mb-4 font-display text-3xl font-semibold">Sample schedule</h2>
              <p className="mb-5 leading-7 text-muted-foreground">
                Use these fields to organize your own scope. Add the verified quantities,
                project-specific rates and selected specifications before issue.
              </p>
              <div className="space-y-3 md:hidden">
                {article.rows.map((row) => (
                  <div key={row[0]} className="rounded-xl border border-border p-5">
                    <h3 className="font-display text-lg font-semibold">{row[0]}</h3>
                    <p className="mt-2 text-sm leading-7 text-foreground/80">{row[1]}</p>
                    <dl className="mt-4 space-y-2 border-t border-border pt-3 text-sm">
                      <div>
                        <dt className="font-semibold">Unit / type</dt>
                        <dd className="mt-1 text-muted-foreground">{row[2]}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold">Review point</dt>
                        <dd className="mt-1 leading-6 text-muted-foreground">{row[3]}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
              <div className="hidden overflow-x-auto rounded-xl border border-border md:block">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">{article.title}: sample schedule</caption>
                  <thead className="bg-secondary text-secondary-foreground">
                    <tr>
                      {["Item", "What to specify", "Unit / type", "Review point"].map((h) => (
                        <th scope="col" key={h} className="p-4 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {article.rows.map((row) => (
                      <tr key={row[0]} className="border-t border-border odd:bg-muted/50">
                        {row.map((cell, i) =>
                          i === 0 ? (
                            <th key={i} scope="row" className="p-4 align-top font-semibold">
                              {cell}
                            </th>
                          ) : (
                            <td key={i} className="p-4 align-top leading-6 text-muted-foreground">
                              {cell}
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section
              id="mistakes"
              className="mb-12 scroll-mt-28 rounded-xl border border-border bg-muted p-6"
            >
              <h2 className="mb-5 font-display text-2xl font-semibold">
                Before you send it, catch these mistakes
              </h2>
              <ul className="space-y-4">
                {article.mistakes.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-sm leading-7">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {m}
                  </li>
                ))}
              </ul>
            </section>
            <section id="checklist" className="mb-12 scroll-mt-28">
              <h2 className="mb-4 font-display text-3xl font-semibold">
                Get your quotation inputs ready
              </h2>
              <p className="mb-6 leading-7 text-muted-foreground">
                Tick off what you have, then copy the list into your project notes. Use the
                unchecked items to guide your next site visit or client conversation.
              </p>
              <ArticleChecklist key={slug} items={example.brief} title={article.title} />
            </section>
            <section id="questions" className="mb-12 scroll-mt-28">
              <h2 className="mb-6 font-display text-3xl font-semibold">
                Frequently asked questions
              </h2>
              {article.faq.map((f) => (
                <details
                  key={f.question}
                  className="group mb-3 rounded-xl border border-border bg-background px-5 py-4"
                >
                  <summary className="cursor-pointer pr-2 font-semibold leading-7 marker:text-primary">
                    {f.question}
                  </summary>
                  <p className="mt-4 leading-8 text-foreground/80">{f.answer}</p>
                </details>
              ))}
            </section>
            <QuotationArticleCTA title={example.cta} />
          </article>
        </div>
      </div>
      <section className="border-t border-border bg-muted/50 py-14">
        <div className="container-custom">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold text-primary">Keep learning</p>
              <h2 className="font-display text-3xl font-semibold">Related articles</h2>
            </div>
            <Link
              href="/articles"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold"
            >
              View all articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {article.related
              .map((slug) => quotationArticles.find((a) => a.slug === slug))
              .filter((a) => !!a)
              .map((a) => (
                <Link
                  key={a.slug}
                  href={articlePath(a.slug)}
                  className="group rounded-xl border border-border bg-background p-6 hover:border-primary"
                >
                  <p className="text-xs font-semibold text-primary">{categoryLabels[a.category]}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug group-hover:text-primary">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{a.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                    Read article <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
