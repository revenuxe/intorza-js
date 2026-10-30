import { ArrowRight, Check, Image as ImageIcon, MessageSquare, Ruler } from "lucide-react";

const configurations: Record<string, { title: string; caption: string; labels: string[] }> = {
  "floor-plan-to-3d-rendering": { title: "From layout to perspective", caption: "Dimensions establish the space. References establish the direction.", labels: ["Room layout", "Openings", "View direction"] },
  "cad-drawings-sketches-to-3d": { title: "Make the drawing readable", caption: "Pair the current plan with dimensions and relevant elevations.", labels: ["Current drawing", "Measured detail", "Design notes"] },
  "reference-images-for-3d-rendering": { title: "A reference with a purpose", caption: "Identify the detail you want each reference to communicate.", labels: ["Lighting mood", "Furniture form", "Material character"] },
  "material-finish-rendering-brief": { title: "A palette tied to the room", caption: "Connect each finish to a surface, scale and orientation.", labels: ["Floor finish", "Wall texture", "Joinery tone"] },
  "color-furniture-visualization-brief": { title: "See the selections together", caption: "Combine the furniture arrangement with a coordinated palette.", labels: ["Furniture size", "Placement", "Accent palette"] },
  "site-photos-for-interior-rendering": { title: "Capture the room in context", caption: "Use several angles and identify what stays and what changes.", labels: ["Retain", "Update", "Measure"] },
  "interior-rendering-project-brief": { title: "Give the project a clear direction", caption: "Connect the design goal, required views and review decisions.", labels: ["Project goal", "Required views", "Review contact"] },
};

function Plan({ sketch }: { sketch: boolean }) {
  return <svg viewBox="0 0 600 350" className="block w-full" role="img" aria-label={sketch ? "Illustrative annotated room drawing with dimensions" : "Illustrative floor plan with an indicated camera viewpoint"}>
    <defs><pattern id="input-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0v20" fill="none" stroke="#263c58" strokeOpacity=".08"/></pattern></defs>
    <path fill={sketch ? "#f0e7d6" : "#e9eee8"} d="M0 0h600v350H0z"/><path fill="url(#input-grid)" d="M0 0h600v350H0z"/>
    <g fill="none" stroke="#263c58" strokeWidth={sketch ? "3" : "7"} strokeLinejoin="round"><path d="M100 65h395v220H100V65Zm0 130h140v90m0-220v130h255"/><path d="M120 85h100v80H120zM270 85h150v45H270zM370 207h100v55H370z" strokeWidth="2"/><path d="M82 45h430M80 45v20m430-20v20M65 65v220m-10-220h20m-20 220h20" strokeWidth="1"/></g>
    <path fill="#c25833" fillOpacity=".12" stroke="#c25833" strokeDasharray="5 5" d="m280 260 80-100 90 100z"/><circle cx="280" cy="260" r="7" fill="#c25833"/>
    <g fill="#263c58" fontFamily="monospace" fontSize="11"><text x="260" y="35">DIMENSIONED LAYOUT</text><text x="120" y="184">ENTRY</text><text x="280" y="155">LIVING</text><text x="298" y="307">VIEW A →</text></g>
    {sketch && <g stroke="#a94f37" fill="none" strokeWidth="2"><path d="m420 125 60-30h62m-285 88-50 40h-50"/><circle cx="420" cy="125" r="5"/><circle cx="257" cy="183" r="5"/></g>}
  </svg>;
}

function RoomPhoto({ variant = 0 }: { variant?: number }) {
  return <div className={`relative h-full min-h-28 overflow-hidden ${variant === 1 ? "bg-[#b7c2b5]" : "bg-[#cdbda5]"}`}><div className="absolute inset-y-[12%] left-[12%] w-[45%] border-[6px] border-[#f1e9dc] bg-[#78897c]"><span className="absolute inset-y-0 left-1/2 w-1 bg-[#f1e9dc]"/></div><div className="absolute bottom-[10%] right-[10%] h-[35%] w-[46%] bg-[#77796a]"/><div className="absolute bottom-[8%] right-[7%] h-[9%] w-[52%] bg-[#e0d6c5]"/></div>;
}

function References({ materials }: { materials: boolean }) {
  return <div className="grid grid-cols-[1.1fr_.9fr] gap-3 bg-[#eee8dd] p-4 sm:p-6"><div className="relative min-h-60"><RoomPhoto/><span className="absolute bottom-3 left-3 bg-white/95 px-2 py-1 text-[10px] font-semibold text-[#263c58]">{materials ? "Surface placement" : "Atmosphere reference"}</span></div><div className="grid grid-cols-2 gap-2">{["#a88b68", "#d9cdbb", "#748475", "#a75c40"].map((color,i)=><div key={color} className="flex min-h-24 flex-col justify-end border border-[#263c58]/10 p-2" style={{backgroundColor:color}}><span className="bg-white/95 px-1.5 py-1 text-[8px] text-[#263c58]">{(materials ? ["Timber / grain", "Stone / scale", "Fabric / texture", "Accent / finish"] : ["Warm tones", "Soft light", "Natural texture", "Accent detail"])[i]}</span></div>)}</div></div>;
}

