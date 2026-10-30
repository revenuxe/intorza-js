import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Compass,
  FileText,
  Images,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Search,
  Workflow,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_PHONE_E164 } from "@/lib/site";
import { websiteFocusPath } from "@/data/website-audience-pages";

type FAQ = { q: string; a: string };

const audiences = [
  ["Interior designers", "Lead with your point of view, then let your projects, services and process do the talking.", Palette, "interior-designers"],
  ["Design studios", "Bring a team’s work together in a portfolio that feels cohesive and unmistakably yours.", Images, "design-studios"],
  ["Architects & practices", "Make room for project context, capabilities, collaborators and the thinking behind each space.", Compass, "architects"],
  ["Interior contractors", "Show the scope of your work clearly and give prospective clients a direct route to enquire.", Workflow, "interior-contractors"],
] as const;

const inclusions = [
  ["A portfolio with purpose", "Organised project galleries, useful filters and dedicated case study pages.", Images],
  ["Clear service pages", "Explain your offer in plain language, from residential design to turnkey delivery.", FileText],
  ["An easier enquiry path", "Contact forms, WhatsApp and calls to action placed where visitors need them.", MessageCircle],
  ["Ready for every screen", "A responsive layout that keeps images, type and navigation considered on mobile.", MonitorSmartphone],
  ["A strong search foundation", "Thoughtful headings, metadata, page structure and descriptive project content.", Search],
  ["Useful studio details", "Add maps, social profiles and genuine client feedback where they belong.", MapPin],
] as const;

const structure = [
  ["01", "Home", "Your point of view, signature work and a clear next step."],
  ["02", "Studio", "The people, experience and approach behind your practice."],
  ["03", "Services", "The work you take on, explained with useful detail."],
  ["04", "Projects", "A considered index of your completed work."],
  ["05", "Project stories", "Images, scope, location and the thinking behind each project."],
  ["06", "Contact", "A straightforward way to start a conversation."],
] as const;

const process = [
  ["Listen", "We get to know your studio, your ideal clients and what the site needs to do."],
  ["Shape", "We agree on the page structure, project stories and content before building."],
  ["Create", "We develop the site around your identity, imagery and priorities."],
  ["Refine & launch", "You review the work, we make the agreed refinements, then prepare for launch."],
] as const;

const designPrinciples = [
  ["01", "Start with the right work", "Choose a small set of representative projects and lead with the spaces that show your studio’s point of view. A focused selection gives visitors a clearer sense of your work than a crowded, unstructured gallery.", "interior-design-portfolio"],
  ["02", "Give each project context", "Pair strong images with the brief, location, scope and key design decisions. Useful context helps a visitor understand what your team contributed and why the finished space matters.", "interior-design-project-pages"],
  ["03", "Make services easy to understand", "Describe who each service is for, what it covers and where your team can help. Clear service pages make it easier for potential clients to see whether your practice fits their project.", "interior-design-service-pages"],
  ["04", "Design the next step in", "Keep contact options close to relevant work and service information. A clear form, phone link or WhatsApp conversation gives interested visitors a practical way to reach you.", "interior-website-enquiry-flow"],
] as const;

const comparison = [
  ["Starting point", "A general layout that may need adapting to the studio", "Your practice, the clients you want to reach and the work you want to show"],
  ["Project portfolio", "A gallery of images, often with limited project detail", "Browseable work with room for project scope, location and design story"],
  ["Services", "A broad list of offerings", "Pages shaped around the real services and project types you provide"],
  ["Enquiries", "A contact page visitors have to find", "Clear contact options placed alongside relevant work and service information"],
  ["Search foundations", "Basic page setup", "Useful page structure, headings and metadata, with room to grow through genuine project and service content"],
] as const;

