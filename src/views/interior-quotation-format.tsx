import QuotationReviewGuide from "@/components/content/QuotationReviewGuide";
import PrintButton from "@/components/PrintButton";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { faqs } from "@/data/interior-quotation-format-faqs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const rows = [
  {
    room: "Living Room",
    item: "TV unit with back panel",
    spec: "BWP plywood, 1mm laminate",
    unit: "sq ft",
    qty: 48,
    rate: 1450,
  },
  {
    room: "Living Room",
    item: "False ceiling with cove light",
    spec: "Gypsum board, POP finish",
    unit: "sq ft",
    qty: 220,
    rate: 95,
  },
  {
    room: "Kitchen",
    item: "Modular base cabinets",
    spec: "BWP ply, acrylic shutters",
    unit: "rft",
    qty: 12,
    rate: 9500,
  },
  {
    room: "Kitchen",
    item: "Wall cabinets",
    spec: "BWR ply, laminate shutters",
    unit: "rft",
    qty: 10,
    rate: 6800,
  },
  {
    room: "Master Bedroom",
    item: "Sliding wardrobe (8 ft)",
    spec: "Ply carcass, soft-close",
    unit: "sq ft",
    qty: 64,
    rate: 1650,
  },
  {
    room: "All Rooms",
    item: "Painting (2 coats emulsion)",
    spec: "Putty, primer, emulsion",
    unit: "sq ft",
    qty: 2400,
    rate: 22,
  },
];

const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

