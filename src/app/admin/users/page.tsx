import AdminShell from "@/components/admin/AdminShell";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { requireAdmin } from "@/lib/admin/auth";
import { adminDate } from "@/lib/admin/pagination";
import { setAdminAccess } from "../actions";

export default async function Users({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; success?: string }>;
}) {
  const { user, supabase } = await requireAdmin();
  const { data, error } = await supabase.rpc("admin_list_accounts");
  if (error) throw new Error("Unable to load account access.");
  const params = await searchParams;
  return (
    <AdminShell active="/admin/users">
      <h1 className="text-4xl font-display font-bold mb-3">Account access</h1>
      <p className="text-muted-foreground mb-7">
        Grant or revoke website administrator privileges for confirmed accounts. The owner and your
        current access are protected.
      </p>
      {params.error && (
        <p role="alert" className="text-destructive mb-6">
          Unable to change access. Use an existing confirmed account; owner and self-revocation are
          blocked.
        </p>
      )}
      {params.success && (
        <p role="status" className="text-green-700 mb-6">
          Administrator access updated.
        </p>
      )}
      <div className="bg-background border border-border overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="p-4">Account</th>
              <th className="p-4">Status</th>
              <th className="p-4">Last sign in (IST)</th>
              <th className="p-4">Access</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((account) => (
              <tr key={account.id} className="border-t border-border">
                <td className="p-4">
                  <p className="font-medium">{account.email}</p>
                  {account.email?.toLowerCase() === "admin@intorza.com" && (
                    <span className="text-xs text-primary">Owner</span>
                  )}
                </td>
                <td className="p-4">{account.confirmed ? "Confirmed" : "Unconfirmed"}</td>
                <td className="p-4 whitespace-nowrap">{adminDate(account.last_sign_in_at)}</td>
                <td className="p-4">
                  {account.id === user.id ||
                  account.email?.toLowerCase() === "admin@intorza.com" ? (
                    "Administrator · protected"
                  ) : account.confirmed ? (
                    <form action={setAdminAccess}>
                      <input name="email" type="hidden" value={account.email ?? ""} />
                      <input name="enabled" type="hidden" value={String(!account.is_admin)} />
                      <SubmitButton className="underline">
                        {account.is_admin ? "Revoke administrator" : "Grant administrator"}
                      </SubmitButton>
                    </form>
                  ) : (
                    "Confirm email first"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground mt-4">
        Up to 1,000 registered accounts. Passwords and authentication secrets are never exposed
        here.
      </p>
    </AdminShell>
  );
}
