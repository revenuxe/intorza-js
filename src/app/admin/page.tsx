import Link from "next/link";
import { requireAdmin } from "@/lib/admin/auth";
import AdminShell from "@/components/admin/AdminShell";

export default async function Dashboard() {
  const { supabase } = await requireAdmin();
  const results = await Promise.all([
    supabase.from("inquiries").select("id", { count: "exact", head: true }),
    supabase.from("inquiries").select("id", { count: "exact", head: true }).eq("read", false),
    supabase.from("feedback").select("id", { count: "exact", head: true }),
    supabase.from("user_roles").select("id", { count: "exact", head: true }).eq("role", "admin"),
  ]);
  if (results.some((result) => result.error)) throw new Error("Unable to load dashboard data.");
  const cards = [
    ["Total inquiries", results[0].count, "/admin/inquiries"],
    ["Unread inquiries", results[1].count, "/admin/inquiries?filter=unread"],
    ["Customer feedback", results[2].count, "/admin/feedback"],
    ["Administrators", results[3].count, "/admin/users"],
  ] as const;
  return (
    <AdminShell active="/admin">
      <h1 className="text-4xl font-display font-bold mb-3">Overview</h1>
      <p className="text-muted-foreground mb-9">
        Manage customer conversations and website access.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map(([label, count, href]) => (
          <Link
            key={label}
            href={href}
            className="bg-background border-2 border-foreground p-6 shadow-[4px_4px_0_0_var(--foreground)]"
          >
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="text-4xl font-display font-bold mt-4">{count ?? 0}</p>
          </Link>
        ))}
      </div>
      <section className="mt-10 bg-background border border-border p-7">
        <h2 className="font-display text-xl font-semibold mb-4">Backend status</h2>
        <dl className="grid sm:grid-cols-2 gap-5 text-sm">
          <div>
            <dt className="text-muted-foreground">Database</dt>
            <dd className="font-medium mt-1">Connected to Supabase</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Permissions</dt>
            <dd className="font-medium mt-1">Administrator · enforced by database policies</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Owner account</dt>
            <dd className="font-medium mt-1">admin@intorza.com</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Session</dt>
            <dd className="font-medium mt-1">Server verified · private and uncached</dd>
          </div>
        </dl>
      </section>
    </AdminShell>
  );
}
