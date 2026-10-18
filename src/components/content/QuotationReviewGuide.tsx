import Link from "next/link";

export default function QuotationReviewGuide() {
  return (
    <section className="mb-14 border-t-2 border-foreground pt-9">
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">
        Check the quotation before you send it
      </h2>
      <div className="grid md:grid-cols-2 gap-7">
        <div>
          <h3 className="font-display text-xl font-semibold mb-3">
            Make the scope easy to compare
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Use separate items for different materials or finishes. If the client is comparing two
            options, describe the change in specification and price clearly instead of replacing the
            whole project total without explanation. Keep exclusions and client-supplied items
            visible.
          </p>
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold mb-3">
            Review calculations and versions
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Check units against measurements, multiply quantities by rates, and review the subtotal,
            taxes and final amount. Give revisions a clear date or version so both sides can
            identify the proposal being discussed.
          </p>
        </div>
      </div>
      <p className="text-muted-foreground mt-6">
        A preliminary allowance from the{" "}
        <Link
          href="/interior-cost-calculator"
          className="text-primary underline underline-offset-4"
        >
          interior cost calculator
        </Link>{" "}
        needs a defined scope before it becomes a quotation. When your items are ready, use the{" "}
        <Link href="/interior-quotation" className="text-primary underline underline-offset-4">
          quotation builder workflow
        </Link>{" "}
        to prepare the client document, or{" "}
        <Link href="/contact" className="text-primary underline underline-offset-4">
          ask the Intorza team
        </Link>{" "}
        about the process.
      </p>
    </section>
  );
}
