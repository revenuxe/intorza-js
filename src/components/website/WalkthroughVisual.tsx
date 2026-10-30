import { Camera, Play, ScanEye } from "lucide-react";

export function WalkthroughHeroVisual() {
  return <figure className="relative mx-auto w-full max-w-2xl lg:ml-auto">
    <span aria-hidden="true" className="absolute -bottom-3 -right-3 h-full w-full border-2 border-foreground"/>
    <div className="relative overflow-hidden border-2 border-foreground bg-card shadow-[5px_5px_0_0_var(--foreground)]">
      <div className="flex items-center justify-between gap-3 border-b-2 border-foreground bg-muted px-4 py-3"><span className="font-display text-xs font-bold">INTERIOR / WALKTHROUGH STUDY</span><span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Illustrative concept</span></div>
      <div className="relative aspect-[1.2] overflow-hidden bg-[#cdb99d] sm:aspect-[1.38]" role="img" aria-label="Illustrative walkthrough concept of a contemporary living room with camera path markers">
        <svg viewBox="0 0 760 540" className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="walk-wall" x1="60" y1="20" x2="650" y2="400" gradientUnits="userSpaceOnUse"><stop stopColor="#E6D9C4"/><stop offset="1" stopColor="#A99D88"/></linearGradient><linearGradient id="walk-floor" x1="120" y1="360" x2="640" y2="540" gradientUnits="userSpaceOnUse"><stop stopColor="#C7B18F"/><stop offset="1" stopColor="#786F62"/></linearGradient><linearGradient id="walk-window" x1="180" y1="78" x2="360" y2="322" gradientUnits="userSpaceOnUse"><stop stopColor="#B9C6BC"/><stop offset="1" stopColor="#74877B"/></linearGradient></defs>
          <path fill="url(#walk-wall)" d="M0 0h760v540H0z"/><path fill="#DED1BB" d="M0 0h104v355L0 418z"/><path fill="#F2E9DB" d="M130 66h237v278H130z"/><path fill="url(#walk-window)" d="M145 81h207v246H145z"/><path stroke="#F2E9DB" strokeWidth="9" d="M247 81v246m-102-123h207"/><path fill="#D7D5C5" fillOpacity=".75" d="M145 254q62-65 105-25 55 47 102-18v116H145z"/>
          <path fill="#D4C5AE" d="M505 73h184v160H505z"/><path fill="#758277" d="M520 87h154v132H520z"/><path stroke="#E8DDCD" strokeWidth="7" d="M597 87v132m-77-66h154"/><path fill="url(#walk-floor)" d="m0 418 104-63h656v185H0z"/>
          <path fill="#777366" d="M285 294q0-22 22-22h262q22 0 22 22v111H285z"/><path fill="#918A7B" d="M257 345q0-23 22-23h296q23 0 23 23v63H257z"/><path fill="#E3D8C7" d="M322 287q0-13 13-13h84q13 0 13 13v51H322z"/><path fill="#C1B29C" d="M434 287q0-13 13-13h84q13 0 13 13v51H434z"/><path fill="#F0E7D9" d="M269 406h330v16H269z"/><path fill="#59574F" d="M293 417h12v45h-12zm273 0h12v45h-12z"/>
          <path fill="#687968" d="M666 327q-47-81-17-132 48 63 17 132m1 0q-4-102 54-119-4 71-54 119m-5-10q-53-35-86-13 45 44 86 13"/><path fill="#887C69" d="M643 331h48l-5 66h-38z"/><path fill="#E4D8C6" d="M633 394h68v11h-68z"/>
          <ellipse cx="397" cy="455" rx="251" ry="37" fill="#293344" fillOpacity=".1"/><path d="M68 445c158-68 339-76 545-33" fill="none" stroke="#B84D2A" strokeWidth="3" strokeDasharray="7 8"/><circle cx="68" cy="445" r="11" fill="#B84D2A" stroke="#F8F5EF" strokeWidth="5"/><circle cx="613" cy="412" r="11" fill="#B84D2A" stroke="#F8F5EF" strokeWidth="5"/><path d="m603 404 10 8-10 8" fill="none" stroke="#F8F5EF" strokeWidth="2"/>
        </svg>
        <div className="absolute left-3 top-3 flex items-center gap-2 border border-foreground/15 bg-background/95 px-3 py-2"><Camera className="h-4 w-4 text-primary"/><span className="font-mono text-[9px] font-bold uppercase tracking-wider">Living room / Scene 01</span></div>
        <span className="absolute right-3 top-3 border border-foreground/20 bg-background/95 px-3 py-2 font-mono text-[10px] font-bold">360°</span>
        <span aria-hidden="true" className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/80 bg-[#172B42]/75 text-white shadow-lg backdrop-blur-sm"><Play className="ml-1 h-5 w-5 fill-current"/></span>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#172B42]/95 via-[#172B42]/55 to-transparent px-4 pb-4 pt-16 text-white sm:px-6 sm:pb-6"><div className="flex items-center justify-between gap-3"><span className="font-display text-sm font-semibold sm:text-base">A connected view of the interior</span><span className="font-mono text-[9px] uppercase tracking-wider text-white/75">Camera path / Concept</span></div><div className="mt-4 flex items-center gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center border border-white/40"><Play className="ml-0.5 h-3 w-3 fill-current"/></span><span className="h-1 flex-1 bg-white/25"><span className="block h-full w-[38%] bg-primary"/></span><span className="font-mono text-[9px] text-white/75">Scene study</span></div></div>
      </div>
      <figcaption className="border-t border-border bg-card px-4 py-3 text-[10px] leading-relaxed text-muted-foreground">Illustrative visualization concept, not an interactive video or completed client project.</figcaption>
    </div>
  </figure>;
}

export function PanoramaConcept() {
  return <figure className="overflow-hidden border-2 border-foreground bg-card shadow-[5px_5px_0_0_var(--foreground)]">
    <div className="flex items-center justify-between border-b-2 border-foreground bg-muted px-4 py-3"><span className="font-display text-xs font-bold">PANORAMIC INTERIOR VIEW</span><span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Illustrative / 360°</span></div>
    <div className="relative aspect-[1.45] overflow-hidden bg-[#d2c1a8]" role="img" aria-label="Illustrative panoramic interior view showing living and dining zones">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#d5c4aa_0%,#e1d7c6_16%,#b8c1b2_17%,#cbd1c3_34%,#d6c7b1_35%,#c8b79d_68%,#b7c2b5_69%,#d5d8cd_86%,#b59f83_87%)]"/>
      <div className="absolute inset-x-[4%] top-[12%] h-[55%] border-[5px] border-[#f3ecdf]/90"><div className="absolute inset-y-0 left-1/3 border-l-2 border-[#f3ecdf]/85"/><div className="absolute inset-y-0 left-2/3 border-l-2 border-[#f3ecdf]/85"/><div className="absolute inset-x-0 top-1/2 border-t-2 border-[#f3ecdf]/85"/><div className="absolute left-[8%] top-[12%] h-[60%] w-[21%] bg-[#75877b]/80"/><div className="absolute right-[7%] top-[12%] h-[60%] w-[21%] bg-[#75877b]/80"/></div>
      <div className="absolute bottom-[16%] left-[13%] h-[21%] w-[33%] border-2 border-[#293d55] bg-[#767467]"/><div className="absolute bottom-[16%] right-[13%] h-[25%] w-[26%] border-2 border-[#293d55] bg-[#ab8c68]"/><div className="absolute bottom-[8%] left-[8%] right-[8%] h-[10%] bg-[#8c7d68]"/>
      <span className="absolute left-3 top-3 border border-foreground/20 bg-background/95 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-wider">Selected viewpoint</span><span className="absolute right-3 top-3 flex items-center gap-2 border border-foreground/20 bg-background/95 px-3 py-2 text-[10px] font-semibold"><ScanEye className="h-4 w-4 text-primary"/>360°</span>
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 border border-white/60 bg-[#172B42]/80 px-4 py-2 font-mono text-[9px] font-bold uppercase tracking-wider text-white">Panoramic view / Concept</span>
    </div>
    <figcaption className="border-t border-border px-4 py-3 text-[10px] leading-relaxed text-muted-foreground">Panoramic service illustration only. This preview is not interactive; actual 360° deliverables are scoped for each project.</figcaption>
  </figure>;
}

export function WalkthroughServiceVisual({ slug, name, title }: { slug: string; name: string; title: string }) {
  const panoramic = slug === "360-interior-visualization";
  const sequence = slug === "interior-presentation-video";
  const commercial = slug === "commercial-interior-walkthrough";
  const points = slug === "room-to-room-walkthrough" || slug === "residential-interior-walkthrough"
    ? [[82, 200], [190, 125], [300, 202], [414, 124], [520, 198]]
    : commercial
      ? [[78, 205], [185, 135], [295, 205], [405, 135], [520, 205]]
      : [[78, 210], [190, 150], [310, 185], [425, 118], [526, 160]];
  const route = points.map(([x, y], index) => `${index ? "L" : "M"}${x} ${y}`).join(" ");
  return <figure className="relative overflow-hidden border-2 border-foreground bg-card shadow-[5px_5px_0_0_var(--foreground)]">
    <div className="flex items-center justify-between gap-3 border-b-2 border-foreground bg-muted px-4 py-3"><span className="font-display text-xs font-bold">{name.toUpperCase()} / STUDY</span><span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Illustrative concept</span></div>
    <div className="relative aspect-[1.3] overflow-hidden bg-[#d8c8ae] sm:aspect-[1.5]" role="img" aria-label={`Illustrative ${name.toLowerCase()} planning visualization: ${title}`}>
      <svg viewBox="0 0 600 330" className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <path fill="#e8dfd1" d="M0 0h600v330H0z"/><path fill="#c8b69a" d="M0 230 600 196v134H0z"/><path fill="#f5eee2" d="M48 45h188v147H48z"/><path fill="#8a9b8d" d="M60 57h164v123H60z"/><path stroke="#f5eee2" strokeWidth="7" d="M142 57v123M60 118h164"/><path fill="#d7c7b0" d="M290 50h245v114H290z"/><path fill="#718277" d="M304 64h217v86H304z"/><path stroke="#eee7da" strokeWidth="6" d="M412 64v86M304 107h217"/>
        {commercial ? <g fill="#9c8a70" stroke="#293d55" strokeWidth="2"><path d="M90 224h110v-34H90zM245 223h125v-29H245zM405 216h112v-41H405z"/><path d="M118 190v-24h54v24m106 4v-31h64v31m92-19v-30h55v30" fill="#d3d0c4"/></g> : <g><path fill="#777568" d="M220 194q0-15 15-15h198q15 0 15 15v57H220z"/><path fill="#918a7b" d="M198 220q0-15 15-15h219q15 0 15 15v40H198z"/><path fill="#e3d8c7" d="M252 186h71v33h-71zm83 0h71v33h-71z"/></g>}
        {panoramic ? <g fill="none" stroke="#b84d2a"><circle cx="300" cy="177" r="71" strokeWidth="2" strokeDasharray="5 6"/><circle cx="300" cy="177" r="45" strokeWidth="1.5"/><path d="M300 98v158m-79-79h158" strokeWidth="2"/><path d="m293 104 7-10 7 10m-7 140 7 10 7-10" strokeWidth="2"/></g> : <g fill="none" stroke="#b84d2a"><path d={route} strokeWidth="3" strokeDasharray="7 7"/><circle cx={points[0][0]} cy={points[0][1]} r="10" fill="#b84d2a" stroke="#f8f5ef" strokeWidth="4"/><circle cx={points[points.length-1][0]} cy={points[points.length-1][1]} r="10" fill="#b84d2a" stroke="#f8f5ef" strokeWidth="4"/>{points.slice(1,-1).map(([x,y],index)=><circle key={index} cx={x} cy={y} r="5" fill="#f8f5ef" stroke="#b84d2a" strokeWidth="2"/>)}</g>}
        {sequence && <g><rect x="30" y="270" width="145" height="34" fill="#f8f5ef" stroke="#263b54"/><rect x="185" y="270" width="145" height="34" fill="#f8f5ef" stroke="#263b54"/><rect x="340" y="270" width="145" height="34" fill="#f8f5ef" stroke="#263b54"/><path d="M45 292h112m43 0h112m43 0h112" stroke="#b84d2a" strokeWidth="4"/></g>}
      </svg>
      <div className="absolute left-3 top-3 border border-foreground/15 bg-background/95 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-wider">{panoramic ? "Viewpoint / 360°" : sequence ? "Scene sequence" : commercial ? "Zone study" : "Camera route / Concept"}</div>
      {!panoramic && <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center border border-foreground/20 bg-background/95"><Camera className="h-4 w-4 text-primary" aria-hidden="true"/></span>}
    </div>
    <div className="border-t border-border p-4"><h2 className="font-display text-base font-semibold">{title}</h2><p className="mt-1 text-xs leading-relaxed text-muted-foreground">Illustrative planning graphic only; deliverables depend on the agreed scope.</p></div>
  </figure>;
}
