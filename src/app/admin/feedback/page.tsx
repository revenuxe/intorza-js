import AdminShell from "@/components/admin/AdminShell";
import { DeleteRecord } from "@/components/admin/DeleteRecord";
import { Pagination } from "@/components/admin/Pagination";
import { requireAdmin } from "@/lib/admin/auth";
import { adminDate, pageNumber, PAGE_SIZE } from "@/lib/admin/pagination";

export default async function Feedback({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; error?: string }>;
}) {
  const { supabase } = await requireAdmin();
  const params = await searchParams,
    page = pageNumber(params.page);
  const { data, error, count } = await supabase
    .from("feedback")
    .select("id, name, email, message, rating, created_at", { count: "exact" })
    .order("created_at", { ascending: false })
    .order("id")
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);
  if (error) throw new Error("Unable to load feedback.");
  return (
    <AdminShell active="/admin/feedback">
      <h1 className="text-4xl font-display font-bold mb-3">Feedback</h1>
      <p className="text-muted-foreground mb-8">
        Review feedback already collected by your website.
      </p>
      {params.error && (
        <p role="alert" className="text-destructive mb-6">
          Unable to delete this record. Check your confirmation and try again.
        </p>
      )}
      <div className="space-y-5">
        {data?.length ? (
          data.map((item) => (
            <article key={item.id} className="border border-border bg-background p-6">
              <div className="flex flex-wrap justify-between gap-3">
                <h2 className="font-semibold text-xl">{item.name || "Anonymous"}</h2>
                <span className="text-sm font-medium">
                  {item.rating ? `${item.rating} / 5` : "No rating"}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {item.email && (
                  <>
                    <a href={`mailto:${item.email}`} className="underline">
                      {item.email}
                    </a>{" "}
                    ·{" "}
                  </>
                )}
                {adminDate(item.created_at)} IST
              </p>
              <p className="whitespace-pre-wrap break-words my-5">{item.message}</p>
              <DeleteRecord id={item.id} table="feedback" />
            </article>
          ))
        ) : (
          <p className="border border-border bg-background p-8 text-muted-foreground">
            No feedback yet.
          </p>
        )}
      </div>
      <Pagination path="/admin/feedback" page={page} count={count ?? 0} />
    </AdminShell>
  );
}
