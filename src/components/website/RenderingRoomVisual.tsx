import type { RenderingService } from "@/views/3d-rendering-service-page";

export default function RenderingRoomVisual({ service }: { service: RenderingService }) {
  const kitchen = service.slug === "kitchen-rendering";
  const bedroom = ["bedroom-visualization", "master-bedroom-rendering", "kids-bedroom-rendering"].includes(service.slug);
  const dining = service.slug === "dining-area-visualization";
  const office = ["office-commercial-interiors", "home-office-rendering"].includes(service.slug);
  const concept = service.slug === "design-concept-visualization";
  return <figure className="overflow-hidden border-2 border-foreground bg-[#eee8dd] shadow-[6px_6px_0_0_var(--foreground)]">
    <div className="flex justify-between gap-3 border-b border-foreground/20 px-4 py-3 text-xs font-semibold"><span>{service.label}</span><span className="text-muted-foreground">Concept study</span></div>
    <svg viewBox="0 0 720 500" role="img" aria-label={`Illustrated ${service.label.toLowerCase()} concept with room layout and material selections`} className="block h-auto w-full">
      <defs><linearGradient id="room-background" x2="1" y2="1"><stop stopColor="#ece1cf"/><stop offset="1" stopColor="#b5a48c"/></linearGradient><linearGradient id="room-floor" x2="1" y2="1"><stop stopColor="#c4ad8b"/><stop offset="1" stopColor="#827767"/></linearGradient></defs>
      <path fill="url(#room-background)" d="M0 0h720v500H0z"/><path fill="#ded3c1" d="m0 0 100 60v280L0 415z"/><path fill="url(#room-floor)" d="m100 340 620-20v180H0v-85z"/>
      <path fill="#71877d" stroke="#f2eadc" strokeWidth="12" d="M130 70h180v237H130z"/><path stroke="#f2eadc" strokeWidth="7" d="M220 70v237m-90-125h180"/>
      <path fill="#ece2d2" opacity=".28" d="m135 300 170 0 300 200H300z"/>
      {kitchen ? <g><path fill="#7b826e" d="M340 210h345v153H340z"/><path fill="#e9dfcd" d="M326 200h372v15H326z"/><path fill="#aa9271" d="M350 65h325v110H350z"/>{[410,475,540,605].map(x=><path key={x} stroke="#f2eadc" opacity=".5" d={`M${x} 65v110m0 40v148`}/>)}<path fill="#d9d2c6" d="M390 287h260v125H390z"/><path fill="#f0e8da" d="M375 278h290v15H375z"/></g> : bedroom ? <g><path fill="#9a7964" d="M350 180h300v180H350z"/><path fill="#e1d8c8" d="m355 265 277 0 40 170H310z"/><path fill="#f1eadd" d="M370 235h105v50H370zm125 0h105v50H495z"/><path fill="#858b77" d="m330 346 324 0 18 89H310z"/></g> : dining || office ? <g><path fill="#a28a6b" d="m315 275 315-12 50 55-362 15z"/><path stroke="#635a4c" strokeWidth="12" d="M344 325v97m300-101v99"/>{[330,450,580].map(x=><g key={x}><path fill={office?'#617971':'#887e6c'} d={`M${x} 330h55v58h-55z`}/><path stroke="#625b50" strokeWidth="5" d={`M${x+5} 388v40m45-40v40`}/></g>)}<path stroke="#534f46" strokeWidth="3" d="M470 0v130"/><ellipse cx="470" cy="145" rx="60" ry="18" fill="#b08c60"/></g> : <g><path fill="#6c7566" d="M345 223h287v141H345z"/><path fill="#91947e" d="M325 288h327v99H325z"/><path fill="#e3d7c3" d="M365 236h97v69h-97z"/><path fill="#b07755" d="M492 235h83v70h-83z"/><ellipse fill="#90795d" cx="390" cy="410" rx="118" ry="22"/><path stroke="#615b4e" strokeWidth="7" d="M325 420v38m130-38v38"/></g>}
      <g fill="#6d816b"><path d="M665 282q-65-90-39-130 47 45 39 130m0 0q4-107 44-117 0 64-44 117"/><path fill="#a3896d" d="M642 280h48l-6 65h-36z"/></g>
      {concept && <g fill="none" stroke="#243a54" strokeDasharray="6 5" opacity=".6"><path d="M100 60h585v280H100zM325 220h330v170H325z"/></g>}
      <g fill="#f6f0e7"><rect x="20" y="20" width="83" height="29"/></g><text x="32" y="39" fill="#263b54" fontSize="11" fontFamily="monospace">VIEW / 01</text>
    </svg>
    <div className="flex items-center justify-between gap-4 border-t border-foreground/20 bg-card p-4"><div><p className="font-display text-sm font-semibold">Layout. Materials. Light.</p><figcaption className="mt-1 text-xs text-muted-foreground">Illustrative design study; not a client project.</figcaption></div><div className="flex shrink-0 gap-1.5" aria-label="Illustrated material palette">{["#b5a48c", "#71877d", "#b07755", "#e3d7c3"].map(color=><span key={color} style={{backgroundColor:color}} className="h-7 w-5 border border-foreground/15 sm:w-7"/>)}</div></div>
  </figure>;
}
