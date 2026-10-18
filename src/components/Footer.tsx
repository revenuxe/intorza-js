import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  SITE_ADDRESS_TEXT,
  SITE_EMAIL,
  SITE_MAP_URL,
  SITE_PHONE,
  SITE_PHONE_E164,
} from "@/lib/site";
import Link from "next/link";
const intorzaLogo = "/intorza-logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const product = [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "AI Quotation Builder", href: "/ai-quotation-builder" },
    { label: "Interior Quotation", href: "/interior-quotation" },
    { label: "Interior Quotation Format", href: "/interior-quotation-format" },
    { label: "Interior Cost Calculator", href: "/interior-cost-calculator" },
  ];
  const company = [
    { label: "About Us", to: "/about" as const },
    { label: "Contact", to: "/contact" as const },
  ];
  const legal = [
    { label: "Terms & Conditions", to: "/terms" as const },
    { label: "Privacy Policy", to: "/privacy" as const },
    { label: "Cookie Policy", to: "/cookies" as const },
    { label: "Refund Policy", to: "/refund" as const },
  ];

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground pt-20 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Image
              src={intorzaLogo}
              sizes="240px"
              loading="eager"
              alt="Intorza"
              width={1080}
              height={219}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-secondary-foreground/70 mb-6 max-w-sm">
              Streamline your interior business operations with Intorza. From site measurements to
              invoices, manage everything in one place.
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 shrink-0" aria-hidden="true" /> {SITE_EMAIL}
              </a>
              <a
                href={`tel:${SITE_PHONE_E164}`}
                className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
                {SITE_PHONE}
              </a>
              <address className="not-italic text-secondary-foreground/70">
                <a
                  href={SITE_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-primary transition-colors"
                >
                  <MapPin className="w-5 h-5 shrink-0 mt-1" aria-hidden="true" />
                  <span className="max-w-sm">{SITE_ADDRESS_TEXT}</span>
                </a>
              </address>
            </div>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg mb-4">Product</h2>
            <ul className="space-y-3">
              {product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg mb-4">Company</h2>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.to}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg mb-4">Legal</h2>
            <ul className="space-y-3">
              {legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.to}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {currentYear} Intorza. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
