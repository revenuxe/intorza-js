import Image from "next/image";
import { ArrowRight, FolderOpen, Star } from "lucide-react";
const dashboardPreview = "/dashboard-preview.webp";

interface Props {
  title?: React.ReactNode;
  subtitle?: string;
  video?: { src: string; poster: string; width: number; height: number };
  primaryLabel?: string;
  image?: { src: string; alt: string; width: number; height: number };
  secondaryLink?: { href: string; label: string };
  highlights?: Array<{ value: string; label: string; lines?: [string, string] }>;
  compactHighlights?: boolean;
  showProductHunt?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  video,
  primaryLabel = "Create Quotation",
  image,
  secondaryLink,
  compactHighlights = false,
  showProductHunt = false,
  highlights = [
    { value: "+45%", label: "Efficiency boost" },
    { value: "500+", label: "Interior professionals" },
  ],
}: Props) => {
  const benefits = [
    { label: "No credit card", full: "No credit card required" },
    { label: "2-min setup", full: "Setup in 2 minutes" },
    { label: "Instant access", full: "Instant access" },
  ];
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden border-b-2 border-foreground bg-background pb-16 pt-32 md:pb-20 md:pt-36">
      <div className="container-custom">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          <div className="min-w-0 text-left lg:col-span-5">
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

            <div className="hero-actions mt-9 grid grid-cols-2 gap-3">
              <a
                href="https://app.intorza.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hard btn-hard-hover"
              >
                {primaryLabel}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={showProductHunt ? "https://www.producthunt.com/products/intorza?utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-intorza" : secondaryLink?.href ?? "https://app.intorza.com"}
                target={showProductHunt || !secondaryLink ? "_blank" : undefined}
                rel={showProductHunt || !secondaryLink ? "noopener noreferrer" : undefined}
                className={showProductHunt
                  ? "inline-flex items-center justify-center gap-2.5 rounded-none border border-[#ff6154] bg-white px-3 py-2 text-[#ff6154] transition-colors hover:bg-[#fff8f6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6154] sm:gap-3 sm:px-3.5 sm:py-2.5"
                  : "btn-hard-ghost btn-hard-hover"}
              >
                {showProductHunt ? (
                  <>
                    <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ff6154] text-2xl font-bold leading-none text-white">P</span>
                    <span className="text-left whitespace-nowrap">
                      <span className="flex items-center gap-1.5 text-[8px] font-semibold uppercase leading-3 tracking-[0.04em] sm:gap-2 sm:text-[10px]">
                        Find us on
                        <span aria-hidden="true" className="inline-flex gap-0.5">
                          {Array.from({ length: 5 }, (_, index) => (
                            <Star key={index} className="h-2 w-2 fill-current sm:h-2.5 sm:w-2.5" />
                          ))}
                        </span>
                      </span>
                      <span className="block text-base font-bold leading-5">Product Hunt</span>
                    </span>
                  </>
                ) : (
                  <>
                    <FolderOpen className="w-4 h-4" />
                    {secondaryLink?.label ?? "My Projects"}
                  </>
                )}
              </a>
            </div>

            <ul
              aria-label="Getting started benefits"
              className="mt-10 grid grid-cols-3 gap-2 border-t-2 border-foreground pt-6"
            >
              {benefits.map((b) => (
                <li
                  key={b.full}
                  aria-label={b.full}
                  className="flex min-w-0 items-center gap-1.5 whitespace-nowrap text-[10px] leading-5 text-muted-foreground md:text-xs"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rotate-45 bg-intorza-green"
                    aria-hidden="true"
                  />
                  {b.label}
                </li>
              ))}
            </ul>
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
              {video ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  disablePictureInPicture
                  disableRemotePlayback
                  preload="auto"
                  poster={video.poster}
                  width={video.width}
                  height={video.height}
                  aria-label="Intorza AI quotation builder demo: start with a floor plan or project details, then review the quotation draft"
                  className="block w-full h-auto"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={image?.src ?? dashboardPreview}
                  alt={image?.alt ?? "Intorza dashboard preview"}
                  className="w-full h-auto"
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  width={image?.width ?? 1890}
                  height={image?.height ?? 890}
                />
              )}
            </div>
            <div className="relative mt-8 grid grid-cols-2 border-2 border-foreground bg-card">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.label}
                  className={`min-w-0 ${compactHighlights ? "p-3.5 sm:p-5" : "p-5"} ${index ? "border-l-2 border-foreground" : ""}`}
                >
                  <div
                    className={`font-display font-bold ${compactHighlights ? "text-base leading-snug sm:text-lg md:text-xl" : "text-2xl"} ${index ? "text-foreground" : "text-green-700"}`}
                  >
                    {highlight.lines
                      ? highlight.lines.map((line, lineIndex) => (
                          <span key={line} className="block whitespace-nowrap">
                            {line}
                            {lineIndex === 0 ? " " : null}
                          </span>
                        ))
                      : highlight.value}
                  </div>
                  <div
                    className={`font-mono font-bold uppercase text-muted-foreground ${compactHighlights ? "mt-2 text-[9px] leading-relaxed tracking-[0.08em] sm:text-[10px]" : "text-[10px] tracking-[0.18em]"}`}
                  >
                    {highlight.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
