import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
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
    <section className="relative overflow-hidden border-y border-border bg-secondary py-16 md:py-20">
      <div className="container-custom relative z-10">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="text-left">
          <div className="mb-6 inline-flex items-center gap-2 border border-secondary-foreground/20 px-4 py-2">
            <Crown className="w-4 h-4 text-intorza-amber" />
            <span className="text-primary-foreground/90 text-sm font-medium">Limited Time Offer</span>
            <Zap className="w-4 h-4 text-intorza-amber" />
          </div>
           <div className="mb-6">
            <span className="text-5xl md:text-7xl font-display font-bold text-primary-foreground">{price}</span>
            <span className="text-xl md:text-2xl text-primary-foreground/80 ml-2">{currency} / Month</span>
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
           <Button asChild size="lg" className="h-12 bg-primary px-8 text-base font-semibold text-primary-foreground shadow-none hover:bg-primary/90">
            <a href="https://www.app.intorza.com/" target="_blank" rel="noopener noreferrer">
              <Sparkles className="w-5 h-5 mr-2 text-intorza-amber" />
              Get Pro Now
            </a>
          </Button>
           {mounted && (
            <p className="mt-6 text-sm text-primary-foreground/60">Cancel anytime · No hidden fees · Instant access</p>
          )}
          </div>
         </div>
      </div>
    </section>
  );
};

export default ProCTA;