export const websiteDevelopmentFaqs: FAQ[] = [
  { q: "How much does a website for an interior designer cost?", a: "It depends on the number of pages, portfolio size, content and functionality. Tell us what you need and we can suggest a suitable scope." },
  { q: "What should an interior designer website include?", a: "Most studios need a clear introduction, services, selected projects, project detail pages, studio information and a simple way to enquire." },
  { q: "Can you build websites for architects and architecture firms?", a: "Yes. We can shape the site around architectural projects, services, capabilities, collaborators and practice information." },
  { q: "Can you redesign my existing website?", a: "Yes. We can review your current site and discuss whether a redesign or a fresh build makes more sense for your goals." },
  { q: "Can you add my existing project portfolio?", a: "Yes. We can plan how to present your available project images and information in galleries or dedicated project pages." },
  { q: "Can my website include WhatsApp and enquiry forms?", a: "Yes. We can add contact options that suit how you prefer prospective clients to reach you." },
  { q: "Will the website be mobile friendly and SEO ready?", a: "The site is built responsively with a considered technical SEO foundation, including page structure, headings and metadata. Search rankings depend on many factors and cannot be guaranteed." },
];

function SectionTitle({ children, copy }: { children: React.ReactNode; copy?: string }) {
  return (
    <div className="mb-7 max-w-3xl">
      <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">{children}</h2>
      {copy && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{copy}</p>}
    </div>
  );
}

function ActionLink({ children, href = "/contact" }: { children: React.ReactNode; href?: string }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.14em] text-foreground underline decoration-primary decoration-2 underline-offset-8 transition-colors hover:text-primary">
      {children}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
      {inclusions.map(([title, copy, Icon]) => (
        <article key={title} className="group border-b border-r border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-background sm:p-5">
          <div className="mb-3 grid h-8 w-8 place-items-center border border-border text-primary transition-colors group-hover:border-primary"><Icon className="h-4 w-4" aria-hidden="true" /></div>
          <h3 className="font-display text-base font-semibold">{title}</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{copy}</p>
        </article>
      ))}
    </div>
  );
}

