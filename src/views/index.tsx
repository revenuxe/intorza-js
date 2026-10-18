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

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
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
