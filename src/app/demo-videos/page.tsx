import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  FileText,
  Headphones,
  Languages,
  MonitorPlay,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DemoVideoPlayer from "@/components/DemoVideoPlayer";
import { createMetadata, JsonLd } from "@/lib/next-seo";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Demo Videos | English & Hindi AI Quotation Demos | Intorza",
  description:
    "Watch Intorza in action: Quotation in English and AI Floor Quotation Demo Hindi. Explore product walkthroughs with sound for interior designers and contractors.",
  path: "/demo-videos",
});

const takeaways = [
  {
    number: "01",
    title: "Get familiar with the workflow",
    text: "See the quotation experience inside Intorza and get comfortable before preparing a proposal of your own.",
  },
  {
    number: "02",
    title: "Think through the details",
    text: "Keep your project scope, measurements, specifications and rates nearby as you follow along with the demo.",
  },
  {
    number: "03",
    title: "Put it into practice",
    text: "Open Intorza alongside the video. Pause, replay and explore at your own pace as you work on your next quotation.",
  },
];

export default function DemoVideosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <JsonLd data={[breadcrumbSchema([{ name: "Demo Videos", path: "/demo-videos" }])]} />
      <main className="pt-28">
        <section className="border-b-2 border-foreground pb-10 pt-6 md:pb-12 md:pt-8">
          <div className="container-custom relative">
            <nav aria-label="Breadcrumb" className="mb-6 flex gap-3 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-foreground">Demo Videos</span>
            </nav>
            <div className="grid items-end gap-6 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <p className="mb-5 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  <MonitorPlay className="h-4 w-4" aria-hidden="true" /> The Intorza demo room
                </p>
                <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                  Less guesswork.
                  <br />
                  <span className="text-primary">See it in action.</span>
                </h1>
              </div>
              <div className="max-w-2xl lg:pb-2">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  A closer look at the tools behind your interior business. Watch a real product
                  walkthrough, follow along and take the next step with confidence.
                </p>
                <a
                  href="#quotation-demo"
                  className="mt-6 inline-flex items-center gap-3 border-b-2 border-primary pb-2 font-semibold"
                >
                  Explore the first demo <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="quotation-demo"
          className="scroll-mt-28 py-14 md:py-20"
          aria-labelledby="demo-title"
        >
          <div className="container-custom">
            <div className="mb-8 flex flex-wrap items-center gap-3 font-mono text-xs font-bold uppercase tracking-widest">
              <span className="bg-primary px-3 py-2 text-white">Demo #1</span>
              <span className="flex items-center gap-2 border border-border px-3 py-2">
                <Languages className="h-4 w-4" aria-hidden="true" /> English
              </span>
              <span className="text-muted-foreground">Product walkthrough</span>
            </div>
            <div className="mb-8 grid gap-5 lg:grid-cols-[1.5fr_1fr] lg:items-end">
              <h2
                id="demo-title"
                className="font-display text-3xl font-bold tracking-tight md:text-5xl"
              >
                Quotation in English
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Discover the quotation workflow in Intorza. A practical starting point for interior
                designers and contractors preparing their next client proposal.
              </p>
            </div>
            <div className="border-2 border-foreground shadow-[6px_6px_0_0_var(--foreground)] md:shadow-[10px_10px_0_0_var(--foreground)]">
              <DemoVideoPlayer />
            </div>
            <div className="mt-8 flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
              <Headphones className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <p>
                Best experienced with sound. Use headphones for a clearer listen, switch to
                fullscreen for the details, and pause whenever you want to follow along.
              </p>
            </div>
          </div>
        </section>

        <section
          id="ai-demos"
          aria-labelledby="ai-demo-title"
          className="scroll-mt-28 border-t-2 border-foreground bg-primary/5 py-14 md:py-20"
        >
          <div className="container-custom">
            <p className="mb-5 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-4 w-4" aria-hidden="true" /> AI demos
            </p>
            <div className="mb-8 flex flex-wrap items-center gap-3 font-mono text-xs font-bold uppercase tracking-widest">
              <span className="bg-primary px-3 py-2 text-white">Demo #2</span>
              <span className="flex items-center gap-2 border border-border px-3 py-2">
                <Languages className="h-4 w-4" aria-hidden="true" /> Hindi
              </span>
              <span className="text-muted-foreground">AI-powered workflow</span>
            </div>
            <div className="mb-8 grid gap-5 lg:grid-cols-[1.5fr_1fr] lg:items-end">
              <h2
                id="ai-demo-title"
                className="font-display text-3xl font-bold tracking-tight md:text-5xl"
              >
                AI Floor Quotation Demo Hindi
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Explore AI-assisted floor quotations in Intorza with this Hindi walkthrough. Follow
                along at your own pace and see how AI fits into your quotation workflow.
              </p>
            </div>
            <div className="border-2 border-foreground shadow-[6px_6px_0_0_var(--foreground)] md:shadow-[10px_10px_0_0_var(--foreground)]">
              <DemoVideoPlayer
                src="/videos/intorza-ai-floor-quotation-demo-hindi.mp4"
                title="Demo #2: AI Floor Quotation Demo Hindi"
                subtitle="AI floor quotation walkthrough - Hindi"
              />
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Watch the AI workflow, pause to explore the details, and review the quotation
                against your own project requirements.
              </p>
              <Link
                href="/ai-quotation-builder"
                className="inline-flex items-center gap-2 border-b-2 border-primary pb-2 font-semibold"
              >
                Explore the AI Quotation Builder{" "}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y-2 border-foreground bg-muted/40 py-14 md:py-20">
          <div className="container-custom">
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Watch. Understand. Try it.
            </p>
            <h2 className="mb-10 font-display text-3xl font-bold md:text-4xl">
              Make the most of your first demo.
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {takeaways.map((item) => (
                <div key={item.number} className="border-t-2 border-foreground pt-6">
                  <span className="font-display text-4xl font-bold text-primary/70">
                    {item.number}
                  </span>
                  <h3 className="mb-3 mt-5 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container-custom grid gap-10 lg:grid-cols-2">
            <div>
              <FileText className="mb-5 h-8 w-8 text-primary" aria-hidden="true" />
              <h2 className="mb-4 font-display text-3xl font-bold">Have a project in mind?</h2>
              <p className="mb-6 max-w-lg leading-relaxed text-muted-foreground">
                Turn the walkthrough into a hands-on session. Gather a few project details so you
                can relate the demo to the way your business works.
              </p>
              <ul className="space-y-4">
                {[
                  "Your client and project details",
                  "The rooms, areas or work items in scope",
                  "Measurements, material choices and rates",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-2 border-foreground bg-secondary p-7 text-white shadow-[6px_6px_0_0_var(--primary)] md:p-10">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-orange-300">
                Your next step
              </p>
              <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
                From watching
                <br />
                to working smarter.
              </h2>
              <p className="mb-8 leading-relaxed text-white/75">
                Explore Intorza for your interior business, or talk to our team about your quotation
                workflow.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://app.intorza.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary/80"
                >
                  Try Intorza <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center border border-white/40 px-5 py-3 font-semibold hover:bg-white/10"
                >
                  Talk to our team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
