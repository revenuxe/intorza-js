import { useState, useEffect } from "react";
import { Sparkles, Crown, Zap } from "lucide-react";

interface Props {
  price?: string;
  currency?: string;
  countryName?: string;
}

const ProCTA = ({ price = "₹1", currency = "INR", countryName }: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative overflow-hidden border-y-2 border-foreground bg-secondary py-16 md:py-20">
      <div className="container-custom relative z-10">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="text-left">
            <span className="eyebrow-tag-invert mb-6 inline-flex items-center gap-2">
              <Crown className="w-3 h-3 text-intorza-amber" />
              Limited Time Offer
              <Zap className="w-3 h-3 text-intorza-amber" />
            </span>
            <div className="mb-6 flex items-end gap-3">
              <span className="text-5xl md:text-7xl font-display font-bold text-primary-foreground">{price}</span>
              <span className="pb-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/80">{currency} / Month</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Unlock <span className="text-intorza-amber">Pro Features</span>
              {countryName ? ` in ${countryName}` : " Today"}
            </h2>
            <p className="mb-8 max-w-xl text-lg text-primary-foreground/80 md:text-xl">
              Get unlimited quotations, advanced invoicing, team collaboration & priority support
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
            {mounted && (
              <p className="mt-6 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-primary-foreground/60">
                Cancel anytime · No hidden fees · Instant access
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProCTA;
