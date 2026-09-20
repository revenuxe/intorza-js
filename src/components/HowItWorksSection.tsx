import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { number: "01", title: "Create Quotation", description: "Build professional quotations with our intuitive builder." },
  { number: "02", title: "Login", description: "Sign up and log in to your secure Intorza account." },
  { number: "03", title: "Save & Send", description: "Save quotations and send them directly to clients via email or shareable link." },
  { number: "04", title: "Manage Invoices", description: "Convert accepted quotations to invoices, track payments, and manage your billing lifecycle." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding">
    <div className="container-custom">
      <div className="mb-14 max-w-3xl text-left">
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">How It Works</span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Get Started in <span className="text-gradient">4 Simple Steps</span>
        </h2>
        <p className="text-lg text-muted-foreground">Intorza is designed to be intuitive and easy to use. Start managing your interior business in minutes.</p>
      </div>

      <div className="relative">
        <div className="grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative group">
              <div className="h-full border-b border-r border-border bg-card p-6 transition-colors hover:bg-muted/30">
                <div className="relative z-10 mb-8 flex h-10 w-10 items-center justify-center border border-primary text-primary">
                  <span className="text-sm font-bold">{step.number}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <Button size="lg" asChild>
          <a href="https://www.app.intorza.com" target="_blank" rel="noopener noreferrer">
            Start Your Free Trial <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
