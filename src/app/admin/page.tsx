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
    supabase
      .from("inquiries")
      .select("id, name, email, phone, subject, message, read, created_at")
      .order("created_at", { ascending: false })
      .limit(5),
  ]);
  if (results.some((result) => result.error)) throw new Error("Unable to load dashboard data.");
  const cards = [
    ["Total inquiries", results[0].count, "/admin/inquiries"],
    ["Unread inquiries", results[1].count, "/admin/inquiries?filter=unread"],
    ["Customer feedback", results[2].count, "/admin/feedback"],
    ["Administrators", results[3].count, "/admin/users"],
  ] as const;
  const recentInquiries = results[4].data ?? [];
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
      <section className="mt-10">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl font-bold">Recent enquiries</h2>
            <p className="mt-1 text-sm text-muted-foreground">New messages from the website contact form.</p>
          </div>
          <Link href="/admin/inquiries" className="text-sm font-semibold text-primary underline underline-offset-4">View all enquiries</Link>
        </div>
        <div className="divide-y divide-border border-y border-border bg-background">
          {recentInquiries.length ? recentInquiries.map((inquiry) => (
            <article key={inquiry.id} className="grid gap-3 p-4 sm:grid-cols-[1fr_auto] sm:items-center sm:p-5">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display font-semibold">{inquiry.subject || "New enquiry"}</h3>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${inquiry.read ? "text-muted-foreground" : "text-primary"}`}>{inquiry.read ? "Read" : "New"}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{inquiry.name}{inquiry.email && <> · <a href={`mailto:${inquiry.email}`} className="underline">{inquiry.email}</a></>}{inquiry.phone && <> · <a href={`tel:${inquiry.phone}`} className="underline">{inquiry.phone}</a></>}</p>
                {inquiry.message ? <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{inquiry.message}</p> : <p className="mt-2 text-xs italic text-muted-foreground">No message provided</p>}
              </div>
              <p className="whitespace-nowrap text-xs text-muted-foreground">{new Date(inquiry.created_at).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" })} IST</p>
            </article>
          )) : <p className="p-6 text-sm text-muted-foreground">No enquiries yet. New website submissions will appear here.</p>}
        </div>
      </section>
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
