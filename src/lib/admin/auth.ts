import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const getAdmin = cache(async () => {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user || !user.email_confirmed_at) return null;
  const { data: isAdmin, error: roleError } = await supabase.rpc("has_role", {
    _user_id: user.id,
    _role: "admin",
  });
  if (roleError) throw new Error("Unable to verify administrator permissions.");
  return isAdmin ? { user, supabase } : null;
});

export async function requireAdmin() {
  const admin = await getAdmin();
  if (!admin) redirect("/admin/login");
  return admin;
}
