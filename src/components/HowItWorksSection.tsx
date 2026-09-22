import { ArrowRight } from "lucide-react";

const steps = [
  { number: "01", title: "Create Quotation", description: "Build professional quotations with our intuitive builder." },
  { number: "02", title: "Login", description: "Sign up and log in to your secure Intorza account." },
  { number: "03", title: "Save & Send", description: "Save quotations and send them directly to clients via email or shareable link." },
  { number: "04", title: "Manage Invoices", description: "Convert accepted quotations to invoices, track payments, and manage your billing lifecycle." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding border-b-2 border-foreground">
    <div className="container-custom">
      <div className="mb-14 max-w-3xl text-left">
        <span className="eyebrow-tag mb-6">How It Works</span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Get Started in <span className="text-primary">4 Simple Steps</span>
        </h2>
        <p className="text-lg text-muted-foreground">Intorza is designed to be intuitive and easy to use. Start managing your interior business in minutes.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number} className="frame-hard-sm p-6 transition-transform duration-150 hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-none">
            <div className="mb-8 inline-flex h-10 w-10 items-center justify-center border-2 border-foreground bg-[color-mix(in_oklab,var(--intorza-amber)_25%,transparent)] font-mono text-xs font-bold text-foreground">
              {step.number}
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">{step.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <a
          href="https://www.app.intorza.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hard btn-hard-hover"
        >
          Start Your Free Trial <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
