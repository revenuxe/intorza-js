"use client";

import Link, { useLinkStatus } from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["/admin", "Overview"],
  ["/admin/inquiries", "Inquiries"],
  ["/admin/feedback", "Feedback"],
  ["/admin/users", "Access"],
  ["/admin/activity", "Activity"],
] as const;

function NavigationLabel({ children }: { children: React.ReactNode }) {
  const { pending } = useLinkStatus();
  return (
    <span className={pending ? "opacity-60" : undefined}>
      {children}
      {pending && <span role="status" className="sr-only">Loading…</span>}
    </span>
  );
}

export function AdminNavigation() {
  const pathname = usePathname();
  return (
    <nav aria-label="Admin navigation" className="max-w-7xl mx-auto px-5 flex gap-1 overflow-x-auto">
      {links.map(([href, label]) => (
        <Link
          key={href}
          href={href}
          aria-current={pathname === href ? "page" : undefined}
          className={`px-5 py-3 whitespace-nowrap font-medium border-b-4 ${pathname === href ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
        >
          <NavigationLabel>{label}</NavigationLabel>
        </Link>
      ))}
    </nav>
  );
}
