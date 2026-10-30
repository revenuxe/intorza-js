export default function WorkingDrawingVisual({ kind = 0, compact = false }: { kind?: number; compact?: boolean }) {
  const elevation = [2,7,8,9].includes(kind);
  return <svg viewBox="0 0 600 380" className="block h-auto w-full" role="img" aria-label={`Illustrative ${elevation ? "interior elevation" : "interior plan"} drawing, not to scale`}>
    <defs><pattern id={`drawing-grid-${kind}`} width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0v20" stroke="#d9e1e9" strokeWidth=".6" fill="none"/></pattern></defs>
    <path fill="#f6f7f4" d="M0 0h600v380H0z"/><path fill={`url(#drawing-grid-${kind})`} d="M0 0h600v380H0z"/>
    <g fill="none" stroke="#263c58" strokeLinejoin="round">
      {elevation ? <><path strokeWidth="4" d="M85 75h430v218H85z"/><path strokeWidth="2" d="M85 245h430M170 75v170m85-170v170m85-170v170m85-170v170M85 135h430m-430 55h430"/><path strokeWidth="1" d="M100 92h55v26h-55zm85 60h55v20h-55zm85 55h55v25h-55z"/><path stroke="#b54d2a" strokeWidth="2" d="M85 245h430M255 75v170"/></> : <><path strokeWidth="5" d="M85 65h430v230H85zM85 190h145v105m0-230v125h285M370 190v105"/><path strokeWidth="2" d="M105 90h100v70H105zM260 90h180v45H260zM395 212h95v55h-95z"/><path strokeWidth="1" d="M138 90v70m33-70v70M85 243h55v52"/>{kind === 3 || kind === 4 || kind === 5 ? <g stroke="#b54d2a" strokeWidth="1.5">{[280,340,400,460].map(x=><g key={x}><circle cx={x} cy="160" r="6"/><path d={`M${x-4} 156l8 8m-8 0 8-8`}/></g>)}<path strokeDasharray="6 4" d="M280 160h180M340 160v-65"/></g> : kind === 6 ? <path strokeWidth="1" d="M250 200h110m-110 25h110m-110 25h110m-110 25h110M270 200v95m30-95v95m30-95v95"/> : <path stroke="#b54d2a" strokeWidth="2" strokeDasharray="6 4" d="M242 276 330 205l35 71z"/>}</>}
      <path strokeWidth="1" d="M85 40h430M85 32v16m430-16v16M60 65v230m-8-230h16m-16 230h16"/>
      <path stroke="#b54d2a" strokeWidth="1.5" d="m490 280 35 35h30"/><circle cx="490" cy="280" r="4"/>
      <path strokeWidth="1" d="M20 330h560v30H20zM340 330v30m110-30v30"/>
    </g>
    <g fill="#263c58" fontFamily="monospace" fontSize={compact ? "12" : "10"}><text x="230" y="30">{elevation ? "ELEVATION / STUDY" : "PLAN / STUDY"}</text><text x="32" y="349">INTERIOR DRAWING CONCEPT</text><text x="350" y="349">SHEET 0{kind+1}</text><text x="460" y="349">NOT TO SCALE</text></g>
  </svg>;
}
