import Link from "next/link";

export default function CalculatorGuide() {
  return (
    <section className="my-14 space-y-9">
      <div>
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">
          How to use this interior cost estimate
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
          <li>
            Choose a home-size preset, then replace its sample carpet area with the area you want to
            budget for.
          </li>
          <li>
            Choose a finish-level preset and adjust the per-square-foot rate for the scope you are
            discussing. The preset rates are examples, not a live price feed.
          </li>
          <li>
            Review the work value, illustrative room allocation and example tax calculation. The
            room shares are fixed planning assumptions, not measured item quantities.
          </li>
          <li>
            Use the result to discuss the scope with your designer or contractor. Prepare an
            itemized quotation after site measurements and specifications are available.
          </li>
        </ol>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-display text-2xl font-bold mb-4">
            What changes an interior project budget?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The area alone does not describe the job. Cabinet quantities, finishes, hardware,
            installation conditions and the amount of existing work can all change the proposed
            scope. A larger kitchen or more storage can also make the actual room split very
            different from the illustrative percentages shown here.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold mb-4">
            What the calculator does not measure
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            This tool does not inspect the property, check current supplier prices or decide which
            tax treatment applies. Demolition, structural changes, appliances, furniture, transport
            or other work need to be listed separately when they are part of your project.
          </p>
        </div>
      </div>
      <div>
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">
          Turn the planning budget into a detailed proposal
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Compare the result with a{" "}
          <Link
            href="/interior-quotation-format"
            className="text-primary underline underline-offset-4"
          >
            room-wise interior quotation sample
          </Link>{" "}
          to see the difference between an allowance and a priced work item. When the scope is
          ready, use the{" "}
          <Link href="/interior-quotation" className="text-primary underline underline-offset-4">
            interior quotation tool
          </Link>{" "}
          to prepare the proposal.{" "}
          <Link href="/contact" className="text-primary underline underline-offset-4">
            Contact the Intorza team
          </Link>{" "}
          if you have a question about using the tools.
        </p>
      </div>
    </section>
  );
}
