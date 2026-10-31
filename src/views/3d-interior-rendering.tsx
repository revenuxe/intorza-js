import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ClipboardList,
  Compass,
  FileImage,
  Home,
  Layers3,
  Lightbulb,
  MessageCircle,
  Palette,
  Ruler,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { renderingServices, renderingServicePath } from "@/data/3d-rendering-services";
import { renderingInputGuides } from "@/data/3d-rendering-input-guides";
import Header from "@/components/Header";
import { ServiceBanner } from "@/components/website/ServiceSections";
import Footer from "@/components/Footer";
import { SITE_PHONE_E164 } from "@/lib/site";
import { threeDRenderingAudiencePath } from "@/data/3d-rendering-audience-pages";

const audiences = [
  ["Interior designers", "Turn layouts, concepts and material ideas into 3D visuals for client presentations.", Palette, "interior-designers"],
  ["Interior design studios", "Extend your studio’s visualization capacity when project work needs extra support.", Users, "interior-design-studios"],
  ["Architects", "Present architectural concepts and interior spaces clearly for project discussions.", Compass, "architects"],
  ["Architecture firms", "Add rendering support for residential, commercial and other suitable projects.", Building2, "architecture-firms"],
  ["Interior contractors", "Help clients understand proposed spaces before execution begins.", Workflow, "interior-contractors"],
  ["Interior companies", "Use an external visualization partner to support projects as your business grows.", Layers3, "interior-companies"],
] as const;

const services = [
  ["Living room rendering", "Explore furniture layouts, TV units, wall treatments, ceilings, lighting and material choices.", Home],
  ["Bedroom visualization", "Present wardrobes, beds, headboards, study areas, lighting, colors and finishes.", Sparkles],
  ["Kitchen rendering", "Show cabinetry, countertops, finishes, storage and modular layouts together.", Layers3],
  ["Dining area visualization", "Bring dining layouts, furniture, lighting and adjacent spaces into view.", Lightbulb],
  ["Office & commercial interiors", "Visualize offices, retail spaces, studios and other business interiors.", Building2],
  ["Full home visualization", "Develop a consistent visual direction across multiple rooms in a residence.", Home],
  ["Photorealistic rendering", "Create realistic views of the intended materials, lighting and atmosphere where the agreed scope supports it.", Sparkles],
  ["Design concept visualization", "Turn early concepts and references into visuals for design discussions.", Compass],
] as const;

const rooms = [
  ["Living room", "TV units, seating, ceilings, lighting and wall treatments.", "bg-[#d9c9b4]", "living-room-rendering"],
  ["Master bedroom", "Wardrobes, beds, dressing areas, headboards and finishes.", "bg-[#c6c9bb]", "master-bedroom-rendering"],
  ["Kids bedroom", "Storage, study areas, beds, colors and space planning.", "bg-[#e3d3c1]", "kids-bedroom-rendering"],
  ["Kitchen", "Cabinetry, countertops, finishes and modular layouts.", "bg-[#bdc6bb]", "kitchen-rendering"],
  ["Dining area", "Furniture, lighting, storage and connecting spaces.", "bg-[#d3c5b4]", "dining-area-visualization"],
  ["Foyer", "Entry units, shoe storage, partitions, mirrors and details.", "bg-[#c6b7a2]", "foyer-rendering"],
  ["Home office", "Workstations, shelves, storage and functional layouts.", "bg-[#b9c1b9]", "home-office-rendering"],
  ["Commercial spaces", "Office, retail and other business interior concepts.", "bg-[#c5c8c5]", "office-commercial-interiors"],
] as const;

const benefits = [
  ["Communicate your design", "Show the intended look and feel more clearly during client discussions.", MessageCircle],
  ["Present materials & finishes", "Help clients see how selected colors, finishes and furniture work together.", Palette],
  ["Review before execution", "Use visualizations as one part of design review before physical work begins.", Check],
  ["Polish your presentation", "Add professional visual material to a project presentation or proposal.", FileImage],
] as const;

