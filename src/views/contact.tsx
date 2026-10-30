import ContactGuide from "@/components/content/ContactGuide";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import {
  SITE_ADDRESS_TEXT,
  SITE_EMAIL,
  SITE_MAP_URL,
  SITE_PHONE,
  SITE_PHONE_E164,
} from "@/lib/site";

export default function Contact({ initialSubject = "" }: { initialSubject?: string }) {
  const info = [
    {
      icon: Mail,
      title: "Email Us",
      detail: SITE_EMAIL,
      href: `mailto:${SITE_EMAIL}`,
    },
    { icon: Phone, title: "Call Us", detail: SITE_PHONE, href: `tel:${SITE_PHONE_E164}` },
    { icon: MapPin, title: "Our Bengaluru Address", detail: SITE_ADDRESS_TEXT, href: SITE_MAP_URL },
    { icon: Clock, title: "Business Hours", detail: "Mon - Sat: 9AM - 6PM IST" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="container-custom grid max-w-6xl gap-10 py-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <div className="border-2 border-foreground bg-card p-5 shadow-[5px_5px_0_0_var(--foreground)] sm:p-8">
            <ContactForm initialSubject={initialSubject} />
          </div>
          <div>
            <h2 className="mb-5 font-display text-2xl font-bold">Other ways to reach us</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {info.map((item) => (
                <div key={item.title} className="flex gap-4 border border-border bg-background p-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="mt-1 block break-words text-sm text-primary hover:underline">{item.detail}</a>
                    ) : (
                      <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-padding">
          <ContactGuide />
          <div className="container-custom max-w-2xl text-center mt-16">
            <Button size="lg" asChild>
              <a href={`tel:${SITE_PHONE_E164}`}>Call {SITE_PHONE}</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
