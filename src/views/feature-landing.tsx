import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProCTA from "@/components/ProCTA";
import FAQSection from "@/components/FAQSection";
import RelatedLinks from "@/components/content/RelatedLinks";
import { productImageDimensions } from "@/data/product-images";
import type { FeatureLanding } from "@/data/feature-landings";

export default function FeatureLandingPage({ page }: { page: FeatureLanding }) {
  const [before, after] = page.h1.split(page.highlight);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection
          title={
            <>
              {before}
              <span className="text-primary">{page.highlight}</span>
              {after}
            </>
          }
          subtitle={page.subtitle}
          primaryLabel="Open Intorza"
          image={{ src: page.image, alt: page.imageAlt, ...productImageDimensions[page.image] }}
          secondaryLink={{ href: "#how-it-works", label: "See the Workflow" }}
          highlights={page.highlights}
        />
        <section className="section-padding border-b-2 border-foreground">
          <div className="container-custom">
            <Breadcrumbs items={[{ name: page.name, href: page.path }]} />
            <div className="mt-10 max-w-4xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                {page.introTitle}
              </h2>
              {page.intro.map((text) => (
                <p key={text} className="text-lg leading-relaxed text-muted-foreground mb-5">
                  {text}
                </p>
              ))}
            </div>
            <nav
              aria-label="On this page"
              className="mt-8 flex flex-wrap gap-x-7 gap-y-4 text-sm font-semibold"
            >
              <a href="#features" className="text-primary underline underline-offset-4">
                Explore the features
              </a>
              <a href="#how-it-works" className="text-primary underline underline-offset-4">
                Follow the workflow
              </a>
              <a href="#practical-guide" className="text-primary underline underline-offset-4">
                Read the practical guide
              </a>
              <a href="#pricing" className="text-primary underline underline-offset-4">
                Review Pro pricing
              </a>
            </nav>
          </div>
        </section>
        <section id="features" className="section-padding bg-muted/30 border-b-2 border-foreground">
          <div className="container-custom">
            <h2 className="font-display text-3xl md:text-4xl font-bold max-w-4xl mb-10">
              {page.featureTitle}
            </h2>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {page.features.map((feature, i) => (
                <article key={feature.title} className="frame-hard-sm min-w-0 p-4 sm:p-6">
                  <span className="font-mono text-sm text-primary">0{i + 1}</span>
                  <h3 className="font-display text-lg sm:text-xl font-semibold break-words mt-5 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {feature.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="practical-guide" className="section-padding border-b-2 border-foreground">
          <div className="container-custom">
            <h2 className="font-display text-3xl md:text-4xl font-bold max-w-4xl mb-10">
              {page.guideTitle}
            </h2>
            <div className="grid gap-7 lg:grid-cols-3">
              {page.guides.map((guide) => (
                <article key={guide.title} className="border-t-2 border-foreground pt-6">
                  <h3 className="font-display text-2xl font-semibold mb-4">{guide.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{guide.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="how-it-works"
          className="section-padding bg-muted/30 border-b-2 border-foreground"
        >
          <div className="container-custom">
            <h2 className="font-display text-3xl md:text-4xl font-bold max-w-4xl mb-10">
              {page.workflowTitle}
            </h2>
            <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {page.steps.map((step, i) => (
                <li key={step.title} className="frame-hard-sm p-6">
                  <span className="font-mono text-primary">0{i + 1}</span>
                  <h3 className="font-display text-xl font-semibold mt-5 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>
            <a
              href="https://app.intorza.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hard btn-hard-hover mt-10"
            >
              Explore in Intorza <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
        <section className="section-padding border-b-2 border-foreground">
          <div className="container-custom max-w-5xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              {page.referenceTitle}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">{page.referenceIntro}</p>
            <dl className="grid gap-6 md:grid-cols-2">
              {page.reference.map((item) => (
                <div key={item.title} className="frame-hard-sm p-6">
                  <dt className="font-display text-xl font-semibold mb-3">{item.title}</dt>
                  <dd className="text-muted-foreground leading-relaxed">{item.text}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-12 border-t-2 border-foreground pt-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
                {page.checklistTitle}
              </h2>
              <ul className="space-y-4">
                {page.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-intorza-green"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-muted-foreground">
                Explore the{" "}
                <Link
                  href="/interior-quotation"
                  className="text-primary underline underline-offset-4"
                >
                  interior quotation workflow
                </Link>{" "}
                to see how the agreed scope becomes a proposal, or{" "}
                <Link href="/contact" className="text-primary underline underline-offset-4">
                  ask our team about your requirements
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
        <ProCTA description={page.pricing} />
        <FAQSection faqs={page.faqs} title={`${page.name} FAQs`} />
        <section className="section-padding border-t-2 border-foreground">
          <div className="container-custom">
            <RelatedLinks
              title="Connect this step to the rest of your interior workflow"
              intro="Explore the relevant tools and guidance before choosing the next step for your project."
              links={page.related}
            />
          </div>
        </section>
        <section className="section-padding bg-primary text-primary-foreground border-t-2 border-foreground">
          <div className="container-custom max-w-5xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">{page.ctaTitle}</h2>
            <p className="text-lg max-w-3xl mb-9">{page.ctaText}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://app.intorza.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hard-light btn-hard-hover"
              >
                Open Intorza <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/contact" className="btn-hard-light-ghost">
                Talk to our team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
