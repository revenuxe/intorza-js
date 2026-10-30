import HomeWorkflowGuide from "@/components/content/HomeWorkflowGuide";
import FAQSection from "@/components/FAQSection";

import CTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProCTA from "@/components/ProCTA";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProductResources from "@/components/ProductResources";
import Link from "next/link";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border-2 focus:border-foreground focus:bg-background focus:px-4 focus:py-3 focus:font-semibold focus:text-foreground focus:shadow-[4px_4px_0_0_var(--foreground)]"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <HeroSection showProductHunt />
        <section className="border-b-2 border-foreground bg-muted/30 py-10 md:py-14">
          <div className="container-custom grid gap-5 md:grid-cols-[.75fr_1.25fr] md:gap-12">
            <h2 className="max-w-sm font-display text-2xl font-bold leading-tight md:text-3xl">
              Interior design project management, from first estimate to final invoice
            </h2>
            <div className="max-w-3xl space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Intorza is interior design project management software for designers, contractors
                and studios. Keep client details, site measurements, project quotations, invoices
                and payment records connected in one workspace, so the next step is easier to
                follow as a project moves from planning into delivery.
              </p>
              <p>
                Build an itemized proposal with the <Link href="/interior-quotation" className="font-semibold text-foreground underline decoration-primary underline-offset-4">interior quotation tool</Link>,
                review the <Link href="/interior-design-dashboard" className="font-semibold text-foreground underline decoration-primary underline-offset-4">project dashboard</Link>,
                and track billing with <Link href="/interior-invoice-software" className="font-semibold text-foreground underline decoration-primary underline-offset-4">interior invoice management</Link>.
                Start with the parts of your workflow you need today, then explore the tools as your
                studio grows.
              </p>
            </div>
          </div>
        </section>
        <ProCTA />
        <FeaturesSection />
        <HowItWorksSection />
        <ProductResources />
        <HomeWorkflowGuide />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
