import AdminShell from "@/components/admin/AdminShell";
import { Pagination } from "@/components/admin/Pagination";
import { requireAdmin } from "@/lib/admin/auth";
import { adminDate, pageNumber, PAGE_SIZE } from "@/lib/admin/pagination";

export default async function Activity({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { supabase } = await requireAdmin();
  const page = pageNumber((await searchParams).page);
  const { data, error, count } = await supabase
    .from("admin_audit_log")
    .select("id, action, actor_id, record_id, created_at", { count: "exact" })
    .order("created_at", { ascending: false })
    .order("id")
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);
  if (error) throw new Error("Unable to load activity.");
  return (
    <AdminShell active="/admin/activity">
      <h1 className="text-4xl font-display font-bold mb-3">Admin activity</h1>
      <p className="text-muted-foreground mb-8">
        Database-recorded changes to inquiries, feedback, and administrator roles.
      </p>
      <div className="bg-background border border-border overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="p-4">Action</th>
              <th className="p-4">Administrator ID</th>
              <th className="p-4">Record ID</th>
              <th className="p-4">Time (IST)</th>
            </tr>
          </thead>
          <tbody>
            {data?.length ? (
              data.map((item) => (
                <tr key={item.id} className="border-t border-border">
                  <td className="p-4 font-medium">{item.action}</td>
                  <td className="p-4 font-mono text-xs">{item.actor_id ?? "Deleted account"}</td>
                  <td className="p-4 font-mono text-xs">{item.record_id}</td>
                  <td className="p-4 whitespace-nowrap">{adminDate(item.created_at)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-8 text-muted-foreground">
                  No administrative changes recorded yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination path="/admin/activity" page={page} count={count ?? 0} />
    </AdminShell>
  );
}
