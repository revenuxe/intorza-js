import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import { socialImageMeta } from "@/lib/seo";

const PATH = "/interior-cost-calculator";
const TITLE = "Interior Design Cost Calculator — Estimate Home Interior Cost | Intorza";
const DESCRIPTION =
  "Free interior cost calculator: pick your home size and finish level to estimate home interior design cost room by room, with GST. Then turn it into a quotation.";

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

const faqs = [
  { q: "How is home interior cost calculated?", a: "Most designers multiply the carpet area by a per-square-foot rate that depends on the finish level, then add GST. Kitchens and wardrobes usually take the largest share of the budget." },
  { q: "Is this estimate a final quotation?", a: "No. It is a rough starting budget. Final cost depends on site measurements, materials, brands and your city. Ask your designer for an itemised quotation." },
  { q: "Does the estimate include GST?", a: "Yes, the total adds 18% GST on top of the work value so you see a realistic figure." },
];

const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

export const Route = createFileRoute("/interior-cost-calculator")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "interior cost calculator, interior design cost calculator, home interior design cost, home interior cost, interior design price per sq ft" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}${PATH}` },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      ...socialImageMeta(),
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}${PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Interior Design Cost Calculator",
          url: `${SITE_URL}${PATH}`,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }),
      },
    ],
  }),
  component: CalculatorPage,
});

function CalculatorPage() {
  const [size, setSize] = useState<keyof typeof SIZES>("2BHK");
  const [area, setArea] = useState<number>(SIZES["2BHK"]);
  const [level, setLevel] = useState<keyof typeof LEVELS>("Premium");
  const [rate, setRate] = useState<number>(LEVELS.Premium);

  const work = area * rate;
  const gst = work * 0.18;

  const chip = (active: boolean) =>
    `border-2 border-foreground px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] ${active ? "bg-primary text-primary-foreground shadow-[3px_3px_0_0_var(--foreground)]" : "bg-card text-foreground"}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-5xl">
          <span className="eyebrow-tag mb-6">Free tool</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Interior Design Cost Calculator</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10">
            Get a quick estimate of your home interior cost. Choose your home size and finish level, adjust the
            area and rate to match your city, and see a room-wise budget split with GST.
          </p>

          <div className="grid gap-8 lg:grid-cols-2 mb-6">
            <div className="frame-hard p-6 space-y-6">
              <div>
                <div className="font-semibold mb-3">Home size</div>
                <div className="flex flex-wrap gap-3">
                  {(Object.keys(SIZES) as (keyof typeof SIZES)[]).map((s) => (
                    <button key={s} type="button" className={chip(size === s)} onClick={() => { setSize(s); setArea(SIZES[s]); }}>{s}</button>
                  ))}
                </div>
              </div>
              <label className="block">
                <span className="font-semibold">Carpet area (sq ft)</span>
                <input type="number" min={100} value={area} onChange={(e) => setArea(Math.max(0, Number(e.target.value)))} className="mt-2 w-full border-2 border-foreground bg-background px-3 py-2" />
              </label>
              <div>
                <div className="font-semibold mb-3">Finish level</div>
                <div className="flex flex-wrap gap-3">
                  {(Object.keys(LEVELS) as (keyof typeof LEVELS)[]).map((l) => (
                    <button key={l} type="button" className={chip(level === l)} onClick={() => { setLevel(l); setRate(LEVELS[l]); }}>{l}</button>
                  ))}
                </div>
              </div>
              <label className="block">
                <span className="font-semibold">Rate per sq ft (₹)</span>
                <input type="number" min={0} value={rate} onChange={(e) => setRate(Math.max(0, Number(e.target.value)))} className="mt-2 w-full border-2 border-foreground bg-background px-3 py-2" />
              </label>
            </div>

            <div className="frame-hard p-6" aria-live="polite">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Estimated total (incl. GST)</div>
              <div className="font-display text-4xl font-bold text-primary mb-6">{inr(work + gst)}</div>
              <table className="w-full text-sm">
                <tbody>
                  {SPLIT.map((s) => (
                    <tr key={s.name} className="border-b border-border"><td className="py-2">{s.name}</td><td className="text-right">{inr(work * s.share)}</td></tr>
                  ))}
                  <tr><td className="pt-3">Work value</td><td className="pt-3 text-right">{inr(work)}</td></tr>
                  <tr><td>GST @ 18%</td><td className="text-right">{inr(gst)}</td></tr>
                </tbody>
              </table>
              <a href="https://app.intorza.com" target="_blank" rel="noopener noreferrer" className="btn-hard btn-hard-hover mt-6 w-full">
                Turn this into a quotation <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-16">Default rates are illustrative examples, not market quotes. Adjust them for your city and materials.</p>

          <section className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Home interior cost FAQs</h2>
            <div className="grid gap-4">
              {faqs.map((f) => (
                <div key={f.q} className="frame-hard-sm p-6">
                  <h3 className="font-display text-lg font-semibold mb-2">{f.q}</h3>
                  <p className="text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <p className="text-muted-foreground">
            Ready to send a professional estimate? See our <Link to="/interior-quotation-format" className="text-primary underline underline-offset-4">interior quotation format and sample</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
