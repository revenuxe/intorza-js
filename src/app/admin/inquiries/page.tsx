import Link from "next/link";
import AdminShell from "@/components/admin/AdminShell";
import { DeleteRecord } from "@/components/admin/DeleteRecord";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { Pagination } from "@/components/admin/Pagination";
import { requireAdmin } from "@/lib/admin/auth";
import { adminDate, pageNumber, PAGE_SIZE } from "@/lib/admin/pagination";
import { updateInquiry } from "../actions";

export default async function Inquiries({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; filter?: string; error?: string }>;
}) {
  const { supabase } = await requireAdmin();
  const params = await searchParams,
    page = pageNumber(params.page),
    unread = params.filter === "unread";
  let query = supabase
    .from("inquiries")
    .select("id, name, email, phone, subject, message, read, created_at", { count: "exact" })
    .order("created_at", { ascending: false })
    .order("id")
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);
  if (unread) query = query.eq("read", false);
  const { data, error, count } = await query;
  if (error) throw new Error("Unable to load inquiries.");
  return (
    <AdminShell active="/admin/inquiries">
      <h1 className="text-4xl font-display font-bold mb-3">Inquiries</h1>
      <p className="text-muted-foreground mb-7">
        Read and respond to messages from the contact form.
      </p>
      <div className="flex gap-5 mb-7">
        <Link
          href="/admin/inquiries"
          aria-current={!unread ? "page" : undefined}
          className="underline"
        >
          All messages
        </Link>
        <Link
          href="/admin/inquiries?filter=unread"
          aria-current={unread ? "page" : undefined}
          className="underline"
        >
          Unread only
        </Link>
      </div>
      {params.error && (
        <p role="alert" className="text-destructive mb-6">
          The request could not be completed. Check your confirmation and try again.
        </p>
      )}
      <div className="space-y-5">
        {data?.length ? (
          data.map((item) => (
            <article key={item.id} className="border border-border bg-background p-6">
              <div className="flex flex-wrap justify-between items-start gap-3">
                <div>
                  <span
                    className={`text-xs uppercase tracking-wide font-bold ${item.read ? "text-muted-foreground" : "text-primary"}`}
                  >
                    {item.read ? "Read" : "Unread"}
                  </span>
                  <h2 className="text-xl font-semibold mt-2">{item.subject}</h2>
                  <p className="text-sm text-muted-foreground mt-2">
                    {item.name} ·{" "}
                    {item.email ? <a href={`mailto:${item.email}`} className="underline">{item.email}</a> : "No email provided"}
                    {item.phone && <> · <a href={`tel:${item.phone}`} className="underline">{item.phone}</a></>}
                    {" "}· {adminDate(item.created_at)} IST
                  </p>
                </div>
                <form action={updateInquiry}>
                  <input name="id" type="hidden" value={item.id} />
                  <input name="read" type="hidden" value={String(!item.read)} />
                  <SubmitButton className="border border-foreground px-3 py-2 text-sm">
                    Mark as {item.read ? "unread" : "read"}
                  </SubmitButton>
                </form>
              </div>
              {item.message ? <p className="whitespace-pre-wrap break-words mt-5 mb-5">{item.message}</p> : <p className="my-5 text-sm italic text-muted-foreground">No message provided.</p>}
              <div className="flex flex-wrap gap-6 items-start">
                {item.email && <a
                  href={`mailto:${item.email}?subject=${encodeURIComponent(`Re: ${item.subject ?? "Your enquiry"}`)}`}
                  className="text-sm underline"
                >Reply by email</a>}
                <DeleteRecord id={item.id} table="inquiries" />
              </div>
            </article>
          ))
        ) : (
          <p className="border border-border bg-background p-8 text-muted-foreground">
            No {unread ? "unread " : ""}inquiries yet.
          </p>
        )}
      </div>
      <Pagination
        path="/admin/inquiries"
        page={page}
        count={count ?? 0}
        filter={unread ? "unread" : undefined}
      />
    </AdminShell>
  );
}
