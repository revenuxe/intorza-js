import type { WebsiteDevelopmentPageData } from "@/data/website-audience-pages";
import { ArrowRight, ArrowUpRight, Check, CircleDot } from "lucide-react";

function DesignerEditorial() {
  return (
    <div className="overflow-hidden border-2 border-foreground bg-[#eee9df] shadow-[7px_7px_0_0_var(--foreground)]">
      <div className="flex items-center justify-between border-b border-[#23354d]/20 px-4 py-3"><span className="font-display text-xs font-bold tracking-[0.16em] text-[#23354d]">STUDIO / SELECTED WORK</span><span className="font-mono text-[8px] uppercase tracking-widest text-[#23354d]/65">Portfolio concept</span></div>
      <div className="grid min-h-[350px] grid-cols-[1.1fr_.9fr]">
        <div className="relative overflow-hidden bg-[#bdad96]">
          <svg viewBox="0 0 420 520" className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
            <defs><linearGradient id="roomWall" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e7dcc9"/><stop offset="1" stopColor="#b9a990"/></linearGradient><linearGradient id="roomFloor" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#a49783"/><stop offset="1" stopColor="#6f6c61"/></linearGradient></defs>
            <path fill="url(#roomWall)" d="M0 0h420v520H0z"/><path fill="#748174" d="M42 55h154v248H42z"/><path stroke="#f2eadc" strokeWidth="13" d="M119 55v248M42 179h154"/><path fill="#d6c6ad" d="M0 344 420 272v248H0z"/><path fill="url(#roomFloor)" d="M0 407 420 310v210H0z"/><path fill="#656257" d="M206 309h151v125H206z"/><path fill="#857d70" d="M190 355h184v104H190z"/><path fill="#dfd4c3" d="M234 302h66v62h-66z"/><path fill="#a05b43" d="M46 346h60v68H46z"/><path fill="#73806e" d="M340 260c10-53 28-82 50-101-2 39-20 76-50 101Zm-3 15c-25-41-28-75-16-101 20 35 28 66 16 101Z"/><path fill="#887b69" d="M337 273h48l-7 53h-35z"/>
          </svg>
          <div className="absolute bottom-3 left-3 bg-[#f3ede3]/95 px-3 py-2"><span className="block font-mono text-[8px] uppercase tracking-wider text-[#23354d]/55">Project selection</span><span className="font-display text-xs font-semibold text-[#23354d]">One strong first impression</span></div>
        </div>
        <div className="flex flex-col justify-between p-4 text-[#23354d] sm:p-6"><div><p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#a94e36]">Residential / Sample layout</p><h2 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">A quieter way to tell the story.</h2><p className="mt-3 text-xs leading-relaxed text-[#23354d]/70">A deliberate selection gives each space room to speak.</p></div><div className="mt-6 space-y-2 border-t border-[#23354d]/20 pt-4"><div className="flex items-center justify-between text-[10px]"><span>Selected projects</span><span className="font-mono">04</span></div><div className="h-1.5 bg-[#23354d]/10"><div className="h-full w-3/4 bg-[#a94e36]" /></div><div className="flex items-center justify-between text-[9px] text-[#23354d]/60"><span>Home</span><span>Work</span><span>Enquire</span></div></div></div>
      </div>
      <div className="grid grid-cols-4 border-t border-[#23354d]/20">{["Selected", "Residential", "Hospitality", "Studio"].map((x, i) => <div key={x} className={`border-r border-[#23354d]/15 px-2 py-2 font-mono text-center text-[7px] uppercase tracking-wider last:border-r-0 ${i === 0 ? "bg-[#23354d] text-white" : "text-[#23354d]/65"}`}>{x}</div>)}</div>
    </div>
  );
}

