"use client";
import { useActionState } from "react";
import { submitContact } from "@/app/contact/actions";
import { SubmitButton } from "@/components/admin/SubmitButton";

export default function ContactForm() {
  const [state, action] = useActionState(submitContact, { success: false, message: "" });
  const field = "mt-2 block w-full border-2 border-foreground bg-background px-3 py-3";
  return (
    <section className="container-custom max-w-2xl mt-14">
      <h2 className="font-display text-2xl font-bold mb-3">Send us a message</h2>
      <p className="text-muted-foreground mb-7">
        Tell us how we can help with your interior design business.
      </p>
      {state.message && (
        <p
          role={state.success ? "status" : "alert"}
          className={`p-4 mb-6 border ${state.success ? "border-green-700 text-green-700" : "border-destructive text-destructive"}`}
        >
          {state.message}
        </p>
      )}
      {!state.success && (
        <form action={action} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="font-medium">
              Name
              <input
                name="name"
                required
                minLength={2}
                maxLength={120}
                autoComplete="name"
                className={field}
              />
            </label>
            <label className="font-medium">
              Email
              <input
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                className={field}
              />
            </label>
          </div>
          <label className="block font-medium">
            Subject
            <input name="subject" required minLength={3} maxLength={200} className={field} />
          </label>
          <label className="block font-medium">
            Message
            <textarea
              name="message"
              required
              minLength={10}
              maxLength={5000}
              rows={5}
              className={field}
            />
          </label>
          <div className="hidden" aria-hidden="true">
            <label>
              Website
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <SubmitButton pending="Sending…" className="btn-hard">
            Send message
          </SubmitButton>
        </form>
      )}
    </section>
  );
}
