import { Star, Quote } from "lucide-react";

interface Props {
  countryName?: string;
}

const baseTestimonials = [
  { name: "Rajesh Kumar", role: "Interior Designer", company: "RK Interiors", content: "Intorza has completely transformed how I manage my projects. The quotation builder alone has saved me hours every week." },
  { name: "Priya Sharma", role: "Founder", company: "Decor Studio", content: "Finally, a tool built specifically for interior professionals. The payment tracking feature has helped me reduce outstanding dues by 60%." },
  { name: "Mohammed Ali", role: "Project Manager", company: "Elite Furnishings", content: "Managing multiple projects across teams was a nightmare before Intorza. Now everything is organized, tracked, and accessible." },
];

const TestimonialsSection = ({ countryName }: Props) => {
  return (
    <section className="section-padding border-y-2 border-foreground bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container-custom">
        <div className="mb-14 max-w-3xl text-left">
          <span className="eyebrow-tag-invert mb-6">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Loved by Interior{" "}
            <span className="text-intorza-amber">Professionals{countryName ? ` in ${countryName}` : ""}</span>
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            See what our users have to say about how Intorza has helped them grow their business.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {baseTestimonials.map((t, i) => (
            <div
              key={t.name}
              className="group relative border-2 border-primary-foreground bg-secondary p-8 shadow-[6px_6px_0_0_var(--primary-foreground)] transition-transform duration-150 hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none"
            >
              <span className="absolute -top-3 left-6 border border-primary-foreground bg-secondary px-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Quote className="absolute top-6 right-6 w-9 h-9 text-primary-foreground/25" />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-intorza-amber text-intorza-amber" />
                ))}
              </div>
              <p className="text-secondary-foreground/90 leading-relaxed mb-8">"{t.content}"</p>
              <div className="flex items-center gap-4 border-t border-primary-foreground/30 pt-5">
                <div className="grid h-11 w-11 place-items-center border-2 border-primary-foreground font-display text-lg font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-secondary-foreground">{t.name}</div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-secondary-foreground/60">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
