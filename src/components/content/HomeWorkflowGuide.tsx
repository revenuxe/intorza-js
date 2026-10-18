import Link from "next/link";

export default function HomeWorkflowGuide() {
  return (
    <section className="section-padding border-b-2 border-foreground">
      <div className="container-custom">
        <div className="max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Keep the project scope connected to the work you deliver
          </h2>
          <p className="text-lg text-muted-foreground mb-5">
            An interior project moves through several decisions: what the client needs, what the
            site allows, what the work will cost and when payments are due. Intorza brings
            quotations, invoices, client records and project coordination into one workspace so
            those decisions are easier to follow.
          </p>
          <p className="text-lg text-muted-foreground">
            For an early planning discussion, start with the{" "}
            <Link
              href="/interior-cost-calculator"
              className="text-primary underline underline-offset-4"
            >
              home interior cost calculator
            </Link>
            . Once the scope and measurements are clearer, use the{" "}
            <Link href="/interior-quotation" className="text-primary underline underline-offset-4">
              interior quotation tool
            </Link>{" "}
            to prepare an itemized proposal. The{" "}
            <Link
              href="/interior-quotation-format"
              className="text-primary underline underline-offset-4"
            >
              quotation sample and format
            </Link>{" "}
            explains the document structure before you start.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "For independent interior designers",
              text: "Keep each client's scope, proposal and project details together. When materials or quantities change, review the quotation alongside the client record before sending the revised document.",
            },
            {
              title: "For interior contractors",
              text: "Make work descriptions, quantities, units and rates easy to review. Once the quotation is accepted, connect the agreed work with invoices and outstanding payment information.",
            },
            {
              title: "For studios and project teams",
              text: "Organize team members and project responsibilities while keeping business records in the same workspace. Use roles and assignments to clarify who is working on each project.",
            },
          ].map((item) => (
            <article key={item.title} className="frame-hard-sm p-7">
              <h3 className="font-display text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">
            Choose software by testing a real project workflow
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Try a representative room or a small project first. Add the client, prepare the work
            items, review the PDF and check the next steps for invoicing and payment tracking.
            Compare the features you need with the current plan details, rather than deciding on the
            quotation screen alone.
          </p>
          <p className="text-muted-foreground">
            Learn{" "}
            <Link href="/about" className="text-primary underline underline-offset-4">
              what Intorza is built to help with
            </Link>
            , review{" "}
            <a href="#pricing" className="text-primary underline underline-offset-4">
              the displayed Pro pricing
            </a>
            , or{" "}
            <Link href="/contact" className="text-primary underline underline-offset-4">
              ask our team about your workflow
            </Link>{" "}
            before choosing a plan.
          </p>
        </div>
      </div>
    </section>
  );
}
