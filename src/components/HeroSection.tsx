import { Button } from "@/components/ui/button";
import { ArrowRight, FolderOpen, Check } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.webp";

interface Props {
  title?: React.ReactNode;
  subtitle?: string;
}

const HeroSection = ({ title, subtitle }: Props) => {
  const benefits = ["No credit card required", "Setup in 2 minutes", "Instant access"];
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden border-b border-border bg-background pb-16 pt-32 md:pb-20 md:pt-36">
      <div className="container-custom">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          <div className="min-w-0 text-left lg:col-span-5">
            <p className="mb-6 text-sm font-semibold uppercase text-primary">Built for interior professionals</p>
            <h1 className="font-display text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              {title ?? (
                <>
                  Best <span className="text-gradient">Interior Design Software</span> for Project
                  Management
                </>
              )}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {subtitle ??
                "All-in-one interior design project management software with quotation builder, invoice generator, client management & team collaboration. Trusted by 500+ interior designers and contractors worldwide."}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild className="group h-12 px-7 shadow-none">
                <a href="https://www.app.intorza.com" target="_blank" rel="noopener noreferrer">
                  Create Quotation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-7 shadow-none">
                <a href="https://www.app.intorza.com" target="_blank" rel="noopener noreferrer">
                  <FolderOpen className="w-5 h-5 mr-2" />
                  My Projects
                </a>
              </Button>
            </div>

            <div className="mt-10 grid gap-3 border-t border-border pt-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-intorza-green/15">
                    <Check className="h-3 w-3 text-intorza-green" strokeWidth={3} />
                  </div>
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-w-0 lg:col-span-7">
            <div className="overflow-hidden rounded-lg border border-border bg-card shadow-[0_24px_70px_-36px_color-mix(in_oklab,var(--foreground)_35%,transparent)]">
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-border bg-muted/40 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-destructive/60" />
                  <div className="h-2 w-2 rounded-full bg-intorza-amber" />
                  <div className="h-2 w-2 rounded-full bg-intorza-green" />
                </div>
                <span className="truncate text-center text-xs text-muted-foreground">Intorza workspace</span>
                <span className="h-2 w-8 rounded-full bg-border" />
              </div>
              <img src={dashboardPreview} alt="Intorza dashboard preview" className="w-full h-auto" fetchPriority="high" decoding="async" width="1280" height="800" />
            </div>
            <div className="mt-4 grid grid-cols-2 border-y border-border">
              <div className="py-4 pr-4">
                <div className="font-display text-2xl font-bold text-intorza-green">+45%</div>
                <div className="text-xs text-muted-foreground">Efficiency boost</div>
              </div>
              <div className="border-l border-border py-4 pl-5">
                <div className="font-display text-2xl font-bold text-foreground">500+</div>
                <div className="text-xs text-muted-foreground">Interior professionals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
