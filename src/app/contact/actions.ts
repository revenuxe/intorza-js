"use server";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database.types";
import { supabaseConfig } from "@/lib/supabase/config";
import { validateContact } from "@/lib/contact-validation";

export type ContactState = { success: boolean; message: string };
export async function submitContact(
  _previous: ContactState,
  form: FormData,
): Promise<ContactState> {
  if (String(form.get("website") ?? ""))
    return { success: true, message: "Thank you. Your message has been received." };
  const input = {
    name: String(form.get("name") ?? "").trim(),
    email: String(form.get("email") ?? "")
      .trim()
      .toLowerCase(),
    subject: String(form.get("subject") ?? "").trim(),
    message: String(form.get("message") ?? "").trim(),
  };
  const validation = validateContact(input);
  if (validation) return { success: false, message: validation };
  try {
    const { url, key } = supabaseConfig();
    const supabase = createClient<Database>(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { error } = await supabase.from("inquiries").insert({ ...input, read: false });
    if (error)
      return {
        success: false,
        message: "Your message could not be saved. Please try again or email our team.",
      };
    return {
      success: true,
      message: "Thank you. Your message has been received. Our team will get back to you.",
    };
  } catch {
    return {
      success: false,
      message: "Your message could not be saved. Please try again or email our team.",
    };
  }
}
