"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
const SIZES = { "1BHK": 550, "2BHK": 950, "3BHK": 1400, "4BHK": 2000 } as const;
// Illustrative per-sq-ft rates (INR) — editable by the visitor.
const LEVELS = { Essential: 900, Premium: 1500, Luxury: 2600 } as const;
const SPLIT = [
  { name: "Kitchen", share: 0.28 },
  { name: "Wardrobes & storage", share: 0.24 },
  { name: "Living & dining", share: 0.18 },
  { name: "Ceiling & lighting", share: 0.12 },
  { name: "Painting & finishes", share: 0.1 },
  { name: "Bathrooms & misc.", share: 0.08 },
];

const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

export default function CostCalculator() {
  const [size, setSize] = useState<keyof typeof SIZES>("2BHK");
  const [area, setArea] = useState<number>(SIZES["2BHK"]);
  const [level, setLevel] = useState<keyof typeof LEVELS>("Premium");
  const [rate, setRate] = useState<number>(LEVELS.Premium);

  const work = area * rate;
  const gst = work * 0.18;

  const chip = (active: boolean) =>
    `border-2 border-foreground px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] ${active ? "bg-primary text-primary-foreground shadow-[3px_3px_0_0_var(--foreground)]" : "bg-card text-foreground"}`;

  return (
    <div className="grid gap-8 lg:grid-cols-2 mb-6">
      <div className="frame-hard p-6 space-y-6">
        <div>
          <div className="font-semibold mb-3">Home size</div>
          <div className="flex flex-wrap gap-3">
            {(Object.keys(SIZES) as (keyof typeof SIZES)[]).map((s) => (
              <button
                key={s}
                type="button"
                className={chip(size === s)}
                onClick={() => {
                  setSize(s);
                  setArea(SIZES[s]);
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <label className="block">
          <span className="font-semibold">Carpet area (sq ft)</span>
          <input
            type="number"
            min={100}
            value={area}
            onChange={(e) => setArea(Math.max(0, Number(e.target.value)))}
            className="mt-2 w-full border-2 border-foreground bg-background px-3 py-2"
          />
        </label>
        <div>
          <div className="font-semibold mb-3">Finish level</div>
          <div className="flex flex-wrap gap-3">
            {(Object.keys(LEVELS) as (keyof typeof LEVELS)[]).map((l) => (
              <button
                key={l}
                type="button"
                className={chip(level === l)}
                onClick={() => {
                  setLevel(l);
                  setRate(LEVELS[l]);
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
        <label className="block">
          <span className="font-semibold">Rate per sq ft (₹)</span>
          <input
            type="number"
            min={0}
            value={rate}
            onChange={(e) => setRate(Math.max(0, Number(e.target.value)))}
            className="mt-2 w-full border-2 border-foreground bg-background px-3 py-2"
          />
        </label>
      </div>

      <div className="frame-hard p-6" aria-live="polite">
        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          Illustrative total (incl. example tax)
        </div>
        <div className="font-display text-4xl font-bold text-primary mb-6">{inr(work + gst)}</div>
        <table className="w-full text-sm">
          <tbody>
            {SPLIT.map((s) => (
              <tr key={s.name} className="border-b border-border">
                <td className="py-2">{s.name}</td>
                <td className="text-right">{inr(work * s.share)}</td>
              </tr>
            ))}
            <tr>
              <td className="pt-3">Work value</td>
              <td className="pt-3 text-right">{inr(work)}</td>
            </tr>
            <tr>
              <td>Illustrative tax @ 18%</td>
              <td className="text-right">{inr(gst)}</td>
            </tr>
          </tbody>
        </table>
        <a
          href="https://app.intorza.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hard btn-hard-hover mt-6 w-full"
        >
          Turn this into a quotation <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
