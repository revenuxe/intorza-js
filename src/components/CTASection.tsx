import { ArrowRight, FileText, Receipt, Users } from "lucide-react";
import Link from "next/link";

const CTASection = ({ quotation = false }: { quotation?: boolean }) => {
  const actions = [
    { icon: FileText, label: "Create Quotation" },
    { icon: Receipt, label: "Generate Invoice" },
    { icon: Users, label: "Manage Clients" },
  ];
  return (
    <section className="section-padding relative overflow-hidden border-t-2 border-foreground bg-primary">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl text-left">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            {quotation ? (
              <>
                Build Your Next
                <br />
                Interior Quotation in Intorza
              </>
            ) : (
              <>
                Start Managing Your
                <br />
                Interior Projects Today
              </>
            )}
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground max-w-2xl mb-10">
            {quotation
              ? "Bring your work items, pricing and client details together, then move from the proposal to the project with a clearer record of the agreed scope."
              : "Join hundreds of interior designers and contractors who have streamlined their business operations with Intorza."}
          </p>
          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            {actions.map((a) => (
              <a
                key={a.label}
                href="https://app.intorza.com"
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
            <a
              href="https://app.intorza.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hard-light btn-hard-hover"
            >
              Get Started Now <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/contact" className="btn-hard-light-ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
