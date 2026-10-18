import PolicyLinks from "@/components/content/PolicyLinks";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Page = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-32 pb-20">
      <div className="container-custom max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Terms & Conditions
        </h1>
        <p className="text-muted-foreground mb-12">Last updated: June 23, 2026</p>
        <div className="space-y-6 text-foreground/80">
          <p>
            By accessing or using Intorza's services, you agree to be bound by these Terms. If you
            disagree with any part, do not use the Service.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground pt-4">Service</h2>
          <p>
            Intorza provides a cloud-based business management platform for interior design and
            contracting professionals — project management, quotations, invoices, client and team
            tools.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground pt-4">Accounts</h2>
          <p>
            Provide accurate information and safeguard your password. You are responsible for
            activities under your account.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground pt-4">
            Subscriptions & Refunds
          </h2>
          <p>
            Subscriptions auto-renew unless cancelled. See our{" "}
            <a className="text-primary underline" href="/refund">
              Refund Policy
            </a>{" "}
            for details.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground pt-4">
            Governing Law
          </h2>
          <p>
            These Terms are governed by the laws of India. Disputes are subject to arbitration in
            Bangalore.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground pt-4">Contact</h2>
          <p>
            Email{" "}
            <a className="text-primary underline" href="mailto:intorza.com@gmail.com">
              intorza.com@gmail.com
            </a>
            .
          </p>
        </div>
        <PolicyLinks page="terms" />
      </div>
    </main>
    <Footer />
  </div>
);
export default Page;
