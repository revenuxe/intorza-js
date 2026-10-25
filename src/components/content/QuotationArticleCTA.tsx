import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export default function QuotationArticleCTA({
  title,
  compact = false,
}: {
  title: string;
  compact?: boolean;
}) {
  return (
    <aside
      aria-label="Create a quotation with Intorza"
      className={`rounded-2xl bg-secondary text-secondary-foreground ${compact ? "my-10 p-6 md:p-8" : "p-7 md:p-10"}`}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-secondary-foreground/70">
        From reading to doing
      </p>
      <h2
        className={`mt-3 font-display font-semibold leading-tight ${compact ? "text-2xl" : "text-3xl md:text-4xl"}`}
      >
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-secondary-foreground/80">
        Bring your room-wise items, specifications and quantities into Intorza. Review the totals
        and export a quotation your client can follow.
      </p>
      {!compact && (
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {["Room-wise work items", "Quantities & unit rates", "Client-ready PDF export"].map(
            (item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-orange-300" aria-hidden="true" />
                {item}
              </li>
            ),
          )}
        </ul>
      )}
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a
          href="https://app.intorza.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
        >
          Create a quotation <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <Link
          href="/interior-quotation"
          className="inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4"
        >
          See how it works
        </Link>
      </div>
    </aside>
  );
}
