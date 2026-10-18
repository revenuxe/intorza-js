import Link from "next/link";
export default function Breadcrumbs({ items }: { items: Array<{ name: string; href: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="underline underline-offset-4">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {index === items.length - 1 ? (
              <span aria-current="page">{item.name}</span>
            ) : (
              <Link href={item.href} className="underline underline-offset-4">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
