import Image from "next/image";
import { quotationShowcases, quotationFeatureCopy } from "@/data/quotation-page";
import { productImageDimensions } from "@/data/product-images";
import {
  ArrowRight,
  BarChart3,
  FileText,
  LayoutDashboard,
  Receipt,
  Ruler,
  Shield,
  UserPlus,
  Users,
} from "lucide-react";
const dashboardPreview = "/dashboard-preview.webp";
const quotationPreview = "/quotation-preview.webp";
const invoicePreview = "/invoice-preview.webp";
const clientsPreview = "/clients-preview.webp";
const teamPreview = "/team-preview.webp";
const myProjectPreview = "/my-project-preview.webp";
const myQuotationPreview = "/my-quotation-preview.webp";
const siteMeasurementPreview = "/site-measurement-preview.webp";

const features = [
  {
    icon: LayoutDashboard,
    title: "Smart Dashboard",
    description:
      "Complete overview of your business with real-time metrics, revenue tracking, and project status.",
  },
  {
    icon: Ruler,
    title: "Site Measurement",
    description:
      "Capture and organize site measurements digitally. Assign to team members and sync across devices.",
  },
  {
    icon: FileText,
    title: "Quotation Builder",
    description:
      "Create professional quotations with customizable templates. Track status from pending to accepted.",
  },
  {
    icon: Receipt,
    title: "Invoice Management",
    description:
      "Generate invoices instantly from accepted quotations. Track payments and outstanding balances.",
  },
  {
    icon: Users,
    title: "Client Management",
    description:
      "Detailed client records with project history, billing information, and communication logs.",
  },
  {
    icon: UserPlus,
    title: "Team Collaboration",
    description:
      "Add team members, assign roles, track attendance, and manage project assignments.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Detailed reports on conversion rates, revenue trends, and project performance.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with encrypted data storage. Your business data is always safe.",
  },
];

const showcases = [
  {
    image: dashboardPreview,
    tag: "Dashboard",
    title: "Complete Business Overview",
    description:
      "Monitor your entire business at a glance. Track quotations, projects, revenue, and team performance with real-time analytics.",
    points: [
      "Real-time business metrics",
      "Revenue & payment tracking",
      "Quotation & Invoice status",
      "Team attendance overview",
    ],
    ctaText: "View Dashboard",
    colorClass: "bg-blue-500/10",
  },
  {
    image: siteMeasurementPreview,
    tag: "Site Measurement",
    title: "Organize Site Visits Efficiently",
    description:
      "Create and manage site measurements for all your projects. Assign to team members and track progress easily.",
    points: [
      "Create measurement projects",
      "Assign to team members",
      "Track site visit status",
      "Centralized location data",
    ],
    ctaText: "Start Measurement",
    colorClass: "bg-primary/10",
    reverse: true,
  },
  {
    image: quotationPreview,
    tag: "Create Quotation",
    title: "Build Professional Quotations",
    description:
      "Create detailed quotations with customizable templates, project details, and professional formatting.",
    points: [
      "Customizable templates",
      "Auto-calculate totals with tax",
      "Professional PDF export",
      "Save client information",
    ],
    ctaText: "Create Quotation",
    colorClass: "bg-intorza-green/20",
  },
  {
    image: myQuotationPreview,
    tag: "My Quotations",
    title: "Track Quotation Status",
    description:
      "Manage all your quotations in one place. Mark as accepted or rejected, edit details, and generate PDFs instantly.",
    points: [
      "Track pending quotations",
      "Mark accepted/rejected",
      "Edit quotation details",
      "Download PDF instantly",
    ],
    ctaText: "View Quotations",
    colorClass: "bg-secondary/10",
    reverse: true,
  },
  {
    image: myProjectPreview,
    tag: "My Projects",
    title: "Manage Converted Projects",
    description:
      "Track all your converted projects with detailed overview including quotations, invoices, and financial summary.",
    points: [
      "Project overview dashboard",
      "Track total value & payments",
      "View associated quotations",
      "Monitor pending amounts",
    ],
    ctaText: "View Projects",
    colorClass: "bg-purple-500/10",
  },
  {
    image: invoicePreview,
    tag: "Invoice Management",
    title: "Effortless Invoicing & Payments",
    description:
      "Generate invoices from accepted quotations instantly. Track partial payments and manage outstanding balances.",
    points: [
      "One-click invoice generation",
      "Partial payment tracking",
      "Payment progress bar",
      "Download & share PDF",
    ],
    ctaText: "Create Invoice",
    colorClass: "bg-intorza-amber/20",
    reverse: true,
  },
  {
    image: clientsPreview,
    tag: "Client Management",
    title: "Build Lasting Client Relationships",
    description:
      "Keep all your client information organized. Track project history, billing status, and outstanding balances for each client.",
    points: [
      "Complete client profiles",
      "Project history at a glance",
      "Billing summary per client",
      "Outstanding balance tracking",
    ],
    ctaText: "Manage Clients",
    colorClass: "bg-teal-500/10",
  },
  {
    image: teamPreview,
    tag: "Team Management",
    title: "Collaborate with Your Team",
    description:
      "Add team members, create project teams, track attendance, and manage assignments all in one place.",
    points: [
      "Add unlimited team members",
      "Create project teams",
      "Track attendance daily",
      "Assign roles & permissions",
    ],
    ctaText: "Manage Team",
    colorClass: "bg-rose-500/10",
    reverse: true,
  },
];

