import Link from "next/link";
import PolicyLinks from "@/components/content/PolicyLinks";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Page = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-32 pb-20">
      <div className="container-custom max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Refund Policy
        </h1>
        <p className="text-muted-foreground mb-12">Last updated: June 23, 2026</p>
        <div className="space-y-6 text-foreground/80">
          <p>
            At Intorza, we want you to be completely satisfied. Refunds may be granted for technical
            issues preventing access, duplicate or erroneous charges, or cancellation within 7 days
            of initial purchase.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground pt-4">
            How to Request
          </h2>
          <p>
            Email{" "}
            <a className="text-primary underline" href="mailto:intorza.com@gmail.com">
              intorza.com@gmail.com
            </a>{" "}
            with your account email and the reason. We respond within 3-5 business days; approved
            refunds are processed within 5-10 business days to the original payment method.
          </p>
        </div>
        <section className="mt-9">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Help us identify the payment
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Alongside the account email and reason for your request, include the purchase date or
            payment reference if available. This gives the team context for finding the transaction.
          </p>
          <p className="text-foreground/80 leading-relaxed mt-4">
            For related account and subscription information, read the{" "}
            <Link href="/terms" className="text-primary underline underline-offset-4">
              Terms &amp; Conditions
            </Link>
            . The{" "}
            <Link href="/contact" className="text-primary underline underline-offset-4">
              Contact page
            </Link>{" "}
            lists the team's phone number, address and other support options.
          </p>
        </section>
        <PolicyLinks page="refund" />
      </div>
    </main>
    <Footer />
  </div>
);
export default Page;
