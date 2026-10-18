import AboutGuide from "@/components/content/AboutGuide";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Eye, Heart, Sparkles, Target, Zap } from "lucide-react";
import Link from "next/link";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Clear Project Scope",
      description:
        "Keep quantities, specifications and pricing clear when preparing a project proposal.",
    },
    {
      icon: Heart,
      title: "Connected Records",
      description:
        "Bring client details, quotations, invoices and project information into one workflow.",
    },
    {
      icon: Zap,
      title: "Practical Teamwork",
      description: "Organize the people, roles and responsibilities behind each interior project.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="section-padding bg-gradient-hero">
          <div className="container-custom max-w-4xl text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About Intorza: Software for <span className="text-gradient">Interior Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Intorza was founded with a simple goal: to help interior designers and contractors
              manage their business operations efficiently, so they can focus on creating beautiful
              spaces.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom grid md:grid-cols-2 gap-12">
            <div className="bg-card p-8 border-2 border-foreground shadow-[5px_5px_0_0_var(--foreground)]">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide interior professionals with powerful, easy-to-use tools that streamline
                their business operations.
              </p>
            </div>
            <div className="bg-card p-8 border-2 border-foreground shadow-[5px_5px_0_0_var(--foreground)]">
              <div className="w-14 h-14 bg-secondary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the go-to platform for interior businesses worldwide.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              What Drives Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-card p-8 border-2 border-foreground shadow-[5px_5px_0_0_var(--foreground)] text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <v.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{v.title}</h3>
                  <p className="text-muted-foreground">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-secondary/90" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-intorza-amber/10 blur-3xl" />
          <div className="container-custom max-w-4xl relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-secondary-foreground/90 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              Part of the Revenuxe family
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6 leading-tight">
              A Product by <span className="text-primary">Revenuxe</span>
            </h2>
            <p className="text-lg md:text-xl text-secondary-foreground/70 max-w-2xl mx-auto mb-10">
              Intorza is proudly built and backed by Revenuxe — a studio crafting modern SaaS
              products that help small businesses run smarter, faster, and more beautifully.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 "
              asChild
            >
              <a href="https://www.revenuxe.com" target="_blank" rel="noopener noreferrer">
                Visit Revenuxe <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </section>

        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Join Our Community?
            </h2>
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <a href="https://app.intorza.com" target="_blank" rel="noopener noreferrer">
                Get Started Free <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <p className="mt-6 text-primary-foreground/70 text-sm">
              Or{" "}
              <Link href="/contact" className="underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </section>
        <AboutGuide />
      </main>
      <Footer />
    </div>
  );
}
