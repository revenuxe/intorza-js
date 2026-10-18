import Link from "next/link";
import { SITE_ADDRESS_TEXT, SITE_PHONE, SITE_PHONE_E164 } from "@/lib/site";

export default function AboutGuide() {
  return (
    <section className="section-padding border-t-2 border-foreground">
      <div className="container-custom max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
          Built around the everyday work of an interior business
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          A quotation is part of a larger project record. Its quantities come from the site, its
          specifications explain the work, and its totals affect invoicing and payment discussions.
          Intorza is designed to keep those business tasks connected instead of treating each
          document as an isolated file.
        </p>
        <div className="grid md:grid-cols-2 gap-8 my-9">
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">
              From planning to a defined scope
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The{" "}
              <Link
                href="/interior-cost-calculator"
                className="text-primary underline underline-offset-4"
              >
                interior budget calculator
              </Link>{" "}
              provides an illustrative planning starting point. The{" "}
              <Link
                href="/interior-quotation-format"
                className="text-primary underline underline-offset-4"
              >
                quotation format example
              </Link>{" "}
              shows how to organize a more detailed proposal once measurements and specifications
              are available.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">
              From proposal to project records
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Use the{" "}
              <Link
                href="/interior-quotation"
                className="text-primary underline underline-offset-4"
              >
                interior quotation software
              </Link>{" "}
              to prepare the proposal, then keep accepted quotations connected to the project and
              invoicing workflow. The{" "}
              <Link href="/" className="text-primary underline underline-offset-4">
                full product overview
              </Link>{" "}
              explains the wider client and team tools.
            </p>
          </div>
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">
          Talk to us about your project workflow
        </h2>
        <p className="text-muted-foreground mb-5">
          Tell us whether you work independently, manage a contracting team or run a studio, and
          which part of the process you want to organize. A real example of your quotation or
          billing workflow gives the team a clearer starting point for answering your questions.
        </p>
        <address className="not-italic text-muted-foreground leading-relaxed mb-5">
          {SITE_ADDRESS_TEXT}
          <br />
          <a href={`tel:${SITE_PHONE_E164}`} className="text-primary underline underline-offset-4">
            {SITE_PHONE}
          </a>
        </address>
        <p>
          <Link href="/contact" className="text-primary underline underline-offset-4">
            Contact Intorza in Bengaluru
          </Link>{" "}
          for product, account or plan questions.
        </p>
      </div>
    </section>
  );
}
