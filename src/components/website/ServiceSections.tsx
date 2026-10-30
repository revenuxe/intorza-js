import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export function ServiceTitle({ children, copy }: { children: React.ReactNode; copy?: string }) {
  return <div className="mb-7 max-w-3xl"><h2 className="font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">{children}</h2>{copy && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{copy}</p>}</div>;
}

export function ServiceProcess({ steps }: { steps: readonly (readonly [string, string])[] }) {
  return <ol className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">{steps.map(([title,copy],i)=><li key={title} className="border-b border-r border-border bg-card p-4 sm:p-5"><span className="font-mono text-2xl font-semibold text-primary">0{i+1}</span><h3 className="mt-3 font-display text-base font-semibold">{title}</h3><p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{copy}</p></li>)}</ol>;
}

export function ServiceFAQ({ faqs }: { faqs: readonly { q: string; a: string }[] }) {
  return <div className="divide-y divide-border border-y border-border">{faqs.map(({q,a})=><details key={q} className="group py-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-sm font-semibold marker:hidden sm:text-base">{q}<span className="text-xl font-normal text-primary transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl pr-8 text-sm leading-relaxed text-muted-foreground">{a}</p></details>)}</div>;
}

export function ServiceBanner({ title, copy, href, label }: { title: string; copy: string; href: string; label: string }) {
  return <section className="border-y-2 border-foreground bg-secondary py-10 text-secondary-foreground md:py-12"><div className="container-custom grid items-center gap-5 md:grid-cols-[1fr_auto]"><div><h2 className="font-display text-2xl font-bold md:text-3xl">{title}</h2><p className="mt-2 max-w-2xl text-sm leading-relaxed text-secondary-foreground/85">{copy}</p></div><Link href={href} className="btn-hard-light btn-hard-hover w-full justify-center md:w-auto">{label}<ArrowRight className="h-4 w-4 shrink-0"/></Link></div></section>;
}

export function ServiceComparison({ rows, left, right }: { rows: readonly (readonly [string,string,string])[]; left: string; right: string }) {
  return <div className="overflow-hidden border-2 border-foreground shadow-[5px_5px_0_0_var(--foreground)]"><div className="hidden grid-cols-[.6fr_1fr_1fr] border-b-2 border-foreground bg-muted sm:grid"><span className="p-4 text-xs font-semibold">Project focus</span><span className="p-4 font-display text-sm font-semibold">{left}</span><span className="bg-secondary p-4 font-display text-sm font-semibold text-secondary-foreground">{right}</span></div>{rows.map(([topic,a,b])=><div key={topic} className="grid border-b border-border last:border-b-0 sm:grid-cols-[.6fr_1fr_1fr]"><h3 className="bg-muted/30 p-4 font-display text-sm font-semibold">{topic}</h3><p className="p-4 text-xs leading-relaxed text-muted-foreground sm:text-sm"><span className="mb-1 block font-semibold text-foreground sm:hidden">{left}</span>{a}</p><p className="border-t border-border p-4 text-xs leading-relaxed sm:border-l sm:border-t-0 sm:text-sm"><span className="mb-1 block font-semibold sm:hidden">{right}</span><Check className="mr-2 inline h-4 w-4 text-primary"/>{b}</p></div>)}</div>;
}
