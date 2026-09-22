import { ArrowRight, FolderOpen } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.webp";

interface Props {
  title?: React.ReactNode;
  subtitle?: string;
}

const HeroSection = ({ title, subtitle }: Props) => {
  const benefits = ["No credit card required", "Setup in 2 minutes", "Instant access"];
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden border-b-2 border-foreground bg-background pb-16 pt-32 md:pb-20 md:pt-36">
      <div className="container-custom">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          <div className="min-w-0 text-left lg:col-span-5">
            <span className="eyebrow-tag mb-6">Built for interior professionals</span>
            <h1 className="font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              {title ?? (
                <>
                  Best <span className="text-primary">Interior Design Software</span> for Project
                  Management
                </>
              )}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {subtitle ??
                "All-in-one interior design project management software with quotation builder, invoice generator, client management & team collaboration. Trusted by 500+ interior designers and contractors worldwide."}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.app.intorza.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hard btn-hard-hover"
              >
                Create Quotation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.app.intorza.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hard-ghost btn-hard-hover"
              >
                <FolderOpen className="w-4 h-4" />
                My Projects
              </a>
            </div>

            <div className="mt-10 grid gap-3 border-t-2 border-foreground pt-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="bullet-diamond" />
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-w-0 lg:col-span-7">
            <div className="absolute -bottom-4 -right-4 hidden h-full w-full border-2 border-foreground md:block" />
            <div className="frame-box relative overflow-hidden">
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b-2 border-foreground bg-muted px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 bg-destructive" />
                  <div className="h-2 w-2 bg-intorza-amber" />
                  <div className="h-2 w-2 bg-intorza-green" />
                </div>
                <span className="truncate text-center font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Intorza workspace
                </span>
                <span className="h-2 w-8 bg-foreground/20" />
              </div>
              <img src={dashboardPreview} alt="Intorza dashboard preview" className="w-full h-auto" fetchPriority="high" decoding="async" width="1280" height="800" />
            </div>
            <div className="relative mt-8 grid grid-cols-2 border-2 border-foreground bg-card">
              <div className="p-5">
                <div className="font-display text-2xl font-bold text-intorza-green">+45%</div>
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Efficiency boost</div>
              </div>
              <div className="border-l-2 border-foreground p-5">
                <div className="font-display text-2xl font-bold text-foreground">500+</div>
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Interior professionals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
