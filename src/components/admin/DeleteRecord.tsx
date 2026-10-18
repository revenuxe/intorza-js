import { deleteRecord } from "@/app/admin/actions";
import { SubmitButton } from "./SubmitButton";
export function DeleteRecord({ id, table }: { id: string; table: "inquiries" | "feedback" }) {
  return (
    <details className="text-sm">
      <summary className="cursor-pointer text-destructive underline">Delete record</summary>
      <form action={deleteRecord} className="flex flex-wrap gap-2 items-end mt-3">
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="table" value={table} />
        <label>
          Type DELETE to confirm
          <input
            name="confirmation"
            required
            pattern="DELETE"
            autoComplete="off"
            className="block border border-foreground px-2 py-1 mt-1 w-40 bg-background"
          />
        </label>
        <SubmitButton pending="Deleting…" className="bg-destructive text-white px-3 py-2">
          Delete permanently
        </SubmitButton>
      </form>
    </details>
  );
}
