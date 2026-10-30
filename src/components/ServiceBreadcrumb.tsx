import Link from "next/link";

export default function ServiceBreadcrumb({ parentHref, parentLabel, label }: { parentHref: string; parentLabel: string; label: string }) {
  return <nav aria-label="Breadcrumb" className="mb-7 flex w-full min-w-0 items-center gap-2 overflow-hidden whitespace-nowrap text-[11px] text-muted-foreground sm:text-xs">
    <Link href="/" className="shrink-0 hover:text-primary">Home</Link>
    <span aria-hidden="true" className="shrink-0">/</span>
    <Link href={parentHref} className="shrink-0 hover:text-primary">{parentLabel}</Link>
    <span aria-hidden="true" className="shrink-0">/</span>
    <span aria-current="page" title={label} className="min-w-0 flex-1 truncate text-foreground">{label}</span>
  </nav>;
}