function InteriorWebsitePreview() {
  return (
    <div className="relative mx-auto max-w-2xl lg:ml-auto">
      <div aria-hidden="true" className="absolute -bottom-3 -right-3 h-full w-full border-2 border-foreground" />
      <div className="relative overflow-hidden border-2 border-foreground bg-card shadow-[5px_5px_0px_0px_var(--foreground)] transition-transform duration-500 hover:-translate-y-1">
        <div className="flex items-center gap-3 border-b-2 border-foreground bg-muted px-4 py-3">
          <span className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-destructive"/><i className="h-2 w-2 rounded-full bg-intorza-amber"/><i className="h-2 w-2 rounded-full bg-intorza-green"/></span>
          <span className="mx-auto font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Interior studio website · Concept</span><ArrowUpRight className="h-4 w-4 text-muted-foreground"/>
        </div>
        <div className="relative overflow-hidden bg-[#eee9df]">
          <div className="relative z-10 flex items-center justify-between border-b border-[#253951]/15 px-4 py-3 sm:px-6">
            <span className="font-display text-[11px] font-bold tracking-[0.14em] text-[#24384f]">ATELIER FORMS</span>
            <nav aria-label="Website concept navigation" className="hidden gap-5 font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-[#24384f]/75 sm:flex"><span>Approach</span><span>Selected work</span><span>Studio</span></nav>
            <span className="border border-[#24384f] px-2.5 py-1.5 font-mono text-[8px] font-bold uppercase tracking-wider text-[#24384f]">Let’s talk</span>
          </div>
          <div className="relative aspect-[1.15] overflow-hidden bg-[#c9b99f] sm:aspect-[1.35]" role="img" aria-label="Illustrated warm, contemporary living room in an interior design studio website concept">
            <svg viewBox="0 0 720 500" className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="atelierWall" x1="80" y1="0" x2="590" y2="500" gradientUnits="userSpaceOnUse"><stop stopColor="#DCCEB9"/><stop offset="1" stopColor="#AA9D89"/></linearGradient>
                <linearGradient id="atelierGlass" x1="180" y1="55" x2="400" y2="330" gradientUnits="userSpaceOnUse"><stop stopColor="#B5BCAF"/><stop offset="1" stopColor="#718074"/></linearGradient>
                <linearGradient id="atelierFloor" x1="0" y1="360" x2="720" y2="500" gradientUnits="userSpaceOnUse"><stop stopColor="#A79B86"/><stop offset="1" stopColor="#746D60"/></linearGradient>
                <filter id="atelierBlur" x="0" y="0" width="1" height="1"><feGaussianBlur stdDeviation="12"/></filter>
              </defs>
              <path fill="url(#atelierWall)" d="M0 0h720v500H0z"/><path fill="#F0E7D8" fillOpacity=".38" d="M0 0h720v20H0z"/>
              <path fill="#F1EADF" d="M78 54a15 15 0 0 1 15-15h184a15 15 0 0 1 15 15v285H78V54Z"/><path fill="url(#atelierGlass)" d="M94 59a8 8 0 0 1 8-8h166a8 8 0 0 1 8 8v263H94V59Z"/>
              <path fill="#C3C5B2" fillOpacity=".83" d="M102 236c40-57 75-69 104-39 32 34 60 22 70-5v130H102v-86Z"/><path fill="#D8D4C4" fillOpacity=".85" d="M102 270c42-29 67-16 97 8 24 19 50 7 77-23v67H102v-52Z"/><path stroke="#F3ECE0" strokeWidth="9" d="M185 51v271m91-132H94"/>
              <path fill="url(#atelierFloor)" d="M0 360c211-18 475-16 720 3v137H0V360Z"/><ellipse cx="383" cy="424" rx="245" ry="35" fill="#33332F" fillOpacity=".2" filter="url(#atelierBlur)"/>
              <path fill="#69665D" d="M338 259c0-14 11-25 25-25h204c14 0 25 11 25 25v126H338V259Z"/><path fill="#80796B" d="M309 321c0-14 11-25 25-25h240c14 0 25 11 25 25v67H309v-67Z"/><path fill="#D4C6B1" d="M380 260c0-9 7-16 16-16h79c9 0 16 7 16 16v65H380v-65Z"/><path fill="#F1E9DC" d="M320 386h314v15H320z"/><path fill="#56534B" d="M341 398h12v43h-12zm270 0h12v43h-12z"/>
              <path fill="#697568" d="M629 303c12-68 36-104 62-122-3 52-24 94-62 122Zm-14-7c-29-56-30-101-14-132 22 46 30 85 14 132Zm15 19c17-50 50-83 84-91-21 43-49 72-84 91Z"/><path fill="#81796B" d="M628 319h59l-8 58h-43z"/><path fill="#E7DDCE" d="M620 375h74v10h-74z"/>
              <path fill="#A84F36" fillOpacity=".84" d="M121 326c0-24 19-43 43-43h35v78h-78v-35Z"/><path fill="#F0E7D9" fillOpacity=".78" d="M130 329c0-19 15-34 34-34h23v60h-57v-26Z"/><path fill="#D7CCBA" d="M186 380h100v10H186z"/><path fill="#E5DAC9" d="M196 390h8v38h-8zm74 0h8v38h-8z"/>
              <path fill="#E8D9C2" fillOpacity=".2" d="M0 0h720v500H0z"/>
            </svg>
            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#182B40]/85 via-[#182B40]/30 to-transparent px-5 pb-5 pt-20 sm:px-7 sm:pb-7">
              <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#E8B18C]">Residential interiors · Sample project</p><h3 className="mt-2 max-w-sm font-display text-2xl font-medium leading-tight text-white sm:text-3xl">A home shaped by light.</h3>
            </div>
            <div className="absolute right-3 top-3 z-10 hidden items-center gap-2 border border-white/60 bg-[#f5f1e9]/95 px-3 py-2 shadow-lg backdrop-blur-sm sm:flex"><span className="h-7 w-7 bg-[#a34d33]"/><span><span className="block font-display text-[9px] font-semibold text-[#24384f]">Featured project</span><span className="mt-0.5 block font-mono text-[7px] uppercase tracking-wider text-[#24384f]/60">Explore the story</span></span><ArrowUpRight className="ml-2 h-3 w-3 text-[#24384f]"/></div>
          </div>
          <div className="flex items-center justify-between border-t border-[#243951]/15 px-4 py-2.5 sm:px-6"><span className="font-mono text-[8px] uppercase tracking-[0.13em] text-[#24384f]/60">Interior design · Selected work · Enquiries</span><span className="flex items-center gap-1 font-mono text-[8px] font-semibold text-[#24384f]">01 <span className="mx-1 h-px w-5 bg-[#a34d33]"/> 03</span></div>
        </div>
      </div>
    </div>
  );
}