const partnership = [
  ["Built for interior businesses", "Visualization support shaped around the needs of interior and architecture professionals.", Building2],
  ["Behind-the-scenes support", "Work with Intorza as an extended visualization resource while your client relationship stays yours.", Users],
  ["Flexible project scope", "Discuss support for an individual room, selected spaces or a larger project.", Layers3],
  ["Part of the Intorza ecosystem", "Explore visualization alongside Intorza’s quotation, project and business tools for interior professionals.", Workflow],
] as const;

const process = [
  ["Share your project", "Send the available floor plan, drawings, project information and requirements."],
  ["Share your design direction", "Provide relevant references, materials, colors, furniture preferences and notes."],
  ["Develop the visualization", "We use the agreed inputs to prepare the required interior views."],
  ["Review", "Review the visualization and provide consolidated feedback within the agreed scope."],
  ["Refine", "We incorporate the revisions agreed for the project."],
  ["Final delivery", "Completed render files are prepared in the agreed format."],
] as const;

const useCases = [
  ["Client presentations", "Communicate the proposed design during a client discussion."],
  ["Design reviews", "Give clients a clearer visual reference when discussing direction."],
  ["Interior proposals", "Add visual material to a project presentation or proposal."],
  ["Project discussions", "Discuss layouts, finishes and design decisions with clients or teams."],
  ["Portfolio presentation", "Where the client permits, completed visuals may support your professional portfolio."],
  ["Additional design capacity", "Use external visualization support when the in-house team is handling multiple projects."],
] as const;



const faqs = [
  { q: "What is 3D interior rendering?", a: "3D interior rendering creates visual representations of a space using drawings, layouts, design information and selected materials or references." },
  { q: "Who are Intorza’s 3D rendering services for?", a: "The service is primarily for interior designers, design studios, architects, architecture firms, interior contractors and interior businesses that need visualization support." },
  { q: "What do I need to provide for a 3D interior render?", a: "Depending on the project, useful inputs can include floor plans, layouts, dimensions, drawings, references, material selections, colors, furniture references and design requirements." },
  { q: "Can you create 3D renders from a floor plan?", a: "A floor plan can be an important starting point. Additional dimensions, design information or references may be needed depending on the project and expected output." },
  { q: "Do you provide 3D rendering for architects?", a: "Yes. The service can support architects and architecture firms that need interior or architectural visualization for suitable projects." },
  { q: "Can I outsource my interior studio’s 3D work to Intorza?", a: "Intorza is intended to support interior businesses as a service partner. The scope can be discussed based on your project requirements." },
  { q: "Can you render multiple rooms?", a: "Project scope can include an individual room or multiple interior spaces, depending on the requirements." },
  { q: "Do you provide photorealistic interior rendering?", a: "Photorealistic visualization can be included when it is part of the agreed scope and the supplied project information supports the required level of detail." },
  { q: "How long does a 3D rendering project take?", a: "Timing depends on project size, number of spaces, level of detail, available inputs and revision requirements. We confirm timing after reviewing the project." },
  { q: "How much does 3D interior rendering cost?", a: "Pricing depends on the number of spaces, complexity, required views, level of detail and overall scope. Share your requirements for a project-specific quote." },
];

function SectionTitle({ children, copy }: { children: React.ReactNode; copy?: string }) {
  return <div className="mb-7 max-w-3xl"><h2 className="font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">{children}</h2>{copy && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{copy}</p>}</div>;
}

