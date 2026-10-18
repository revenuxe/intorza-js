import Link from "next/link";

export default function ContactGuide() {
  return (
    <section className="container-custom max-w-5xl mt-14">
      <h2 className="font-display text-3xl font-bold mb-6">
        How can we help with your interior business?
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <article className="frame-hard-sm p-6">
          <h3 className="font-display text-xl font-semibold mb-4">
            Quotations and project workflow
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Ask about preparing proposals, exporting PDFs or connecting accepted work to invoicing.
            The{" "}
            <Link href="/interior-quotation" className="text-primary underline underline-offset-4">
              quotation tool overview
            </Link>{" "}
            explains the main workflow, and the{" "}
            <Link
              href="/interior-quotation-format"
              className="text-primary underline underline-offset-4"
            >
              sample quotation
            </Link>{" "}
            shows the document structure.
          </p>
        </article>
        <article className="frame-hard-sm p-6">
          <h3 className="font-display text-xl font-semibold mb-4">Accounts, plans and billing</h3>
          <p className="text-muted-foreground leading-relaxed">
            Include the account email and the plan or payment your question relates to. Review the{" "}
            <Link href="/terms" className="text-primary underline underline-offset-4">
              account and subscription terms
            </Link>{" "}
            and{" "}
            <Link href="/refund" className="text-primary underline underline-offset-4">
              refund request information
            </Link>{" "}
            for the relevant policy.
          </p>
        </article>
        <article className="frame-hard-sm p-6">
          <h3 className="font-display text-xl font-semibold mb-4">
            Planning and product questions
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            If you are comparing workflows, tell us the kind of projects you handle. Explore the{" "}
            <Link
              href="/interior-cost-calculator"
              className="text-primary underline underline-offset-4"
            >
              interior cost calculator
            </Link>{" "}
            for an illustrative budget, or{" "}
            <Link href="/about" className="text-primary underline underline-offset-4">
              learn more about Intorza
            </Link>{" "}
            before contacting the team.
          </p>
        </article>
      </div>
      <div className="max-w-3xl mt-9">
        <h3 className="font-display text-xl font-semibold mb-4">
          Give us the context for your question
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Use a clear subject and describe the task you were trying to complete. For a technical
          issue, include the page or workflow, your device and browser, and what happened. For a
          plan question, explain the features your business needs. Contact-form messages are saved
          to the team's inquiry inbox; see the{" "}
          <Link href="/privacy" className="text-primary underline underline-offset-4">
            Privacy Policy
          </Link>{" "}
          for information about personal data.
        </p>
      </div>
    </section>
  );
}