function SitePhotos() {
  return <div className="bg-[#eee8dd] p-4 sm:p-6"><div className="relative h-52 sm:h-60"><RoomPhoto/><span className="absolute left-[18%] top-[18%] grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-[#536e5d] text-xs font-bold text-white">1</span><span className="absolute bottom-[25%] right-[24%] grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-[#bb4b27] text-xs font-bold text-white">2</span><span className="absolute bottom-3 left-3 bg-white/95 px-2 py-1 text-[10px] font-semibold text-[#263c58]">Angle A / existing conditions</span></div><div className="mt-3 grid grid-cols-2 gap-3"><div className="relative h-24"><RoomPhoto variant={1}/><span className="absolute bottom-1 left-1 bg-white/95 px-2 py-1 text-[8px] text-[#263c58]">Angle B</span></div><div className="space-y-2 bg-white p-3 text-[10px] text-[#263c58]"><p><span className="mr-2 text-[#536e5d]">● 1</span>Retain window opening</p><p><span className="mr-2 text-[#bb4b27]">● 2</span>Update furniture</p><p className="flex items-center gap-2 text-[#263c58]/65"><Ruler className="h-3 w-3"/>Confirm dimensions</p></div></div></div>;
}

function Furniture() {
  return <div className="grid grid-cols-[1.2fr_.8fr] gap-4 bg-[#eee8dd] p-5"><div className="relative min-h-64 border-2 border-[#263c58]/40 bg-[#f7f2e9]"><div className="absolute left-[12%] top-[15%] h-[28%] w-[65%] rounded-sm border-2 border-[#5f7766] bg-[#8e9c87]"><div className="absolute inset-y-2 left-1/3 w-px bg-white/60"/><div className="absolute inset-y-2 left-2/3 w-px bg-white/60"/></div><div className="absolute bottom-[20%] left-[30%] h-[24%] w-[42%] rounded-[50%] border-2 border-[#ad8e68] bg-[#d7c1a0]"/><span className="absolute bottom-2 left-2 text-[9px] text-[#263c58]/70">Furniture layout / concept</span></div><div className="flex flex-col justify-center gap-3">{[["#8e9c87", "Upholstery"], ["#d7c1a0", "Timber tone"], ["#a95c40", "Accent color"]].map(([color,label])=><div key={label}><span className="block h-12 border border-[#263c58]/10" style={{backgroundColor:color}}/><span className="mt-1 block text-[9px] text-[#263c58]">{label}</span></div>)}</div></div>;
}

function BriefFlow() {
  return <div className="space-y-3 bg-[#eee8dd] p-5 sm:p-7">{[[MessageSquare,"01", "Define the goal", "Client presentation / design review"], [ImageIcon,"02", "Choose the views", "Rooms / camera angles / detail"], [Check,"03", "Agree the review", "Project contact / consolidated notes"]].map(([Icon,number,title,copy])=>{const Symbol=Icon as typeof Check;return <div key={String(number)} className="flex items-center gap-3 border border-[#263c58]/20 bg-white p-4"><span className="grid h-10 w-10 shrink-0 place-items-center bg-[#263c58] text-white"><Symbol className="h-4 w-4"/></span><div className="flex-1"><p className="font-display text-sm font-semibold text-[#263c58]">{String(title)}</p><p className="mt-1 text-[10px] text-[#263c58]/65">{String(copy)}</p></div><ArrowRight className="h-4 w-4 shrink-0 text-primary"/></div>})}</div>;
}

export default function RenderingInputVisual({ slug }: { slug: string }) {
  const config = configurations[slug];
  if (!config) return null;
  return <figure className="overflow-hidden border-2 border-foreground bg-card shadow-[6px_6px_0_0_var(--foreground)]"><div className="border-b-2 border-foreground bg-secondary p-5 text-secondary-foreground"><h2 className="font-display text-2xl font-bold">{config.title}</h2><p className="mt-2 text-sm leading-relaxed text-secondary-foreground/85">{config.caption}</p></div>{slug === "site-photos-for-interior-rendering" ? <SitePhotos/> : slug === "floor-plan-to-3d-rendering" || slug === "cad-drawings-sketches-to-3d" ? <Plan sketch={slug.startsWith("cad-")}/> : slug === "color-furniture-visualization-brief" ? <Furniture/> : slug === "interior-rendering-project-brief" ? <BriefFlow/> : <References materials={slug === "material-finish-rendering-brief"}/>}<div className="grid grid-cols-3 border-y border-border">{config.labels.map((label,i)=><span key={label} className="border-r border-border px-2 py-3 text-center text-[10px] font-semibold last:border-r-0"><span className="mr-1 text-primary">0{i+1}</span>{label}</span>)}</div><figcaption className="px-4 py-3 text-[10px] leading-relaxed text-muted-foreground">Illustrative guide to preparing project information. Drawings are not to scale; imagery is not a client project.</figcaption></figure>;
}
