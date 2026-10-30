import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import RenderingRoomVisual from "@/components/website/RenderingRoomVisual";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_PHONE_E164 } from "@/lib/site";
import { renderingServices, renderingServicePath } from "@/data/3d-rendering-services";

export type RenderingService = (typeof renderingServices)[number];

export function renderingServiceFaqs(service: RenderingService) {
  return [
    { q: service.question, a: service.answer },
    { q: `What should I provide for ${service.label.toLowerCase()}?`, a: `Useful starting inputs include ${service.inputs.join(", ").toLowerCase()}. We review the available information before confirming the scope.` },
    { q: "How are cost, timing and revisions agreed?", a: "These depend on the spaces, views, detail level and available inputs. Share your requirements so scope, delivery format, review steps and pricing can be agreed before work starts." },
  ];
}

export default function RenderingServicePage({ service }: { service: RenderingService }) {
  const contact = `/contact?subject=${encodeURIComponent(service.label)}`;
  const whatsapp = `https://wa.me/${SITE_PHONE_E164.replace("+", "")}?text=${encodeURIComponent(`Hi Intorza, I would like to discuss ${service.label.toLowerCase()}.`)}`;
  const faqs = renderingServiceFaqs(service);
  const related = renderingServices.filter((item) => item.slug !== service.slug);
  return <div className="min-h-screen bg-background"><Header/><main>
    <section className="overflow-hidden border-b-2 border-foreground pb-14 pt-28 md:pb-20 md:pt-36"><div className="container-custom">
      <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap gap-2 text-xs text-muted-foreground"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/services/3d-interior-rendering">3D Interior Rendering</Link><span aria-hidden="true">/</span><span aria-current="page">{service.label}</span></nav>
      <div className="grid items-center gap-9 lg:grid-cols-2"><div><h1 className="font-display text-4xl font-bold leading-tight md:text-5xl">{service.label} <span className="text-primary">for interior professionals</span></h1><p className="mt-5 text-base leading-relaxed text-muted-foreground">{service.intro}</p><div className="mt-7 grid w-full grid-cols-1 gap-3 xl:grid-cols-2"><Link href={contact} className="btn-hard btn-hard-hover w-full min-w-0 justify-center px-3">Discuss your project<ArrowRight className="h-4 w-4"/></Link><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-hard-ghost btn-hard-hover w-full min-w-0 justify-center px-3"><Image src="/whatsapp-svgrepo-com.svg" alt="" width={20} height={20}/>WhatsApp Intorza</a></div></div>
      <RenderingRoomVisual service={service}/></div>
    </div></section>
    <section className="section-padding bg-muted/30"><div className="container-custom"><h2 className="mb-7 font-display text-3xl font-bold md:text-4xl">Plan the details that matter to this space</h2><div className="grid border-l border-t border-border md:grid-cols-2">{service.considerations.map(([title,copy]) => <article key={title} className="border-b border-r border-border bg-card p-5"><h3 className="font-display text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p></article>)}</div></div></section>
    <section className="section-padding"><div className="container-custom grid gap-8 lg:grid-cols-2"><div><h2 className="font-display text-3xl font-bold md:text-4xl">Start with the information you have</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Share available drawings and references, and flag missing dimensions or unresolved selections. We confirm the information needed for the requested views before agreeing the work.</p></div><ul className="divide-y divide-border border-y border-border">{service.inputs.map(input => <li key={input} className="flex gap-3 py-4 text-sm"><Check className="h-4 w-4 shrink-0 text-primary"/>{input}</li>)}</ul></div></section>
    <section className="section-padding bg-secondary text-secondary-foreground"><div className="container-custom"><h2 className="mb-7 font-display text-3xl font-bold md:text-4xl">A clear brief, review and delivery process</h2><ol className="grid border-l border-t border-secondary-foreground/20 sm:grid-cols-2 lg:grid-cols-4">{[["Scope the views", "Confirm the space, camera angles, purpose and output requirements."], ["Share the design", "Provide drawings, references and notes on the details to represent."], ["Review together", "Consolidate feedback and review the views against the agreed brief."], ["Receive the files", "Final files are prepared in the agreed format following the project review."]].map(([title,copy],i) => <li key={title} className="border-b border-r border-secondary-foreground/20 p-5"><span className="font-mono text-lg text-primary">0{i+1}</span><h3 className="mt-3 font-display text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-secondary-foreground/85">{copy}</p></li>)}</ol></div></section>
    <section className="section-padding"><div className="container-custom max-w-4xl"><h2 className="mb-6 font-display text-3xl font-bold">{service.label} — FAQs</h2><div className="divide-y divide-border border-y border-border">{faqs.map(({q,a}) => <details key={q} className="group py-4"><summary className="flex cursor-pointer list-none justify-between gap-4 font-display font-semibold">{q}<span className="text-primary group-open:rotate-45">+</span></summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p></details>)}</div></div></section>
    <section className="section-padding bg-muted/30"><div className="container-custom"><h2 className="mb-6 font-display text-3xl font-bold">Explore related rendering services</h2><nav aria-label="Related rendering services" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{related.map(item => <Link key={item.slug} href={renderingServicePath(item.slug)} className="flex items-center justify-between gap-3 border border-border bg-card p-4 font-display font-semibold hover:text-primary">{item.label}<ArrowUpRight className="h-4 w-4 shrink-0"/></Link>)}</nav><div className="mt-6 flex flex-wrap gap-5 text-sm underline underline-offset-4"><Link href="/services/3d-interior-rendering">All 3D interior rendering services</Link><Link href="/services/3d-interior-rendering/interior-designers">Rendering for interior designers</Link><Link href="/services/3d-interior-rendering/interior-design-studios">Rendering for studios</Link></div></div></section>
    <section className="border-t-2 border-foreground bg-primary py-14 text-primary-foreground"><div className="container-custom flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><h2 className="font-display text-3xl font-bold">Discuss your {service.label.toLowerCase()} brief</h2><p className="mt-3 max-w-2xl text-sm leading-relaxed">Share the space, design direction and views you need. We’ll discuss suitable scope and next steps.</p></div><Link href={contact} className="btn-hard-light btn-hard-hover w-full justify-center md:w-auto md:shrink-0">Start a conversation<ArrowRight className="h-4 w-4"/></Link></div></section>
  </main><Footer/></div>;
}
