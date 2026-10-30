import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
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
  const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/intorza/", icon: Linkedin },
    {
      label: "Facebook",
      href: "https://www.facebook.com/people/Intorza/61595329928865/",
      icon: Facebook,
    },
    { label: "Instagram", href: "https://www.instagram.com/intorza/", icon: Instagram },
    { label: "YouTube", href: "https://www.youtube.com/@Intorza", icon: Youtube },
  ];

  const product = [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "AI Quotation Builder", href: "/ai-quotation-builder" },
    { label: "Interior Quotation", href: "/interior-quotation" },
    { label: "Interior Quotation Format", href: "/interior-quotation-format" },
    { label: "Interior Cost Calculator", href: "/interior-cost-calculator" },
  ];
  const workflow = [
    { label: "Business Dashboard", href: "/interior-design-dashboard" },
    { label: "Site Measurement", href: "/interior-site-measurement" },
    { label: "Quotation Tracking", href: "/interior-quotation-management" },
    { label: "Project Management", href: "/interior-project-management" },
    { label: "Invoices & Payments", href: "/interior-invoice-software" },
    { label: "Client Management", href: "/interior-design-crm" },
    { label: "Team Management", href: "/interior-team-management" },
  ];
  const services = [
    { label: "Website Development", href: "/services/website-development" },
    { label: "3D Interior Rendering", href: "/services/3d-interior-rendering" },
    { label: "2D Interior & Working Drawings", href: "/services/2d-interior-working-drawings" },
    { label: "BOQ & Cost Estimation", href: "/services/interior-boq-cost-estimation" },
    { label: "3D Walkthrough & 360° Visualization", href: "/services/3d-walkthrough-360-visualization" },
  ];
  const company = [
    { label: "About Us", to: "/about" as const },
    { label: "Demo Videos", to: "/demo-videos" as const },
    { label: "Articles", to: "/articles" as const },
    { label: "Contact", to: "/contact" as const },
  ];
  const legal = [
    { label: "Terms & Conditions", to: "/terms" as const },
    { label: "Privacy Policy", to: "/privacy" as const },
    { label: "Cookie Policy", to: "/cookies" as const },
    { label: "Refund Policy", to: "/refund" as const },
  ];

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground pt-16 pb-8 md:pt-20">
      <div className="container-custom">
        <div className="grid gap-x-10 gap-y-12 mb-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8 xl:gap-x-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <Image
              src={intorzaLogo}
              sizes="240px"
              loading="eager"
              alt="Intorza"
              width={1080}
              height={219}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-secondary-foreground/70 mb-6 max-w-md leading-relaxed">
              Streamline your interior business operations with Intorza. From site measurements to
              invoices, manage everything in one place.
            </p>
            <nav aria-label="Social media" className="mb-6 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Intorza on ${label} (opens in a new tab)`}
                  title={label}
                  className="inline-flex h-11 w-11 items-center justify-center border border-secondary-foreground/20 text-secondary-foreground/70 transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </nav>
            <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
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
            <h2 className="font-display font-semibold text-lg mb-4">Business Tools</h2>
            <ul className="space-y-3">
              {workflow.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={false}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display font-semibold text-lg mb-4">Services</h2>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
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
