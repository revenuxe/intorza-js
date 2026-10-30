import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Compass, Images, Palette, Workflow } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebsitePlanningVisual from "@/components/website/WebsitePlanningVisual";
import { SITE_PHONE_E164 } from "@/lib/site";
import type { WebsiteDevelopmentPageData } from "@/data/website-audience-pages";

const audienceIcons = { palette: Palette, images: Images, compass: Compass, workflow: Workflow };

export default function WebsiteAudiencePage({ page }: { page: WebsiteDevelopmentPageData }) {
  const whatsappMessage = `Hi Intorza, I would like to discuss ${page.focusKeyword}.`;
  const whatsappHref = `https://wa.me/${SITE_PHONE_E164.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`;
  const Icon = audienceIcons[page.icon];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="overflow-hidden border-b-2 border-foreground bg-background pb-14 pt-28 md:pb-20 md:pt-36">
          <div className="container-custom">
            <nav aria-label="Breadcrumb" className="mb-8 flex w-full items-center gap-2 overflow-x-auto whitespace-nowrap pb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground [&>*]:shrink-0">
              <Link href="/" className="hover:text-primary">Home</Link><span aria-hidden="true">/</span>
              <Link href="/services/website-development" className="hover:text-primary">Website Development</Link><span aria-hidden="true">/</span>
              <span aria-current="page" className="text-foreground">{page.label}</span>
            </nav>
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <p className="mb-4 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary"><Icon className="h-4 w-4" aria-hidden="true" />{page.eyebrow}</p>
                <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">{page.title.replace(" | Intorza", "")}</h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{page.intro}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href={`/contact?subject=${encodeURIComponent(page.focusKeyword)}`} className="btn-hard btn-hard-hover">Discuss your website <ArrowRight className="h-4 w-4" /></Link>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-hard-ghost btn-hard-hover"><Image src="/whatsapp-svgrepo-com.svg" alt="" width={20} height={20} className="h-5 w-5" />WhatsApp Intorza</a>
                </div>
                <p className="mt-5 flex items-center gap-2 text-xs font-semibold text-muted-foreground"><Check className="h-4 w-4 text-green-700" />Planned around your audience, work and real services</p>
              </div>

              <div className="relative lg:col-span-6"><div aria-hidden="true" className="absolute -bottom-3 -right-3 h-full w-full border-2 border-foreground" /><div className="relative"><WebsitePlanningVisual page={page} /></div></div>
            </div>
          </div>
        </section>

        <section className="section-padding scroll-reveal bg-muted/30">
          <div className="container-custom grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
            <div><p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">The purpose behind the pages</p><h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">A website that reflects how your practice works</h2><p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{page.pointOfView}</p><Link href="/services/website-development" className="group mt-6 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.12em] underline decoration-primary decoration-2 underline-offset-8">Explore the complete website development service<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></div>
            <div><h2 className="mb-5 font-display text-2xl font-bold leading-tight md:text-3xl">{page.prioritiesHeading}</h2><div className="grid border-l border-t border-border sm:grid-cols-2">{page.priorities.map((item, index) => <article key={item.title} className="border-b border-r border-border bg-card p-4 sm:p-5"><span className="font-mono text-[10px] font-bold text-primary">0{index + 1}</span><h3 className="mt-3 font-display text-base font-semibold">{item.title}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{item.copy}</p></article>)}</div></div>
          </div>
        </section>

        <section className="section-padding scroll-reveal">
          <div className="container-custom">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14"><div><p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">Recommended page structure</p><h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">{page.structureHeading}</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{page.structureIntro} We can shape the final sitemap to fit your priorities rather than adding pages for their own sake.</p></div>
              <ol className="grid border-l border-t border-border sm:grid-cols-2">{page.structure.map((item) => <li key={item.label} className="border-b border-r border-border p-4 transition-colors hover:bg-muted/30 sm:p-5"><span className="font-mono text-[10px] font-bold text-primary">{item.label}</span><h3 className="mt-3 font-display text-base font-semibold">{item.title}</h3><p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{item.copy}</p></li>)}</ol>
            </div>
          </div>
        </section>

        <section className="section-padding scroll-reveal border-y border-border bg-secondary text-secondary-foreground">
          <div className="container-custom grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14"><div><p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">Useful content, not filler</p><h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">{page.contentHeading}</h2><p className="mt-4 text-sm leading-relaxed text-secondary-foreground/80 sm:text-base">{page.contentIntro}</p><Link href="/contact" className="group mt-6 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.14em] text-secondary-foreground underline decoration-primary decoration-2 underline-offset-8">Plan your content with Intorza<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></div>
            <ul className="divide-y divide-secondary-foreground/20 border-y border-secondary-foreground/20">{page.contentChecklist.map((item, index) => <li key={item} className="flex gap-4 py-4"><span className="font-mono text-[10px] font-semibold text-primary">0{index + 1}</span><span className="text-sm leading-relaxed text-secondary-foreground/85">{item}</span></li>)}</ul>
          </div>
        </section>

        <section className="section-padding scroll-reveal">
          <div className="container-custom grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-14"><div><p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">More tailored website pages</p><h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">Explore related pages</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Each page has its own priorities and content plan. Start with the one closest to your needs.</p></div><nav aria-label="Related website development services" className="grid border-l border-t border-border sm:grid-cols-3">{page.relatedLinks.map((item) => <Link key={item.href} href={item.href} className="group border-b border-r border-border bg-card p-4 transition-colors hover:bg-muted/30 sm:p-5"><span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{item.keyword}</span><span className="mt-3 flex items-center justify-between gap-2 font-display text-base font-semibold">{item.label}<ArrowUpRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span></Link>)}</nav></div>
        </section>

        <section className="section-padding scroll-reveal border-t border-border bg-muted/30">
          <div className="container-custom max-w-4xl"><p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">Common questions</p><h2 className="mb-7 font-display text-3xl font-bold md:text-4xl">Website development for {page.label.toLowerCase()} — FAQs</h2><div className="divide-y divide-border border-y border-border">{page.faq.map(({ q, a }) => <details key={q} className="group py-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-sm font-semibold marker:hidden sm:text-base">{q}<span className="text-xl font-normal text-primary transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl pr-8 text-sm leading-relaxed text-muted-foreground">{a}</p></details>)}</div><Link href="/services/website-development" className="group mt-6 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.12em] underline decoration-primary decoration-2 underline-offset-8">See all website development services<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></div>
        </section>

        <section className="scroll-reveal border-t-2 border-foreground bg-primary py-14 md:py-20"><div className="container-custom grid items-center gap-7 lg:grid-cols-[1fr_auto]"><div className="max-w-3xl"><h2 className="font-display text-3xl font-bold leading-tight text-primary-foreground md:text-4xl">{page.ctaTitle}</h2><p className="mt-4 text-sm leading-relaxed text-primary-foreground/90 sm:text-base">Tell us about your work, the clients you want to reach and what a useful website needs to do. We’ll discuss a suitable page structure and next steps.</p></div><div className="flex flex-col items-start gap-4 sm:flex-row lg:flex-col"><Link href={`/contact?subject=${encodeURIComponent(page.focusKeyword)}`} className="btn-hard-light btn-hard-hover whitespace-nowrap">Discuss your website <ArrowRight className="h-4 w-4" /></Link><a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground underline underline-offset-4"><Image src="/whatsapp-svgrepo-com.svg" alt="" width={18} height={18} className="h-4 w-4 brightness-0 invert" />Message Intorza</a></div></div></section>
      </main>
      <Footer />
    </div>
  );
}