function ProjectJourney() {
  return (
    <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
      <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-2">
        <article className="journey-card border-2 border-foreground bg-card p-4 shadow-[4px_4px_0_0_var(--foreground)] transition-transform duration-300 hover:-translate-y-1 sm:p-5">
          <div className="mb-4 flex items-center justify-between border-b border-border pb-3"><span className="font-display text-sm font-bold">Project index</span><span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Browse</span></div>
          <div className="space-y-2">{[["Residential", "Homes · villas · apartments"], ["Hospitality", "Hotels · cafés · retail"], ["Workplaces", "Offices · studios · spaces"]].map(([label, types], i) => <div key={label} className={`flex items-center justify-between gap-2 border px-3 py-2.5 transition-colors ${i === 0 ? "border-primary/50 bg-primary/5" : "border-border bg-background"}`}><span className="flex items-center gap-2 text-xs font-semibold"><span className={`h-2 w-2 shrink-0 ${i === 0 ? "bg-primary" : "bg-foreground/20"}`} />{label}</span><span className="text-right text-[9px] text-muted-foreground">{types}</span></div>)}</div>
          <p className="mt-3 text-[10px] leading-relaxed text-muted-foreground">Visitors can browse by the kind of work they want to see.</p>
        </article>
        <div className="journey-connector hidden px-1 sm:block"><ArrowRight className="h-5 w-5 text-primary" /></div>
        <div className="journey-connector flex justify-center sm:hidden"><ArrowDown className="h-5 w-5 text-primary" /></div>
        <article className="journey-card border-2 border-foreground bg-secondary p-4 text-secondary-foreground shadow-[4px_4px_0_0_var(--foreground)] transition-transform duration-300 hover:-translate-y-1 sm:p-5">
          <div className="mb-4 flex items-center justify-between border-b border-secondary-foreground/20 pb-3"><span className="font-display text-sm font-bold">Project story</span><span className="font-mono text-[9px] uppercase tracking-widest text-secondary-foreground/60">Detail page</span></div>
          <div className="grid grid-cols-[1.1fr_.9fr] gap-2"><div className="journey-art relative min-h-24 overflow-hidden"><span className="journey-art-window"/><span className="journey-art-table"/></div><div className="grid gap-2"><div className="bg-primary/90 p-2"><span className="font-mono text-[8px] uppercase tracking-wider text-white/80">Project type</span><p className="mt-1 text-[10px] font-semibold text-white">Residential</p></div><div className="bg-secondary-foreground/10 p-2"><span className="font-mono text-[8px] uppercase tracking-wider text-secondary-foreground/60">Location</span><p className="mt-1 text-[10px] font-semibold">Your project</p></div></div></div>
          <h3 className="mt-3 font-display text-base font-semibold">A clear story, told in detail.</h3>
          <p className="mt-1 text-[10px] leading-relaxed text-secondary-foreground/70">Images, scope, materials and the choices behind the finished space.</p>
          <div className="mt-4 flex items-center justify-between border-t border-secondary-foreground/20 pt-3"><span className="font-mono text-[9px] uppercase tracking-widest text-secondary-foreground/60">Next step</span><span className="flex items-center gap-1 text-[10px] font-semibold">Enquire <ArrowRight className="h-3 w-3" /></span></div>
        </article>
      </div>
      <div className="mt-4 flex items-center gap-3 border-l-2 border-primary pl-4"><span className="grid h-7 w-7 shrink-0 place-items-center bg-primary text-primary-foreground"><ArrowRight className="h-4 w-4" /></span><p className="text-xs leading-relaxed text-muted-foreground"><span className="font-semibold text-foreground">Browse → understand → enquire.</span> Shape a clear route from the work that catches someone’s eye to a useful first conversation.</p></div>
    </div>
  );
}