function StudioGrid() {
  return (
    <div className="overflow-hidden border-2 border-foreground bg-[#f5f2ed] shadow-[7px_7px_0_0_var(--foreground)]">
      <div className="flex items-center justify-between bg-[#263c58] px-5 py-4 text-white"><span className="font-display text-sm font-bold tracking-[0.14em]">COMMON / DESIGN STUDIO</span><span className="font-mono text-[8px] uppercase tracking-widest text-white/60">People + work</span></div>
      <div className="grid gap-4 p-4 sm:grid-cols-[1.15fr_.85fr] sm:p-5">
        <div className="grid min-h-[245px] grid-cols-5 grid-rows-4 gap-2">
          <div className="relative col-span-3 row-span-3 overflow-hidden bg-[#b8ab96]"><div className="absolute inset-x-[12%] top-[12%] h-[68%] border-[8px] border-[#efe7d9] bg-[#788276]"><span className="absolute inset-y-0 left-1/2 w-1.5 bg-[#e6dccb]"/><span className="absolute inset-x-0 top-1/2 h-1.5 bg-[#e6dccb]"/></div><span className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 font-mono text-[7px] uppercase text-[#263c58]">Interiors / 01</span></div>
          <div className="col-span-2 row-span-2 bg-[#d6c7b4] p-3"><span className="font-mono text-[8px] uppercase tracking-wider text-[#263c58]/60">Approach</span><p className="mt-2 font-display text-xs font-semibold text-[#263c58]">One studio. Distinct spaces.</p></div>
          <div className="col-span-2 row-span-2 bg-[#718070] p-3"><span className="font-mono text-[8px] uppercase tracking-wider text-white/60">Workplace / 02</span><div className="mt-3 h-12 border border-white/35"/></div>
          <div className="col-span-3 row-span-1 flex items-center justify-between bg-[#e8e2d8] px-3"><span className="font-mono text-[8px] uppercase tracking-wider text-[#263c58]/65">Hospitality / 03</span><ArrowUpRight className="h-3.5 w-3.5 text-[#a94e36]"/></div>
        </div>
        <div className="flex flex-col justify-between border-l border-[#263c58]/15 pl-4 sm:pl-5"><div><p className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#a94e36]">A shared studio voice</p><h2 className="mt-3 font-display text-2xl font-bold leading-tight text-[#263c58]">Different disciplines. A connected team.</h2><p className="mt-3 text-xs leading-relaxed text-[#263c58]/70">Make room for the people and project roles behind the portfolio.</p></div><div className="mt-5 border-t border-[#263c58]/15 pt-4"><span className="font-mono text-[8px] uppercase tracking-wider text-[#263c58]/55">Studio roles</span><div className="mt-2 flex flex-wrap gap-1.5">{["Design", "Planning", "Delivery"].map((x) => <span key={x} className="border border-[#263c58]/20 px-2 py-1 font-mono text-[8px] text-[#263c58]">{x}</span>)}</div></div></div>
      </div>
      <div className="border-t border-[#263c58]/15 px-5 py-3 font-mono text-[8px] uppercase tracking-widest text-[#263c58]/60">Portfolio / People / Practice</div>
    </div>
  );
}

function ArchitectureDrawing() {
  return (
    <div className="overflow-hidden border-2 border-foreground bg-[#14243b] text-white shadow-[7px_7px_0_0_var(--foreground)]">
      <div className="flex items-center justify-between border-b border-white/15 px-5 py-3"><span className="font-display text-sm font-bold tracking-[0.14em]">FIELD / ARCHITECTS</span><span className="font-mono text-[8px] uppercase tracking-widest text-white/55">Project record / concept</span></div>
      <div className="grid sm:grid-cols-[1.2fr_.8fr]">
        <div className="relative min-h-[290px] overflow-hidden bg-[#1b304a] p-4 sm:p-6"><div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)", backgroundSize: "22px 22px" }} /><svg viewBox="0 0 500 340" className="relative z-10 h-full min-h-[250px] w-full" aria-label="Abstract architectural floor plan illustration" role="img"><g fill="none" stroke="#e7dfd1" strokeWidth="5"><path d="M58 48h342v235H58zM58 158h128v125M186 48v110h214M186 158h112v125M298 158v67h102M58 218h72v65"/><path d="M186 96h74M348 158v67M130 218v65" stroke="#c36a49" strokeWidth="2"/><path d="M46 38h12m-12 0v12m354-12h12m0 0v12M46 293h12m-12 0v-12m354 12h12m0 0v-12" strokeWidth="2"/></g><g fill="#e7dfd1" fontFamily="monospace" fontSize="10"><text x="68" y="142">ENTRY</text><text x="220" y="79">LIVING</text><text x="313" y="249">COURT</text><text x="203" y="179">CORE</text></g></svg><span className="absolute bottom-3 left-4 font-mono text-[8px] uppercase tracking-[0.15em] text-white/55">Plan / not to scale</span></div>
        <div className="flex flex-col justify-between bg-[#f2eee7] p-5 text-[#14243b] sm:p-6"><div><span className="font-mono text-[8px] uppercase tracking-widest text-[#a94e36]">Project context</span><h2 className="mt-3 font-display text-2xl font-bold leading-tight">Show the thinking behind the built work.</h2><p className="mt-3 text-xs leading-relaxed text-[#14243b]/70">Pair drawings and images with clear project status, scope and practice contribution.</p></div><div className="mt-6 space-y-2 border-t border-[#14243b]/15 pt-4">{[["Status", "Completed / Proposed"], ["Role", "Practice contribution"], ["Record", "Brief + collaborators"]].map(([a, b]) => <div key={a} className="flex justify-between gap-2 text-[9px]"><span className="text-[#14243b]/55">{a}</span><span className="text-right font-semibold">{b}</span></div>)}</div></div>
      </div>
    </div>
  );
}

