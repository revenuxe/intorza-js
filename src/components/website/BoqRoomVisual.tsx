const roomLayouts: Record<string, { zone: string; fills: string[]; blocks: [number, number, number, number, string][] }> = {
  "living-room-boq": { zone: "MEDIA WALL / SEATING / CEILING", fills: ["#d6c3a8", "#b9c6b8", "#d8d2c7"], blocks: [[20, 18, 58, 15, "TV wall"], [20, 48, 32, 30, "Seating"], [66, 50, 18, 26, "Display"]] },
  "master-bedroom-boq": { zone: "WARDROBE / BED / DRESSING", fills: ["#d2bda3", "#bac6bb", "#d8d2c7"], blocks: [[18, 18, 22, 62, "Wardrobe"], [46, 38, 39, 35, "Bed"], [64, 18, 20, 13, "Dressing"]] },
  "bedroom-boq": { zone: "STORAGE / BED / STUDY", fills: ["#d6c3a8", "#c2c9b8", "#d8d2c7"], blocks: [[18, 18, 21, 60, "Storage"], [43, 43, 34, 31, "Bed"], [46, 18, 30, 15, "Study"]] },
  "kitchen-boq": { zone: "CABINET RUNS / COUNTER / SERVICES", fills: ["#c8c7b4", "#b6c4ba", "#d8d2c7"], blocks: [[17, 18, 67, 17, "Wall units"], [17, 63, 67, 17, "Base units"], [45, 39, 25, 16, "Counter"]] },
  "dining-room-boq": { zone: "CROCKERY / TABLE / PARTITION", fills: ["#d4c4af", "#b9c5b8", "#d8d2c7"], blocks: [[18, 18, 22, 57, "Crockery"], [46, 38, 32, 25, "Dining"], [76, 18, 8, 57, "Screen"]] },
  "foyer-boq": { zone: "ENTRY / SHOE STORAGE / SCREEN", fills: ["#d3c1a9", "#b7c3b6", "#d8d2c7"], blocks: [[18, 20, 27, 20, "Shoe unit"], [18, 52, 27, 23, "Bench"], [60, 18, 15, 60, "Screen"]] },
  "kids-room-boq": { zone: "WARDROBE / BED / STUDY", fills: ["#d3c0a8", "#b9c6b8", "#d8d2c7"], blocks: [[18, 18, 21, 59, "Wardrobe"], [46, 46, 32, 27, "Bed"], [47, 18, 31, 17, "Study"]] },
  "utility-other-spaces-boq": { zone: "UTILITY / COUNTER / SERVICE CLEARANCE", fills: ["#c9c8b7", "#b8c5b9", "#d8d2c7"], blocks: [[18, 19, 63, 16, "Overhead"], [18, 59, 63, 18, "Counter"], [47, 38, 22, 14, "Service"]] },
};

export default function BoqRoomVisual({ slug, name, focus }: { slug: string; name: string; focus: string }) {
  const layout = roomLayouts[slug];
  return <figure className="overflow-hidden border-2 border-foreground bg-card shadow-[5px_5px_0_0_var(--foreground)]">
    <div className="flex items-center justify-between border-b-2 border-foreground bg-muted p-4"><span className="font-display text-sm font-bold">{name.toUpperCase()} / SCOPE PLAN</span><span className="font-mono text-[9px] text-muted-foreground">ILLUSTRATIVE</span></div>
    <div className="grid md:grid-cols-[1.15fr_.85fr]">
      <div className="bg-[#eee9df] p-4 sm:p-6">
        <svg viewBox="0 0 440 330" role="img" aria-label={`Illustrative ${name.toLowerCase()} scope plan showing ${focus.toLowerCase()}`} className="block w-full border border-[#263c58]/20 bg-[#faf8f3]">
          <path d="M38 32h364v266H38z" fill="none" stroke="#263c58" strokeWidth="4"/>
          <path d="M38 165h85m0-133v88m105 178V209m174-76h-79" fill="none" stroke="#263c58" strokeWidth="2"/>
          <path d="M38 20h364M38 14v12m364-12v12M24 32v266m-6-266h12m-12 266h12" fill="none" stroke="#758397" strokeWidth="1"/>
          <text x="180" y="14" fill="#263c58" fontSize="8" fontFamily="monospace">ROOM / PLAN STUDY</text>
          {layout.blocks.map(([x,y,w,h,label], index) => <g key={label}>
            <rect x={x * 4.2} y={y * 2.8} width={w * 4.2} height={h * 2.8} fill={layout.fills[index % layout.fills.length]} stroke="#263c58" strokeWidth="2"/>
            <text x={x * 4.2 + 7} y={y * 2.8 + 15} fill="#263c58" fontSize="9" fontFamily="sans-serif">{label}</text>
          </g>)}
          <path d="M35 313h370" stroke="#c25833" strokeWidth="2" strokeDasharray="5 4"/>
          <text x="40" y="326" fill="#263c58" fontSize="8" fontFamily="monospace">{layout.zone}</text>
        </svg>
      </div>
      <div className="flex flex-col justify-center bg-secondary p-5 text-secondary-foreground sm:p-6">
        <p className="font-mono text-[9px] font-bold uppercase tracking-[.16em] text-primary">Room scope / review</p>
        <h2 className="mt-3 font-display text-xl font-bold leading-tight sm:text-2xl">{focus}</h2>
        <div className="mt-5 space-y-3">{["Identify included items", "Confirm dimensions and units", "Review assumptions before pricing"].map((label, index) => <div key={label} className="flex items-center gap-3 border-t border-secondary-foreground/20 pt-3"><span className="font-mono text-[10px] font-bold text-primary">0{index + 1}</span><span className="text-xs leading-relaxed text-secondary-foreground/85">{label}</span></div>)}</div>
      </div>
    </div>
    <figcaption className="border-t border-border px-4 py-3 text-[10px] leading-relaxed text-muted-foreground">Illustrative room plan, not measured or to scale. Final item scope and quantities depend on the supplied drawings and agreed brief.</figcaption>
  </figure>;
}
