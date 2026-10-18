import Link from "next/link";
export default function ProductResources() {
  return (
    <section className="section-padding bg-muted/30 border-b-2 border-foreground">
      <div className="container-custom">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
          Build a clearer interior quotation workflow
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-9">
          Start with the right document for the job: prepare a proposal, review a sample format, or
          explore an early project budget.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              href: "/ai-quotation-builder",
              title: "AI quotation builder",
              description:
                "Start from a floor plan or project details, then review an editable interior quotation draft.",
            },
            {
              href: "/interior-quotation",
              title: "Interior quotation tool",
              description:
                "Create itemized proposals, export PDFs and track the next step with your client.",
            },
            {
              href: "/interior-quotation-format",
              title: "Interior quotation format",
              description:
                "Review a room-wise sample with quantities, specifications, rates and terms.",
            },
            {
              href: "/interior-cost-calculator",
              title: "Interior cost calculator",
              description:
                "Explore an indicative budget before preparing the detailed scope and quotation.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="frame-hard-sm p-7 hover:bg-background"
            >
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
              <span className="inline-block text-primary font-semibold mt-5">
                Explore <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