function ContractorSequence() {
  const steps = [["01", "Survey", "Space + requirements"], ["02", "Scope", "Work + specification"], ["03", "Deliver", "Progress + finish"]];
  return (
    <div className="overflow-hidden border-2 border-foreground bg-[#f3efe8] shadow-[7px_7px_0_0_var(--foreground)]">
      <div className="flex items-center justify-between border-b-2 border-foreground bg-white px-5 py-4"><span className="font-display text-sm font-bold tracking-[0.12em]">WORKS / INTERIORS</span><span className="border border-foreground px-2 py-1 font-mono text-[8px] uppercase">Project delivery</span></div>
      <div className="p-5 sm:p-7"><p className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-primary">From first visit to finished space</p><h2 className="mt-3 max-w-sm font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">Show clients how the work moves forward.</h2>
        <div className="relative mt-8 grid gap-3 sm:grid-cols-3">{steps.map(([n, title, copy], i) => <div key={n} className="relative border-2 border-foreground bg-card p-4 shadow-[3px_3px_0_0_var(--foreground)]"><div className="flex items-center justify-between"><span className="font-mono text-[10px] font-bold text-primary">{n}</span>{i < steps.length - 1 && <ArrowRight className="hidden h-4 w-4 text-muted-foreground sm:block"/>}</div><h3 className="mt-5 font-display text-base font-bold">{title}</h3><p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">{copy}</p></div>)}</div>
        <div className="mt-6 grid grid-cols-[auto_1fr] items-center gap-3 border-t border-foreground/15 pt-4"><span className="grid h-9 w-9 place-items-center bg-[#d9e2d6] text-[#314a3b]"><Check className="h-4 w-4"/></span><p className="text-xs leading-relaxed text-muted-foreground"><strong className="text-foreground">Make scope visible.</strong> Use completed project examples to explain what your team delivered and what a client can ask you to take on.</p></div>
      </div>
    </div>
  );
}

function PortfolioBoard() {
  return (
    <div className="overflow-hidden border-2 border-foreground bg-[#f5f1e9] shadow-[7px_7px_0_0_var(--foreground)]">
      <div className="flex items-center justify-between border-b border-foreground/15 px-5 py-3"><span className="font-display text-sm font-bold">SELECTED / 04</span><span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Portfolio edit</span></div>
      <div className="grid grid-cols-[.75fr_1.25fr] gap-4 p-4 sm:gap-5 sm:p-5">
        <div className="flex flex-col justify-between"><div><span className="font-mono text-[8px] uppercase tracking-[0.15em] text-primary">Curation before volume</span><h2 className="mt-3 font-display text-2xl font-bold leading-tight text-foreground">A portfolio with a point of view.</h2><p className="mt-3 text-xs leading-relaxed text-muted-foreground">Selected projects / useful categories / a clear next step.</p></div><div className="mt-5 flex flex-wrap gap-1.5">{["Homes", "Retail", "Work"].map((x, i) => <span key={x} className={`border px-2 py-1 font-mono text-[7px] uppercase tracking-wide ${i === 0 ? "border-foreground bg-secondary text-white" : "border-foreground/20 text-muted-foreground"}`}>{x}</span>)}</div></div>
        <div className="grid min-h-[245px] grid-cols-2 grid-rows-[1.2fr_.8fr] gap-2"><div className="relative col-span-2 overflow-hidden bg-[#c5b49d]"><div className="absolute inset-y-[13%] left-[13%] w-[45%] border-[7px] border-[#eee8db] bg-[#7b887b]"><span className="absolute inset-y-0 left-1/2 w-1 bg-[#eee8db]"/></div><div className="absolute bottom-3 right-3 h-[48%] w-[33%] bg-[#68675e]"/><span className="absolute left-3 top-3 bg-white/90 px-2 py-1 font-mono text-[7px] uppercase text-foreground">Featured / 01</span></div><div className="bg-[#879080]"/><div className="flex items-end bg-[#d6c8b4] p-2"><span className="font-mono text-[7px] uppercase tracking-wide text-[#263c58]">Interior / 02</span></div></div>
      </div>
      <div className="flex items-center justify-between border-t border-foreground/15 px-5 py-3"><span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Selected work</span><div className="flex gap-1">{[0, 1, 2, 3].map((x) => <span key={x} className={`h-1.5 w-1.5 rounded-full ${x === 0 ? "bg-primary" : "bg-foreground/20"}`} />)}</div></div>
    </div>
  );
}

function CaseStudySequence() {
  const steps = [["01", "Brief", "What the project needed"], ["02", "Response", "The key design move"], ["03", "Space", "The completed work"]];
  return (
    <div className="overflow-hidden border-2 border-foreground bg-[#f5f2ed] shadow-[7px_7px_0_0_var(--foreground)]">
      <div className="flex items-center justify-between border-b-2 border-foreground px-5 py-3"><span className="font-display text-sm font-bold tracking-wide">PROJECT / STORY</span><span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Case study</span></div>
      <div className="grid sm:grid-cols-[1.1fr_.9fr]">
        <div className="relative min-h-[235px] overflow-hidden bg-[#c7b69e]"><div className="absolute inset-[12%] border-[9px] border-[#f1eadd] bg-[#7a897c]"><div className="absolute inset-x-[13%] bottom-0 h-[40%] bg-[#ddd0bb]"/><div className="absolute bottom-[12%] left-[25%] h-[24%] w-[48%] bg-[#756d60]"/><span className="absolute inset-y-0 left-[48%] w-2 bg-[#f1eadd]"/></div><span className="absolute bottom-3 left-3 bg-[#192c43] px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-wider text-white">Final space / image sequence</span></div>
        <div className="p-5 sm:p-6"><p className="font-mono text-[8px] uppercase tracking-[0.14em] text-primary">From brief to outcome</p><h2 className="mt-3 font-display text-2xl font-bold leading-tight">Let the reader follow the thinking.</h2><div className="relative mt-5 space-y-0">{steps.map(([n, title, copy], i) => <div key={n} className="relative flex gap-3 pb-4 last:pb-0"><div className="flex w-7 shrink-0 flex-col items-center"><span className="z-10 grid h-7 w-7 place-items-center border border-primary bg-white font-mono text-[8px] font-bold text-primary">{n}</span>{i < steps.length - 1 && <span className="absolute top-7 bottom-0 w-px bg-primary/35"/>}</div><div className="pt-1"><h3 className="font-display text-xs font-bold">{title}</h3><p className="mt-0.5 text-[9px] leading-relaxed text-muted-foreground">{copy}</p></div></div>)}</div></div>
      </div>
    </div>
  );
}

function ServiceTree() {
  return (
    <div className="overflow-hidden border-2 border-foreground bg-[#f4f1eb] shadow-[7px_7px_0_0_var(--foreground)]">
      <div className="flex items-center justify-between bg-[#263c58] px-5 py-4 text-white"><span className="font-display text-sm font-bold tracking-[0.14em]">SITE STRUCTURE</span><span className="font-mono text-[8px] uppercase tracking-widest text-white/60">Service architecture</span></div>
      <div className="p-5 sm:p-7"><p className="font-mono text-[8px] uppercase tracking-[0.14em] text-primary">One clear page purpose</p><div className="mx-auto mt-4 w-fit border-2 border-foreground bg-white px-5 py-2.5 text-center shadow-[3px_3px_0_0_var(--foreground)]"><span className="block font-mono text-[7px] uppercase tracking-wider text-muted-foreground">Parent page</span><span className="font-display text-sm font-bold">Interior design services</span></div><div className="relative mx-auto h-9 w-[70%]"><span className="absolute left-1/2 top-0 h-full w-px bg-foreground/35"/><span className="absolute bottom-0 left-0 right-0 h-px bg-foreground/35"/><span className="absolute bottom-0 left-0 h-4 w-px bg-foreground/35"/><span className="absolute bottom-0 left-1/2 h-4 w-px bg-foreground/35"/><span className="absolute bottom-0 right-0 h-4 w-px bg-foreground/35"/></div><div className="grid grid-cols-3 gap-2 sm:gap-3">{[["01", "Residential", "Who it serves"], ["02", "Full service", "What is included"], ["03", "Consultation", "How to begin"]].map(([n, title, copy], i) => <div key={n} className={`border p-3 sm:p-4 ${i === 1 ? "border-primary bg-[#fff8f3]" : "border-foreground/20 bg-white"}`}><span className="font-mono text-[8px] font-bold text-primary">{n}</span><h3 className="mt-2 font-display text-[10px] font-bold sm:text-sm">{title}</h3><p className="mt-1 text-[8px] leading-relaxed text-muted-foreground sm:text-[10px]">{copy}</p></div>)}</div><div className="mt-4 flex items-center justify-center gap-2 font-mono text-[8px] uppercase tracking-widest text-muted-foreground"><span className="h-px w-8 bg-primary"/>Distinct pages, only where useful<span className="h-px w-8 bg-primary"/></div></div>
    </div>
  );
}

function EnquiryFlow() {
  return (
    <div className="overflow-hidden border-2 border-foreground bg-[#edf0ec] shadow-[7px_7px_0_0_var(--foreground)]">
      <div className="flex items-center justify-between border-b-2 border-foreground bg-white px-5 py-3"><span className="font-display text-sm font-bold">START A PROJECT</span><span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Enquiry concept</span></div>
      <div className="grid sm:grid-cols-[.8fr_1.2fr]">
        <div className="flex flex-col justify-between bg-[#263c58] p-5 text-white sm:p-6"><div><span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#e7a37f]">A useful first conversation</span><h2 className="mt-3 font-display text-2xl font-bold leading-tight">Make the next step feel simple.</h2><p className="mt-3 text-xs leading-relaxed text-white/70">A few clear questions. A human follow-up. No long brief before hello.</p></div><div className="mt-7 flex items-center gap-2 font-mono text-[8px] uppercase tracking-wider text-white/70"><CircleDot className="h-4 w-4 text-[#e7a37f]"/>Project enquiry</div></div>
        <div className="p-5 sm:p-6"><div className="space-y-3">{[["01", "What kind of project?", "Residential / Commercial / Other"], ["02", "Where is it located?", "City or service area"], ["03", "How can we reach you?", "Name / Email / Phone"]].map(([n, label, placeholder]) => <div key={n} className="border-b border-foreground/15 pb-2"><div className="mb-1 flex items-center gap-2"><span className="font-mono text-[8px] font-bold text-primary">{n}</span><span className="font-display text-[10px] font-semibold">{label}</span></div><div className="border border-foreground/20 bg-white px-3 py-2 font-mono text-[8px] text-muted-foreground">{placeholder}</div></div>)}</div><div className="mt-4 flex items-center justify-between gap-3"><span className="text-[8px] leading-relaxed text-muted-foreground">Ask only what helps the first reply.</span><span className="inline-flex items-center gap-1 bg-primary px-3 py-2 font-mono text-[8px] font-bold uppercase text-white">Send enquiry<ArrowRight className="h-3 w-3"/></span></div></div>
      </div>
      <div className="flex items-center justify-center gap-2 border-t border-foreground/15 bg-white px-4 py-3 font-mono text-[8px] uppercase tracking-wider text-muted-foreground"><span>Relevant work</span><ArrowRight className="h-3 w-3 text-primary"/><span>Clear invitation</span><ArrowRight className="h-3 w-3 text-primary"/><span>Useful conversation</span></div>
    </div>
  );
}

export default function WebsitePlanningVisual({ page }: { page: WebsiteDevelopmentPageData }) {
  switch (page.visualization) {
    case "designer-editorial": return <DesignerEditorial />;
    case "studio-grid": return <StudioGrid />;
    case "architecture-drawing": return <ArchitectureDrawing />;
    case "contractor-sequence": return <ContractorSequence />;
    case "portfolio-board": return <PortfolioBoard />;
    case "case-study-sequence": return <CaseStudySequence />;
    case "service-tree": return <ServiceTree />;
    case "enquiry-flow": return <EnquiryFlow />;
    default: return null;
  }
}
