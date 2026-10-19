import { Sparkles } from "lucide-react";
import { PRO_MONTHLY_PRICE, PRO_ORIGINAL_PRICE } from "@/lib/site";

const ProCTA = ({
  quotation = false,
  description,
}: {
  quotation?: boolean;
  description?: string;
}) => {
  const price = `\u20B9${PRO_MONTHLY_PRICE.toLocaleString("en-IN")}`;
  const originalPrice = `\u20B9${PRO_ORIGINAL_PRICE.toLocaleString("en-IN")}`;

  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-y-2 border-foreground bg-secondary py-16 md:py-20"
    >
      <div className="container-custom relative z-10">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="text-left">
            <div className="mb-6 flex items-end gap-3">
              {originalPrice && (
                <span className="pb-2 font-display text-xl font-semibold text-primary-foreground/60 line-through decoration-intorza-amber decoration-2">
                  {originalPrice}
                </span>
              )}
              <span className="text-5xl md:text-7xl font-display font-bold text-primary-foreground">
                {price}
              </span>
              <span className="pb-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/80">
                INR / Month
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Unlock{" "}
              <span className="text-intorza-amber">
                {quotation ? "Professional Quotations" : "Pro Features"}
              </span>{" "}
              Today
            </h2>
            <p className="mb-8 max-w-xl text-lg text-primary-foreground/80 md:text-xl">
              {description ??
                (quotation
                  ? "Create unlimited interior quotations, export professional PDFs, and keep clients, invoices and project details together."
                  : "Get unlimited quotations, advanced invoicing, team collaboration & priority support")}
            </p>
          </div>
          <div className="lg:pb-2">
            <a
              href="https://app.intorza.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hard btn-hard-hover border-primary-foreground"
              style={{ boxShadow: "4px 4px 0 0 var(--primary-foreground)" }}
            >
              <Sparkles className="w-4 h-4 text-intorza-amber" />
              Get Pro Now
            </a>
            {
              <p className="pricing-assurance mt-6 whitespace-nowrap font-mono text-[9px] min-[375px]:text-[10px] font-bold uppercase tracking-normal sm:tracking-[0.16em] text-primary-foreground/60">
                Cancel anytime · No hidden fees · Instant access
              </p>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProCTA;
