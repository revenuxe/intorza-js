import Link from "next/link";

export default function RelatedLinks({
  title,
  intro,
  links,
}: {
  title: string;
  intro: string;
  links: Array<{ href: string; title: string; description: string }>;
}) {
  return (
    <section className="mt-12 border-t-2 border-foreground pt-8">
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{title}</h2>
      <p className="text-muted-foreground mb-6">{intro}</p>
      <ul className="grid gap-5 md:grid-cols-3">
        {links.map((link) => (
          <li key={link.href} className="border border-border bg-background p-5">
            <Link
              href={link.href}
              className="text-primary font-semibold underline underline-offset-4"
            >
              {link.title}
            </Link>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{link.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
