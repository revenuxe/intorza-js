import Link from "next/link";
import { PAGE_SIZE } from "@/lib/admin/pagination";
export function Pagination({
  path,
  page,
  count,
  filter,
}: {
  path: string;
  page: number;
  count: number;
  filter?: string;
}) {
  const total = Math.max(1, Math.ceil(count / PAGE_SIZE));
  const href = (value: number) =>
    `${path}?page=${value}${filter ? `&filter=${encodeURIComponent(filter)}` : ""}`;
  return (
    <nav aria-label="Pagination" className="flex gap-5 items-center mt-8 text-sm">
      {page > 1 && (
        <Link href={href(page - 1)} className="underline">
          Previous
        </Link>
      )}
      <span>
        Page {page} of {total} · {count} records
      </span>
      {page < total && (
        <Link href={href(page + 1)} className="underline">
          Next
        </Link>
      )}
    </nav>
  );
}
