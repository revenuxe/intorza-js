"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, FileText, House, PanelsTopLeft, Workflow } from "lucide-react";
import type { QuotationArticle } from "@/data/quotation-articles";
import { categoryLabels } from "@/data/quotation-article-examples";

const filters = ["All articles", "Start here", "File formats", "Project scopes", "Workflow"];
const icons = {
  "Start here": FileText,
  "File formats": PanelsTopLeft,
  "Project scopes": House,
  Workflow,
};

export default function ArticleFinder({
  guides,
}: {
  guides: Pick<QuotationArticle, "slug" | "title" | "category" | "description">[];
}) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All articles");
  const articles = guides.filter(
    (a) =>
      (filter === "All articles" || a.category === filter) &&
      `${a.title} ${a.description}`.toLowerCase().includes(query.trim().toLowerCase()),
  );
  return (
    <section id="guides" className="container-custom scroll-mt-28 py-14 md:py-20">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-sm font-semibold text-primary">Find the answer you need</p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Explore the quotation guides
          </h2>
        </div>
        <div className="w-full md:max-w-sm">
          <label htmlFor="article-search" className="mb-2 block text-sm font-medium">
            Search articles
          </label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="article-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try kitchen, Excel or 2BHK"
              className="min-h-12 w-full rounded-lg border border-border bg-background pl-12 pr-4 text-sm outline-offset-4 focus-visible:outline-primary"
            />
          </div>
        </div>
      </div>
      <div aria-label="Filter articles by topic" role="group" className="mt-7 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${filter === f ? "border-secondary bg-secondary text-secondary-foreground" : "border-border bg-background hover:border-primary"}`}
          >
            {categoryLabels[f] ?? f}
          </button>
        ))}
      </div>
      <p role="status" className="my-6 text-sm text-muted-foreground">
        {articles.length} {articles.length === 1 ? "article" : "articles"}
        {query.trim() ? ` matching “${query.trim()}”` : " to help you prepare a clearer proposal"}
      </p>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((a) => {
          const Icon = icons[a.category];
          return (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-lg bg-primary/10 p-3 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold text-muted-foreground">
                  {categoryLabels[a.category]}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold leading-snug group-hover:text-primary">
                {a.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{a.description}</p>
              <span className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm font-semibold">
                Read the guide <ArrowUpRight className="h-4 w-4 text-primary" aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </div>
      {articles.length === 0 && (
        <div className="rounded-xl border border-dashed border-border p-10 text-center">
          <h3 className="font-display text-2xl font-semibold">No matching articles</h3>
          <p className="mt-3 text-muted-foreground">
            Try a shorter search, or show all guides to find a starting point.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setFilter("All articles");
            }}
            className="mt-5 min-h-11 rounded-lg bg-secondary px-5 py-3 font-semibold text-secondary-foreground"
          >
            Show all articles
          </button>
        </div>
      )}
    </section>
  );
}
