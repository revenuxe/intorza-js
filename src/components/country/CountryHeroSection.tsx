import { ArrowRight, FolderOpen, Users } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.webp";
import type { CountryData } from "@/data/countries";

const CountryHeroSection = ({ country }: { country: CountryData }) => {
  const benefits = ["No credit card required", "Setup in 2 minutes", "Instant access"];
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b-2 border-foreground pb-16 pt-28 md:pt-32">
      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-left">
            <span className="eyebrow-tag mb-6">Interior software · {country.name}</span>
            <h1 className="font-display text-3xl font-bold leading-[1.08] text-foreground md:text-4xl lg:text-5xl mb-6">
              Best <span className="text-primary">Interior Design Software</span> in {country.name}
            </h1>
            <p className="mb-8 max-w-xl text-lg text-muted-foreground md:text-xl">
              {country.heroSubtitle}
            </p>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.app.intorza.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hard btn-hard-hover"
              >
                Create Quotation <ArrowRight className="w-4 h-4" />
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
            <div className="grid gap-3 border-t-2 border-foreground pt-6 sm:grid-cols-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="bullet-diamond" />
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-4 -right-4 hidden h-full w-full border-2 border-foreground md:block" />
            <div className="frame-box relative overflow-hidden">
              <div className="flex items-center gap-2 border-b-2 border-foreground bg-muted px-4 py-3">
                <div className="h-2 w-2 bg-destructive" />
                <div className="h-2 w-2 bg-intorza-amber" />
                <div className="h-2 w-2 bg-intorza-green" />
              </div>
              <img
                src={dashboardPreview}
                alt={`Intorza dashboard for ${country.name}`}
                className="w-full h-auto"
                fetchPriority="high"
                decoding="async"
                width="1280"
                height="800"
              />
            </div>
            <div className="relative mt-8 inline-flex items-center gap-4 border-2 border-foreground bg-card px-5 py-4 shadow-[5px_5px_0_0_var(--foreground)]">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <div className="font-display text-2xl font-bold text-foreground">500+</div>
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Happy users
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryHeroSection;
