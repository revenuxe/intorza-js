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
          Cookie Policy
        </h1>
        <p className="text-muted-foreground mb-12">Last updated: June 23, 2026</p>
        <div className="space-y-6 text-foreground/80">
          <p>
            Cookies are small text files placed on your device when you visit a website. We use
            essential, analytics, functional, and marketing cookies to operate and improve the
            Service.
          </p>
          <h2 className="font-display text-2xl font-semibold text-foreground pt-4">
            Managing Cookies
          </h2>
          <p>
            Most browsers let you view, delete, or block cookies. Blocking essential cookies may
            break parts of the Service.
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
        <section className="mt-9">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Administrator sign-in on this website
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            The restricted website administration area uses session cookies to maintain a signed-in
            session between requests. Signing out ends the current browser session; deleting or
            blocking those cookies can require signing in again. For information about contact-form
            data, read the{" "}
            <Link href="/privacy" className="text-primary underline underline-offset-4">
              Privacy Policy
            </Link>
            . General account and service information is covered by the{" "}
            <Link href="/terms" className="text-primary underline underline-offset-4">
              Terms &amp; Conditions
            </Link>
            .
          </p>
        </section>
        <PolicyLinks page="cookies" />
      </div>
    </main>
    <Footer />
  </div>
);
export default Page;