export default function QuotationFormatPage() {
  const subtotal = rows.reduce((s, r) => s + r.qty * r.rate, 0);
  const gst = Math.round(subtotal * 0.18);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-5xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Interior Quotation Format: Free Sample for Home Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10">
            Use this room-wise interior design quotation sample as a starting point for a home
            project. It shows how to list work items, materials, units, quantities, rates, tax and
            payment terms in one estimate. The example rates are illustrative; replace them with
            your measured quantities and current local prices.
          </p>

          <p className="max-w-3xl border-l-4 border-primary pl-4 text-muted-foreground mb-10">
            A useful interior work quotation identifies the client and project, explains each item
            and material, shows how every amount is calculated, and separates the subtotal,
            applicable tax and final total.
          </p>

          <div className="frame-hard p-6 md:p-8 mb-6 overflow-x-auto">
            <div className="flex flex-wrap justify-between gap-4 border-b-2 border-foreground pb-4 mb-4">
              <div>
                <div className="font-display text-xl font-bold">QUOTATION</div>
                <div className="text-sm text-muted-foreground">
                  No. Q-2026-014 · Valid for 30 days
                </div>
              </div>
              <div className="text-sm text-muted-foreground text-right">
                <div className="font-semibold text-foreground">Client: Sample Client</div>
                <div>Project: 2BHK interiors, Pune</div>
              </div>
            </div>
            <table
              className="w-full min-w-[640px] text-sm"
              aria-label="Sample interior design quotation for a 2BHK home"
            >
              <caption className="sr-only">
                Room-wise materials, quantities, rates and amounts for a sample Pune 2BHK interior
                project
              </caption>
              <thead>
                <tr className="border-b-2 border-foreground text-left font-mono text-[10px] uppercase tracking-[0.14em]">
                  <th className="py-2 pr-2">Room</th>
                  <th className="pr-2">Item</th>
                  <th className="pr-2">Specification</th>
                  <th className="pr-2">Unit</th>
                  <th className="pr-2 text-right">Qty</th>
                  <th className="pr-2 text-right">Rate</th>
                  <th className="text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.item} className="border-b border-border">
                    <td className="py-2 pr-2">{r.room}</td>
                    <td className="pr-2">{r.item}</td>
                    <td className="pr-2 text-muted-foreground">{r.spec}</td>
                    <td className="pr-2">{r.unit}</td>
                    <td className="pr-2 text-right">{r.qty}</td>
                    <td className="pr-2 text-right">{inr(r.rate)}</td>
                    <td className="text-right">{inr(r.qty * r.rate)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={6} className="pt-3 text-right">
                    Subtotal
                  </td>
                  <td className="pt-3 text-right">{inr(subtotal)}</td>
                </tr>
                <tr>
                  <td colSpan={6} className="text-right">
                    GST @ 18%
                  </td>
                  <td className="text-right">{inr(gst)}</td>
                </tr>
                <tr className="font-bold">
                  <td colSpan={6} className="pt-2 text-right">
                    Grand Total
                  </td>
                  <td className="pt-2 text-right">{inr(subtotal + gst)}</td>
                </tr>
              </tfoot>
            </table>
            <div className="mt-6 grid gap-4 border-t-2 border-foreground pt-4 text-sm md:grid-cols-2">
              <div>
                <div className="font-semibold mb-1">Payment schedule</div>
                <p className="text-muted-foreground">
                  40% on booking · 40% on carpentry start · 20% on handover
                </p>
              </div>
              <div>
                <div className="font-semibold mb-1">Terms</div>
                <p className="text-muted-foreground">
                  Electrical and civil work excluded unless listed. 1-year warranty on carpentry
                  hardware.
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-10">
            Rates in this sample are illustrative only. Use your own local rates.
          </p>

          <div className="flex flex-wrap gap-4 mb-16 print:hidden">
            <Button asChild className="btn-hard btn-hard-hover">
              <a href="https://app.intorza.com" target="_blank" rel="noopener noreferrer">
                Create a quotation online <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <PrintButton />
          </div>

          <QuotationReviewGuide />
          <section className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
              What every interior quotation format must include
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {[
                "Your business name, GSTIN and contact details",
                "Client name, site address and quotation number",
                "Room-wise line items with clear specifications",
                "Unit (sq ft / rft / nos), quantity and rate",
                "Subtotal, GST and grand total shown separately",
                "Payment milestones linked to work stages",
                "Project timeline and quotation validity date",
                "Exclusions, warranty and change-order terms",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-muted-foreground">
                  <span className="bullet-diamond mt-2" />
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16 max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">
              How to prepare an interior design quotation
            </h2>
            <ol className="space-y-4 text-muted-foreground">
              <li>
                <strong className="text-foreground">1. Confirm the scope.</strong> Record the site,
                rooms, measurements, work included and any client-supplied materials. Mark
                assumptions that still need a site check.
              </li>
              <li>
                <strong className="text-foreground">2. Break the work into items.</strong> Group
                carpentry, kitchen, ceiling, painting and other work by room. Describe the material,
                finish and unit so the client can compare like with like.
              </li>
              <li>
                <strong className="text-foreground">3. Show quantities and rates.</strong> State
                whether an item is measured per square foot, running foot, piece or as a fixed
                amount. Multiply quantity by rate for each line and check the measurements before
                sending.
              </li>
              <li>
                <strong className="text-foreground">4. Explain tax and payment stages.</strong> Show
                the subtotal, applicable taxes and final amount separately. Add payment milestones,
                validity, estimated timeline, exclusions and warranty terms.
              </li>
              <li>
                <strong className="text-foreground">5. Review before sharing.</strong> Check the
                client name, project address, arithmetic, specifications and validity date. Keep a
                copy of each revision so everyone is referring to the same offer.
              </li>
            </ol>
            <p className="mt-5 text-sm text-muted-foreground">
              Tax treatment depends on the nature of the work and your registration. Confirm the
              applicable rate and invoice treatment with your tax adviser; the sample's 18% is for
              illustration only.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
              Interior quotation format FAQs
            </h2>
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
            Ready to build your own proposal? Use our{" "}
            <Link href="/interior-quotation" className="text-primary underline underline-offset-4">
              interior quotation tool
            </Link>
            . Want to estimate a budget first? Try the{" "}
            <Link
              href="/interior-cost-calculator"
              className="text-primary underline underline-offset-4"
            >
              interior cost calculator
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