function RenderConcept() {
  return (
    <div className="relative mx-auto max-w-2xl lg:ml-auto">
      <div aria-hidden="true" className="absolute -bottom-3 -right-3 h-full w-full border-2 border-foreground" />
      <div className="relative overflow-hidden border-2 border-foreground bg-card shadow-[5px_5px_0px_0px_var(--foreground)]">
        <div className="flex items-center gap-3 border-b-2 border-foreground bg-muted px-4 py-3"><span className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-destructive"/><i className="h-2 w-2 rounded-full bg-intorza-amber"/><i className="h-2 w-2 rounded-full bg-intorza-green"/></span><span className="mx-auto font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">3D interior visualization / concept</span><ArrowUpRight className="h-4 w-4 text-muted-foreground"/></div>
        <div className="relative overflow-hidden bg-[#dfd5c5]">
          <div className="relative z-10 flex items-center justify-between border-b border-[#24384f]/15 bg-[#f3eee5] px-4 py-3 sm:px-6"><span className="font-display text-[11px] font-bold tracking-[0.14em] text-[#24384f]">SPACE / STUDY 01</span><span className="font-mono text-[8px] uppercase tracking-wider text-[#24384f]/70">Living room concept</span></div>
          <div className="relative aspect-[1.2] overflow-hidden bg-[#c9b99f] sm:aspect-[1.35]" role="img" aria-label="Illustrative 3D interior visualization concept of a warm contemporary living room">
            <svg viewBox="0 0 720 500" className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
              <defs><linearGradient id="renderWall" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e7dcc8"/><stop offset="1" stopColor="#b9a78e"/></linearGradient><linearGradient id="renderFloor" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#c0ad91"/><stop offset="1" stopColor="#887b68"/></linearGradient><linearGradient id="renderGlass" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#9ca998"/><stop offset="1" stopColor="#63786e"/></linearGradient><filter id="renderShadow" x="-20%" y="-30%" width="140%" height="180%"><feGaussianBlur stdDeviation="13"/></filter></defs>
              <path fill="url(#renderWall)" d="M0 0h720v500H0z"/><path fill="#f5eee2" fillOpacity=".35" d="M0 0h720v22H0z"/>
              <path fill="#eee7dc" d="M60 52a12 12 0 0 1 12-12h225a12 12 0 0 1 12 12v292H60V52Z"/><path fill="url(#renderGlass)" d="M78 61a7 7 0 0 1 7-7h198a7 7 0 0 1 7 7v263H78V61Z"/><path fill="#cad1c3" fillOpacity=".55" d="M84 235c40-53 83-63 119-32 36 30 57 15 87-18v103H84V235Z"/><path stroke="#f3ecdf" strokeWidth="10" d="M183 54v270m101-140H78"/>
              <path fill="url(#renderFloor)" d="M0 354c210-18 463-15 720 5v141H0V354Z"/><ellipse cx="392" cy="420" rx="246" ry="36" fill="#35342f" fillOpacity=".25" filter="url(#renderShadow)"/>
              <path fill="#777267" d="M326 251c0-15 12-27 27-27h219c15 0 27 12 27 27v133H326V251Z"/><path fill="#918877" d="M301 313c0-15 12-27 27-27h258c15 0 27 12 27 27v77H301v-77Z"/><path fill="#d5c7b1" d="M367 253c0-10 8-18 18-18h78c10 0 18 8 18 18v70h-114v-70Z"/><path fill="#eee6d8" d="M313 386h324v15H313z"/><path fill="#5f5c53" d="M336 398h13v45h-13zm278 0h13v45h-13z"/>
              <path fill="#768575" d="M623 294c12-64 35-101 64-120-4 52-26 91-64 120Zm-14-2c-27-52-30-96-14-128 22 45 29 83 14 128Zm17 18c18-48 49-79 82-87-20 41-47 69-82 87Z"/><path fill="#867b69" d="M622 311h61l-8 60h-45z"/><path fill="#e1d4c2" d="M615 370h76v11h-76z"/>
              <path fill="#a9563c" d="M105 326c0-24 19-43 43-43h43v75h-86v-32Z"/><path fill="#f0e6d8" d="M116 330c0-17 14-31 31-31h27v56h-58v-25Z"/><path fill="#d6c8b4" d="M180 380h112v10H180z"/><path fill="#e8dece" d="M192 390h9v40h-9zm84 0h9v40h-9z"/>
              <path fill="#28394d" fillOpacity=".06" d="M0 0h720v500H0z"/>
            </svg>
            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#172b41]/90 via-[#172b41]/35 to-transparent px-5 pb-5 pt-16 sm:px-7 sm:pb-7"><p className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#efb18e]">Illustrative concept / not a client project</p><h2 className="mt-2 max-w-sm font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">A space, seen before it takes shape.</h2></div>
          </div>
          <div className="flex items-center justify-between border-t border-[#243951]/15 bg-[#f3eee5] px-4 py-2.5 sm:px-6"><span className="font-mono text-[8px] uppercase tracking-[0.13em] text-[#24384f]/60">Plan / materials / light / review</span><span className="flex items-center gap-1 font-mono text-[8px] font-semibold text-[#24384f]">01 <span className="mx-1 h-px w-5 bg-[#a34d36]"/> 3D</span></div>
        </div>
      </div>
    </div>
  );
}

