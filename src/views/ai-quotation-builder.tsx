import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProCTA from "@/components/ProCTA";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { aiQuotationFaqs, aiSteps } from "@/data/ai-quotation-page";

export default function AIQuotationBuilder() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection
          title={
            <>
              AI <span className="text-primary">Interior Design Quotation</span> Tool
            </>
          }
          subtitle="Turn a floor plan or project brief into an editable interior quotation draft with Intorza Studio. Review the room-wise scope, refine quantities and rates, and prepare a clear proposal for your client."
          primaryLabel="Build with AI"
          video={{
            src: "/videos/ai-interior-quotation-builder.mp4",
            poster: "/videos/ai-interior-quotation-poster.webp",
            width: 1920,
            height: 1080,
          }}
          secondaryLink={{ href: "#how-it-works", label: "See How It Works" }}
          highlights={[
            { value: "AI Floor Plan Analysis", label: "Upload your floor plan" },
            { value: "AI Quotation Builder", label: "Start with project details" },
          ]}
        />
        <ProCTA
          quotation
          description="Take your reviewed draft through professional PDF quotations, client records and invoicing with Intorza Pro. AI generation uses credits; check the balance and usage requirement in the app."
        />
        <section className="section-padding border-b-2 border-foreground">
          <div className="container-custom">
            <Breadcrumbs
              items={[{ name: "AI Quotation Builder", href: "/ai-quotation-builder" }]}
            />
            <div className="mt-10 max-w-4xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                From your interior project brief to a structured quotation draft
              </h2>
              <p className="text-lg text-muted-foreground mb-5">
                Preparing an interior proposal starts with understanding what the client needs. A
                kitchen renovation, wardrobe package or complete apartment can involve different
                rooms, materials and installation conditions. Intorza's AI quotation builder gives
                you a starting draft to review against that scope, with your team making the final
                decisions on specifications and price.
              </p>
              <p className="text-lg text-muted-foreground mb-5">
                The demo above introduces two routes in Intorza Studio: Floor Plan Analysis for a
                drawing, and AI Quotation Builder for project details without a drawing. It then
                shows an editable estimate draft. The video plays silently and repeats so you can
                see the workflow while exploring the page.
              </p>
              <p className="text-lg text-muted-foreground">
                Already have a complete bill of quantities? Use the{" "}
                <Link
                  href="/interior-quotation"
                  className="text-primary underline underline-offset-4"
                >
                  interior quotation tool
                </Link>{" "}
                to organize your proposal. For an early budget conversation, try the{" "}
                <Link
                  href="/interior-cost-calculator"
                  className="text-primary underline underline-offset-4"
                >
                  interior cost calculator
                </Link>{" "}
                before defining the detailed scope.
              </p>
            </div>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <article className="frame-hard-sm p-7">
                <h3 className="font-display text-2xl font-semibold mb-4">
                  Start with a floor plan
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Use Floor Plan Analysis when you have a drawing that clearly shows the rooms and
                  available dimensions. Review the resulting room coverage against the original
                  plan. Confirm measurements on site and add work that is not represented in the
                  drawing, such as finish upgrades or installation requirements.
                </p>
              </article>
              <article className="frame-hard-sm p-7">
                <h3 className="font-display text-2xl font-semibold mb-4">
                  Start with project details
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Use AI Quotation Builder when the scope begins as a client brief. Describe the
                  property, rooms and required interior work. Include known dimensions, material
                  preferences and budget context. A specific brief gives your team a more useful
                  draft to refine than a broad request for a complete interior price.
                </p>
              </article>
            </div>
            <p className="mt-7 text-muted-foreground">
              AI workflows use credits. Check the current balance and generation requirement inside
              the app; the standard quotation allowance does not imply unlimited AI usage.{" "}
              <Link href="/contact" className="text-primary underline underline-offset-4">
                Ask the Intorza team about plans and AI credits
              </Link>
              .
            </p>
          </div>
        </section>
        <section id="how-it-works" className="section-padding border-b-2 border-foreground">
          <div className="container-custom">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Create and review your AI interior quotation in four steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-10">
              Keep the convenience of an AI-generated starting point and the detail of a
              professionally reviewed proposal. The final scope should match the actual project and
              the agreement you want the client to approve.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiSteps.map((step, i) => (
                <article key={step.title} className="frame-hard-sm p-6">
                  <span className="font-mono text-primary">0{i + 1}</span>
                  <h3 className="font-display text-xl font-semibold mt-5 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section-padding bg-muted/30 border-b-2 border-foreground">
          <div className="container-custom max-w-5xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              What makes an AI quotation ready for a client?
            </h2>
            <p className="text-lg text-muted-foreground mb-7">
              A generated total is only part of a useful interior proposal. Make the assumptions
              visible so the client can compare the work and your team can deliver the agreed
              specification.
            </p>
            <ul className="grid md:grid-cols-2 gap-5">
              {[
                [
                  "Room and work coverage",
                  "Confirm every agreed room and work package is included. Identify civil work, electrical changes, appliances and other exclusions explicitly.",
                ],
                [
                  "Materials and measurements",
                  "Specify board grades, finishes and hardware. Verify dimensions, quantities and units against the site rather than relying on an inferred measurement.",
                ],
                [
                  "Rates and project conditions",
                  "Check current supplier and labour costs, transport and installation access. Adjust the draft for the actual project location and finish selection.",
                ],
                [
                  "Commercial terms",
                  "Review applicable taxes, payment milestones, quotation validity and the process for scope changes. Separate optional upgrades from the agreed base scope.",
                ],
              ].map(([title, text]) => (
                <li key={title} className="frame-hard-sm p-6">
                  <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-muted-foreground">{text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-muted-foreground">
              Use the{" "}
              <Link
                href="/interior-quotation-format"
                className="text-primary underline underline-offset-4"
              >
                interior quotation format and sample
              </Link>{" "}
              as a document checklist when reviewing your AI draft. The draft supports preparation;
              your team confirms the final measurements, rates and terms.
            </p>
          </div>
        </section>
        <FeaturesSection
          quotation
          title="Keep your reviewed AI quotation connected to the whole project"
        />
        <FAQSection faqs={aiQuotationFaqs} title="AI interior quotation builder FAQs" />
        <CTASection quotation />
      </main>
      <Footer />
    </div>
  );
}
