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
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-12">Last updated: June 23, 2026</p>
        <div className="space-y-6 text-foreground/80">
          <p>
            Intorza is committed to protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use our website and
            services.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground pt-4">
            Information We Collect
          </h2>
          <p>
            We collect personal data you provide (name, email, business details), business data you
            enter into the Service (clients, projects, quotations, invoices), and data automatically
            collected (device, IP, usage).
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground pt-4">
            How We Use Your Information
          </h2>
          <p>
            To provide and improve our Service, communicate with you, ensure security, comply with
            legal obligations, and process billing.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground pt-4">
            Data Security
          </h2>
          <p>
            We encrypt data in transit (TLS 1.3) and at rest (AES-256), enforce access controls, and
            run regular security audits.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground pt-4">Your Rights</h2>
          <p>
            You may request access, correction, deletion, restriction, portability, or object to
            processing of your data. Contact us at intorza.com@gmail.com.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground pt-4">Contact</h2>
          <p>
            Questions? Email{" "}
            <a className="text-primary underline" href="mailto:intorza.com@gmail.com">
              intorza.com@gmail.com
            </a>
            .
          </p>
        </div>
        <section className="mt-9">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Information submitted through this website
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            The website contact form asks for your name, email address, subject and message.
            Submitted messages are saved to the inquiry inbox for authorized administrators to
            review. To follow up on a message or find the team's contact details, use the{" "}
            <Link href="/contact" className="text-primary underline underline-offset-4">
              Intorza Contact page
            </Link>
            . The{" "}
            <Link href="/cookies" className="text-primary underline underline-offset-4">
              Cookie Policy
            </Link>{" "}
            explains the separate subject of browser cookies.
          </p>
        </section>
        <PolicyLinks page="privacy" />
      </div>
    </main>
    <Footer />
  </div>
);
export default Page;
