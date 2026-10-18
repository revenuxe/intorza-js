import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProCTA from "@/components/ProCTA";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { quotationFaqs } from "@/data/quotation-page";

const checklist = [
  {
    title: "Define the scope",
    text: "Separate the kitchen, bedrooms, living areas and other work into clear sections. State what is included and what is excluded.",
  },
  {
    title: "Describe the materials",
    text: "Record the board type, finish, hardware and installation assumptions. A price is easier to review when the specification is clear.",
  },
  {
    title: "Show quantities and rates",
    text: "Use the unit appropriate to each item, such as square feet, running feet or a fixed amount. Review quantities against the site measurements.",
  },
  {
    title: "Set out the terms",
    text: "Include applicable taxes, payment milestones and quotation validity. Review the scope and terms with the client before work begins.",
  },
];

export default function InteriorQuotation() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection
          title={
            <>
              Best <span className="text-primary">Interior Quotation Tool</span> for Designers &amp;
              Contractors
            </>
          }
          subtitle="Create itemized interior quotations with clear work descriptions, quantities, rates and taxes. Export a professional PDF, track client decisions, and connect accepted quotations to projects and invoices in Intorza."

          image={{
            src: "/quotation-preview.webp",
            alt: "Intorza interior quotation builder with project details and itemized work",
            width: 1896,
            height: 893,
          }}
          secondaryLink={{ href: "/interior-quotation-format", label: "View Sample Format" }}
          highlights={[
            { value: "Itemized", label: "Clear scope and pricing" },
            { value: "PDF", label: "Client-ready quotations" },
          ]}
        />
        <ProCTA quotation />
        <section className="section-padding border-b-2 border-foreground">
          <div className="container-custom">
            <Breadcrumbs items={[{ name: "Interior Quotation", href: "/interior-quotation" }]} />
            <div className="mt-10 max-w-4xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Prepare an interior quotation your client can actually review
              </h2>
              <p className="text-lg text-muted-foreground mb-5">
                An interior quotation explains the proposed price for a defined scope of work. For a
                modular kitchen, wardrobe, apartment or turnkey project, a useful proposal shows the
                items, specifications, quantities and rates behind the total. It also gives the
                client a clear record of the assumptions and payment terms.
              </p>
              <p className="text-lg text-muted-foreground">
                Intorza brings those details into a connected quotation workflow. To start from a
                plan or project brief, explore the{" "}
                <Link
                  href="/ai-quotation-builder"
                  className="text-primary underline underline-offset-4"
                >
                  AI interior quotation builder
                </Link>
                . If you are still planning a budget, start with the{" "}
                <Link
                  href="/interior-cost-calculator"
                  className="text-primary underline underline-offset-4"
                >
                  interior cost calculator
                </Link>
                . If you want to review the structure before creating your own proposal, use the{" "}
                <Link
                  href="/interior-quotation-format"
                  className="text-primary underline underline-offset-4"
                >
                  interior quotation format and sample
                </Link>
                .
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
              {checklist.map((item, index) => (
                <div key={item.title} className="frame-hard-sm p-6">
                  <span className="font-mono text-xs text-primary">0{index + 1}</span>
                  <h3 className="font-display text-xl font-semibold mt-4 mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <nav
              aria-label="Quotation page sections"
              className="flex flex-wrap gap-5 mt-10 text-sm font-medium"
            >
              <a href="#features" className="underline underline-offset-4">
                Explore quotation features
              </a>
              <a href="#how-it-works" className="underline underline-offset-4">
                See the workflow
              </a>
              <a href="#pricing" className="underline underline-offset-4">
                Review Pro pricing
              </a>
            </nav>
          </div>
        </section>
        <FeaturesSection quotation />
        <HowItWorksSection quotation />
        <section className="section-padding bg-muted/30">
          <div className="container-custom max-w-5xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Use the right document at each stage of the project
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A budget estimate, a quotation and an invoice answer different questions. Keeping
              their purposes clear helps both your team and the client understand what has been
              proposed, agreed and billed.
            </p>
            <div className="overflow-x-auto border-2 border-foreground bg-background">
              <table className="w-full text-left">
                <caption className="sr-only">
                  Interior estimate, quotation and invoice comparison
                </caption>
                <thead className="bg-muted">
                  <tr>
                    <th scope="col" className="p-5">
                      Document
                    </th>
                    <th scope="col" className="p-5">
                      When to use it
                    </th>
                    <th scope="col" className="p-5">
                      What it explains
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <th scope="row" className="p-5 font-semibold">
                      Cost estimate
                    </th>
                    <td className="p-5">Early budget planning</td>
                    <td className="p-5">
                      An approximate cost based on the available scope and assumptions.
                    </td>
                  </tr>
                  <tr className="border-t border-border">
                    <th scope="row" className="p-5 font-semibold">
                      Interior quotation
                    </th>
                    <td className="p-5">After measurements and specifications are clear</td>
                    <td className="p-5">
                      The proposed price, itemized scope, exclusions and payment terms.
                    </td>
                  </tr>
                  <tr className="border-t border-border">
                    <th scope="row" className="p-5 font-semibold">
                      Invoice
                    </th>
                    <td className="p-5">When billing for the agreed work</td>
                    <td className="p-5">
                      The amount billed, applicable taxes and payment details.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-7 text-muted-foreground">
              Before sharing a quotation, confirm the material specifications, site quantities,
              scope exclusions and applicable tax treatment. The tool helps you organize the
              document; your team remains responsible for the pricing and terms.
            </p>
          </div>
        </section>
        <FAQSection faqs={quotationFaqs} title="Interior quotation tool FAQs" />
        <section className="section-padding border-t-2 border-foreground">
          <div className="container-custom">
            <h2 className="font-display text-3xl font-bold mb-8">
              Plan the budget, review the format, then build the quotation
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  href: "/interior-cost-calculator",
                  title: "Estimate the interior budget",
                  text: "Explore an indicative budget before deciding the detailed project scope.",
                },
                {
                  href: "/interior-quotation-format",
                  title: "Review a quotation sample",
                  text: "See an itemized example, document sections and terms to consider.",
                },
                {
                  href: "/contact",
                  title: "Talk to the Intorza team",
                  text: "Ask about the quotation workflow, plan options or getting started.",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="frame-hard-sm p-7 block hover:bg-muted/30"
                >
                  <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.text}</p>
                  <span className="inline-block mt-5 font-semibold text-primary">
                    Learn more <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <CTASection quotation />
      </main>
      <Footer />
    </div>
  );
}
