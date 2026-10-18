"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function signIn(form: FormData) {
  const email = String(form.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(form.get("password") ?? "");
  if (!email || email.length > 254 || !password || password.length > 1024)
    redirect("/admin/login?error=credentials");
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error || !data.user) redirect("/admin/login?error=credentials");
  const { data: isAdmin, error: roleError } = await supabase.rpc("has_role", {
    _user_id: data.user.id,
    _role: "admin",
  });
  if (roleError || !isAdmin || !data.user.email_confirmed_at) {
    await supabase.auth.signOut({ scope: "local" });
    redirect("/admin/login?error=access");
  }
  redirect("/admin");
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut({ scope: "local" });
  redirect("/admin/login");
}

const uuid = (value: FormDataEntryValue | null) => {
  const id = String(value ?? "");
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id))
    throw new Error("Invalid record ID.");
  return id;
};

export async function updateInquiry(form: FormData) {
  const { supabase } = await requireAdmin();
  const { error, data } = await supabase
    .from("inquiries")
    .update({ read: form.get("read") === "true" })
    .eq("id", uuid(form.get("id")))
    .select("id")
    .single();
  if (error || !data) redirect("/admin/inquiries?error=update");
  revalidatePath("/admin", "layout");
}

export async function deleteRecord(form: FormData) {
  const { supabase } = await requireAdmin();
  const table = form.get("table");
  if (table !== "inquiries" && table !== "feedback") throw new Error("Invalid table.");
  if (form.get("confirmation") !== "DELETE") redirect(`/admin/${table}?error=confirmation`);
  const { error, data } = await supabase
    .from(table)
    .delete()
    .eq("id", uuid(form.get("id")))
    .select("id")
    .single();
  if (error || !data) redirect(`/admin/${table}?error=delete`);
  revalidatePath("/admin", "layout");
}

export async function setAdminAccess(form: FormData) {
  const { supabase } = await requireAdmin();
  const email = String(form.get("email") ?? "")
    .trim()
    .toLowerCase();
  if (!email || email.length > 254) redirect("/admin/users?error=email");
  const { error } = await supabase.rpc("admin_set_access", {
    target_email: email,
    enabled: form.get("enabled") === "true",
  });
  if (error) redirect("/admin/users?error=access");
  revalidatePath("/admin", "layout");
  redirect("/admin/users?success=access");
}