export default function WebsiteDevelopmentPage({ faqs = websiteDevelopmentFaqs }: { faqs?: FAQ[] }) {
  const whatsappHref = `https://wa.me/${SITE_PHONE_E164.replace("+", "")}?text=${encodeURIComponent("Hi Intorza, I would like to discuss a website for my interior or architecture business.")}`;
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="overflow-hidden scroll-reveal border-b-2 border-foreground bg-background pb-14 pt-28 md:pb-20 md:pt-36">
          <div className="container-custom"><div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-16">
            <div className="min-w-0 lg:col-span-5">
              <h1 className="font-display text-3xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">Website Development for <span className="text-primary">Interior Designers</span> &amp; Architects</h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg">Our website development for interior designers and architects gives your studio a distinct digital home: one that puts each project in context and makes enquiries easier.</p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row"><Link href="/contact?subject=Website%20development" className="btn-hard btn-hard-hover">Plan Your Website <ArrowRight className="h-4 w-4" /></Link><a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-hard-ghost btn-hard-hover"><Image src="/whatsapp-svgrepo-com.svg" alt="" width={20} height={20} className="h-5 w-5" />WhatsApp Us</a></div>
              <p className="mt-6 flex items-center gap-2 text-xs font-semibold text-muted-foreground"><Check className="h-4 w-4 text-green-700" />Designed around interior and architecture practices</p>
            </div>
            <div className="min-w-0 lg:col-span-7 lg:pl-3"><InteriorWebsitePreview /></div>
          </div></div>
        </section>

        <section className="section-padding scroll-reveal bg-muted/30"><div className="container-custom">
          <SectionTitle copy="A template can hold your logo. A good studio website brings together your work, point of view and process so the right clients can picture working with you. The result is an interior designer website that reflects your own way of working. For architects and architecture firms, we give equal care to presenting your capabilities and built work.">A website that feels like your studio</SectionTitle>
          <div className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">{audiences.map(([title, copy, Icon, slug]) => <Link key={title} href={`/services/website-development/${slug}`} className="group border-b border-r border-border bg-card p-4 transition-colors hover:bg-background focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-primary sm:p-5"><article><div className="mb-3 flex items-center justify-between"><Icon className="h-4 w-4 text-primary"/><ChevronRight className="h-4 w-4 -translate-x-1 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"/></div><h3 className="font-display text-base font-semibold">{title}</h3><p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{copy}</p><span className="mt-4 inline-flex items-center gap-1 font-mono text-[9px] font-bold uppercase tracking-wider text-primary">Explore this page<ArrowRight className="h-3 w-3" /></span></article></Link>)}</div>
        </div></section>

        <section className="section-padding scroll-reveal"><div className="container-custom"><div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div><SectionTitle copy="Your projects should be easy to browse and memorable to explore. Give each important project enough context to show the brief, the decisions and the finished space.">Let the projects lead</SectionTitle><p className="max-w-xl text-sm leading-relaxed text-muted-foreground">Build a portfolio around the work you want to be known for: residential interiors, commercial spaces, villas, apartments, offices, kitchens or architecture. Visitors can move from the portfolio into individual project stories, then reach out when the fit feels right.</p><div className="mt-6"><ActionLink href="/contact">Talk through your portfolio</ActionLink></div></div>
          <ProjectJourney />
        </div></div></section>

        <section className="section-padding scroll-reveal border-y border-border bg-secondary text-secondary-foreground"><div className="container-custom"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
          <div><p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">Designing for interior practices</p><h2 className="mb-7 max-w-3xl font-display text-3xl font-bold leading-tight text-secondary-foreground md:text-4xl lg:text-5xl">How we design your website</h2><p className="mb-7 max-w-2xl text-sm leading-relaxed text-secondary-foreground/90 sm:text-base">The design should make the work feel considered and make the next step feel clear. These choices guide how we shape the pages, imagery and visitor journey.</p><p className="max-w-lg text-sm leading-relaxed text-secondary-foreground/90 sm:text-base">Interior work is visual, but a website needs more than beautiful photographs. We bring the portfolio, studio story and services together so a potential client can move from first impression to a useful understanding of your practice.</p><div className="mt-6"><Link href="/contact" className="group inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.14em] text-secondary-foreground underline decoration-primary decoration-2 underline-offset-8 transition-colors hover:text-primary">Plan the right pages<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></div></div>
          <ol className="grid grid-cols-1 border-l border-t border-secondary-foreground/20 sm:grid-cols-2">{designPrinciples.map(([number, title, copy, slug]) => <li key={number} className="border-b border-r border-secondary-foreground/20"><Link href={websiteFocusPath(slug)} className="group block h-full p-4 transition-colors hover:bg-secondary-foreground/5 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-primary sm:p-5"><div className="flex items-center justify-between"><span className="font-mono text-xs font-semibold text-primary">{number}</span><ArrowUpRight className="h-4 w-4 text-secondary-foreground/45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></div><h3 className="mt-5 font-display text-lg font-semibold">{title}</h3><p className="mt-2 text-xs leading-relaxed text-secondary-foreground/70 sm:text-sm">{copy}</p><span className="mt-4 inline-flex items-center gap-1 font-mono text-[9px] font-bold uppercase tracking-wider text-primary">Explore this guide<ArrowRight className="h-3 w-3" /></span></Link></li>)}</ol>
        </div></div></section>

        <section className="section-padding scroll-reveal"><div className="container-custom">
          <div className="grid items-end gap-5 md:grid-cols-[1fr_auto]"><div><SectionTitle copy="A website can look polished and still leave important questions unanswered. Here is how an interior-focused brief changes the decisions behind the pages.">A general website brief, compared with an interior-focused one</SectionTitle></div><span className="mb-7 hidden font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground md:block">Different priorities · Different experience</span></div>
          <div className="overflow-x-auto border-2 border-foreground shadow-[5px_5px_0_0_var(--foreground)]"><table className="w-full min-w-[680px] border-collapse text-left"><thead><tr className="bg-muted"><th scope="col" className="w-[20%] border-b-2 border-r border-foreground px-4 py-3 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">What matters</th><th scope="col" className="w-[36%] border-b-2 border-r border-foreground px-4 py-3 font-display text-sm font-semibold">A general-purpose website</th><th scope="col" className="w-[44%] border-b-2 border-foreground bg-secondary px-4 py-3 font-display text-sm font-semibold text-secondary-foreground">Intorza’s interior-focused approach</th></tr></thead><tbody>{comparison.map(([topic, general, intorza], i) => <tr key={topic} className={i % 2 ? "bg-muted/25" : "bg-card"}><th scope="row" className="border-b border-r border-border px-4 py-4 align-top font-display text-xs font-semibold sm:text-sm">{topic}</th><td className="border-b border-r border-border px-4 py-4 align-top text-xs leading-relaxed text-muted-foreground sm:text-sm">{general}</td><td className="border-b border-border px-4 py-4 align-top text-xs leading-relaxed sm:text-sm"><span className="mr-2 inline-grid h-5 w-5 translate-y-1 place-items-center bg-primary text-primary-foreground"><Check className="h-3 w-3" aria-hidden="true"/></span>{intorza}</td></tr>)}</tbody></table></div>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"><p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">This is the approach we bring to the brief. The final scope is shaped around your studio, content and goals; search visibility and enquiry volume depend on factors beyond the website alone.</p><ActionLink>See what fits your studio</ActionLink></div>
        </div></section>

        <section id="included" className="section-padding scroll-reveal border-y border-border bg-muted/30"><div className="container-custom">
          <SectionTitle copy="A clear, useful set of pages and features, shaped around how your practice works.">Made for the way design studios work</SectionTitle>
          <FeatureGrid />
          <div className="mt-7 flex flex-col items-start justify-between gap-4 border-t border-border pt-5 sm:flex-row sm:items-center"><p className="max-w-xl text-xs leading-relaxed text-muted-foreground">WhatsApp, forms, maps, social profiles and genuine testimonials can be included where they suit your business.</p><ActionLink>Discuss your requirements</ActionLink></div>
        </div></section>

        <section className="section-padding scroll-reveal"><div className="container-custom"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div><SectionTitle copy="A visitor should be able to understand what you do, see how you do it and know how to begin.">A simple structure. A thoughtful journey.</SectionTitle><p className="text-sm leading-relaxed text-muted-foreground">We shape the navigation around your practice, then build only the pages that help tell its story. Optional service and location pages are included when they reflect real work you offer.</p></div>
          <div className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2">{structure.map(([number, title, copy]) => <article key={number} className="group border-b border-r border-border p-4 transition-colors hover:bg-muted/40 sm:p-5"><div className="flex items-center justify-between"><span className="font-mono text-[10px] font-bold text-primary">{number}</span><ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></div><h3 className="mt-3 font-display text-base font-semibold">{title}</h3><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{copy}</p></article>)}</div>
        </div></div></section>

        <section className="scroll-reveal border-y-2 border-foreground bg-secondary py-12 text-secondary-foreground md:py-16"><div className="container-custom"><div className="grid items-center gap-6 md:grid-cols-[1fr_auto]"><div><h2 className="font-display text-2xl font-bold md:text-3xl">Have a portfolio that deserves a better home?</h2><p className="mt-2 max-w-2xl text-sm leading-relaxed text-secondary-foreground/75">Tell us what you’re building. We’ll help you shape the right pages, project stories and enquiry flow for your studio.</p></div><Link href="/contact" className="btn-hard-light btn-hard-hover whitespace-nowrap">Start a conversation <ArrowRight className="h-4 w-4"/></Link></div></div></section>

        <section className="section-padding scroll-reveal"><div className="container-custom"><div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div><SectionTitle copy="Search works best when useful pages answer real questions. Your website can be the foundation for that work over time.">A search foundation with room to grow</SectionTitle><p className="text-sm leading-relaxed text-muted-foreground">We build clean page structure, metadata and headings into the site. You can expand it with detailed service pages and project stories that reflect your actual work. Search visibility depends on competition, authority, content and continued SEO effort; results aren’t guaranteed.</p></div>
          <div className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-3">{[["Services", "Pages for work you genuinely provide."], ["Projects", "Detailed stories around completed work."], ["Locations", "Useful pages for places you truly serve."]].map(([title, copy], i) => <article key={title} className="border-b border-r border-border p-4 sm:p-5"><span className="font-mono text-[10px] font-bold text-primary">0{i+1}</span><h3 className="mt-3 font-display text-base font-semibold">{title}</h3><p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{copy}</p></article>)}</div>
        </div></div></section>

        <section className="section-padding scroll-reveal bg-muted/30"><div className="container-custom"><SectionTitle copy="A straightforward collaboration, with the important decisions made together along the way.">From first conversation to launch</SectionTitle><ol className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">{process.map(([title, copy], i) => <li key={title} className="border-b border-r border-border bg-card p-4 sm:p-5"><span className="font-mono text-2xl font-semibold text-primary">0{i + 1}</span><h3 className="mt-3 font-display text-base font-semibold">{title}</h3><p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{copy}</p></li>)}</ol></div></section>

        <section className="section-padding scroll-reveal"><div className="container-custom max-w-4xl"><SectionTitle>Website development for interior designers — FAQs</SectionTitle><div className="divide-y divide-border border-y border-border">{faqs.map(({ q, a }) => <details key={q} className="group py-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-sm font-semibold marker:hidden sm:text-base">{q}<span className="text-xl font-normal text-primary transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl pr-8 text-sm leading-relaxed text-muted-foreground">{a}</p></details>)}</div></div></section>

        <section className="scroll-reveal relative overflow-hidden border-t-2 border-foreground bg-primary py-14 md:py-20"><div className="container-custom"><div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]"><div className="max-w-3xl"><h2 className="font-display text-3xl font-bold leading-tight text-primary-foreground md:text-4xl lg:text-5xl">Give your best work a place to be discovered.</h2><p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/90 sm:text-base">Let’s create a clear, distinctive website for your interior design or architecture practice, with your projects at the centre and a better path to the next enquiry.</p><p className="mt-4 text-xs text-primary-foreground/75">For interior designers, studios, architects, firms and contractors.</p></div><div className="flex flex-col items-start gap-4 sm:flex-row lg:flex-col"><Link href="/contact" className="btn-hard-light btn-hard-hover whitespace-nowrap">Plan Your Website <ArrowRight className="h-4 w-4"/></Link><Link href="/contact" className="font-display text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground underline underline-offset-4">Talk to Intorza</Link></div></div></div></section>
      </main>
      <Footer />
    </div>
  );
}
