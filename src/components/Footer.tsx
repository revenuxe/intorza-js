import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import {
  SITE_ADDRESS_TEXT,
  SITE_EMAIL,
  SITE_MAP_URL,
  SITE_PHONE,
  SITE_PHONE_E164,
} from "@/lib/site";

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

  const linkColumnClass = "min-w-0";
  const headingClass = "mb-5 text-sm font-semibold text-secondary-foreground";
  const linkClass =
    "text-sm leading-6 text-secondary-foreground/75 transition-colors hover:text-secondary-foreground";

  return (
    <footer id="contact" className="bg-background px-4 py-10 text-foreground sm:px-6 md:py-16">
      <div className="mx-auto max-w-7xl rounded-3xl border border-secondary-foreground/15 bg-secondary px-6 py-9 text-secondary-foreground shadow-sm sm:px-10 sm:py-12 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,2fr)] lg:gap-16">
          <div className="max-w-xl">
            <Image
              src={intorzaLogo}
              sizes="240px"
              loading="eager"
              alt="Intorza"
              width={1080}
              height={219}
              className="mb-5 h-11 w-auto brightness-0 invert"
            />
            <p className="max-w-lg text-sm leading-7 text-secondary-foreground/75 sm:text-base">
              Streamline your interior business operations with Intorza. From site measurements to
              invoices, manage everything in one place.
            </p>

            <nav aria-label="Social media" className="mt-6 flex items-center gap-5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Intorza on ${label} (opens in a new tab)`}
                  title={label}
                  className="text-secondary-foreground/75 transition-colors hover:text-secondary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </nav>

            <address className="mt-7 grid gap-3 not-italic text-sm leading-6 text-secondary-foreground/75 sm:grid-cols-2">
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="flex min-w-0 items-center gap-2.5 transition-colors hover:text-secondary-foreground"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="break-all">{SITE_EMAIL}</span>
              </a>
              <a
                href={`tel:${SITE_PHONE_E164}`}
                className="flex items-center gap-2.5 transition-colors hover:text-secondary-foreground"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{SITE_PHONE}</span>
              </a>
              <a
                href={SITE_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 transition-colors hover:text-secondary-foreground sm:col-span-2"
              >
                <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{SITE_ADDRESS_TEXT}</span>
              </a>
            </address>
          </div>

          <nav aria-label="Footer links" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-8">
            <div className={linkColumnClass}>
              <h2 className={headingClass}>Product</h2>
              <ul className="space-y-2.5">
                {product.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={linkClass}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={linkColumnClass}>
              <h2 className={headingClass}>Business Tools</h2>
              <ul className="space-y-2.5">
                {workflow.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} prefetch={false} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={linkColumnClass}>
              <h2 className={headingClass}>Services</h2>
              <ul className="space-y-2.5">
                {services.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={linkColumnClass}>
              <h2 className={headingClass}>Company</h2>
              <ul className="space-y-2.5">
                {company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.to} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={linkColumnClass}>
              <h2 className={headingClass}>Legal</h2>
              <ul className="space-y-2.5">
                {legal.map((link) => (
                  <li key={link.label}>
                    <Link href={link.to} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-secondary-foreground/15 pt-6 text-sm text-secondary-foreground/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Intorza. All rights reserved.</p>
          <nav aria-label="Legal links" className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.slice(0, 2).map((link) => (
              <Link key={link.label} href={link.to} className={linkClass}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className={linkClass}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
