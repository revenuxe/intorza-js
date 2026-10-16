import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Printer } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import { socialImageMeta } from "@/lib/seo";

const PATH = "/interior-quotation-format";
const TITLE = "Interior Quotation Format & Sample (Free Template) | Intorza";
const DESCRIPTION =
  "Free interior design quotation format with a real sample: room-wise items, materials, rates, GST and payment terms. Copy it, print it, or create one online in minutes.";

const rows = [
  { room: "Living Room", item: "TV unit with back panel", spec: "BWP plywood, 1mm laminate", unit: "sq ft", qty: 48, rate: 1450 },
  { room: "Living Room", item: "False ceiling with cove light", spec: "Gypsum board, POP finish", unit: "sq ft", qty: 220, rate: 95 },
  { room: "Kitchen", item: "Modular base cabinets", spec: "BWP ply, acrylic shutters", unit: "rft", qty: 12, rate: 9500 },
  { room: "Kitchen", item: "Wall cabinets", spec: "BWR ply, laminate shutters", unit: "rft", qty: 10, rate: 6800 },
  { room: "Master Bedroom", item: "Sliding wardrobe (8 ft)", spec: "Ply carcass, soft-close", unit: "sq ft", qty: 64, rate: 1650 },
  { room: "All Rooms", item: "Painting (2 coats emulsion)", spec: "Putty, primer, emulsion", unit: "sq ft", qty: 2400, rate: 22 },
];

const faqs = [
  { q: "What should an interior design quotation include?", a: "Client and project details, a room-wise list of items, material specifications, unit, quantity, rate and amount for each line, subtotal, GST, total, payment schedule, timeline, validity and terms such as exclusions and warranty." },
  { q: "How is GST applied on an interior quotation in India?", a: "Interior works contracts are commonly billed at 18% GST. Show the subtotal, the GST percentage and amount, and the grand total separately so the client can see the tax clearly. Confirm the right rate for your service with your accountant." },
  { q: "Should I quote per square foot or lump sum?", a: "Per square foot or running foot works best for carpentry, ceilings and painting because clients can compare items. Lump sum suits small fixed-scope jobs. Many designers mix both in one quotation." },
  { q: "How long should a quotation be valid?", a: "Most interior quotations are valid for 15 to 30 days because material prices change. State the validity date clearly on the document." },
];

const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

export const Route = createFileRoute("/interior-quotation-format")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "interior quotation format, interior design quotation sample, quotation format for interior work, interior design quotation, interior quotation template" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}${PATH}` },
      { property: "og:type", content: "article" },
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
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Interior Quotation Format", item: `${SITE_URL}${PATH}` },
          ],
        }),
      },
    ],
  }),
  component: QuotationFormatPage,
});

function QuotationFormatPage() {
  const subtotal = rows.reduce((s, r) => s + r.qty * r.rate, 0);
  const gst = Math.round(subtotal * 0.18);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-5xl">
          <span className="eyebrow-tag mb-6">Free template</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Interior Quotation Format with a Real Sample
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10">
            A clear quotation wins more interior projects. Below is a ready-to-use interior design quotation
            format, filled in with a sample 2BHK job, so you can see exactly what to include — room-wise items,
            materials, rates, GST and payment terms.
          </p>

          <div className="frame-hard p-6 md:p-8 mb-6 overflow-x-auto">
            <div className="flex flex-wrap justify-between gap-4 border-b-2 border-foreground pb-4 mb-4">
              <div>
                <div className="font-display text-xl font-bold">QUOTATION</div>
                <div className="text-sm text-muted-foreground">No. Q-2026-014 · Valid for 30 days</div>
              </div>
              <div className="text-sm text-muted-foreground text-right">
                <div className="font-semibold text-foreground">Client: Sample Client</div>
                <div>Project: 2BHK interiors, Pune</div>
              </div>
            </div>
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b-2 border-foreground text-left font-mono text-[10px] uppercase tracking-[0.14em]">
                  <th className="py-2 pr-2">Room</th><th className="pr-2">Item</th><th className="pr-2">Specification</th>
                  <th className="pr-2">Unit</th><th className="pr-2 text-right">Qty</th><th className="pr-2 text-right">Rate</th><th className="text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.item} className="border-b border-border">
                    <td className="py-2 pr-2">{r.room}</td><td className="pr-2">{r.item}</td><td className="pr-2 text-muted-foreground">{r.spec}</td>
                    <td className="pr-2">{r.unit}</td><td className="pr-2 text-right">{r.qty}</td><td className="pr-2 text-right">{inr(r.rate)}</td>
                    <td className="text-right">{inr(r.qty * r.rate)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr><td colSpan={6} className="pt-3 text-right">Subtotal</td><td className="pt-3 text-right">{inr(subtotal)}</td></tr>
                <tr><td colSpan={6} className="text-right">GST @ 18%</td><td className="text-right">{inr(gst)}</td></tr>
                <tr className="font-bold"><td colSpan={6} className="pt-2 text-right">Grand Total</td><td className="pt-2 text-right">{inr(subtotal + gst)}</td></tr>
              </tfoot>
            </table>
            <div className="mt-6 grid gap-4 border-t-2 border-foreground pt-4 text-sm md:grid-cols-2">
              <div><div className="font-semibold mb-1">Payment schedule</div><p className="text-muted-foreground">40% on booking · 40% on carpentry start · 20% on handover</p></div>
              <div><div className="font-semibold mb-1">Terms</div><p className="text-muted-foreground">Electrical and civil work excluded unless listed. 1-year warranty on carpentry hardware.</p></div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-10">Rates in this sample are illustrative only. Use your own local rates.</p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a href="https://app.intorza.com" target="_blank" rel="noopener noreferrer" className="btn-hard btn-hard-hover">
              Create this quotation online <ArrowRight className="w-4 h-4" />
            </a>
            <button type="button" onClick={() => window.print()} className="btn-hard-ghost btn-hard-hover">
              <Printer className="w-4 h-4" /> Print sample
            </button>
          </div>

          <section className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">What every interior quotation format must include</h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {["Your business name, GSTIN and contact details", "Client name, site address and quotation number", "Room-wise line items with clear specifications", "Unit (sq ft / rft / nos), quantity and rate", "Subtotal, GST and grand total shown separately", "Payment milestones linked to work stages", "Project timeline and quotation validity date", "Exclusions, warranty and change-order terms"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-muted-foreground"><span className="bullet-diamond mt-2" />{t}</li>
              ))}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Interior quotation format FAQs</h2>
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
            Want to estimate a budget first? Try our <Link to="/interior-cost-calculator" className="text-primary underline underline-offset-4">interior cost calculator</Link>, or read guides on the <Link to="/blog" className="text-primary underline underline-offset-4">Intorza blog</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