const FeaturesSection = ({ quotation = false, title }: { quotation?: boolean; title?: string }) => (
  <section id="features" className="section-padding bg-muted/30">
    <div className="container-custom">
      <div className="mb-14 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
          {title ??
            (quotation
              ? "Quotation software for the way interior projects work"
              : "Connected tools for every stage of your interior project")}
        </h2>
      </div>
      <div className="mb-32 space-y-24 md:space-y-32">
        {(quotation ? quotationShowcases : showcases).map((s) => (
          <div key={s.tag} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className={`relative ${s.reverse ? "lg:order-1" : "lg:order-2"}`}>
              <div
                className={`pointer-events-none absolute inset-0 border-2 border-foreground bg-foreground/5 ${
                  s.reverse ? "-translate-x-3 translate-y-3" : "translate-x-3 translate-y-3"
                }`}
                aria-hidden="true"
              />
              <div className="relative border-2 border-foreground bg-card">
                <Image
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  {...productImageDimensions[s.image]}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="h-auto w-full object-cover object-top"
                />
              </div>
            </div>

            <div
              className={`flex flex-col items-start gap-6 ${s.reverse ? "lg:order-2" : "lg:order-1"}`}
            >
              <div className="space-y-4">
                <h3 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-[2.75rem]">
                  {s.title}
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
              <ul className="grid w-full grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="h-2 w-2 rotate-45 bg-intorza-green" aria-hidden="true" />
                    <span className="text-sm font-semibold text-foreground">{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://app.intorza.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-foreground bg-primary px-8 py-4 font-display text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-[4px_4px_0px_0px_var(--foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                {s.ctaText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-14 max-w-3xl text-left">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          {quotation ? (
            <>
              The essentials behind a <span className="text-gradient">client-ready quotation</span>
            </>
          ) : (
            <>
              Everything You Need to Run Your{" "}
              <span className="text-gradient">Interior Business</span>
            </>
          )}
        </h2>
        <p className="text-lg text-muted-foreground">
          {quotation
            ? "Prepare the proposal, keep the client context, and connect the accepted scope to your project and billing workflow."
            : "From the first site visit to the final invoice, Intorza covers every aspect of your business workflow with intuitive tools designed for interior professionals."}
        </p>
      </div>

      <div className="grid grid-cols-2 border-l border-t border-border lg:grid-cols-4">
        {features
          .map((f) => (quotation ? { ...f, ...quotationFeatureCopy[f.title] } : f))
          .map((f) => (
            <div
              key={f.title}
              className="group border-b border-r border-border bg-card p-4 sm:p-6 transition-colors hover:bg-background"
            >
              <div className="mb-5 grid h-10 w-10 place-items-center border border-border text-primary transition-colors group-hover:border-primary">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
