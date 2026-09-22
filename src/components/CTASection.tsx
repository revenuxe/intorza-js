import { ArrowRight, FileText, Receipt, Users } from "lucide-react";

interface Props {
  countryName?: string;
  trustedByText?: string;
}

const CTASection = ({ countryName, trustedByText }: Props) => {
  const actions = [
    { icon: FileText, label: "Create Quotation" },
    { icon: Receipt, label: "Generate Invoice" },
    { icon: Users, label: "Manage Clients" },
  ];
  return (
    <section className="section-padding relative overflow-hidden border-t-2 border-foreground bg-primary">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl text-left">
          <span className="eyebrow-tag-invert mb-8">
            {trustedByText ?? "Trusted by 500+ Interior Professionals"}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Start Managing Your<br />Interior Projects{countryName ? ` in ${countryName}` : " Today"}
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mb-10">
            Join hundreds of interior designers and contractors{countryName ? ` in ${countryName}` : ""} who have streamlined their business operations with Intorza.
          </p>
          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            {actions.map((a) => (
              <a
                key={a.label}
                href="https://www.app.intorza.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-2 border-primary-foreground px-5 py-4 font-display text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-transform duration-150 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                style={{ boxShadow: "4px 4px 0 0 var(--primary-foreground)" }}
              >
                <a.icon className="w-5 h-5" />
                {a.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="https://www.app.intorza.com" target="_blank" rel="noopener noreferrer" className="btn-hard-light btn-hard-hover">
              Get Started Now <ArrowRight className="w-4 h-4" />
            </a>
            <a href="mailto:intorza.com@gmail.com" className="btn-hard-light-ghost">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
