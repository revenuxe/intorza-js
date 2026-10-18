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

export default function Contact() {
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
        <section className="section-padding bg-gradient-hero">
          <div className="container-custom max-w-3xl text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contact Intorza for <span className="text-primary">Support and Sales</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Have questions about Intorza? Our team is here to help you streamline your interior
              design business.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom grid md:grid-cols-2 gap-6 max-w-5xl">
            {info.map((item) => (
              <div
                key={item.title}
                className="bg-card border-2 border-foreground shadow-[5px_5px_0_0_var(--foreground)] p-6 text-center"
              >
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-display font-semibold text-lg mb-2">{item.title}</h2>
                {item.href ? (
                  <a href={item.href} className="text-primary font-medium hover:underline">
                    {item.detail}
                  </a>
                ) : (
                  <p className="text-foreground font-medium">{item.detail}</p>
                )}
              </div>
            ))}
          </div>

          <ContactGuide />
          <ContactForm />
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
