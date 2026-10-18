import CostCalculator from "@/components/CostCalculator";
import CalculatorGuide from "@/components/content/CalculatorGuide";

import { faqs } from "@/data/interior-cost-calculator-faqs";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-5xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Interior Design Cost Calculator
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10">
            Get a quick estimate of your home interior cost. Choose your home size and finish level,
            adjust the area and rate to match your city, and see an illustrative room-wise
            allocation and example tax calculation.
          </p>

          <CostCalculator />
          <p className="text-xs text-muted-foreground mb-16">
            Default rates, room shares and the fixed 18% tax calculation are illustrative planning
            assumptions. They are not a market quotation or a determination of the tax applicable to
            your project.
          </p>

          <CalculatorGuide />
          <section className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
              Home interior cost FAQs
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
            Ready to create the detailed proposal? Explore our{" "}
            <Link href="/interior-quotation" className="text-primary underline underline-offset-4">
              interior quotation tool
            </Link>{" "}
            or review the{" "}
            <Link
              href="/interior-quotation-format"
              className="text-primary underline underline-offset-4"
            >
              interior quotation format and sample
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