function FloorPlanFlow() {
  const steps = [["Floor plan", "Drawings + dimensions", Ruler], ["Design brief", "Materials + references", ClipboardList], ["3D views", "Room + perspective", Sparkles], ["Review", "Consolidated feedback", MessageCircle], ["Final render", "Agreed file delivery", FileImage]] as const;
  return <ol className="grid gap-2 sm:grid-cols-5">{steps.map(([title, copy, Icon], index) => <li key={title} className="relative border-2 border-foreground bg-card p-3 shadow-[3px_3px_0_0_var(--foreground)] sm:p-4"><div className="flex items-center justify-between"><span className="font-mono text-[9px] font-bold text-primary">0{index + 1}</span><Icon className="h-4 w-4 text-primary" aria-hidden="true"/></div><h3 className="mt-4 font-display text-sm font-semibold">{title}</h3><p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">{copy}</p>{index < steps.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 bg-background text-primary sm:block" aria-hidden="true"/>}{index < steps.length - 1 && <ArrowDown className="mx-auto mt-2 h-4 w-4 text-primary sm:hidden" aria-hidden="true"/>}</li>)}</ol>;
}

export default function ThreeDInteriorRenderingPage() {
  const projectHref = "/contact?subject=3D%20Interior%20Rendering%20Project";
  const whatsappHref = `https://wa.me/${SITE_PHONE_E164.replace("+", "")}?text=${encodeURIComponent("Hi Intorza, I would like to discuss a 3D interior rendering project.")}`;
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="overflow-hidden scroll-reveal border-b-2 border-foreground bg-background pb-14 pt-28 md:pb-20 md:pt-36">
          <div className="container-custom"><div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-16">
            <div className="min-w-0 lg:col-span-5"><h1 className="font-display text-3xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">3D Interior Rendering Services for <span className="text-primary">Interior Designers &amp; Architects</span></h1><p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg">Turn floor plans, concepts and design ideas into professional 3D interior visualizations. Intorza helps interior designers, architects and interior firms present spaces clearly before execution begins.</p><div className="mt-6 flex flex-col gap-3 sm:mt-9"><Link href={projectHref} className="btn-hard btn-hard-hover w-full justify-center">Start a 3D Project <ArrowRight className="h-4 w-4"/></Link><a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-hard-ghost btn-hard-hover w-full justify-center"><Image src="/whatsapp-svgrepo-com.svg" alt="" width={20} height={20} className="h-5 w-5"/>WhatsApp Intorza</a></div><p className="mt-6 flex items-center gap-2 text-xs font-semibold text-muted-foreground"><Check className="h-4 w-4 text-green-700"/>Professional visualization support for interior &amp; architecture businesses.</p></div>
            <div className="min-w-0 lg:col-span-7 lg:pl-3"><RenderConcept/></div>
          </div></div>
        </section>

        <section className="section-padding scroll-reveal bg-muted/30"><div className="container-custom"><SectionTitle copy="Great design ideas are not always easy to communicate through drawings alone. Intorza helps interior and architecture professionals turn concepts into clear visualizations for client conversations before execution begins.">3D Visualization Built for Interior &amp; Architecture Professionals</SectionTitle><div className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">{audiences.map(([title, copy, Icon, slug])=><Link key={title} href={threeDRenderingAudiencePath(slug)} className="group border-b border-r border-border bg-card p-4 transition-colors hover:bg-background focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-primary sm:p-5"><article><div className="mb-3 flex items-center justify-between"><Icon className="h-4 w-4 text-primary" aria-hidden="true"/><ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true"/></div><h3 className="font-display text-base font-semibold">{title}</h3><p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{copy}</p><span className="mt-4 inline-flex items-center gap-1 font-mono text-[9px] font-bold uppercase tracking-wider text-primary">Explore this page <ArrowRight className="h-3 w-3"/></span></article></Link>)}</div></div></section>

        <section id="rendering-services" className="section-padding scroll-reveal"><div className="container-custom"><SectionTitle copy="From an individual room to a coordinated set of spaces, the visualization scope is shaped around your design direction and project requirements.">3D Interior Rendering Services for Your Projects</SectionTitle><div className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">{services.map(([title, copy, Icon], index)=><Link href={renderingServicePath(renderingServices[index].slug)} key={title} className="group border-b border-r border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-background sm:p-5"><div className="mb-3 grid h-9 w-9 place-items-center border border-border text-primary transition-colors group-hover:border-primary"><Icon className="h-4 w-4" aria-hidden="true"/></div><h3 className="font-display text-base font-semibold">{title}</h3><p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{copy}</p><span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">Explore service <ArrowRight className="h-3 w-3"/></span></Link>)}</div></div></section>

        <section className="section-padding scroll-reveal border-y border-border bg-muted/30"><div className="container-custom"><div className="grid items-center gap-9 lg:grid-cols-[.9fr_1.1fr] lg:gap-14"><div><SectionTitle copy="Already have a floor plan or interior layout? Share your available drawings, requirements and design references. The visualization workflow turns those inputs into views for client presentations, design discussions and project planning.">Turn Your Floor Plan Into a 3D Interior Visualization</SectionTitle><p className="max-w-xl text-sm leading-relaxed text-muted-foreground">The exact inputs required can vary depending on the project and level of visualization requested. We review the brief before confirming the scope.</p><div className="mt-6"><Link href={projectHref} className="btn-hard btn-hard-hover">Start Your 3D Project <ArrowRight className="h-4 w-4"/></Link></div></div><div><FloorPlanFlow/></div></div></div></section>

        <section className="section-padding scroll-reveal"><div className="container-custom"><SectionTitle copy="Plan the rooms and spaces that matter to the project. The right level of detail depends on the drawings, references and agreed scope.">Visualize Every Important Interior Space</SectionTitle><div className="grid grid-cols-2 border-l border-t border-border md:grid-cols-4">{rooms.map(([title, copy, color, slug], index)=><Link href={renderingServicePath(slug)} key={title} className="group border-b border-r border-border bg-card focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-primary"><div className={`relative aspect-[1.45] overflow-hidden ${color}`}><span className="absolute right-2 top-2 z-10 grid h-8 w-8 place-items-center border border-foreground/15 bg-background/95 text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><ArrowUpRight className="h-4 w-4" aria-hidden="true"/></span><div className="absolute inset-[12%] border border-white/70"><span className="absolute inset-y-0 left-1/2 w-px bg-white/55"/><span className="absolute inset-x-0 top-1/2 h-px bg-white/55"/></div><span className="absolute bottom-2 left-2 bg-[#1c3046]/90 px-2 py-1 font-mono text-[7px] uppercase tracking-wider text-white">Space / 0{index+1}</span></div><div className="p-3 sm:p-4"><h3 className="font-display text-sm font-semibold sm:text-base">{title}</h3><p className="mt-1 text-[10px] leading-relaxed text-muted-foreground sm:text-xs">{copy}</p></div></Link>)}</div><p className="mt-4 max-w-3xl text-xs leading-relaxed text-muted-foreground">These are illustrative space categories, not examples of completed Intorza client projects.</p></div></section>

        <section className="section-padding scroll-reveal border-y border-border bg-secondary text-secondary-foreground"><div className="container-custom grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14"><div><SectionTitle copy="The more clearly design requirements are communicated, the easier it is to prepare a visualization that reflects the intended space.">Start With the Project Information You Already Have</SectionTitle><p className="max-w-lg text-sm leading-relaxed text-secondary-foreground/75">Not every project needs every item. We can determine the appropriate inputs after reviewing the project.</p></div><ul className="grid grid-cols-1 border-l border-t border-secondary-foreground/20 sm:grid-cols-2">{renderingInputGuides.map((item,index)=><li key={item.slug} className="border-b border-r border-secondary-foreground/20"><Link href={renderingServicePath(item.slug)} className="group flex h-full items-start gap-3 p-4 text-sm transition-colors hover:bg-secondary-foreground/10 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-primary"><span className="font-mono text-[9px] font-bold text-primary">0{index+1}</span><span className="flex-1">{item.cardLabel}</span><ArrowUpRight className="h-4 w-4 shrink-0 text-secondary-foreground/80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true"/></Link></li>)}</ul></div></section>

        <section className="section-padding scroll-reveal"><div className="container-custom"><SectionTitle copy="Plans and drawings communicate technical information. A 3D view can help clients see the proposed design during discussion and review.">Help Clients See the Design Before Execution</SectionTitle><div className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">{benefits.map(([title,copy,Icon])=><article key={title} className="group border-b border-r border-border bg-card p-4 transition-colors hover:bg-muted/30 sm:p-5"><div className="mb-4 grid h-9 w-9 place-items-center border border-border text-primary"><Icon className="h-4 w-4" aria-hidden="true"/></div><h3 className="font-display text-base font-semibold">{title}</h3><p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{copy}</p></article>)}</div><p className="mt-4 text-xs text-muted-foreground">Visualizations support design discussion; they do not guarantee client approval or exact construction outcomes.</p></div></section>

        <section className="section-padding scroll-reveal border-y border-border bg-muted/30"><div className="container-custom"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14"><div><SectionTitle copy="Your client relationship stays yours. Intorza supports interior businesses behind the scenes while you stay focused on your clients, projects and execution.">Your 3D Visualization Partner, Not Your Competitor</SectionTitle><Link href="/services/website-development" className="group inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.14em] underline decoration-primary decoration-2 underline-offset-8">Explore website development for interior businesses <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/></Link></div><div className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2">{partnership.map(([title,copy,Icon])=><article key={title} className="border-b border-r border-border bg-card p-4 sm:p-5"><div className="mb-3 grid h-8 w-8 place-items-center border border-border text-primary"><Icon className="h-4 w-4" aria-hidden="true"/></div><h3 className="font-display text-base font-semibold">{title}</h3><p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{copy}</p></article>)}</div></div></div></section>

        <section className="section-padding scroll-reveal"><div className="container-custom"><SectionTitle copy="A straightforward collaboration, with the project scope and review steps agreed together.">How Our 3D Interior Rendering Process Works</SectionTitle><ol className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">{process.map(([title,copy],index)=><li key={title} className="border-b border-r border-border bg-card p-4 sm:p-5"><span className="font-mono text-2xl font-semibold text-primary">0{index+1}</span><h3 className="mt-3 font-display text-base font-semibold">{title}</h3><p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{copy}</p></li>)}</ol></div></section>

        <section className="section-padding scroll-reveal border-y border-border bg-muted/30"><div className="container-custom"><SectionTitle copy="Use rendered views as part of the work you already do with clients and project teams.">Built to Support Your Interior Design Workflow</SectionTitle><div className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">{useCases.map(([title,copy],index)=><article key={title} className="border-b border-r border-border bg-card p-4 sm:p-5"><span className="font-mono text-[10px] font-bold text-primary">0{index+1}</span><h3 className="mt-3 font-display text-base font-semibold">{title}</h3><p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{copy}</p></article>)}</div></div></section>

        <section className="section-padding scroll-reveal"><div className="container-custom"><SectionTitle copy="Choose visualization support that fits the brief, available project information and intended use.">More Than Just a 3D Image</SectionTitle><div className="overflow-x-auto border-2 border-foreground shadow-[5px_5px_0_0_var(--foreground)]"><table className="w-full min-w-[640px] border-collapse text-left"><thead><tr className="bg-muted"><th scope="col" className="w-[22%] border-b-2 border-r border-foreground px-4 py-3 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">Project point</th><th scope="col" className="w-[39%] border-b-2 border-r border-foreground px-4 py-3 font-display text-sm font-semibold">A one-off render request</th><th scope="col" className="w-[39%] border-b-2 border-foreground bg-secondary px-4 py-3 font-display text-sm font-semibold text-secondary-foreground">Intorza visualization support</th></tr></thead><tbody>{[["Project start", "An image request with limited context", "Available plan, requirements and design references"], ["Presentation", "A standalone image file", "Views prepared for client presentations and design discussions"], ["Review", "Feedback expectations may be unclear", "Consolidated feedback within the agreed project scope"], ["Delivery", "Output details need to be confirmed", "Files prepared in the format agreed for the project"]].map(([topic,general,intorza],index)=><tr key={topic} className={index%2?"bg-muted/25":"bg-card"}><th scope="row" className="border-b border-r border-border px-4 py-4 align-top font-display text-xs font-semibold sm:text-sm">{topic}</th><td className="border-b border-r border-border px-4 py-4 align-top text-xs leading-relaxed text-muted-foreground sm:text-sm">{general}</td><td className="border-b border-border px-4 py-4 align-top text-xs leading-relaxed sm:text-sm"><Check className="mr-2 inline h-4 w-4 text-primary" aria-hidden="true"/>{intorza}</td></tr>)}</tbody></table></div></div></section>

        <ServiceBanner title="Want to present connected spaces in motion?" copy="Extend selected interior renders into a walkthrough or 360° visualization when the project files and presentation scope support it." href="/services/3d-walkthrough-360-visualization" label="Explore 3D Walkthrough & 360°" />
        <section className="scroll-reveal border-y-2 border-foreground bg-secondary py-10 text-secondary-foreground md:py-12"><div className="container-custom grid items-center gap-5 md:grid-cols-[1fr_auto]"><div><h2 className="font-display text-2xl font-bold md:text-3xl">Need a website to showcase your projects too?</h2><p className="mt-2 max-w-2xl text-sm leading-relaxed text-secondary-foreground/75">Intorza also builds websites for interior designers, architects and interior businesses, with project portfolios and services at the center.</p></div><Link href="/services/website-development" className="btn-hard-light btn-hard-hover whitespace-nowrap">Explore Website Development <ArrowRight className="h-4 w-4"/></Link></div></section>

        <section className="section-padding scroll-reveal"><div className="container-custom max-w-4xl"><SectionTitle>3D Interior Rendering Services — FAQs</SectionTitle><div className="divide-y divide-border border-y border-border">{faqs.map(({q,a})=><details key={q} className="group py-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-sm font-semibold marker:hidden sm:text-base">{q}<span className="text-xl font-normal text-primary transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl pr-8 text-sm leading-relaxed text-muted-foreground">{a}</p></details>)}</div></div></section>

        <section className="scroll-reveal relative overflow-hidden border-t-2 border-foreground bg-primary py-14 md:py-20"><div className="container-custom"><div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]"><div className="max-w-3xl"><h2 className="font-display text-3xl font-bold leading-tight text-primary-foreground md:text-4xl lg:text-5xl">Turn Your Interior Ideas Into 3D Visuals</h2><p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/90 sm:text-base">Share your project, floor plan and design direction with Intorza for visualization support built for interior and architecture businesses.</p><p className="mt-4 text-xs text-primary-foreground/75">For interior designers, architects, interior studios, architecture firms and interior contractors.</p></div><div className="flex flex-col items-start gap-4 sm:flex-row lg:flex-col"><Link href={projectHref} className="btn-hard-light btn-hard-hover whitespace-nowrap">Start a 3D Project <ArrowRight className="h-4 w-4"/></Link><a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="font-display text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground underline underline-offset-4">Talk to Intorza</a></div></div></div></section>
        <ServiceBanner title="Need working drawings for your design?" copy="Share your approved design and available measurements to discuss layouts, elevations and selected interior details for project coordination." href="/services/2d-interior-working-drawings" label="Explore Working Drawings"/>
      </main>
      <Footer />
    </div>
  );
}

export { faqs as threeDInteriorRenderingFaqs };
