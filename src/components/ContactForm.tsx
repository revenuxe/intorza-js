"use client";
import { useActionState, useEffect, useRef } from "react";
import { submitContact } from "@/app/contact/actions";
import { SubmitButton } from "@/components/admin/SubmitButton";

export default function ContactForm({ initialSubject = "" }: { initialSubject?: string }) {
  const [state, action] = useActionState(submitContact, { success: false, message: "" });
  const successMessageRef = useRef<HTMLParagraphElement>(null);
  const field = "mt-2 block w-full border-2 border-foreground bg-background px-3 py-3";

  useEffect(() => {
    if (!state.success) return;
    successMessageRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  }, [state.success]);

  return (
    <div className="min-w-0">
      <h2 className="font-display text-2xl font-bold mb-3">Tell us what you’re planning</h2>
      <p className="text-muted-foreground mb-7">
        Share a little context and your message will go straight to the Intorza enquiry inbox.
      </p>
      {state.message && (
        <p
          ref={state.success ? successMessageRef : undefined}
          role={state.success ? "status" : "alert"}
          className={`scroll-mt-28 p-4 mb-6 border ${state.success ? "border-green-700 text-green-700" : "border-destructive text-destructive"}`}
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
              Email <span className="font-normal text-muted-foreground">(optional)</span>
              <input
                name="email"
                type="email"
                maxLength={254}
                autoComplete="email"
                className={field}
              />
            </label>
          </div>
          <label className="block font-medium">
            Mobile number
            <input
              name="phone"
              type="tel"
              required
              minLength={7}
              maxLength={32}
              autoComplete="tel"
              inputMode="tel"
              placeholder="+1 555 123 4567"
              aria-describedby="contact-phone-hint"
              className={field}
            />
            <span id="contact-phone-hint" className="mt-1 block text-xs font-normal text-muted-foreground">
              Include your country code, for example +1 or +91.
            </span>
          </label>
          <label className="block font-medium">
            Subject
            <input name="subject" required minLength={3} maxLength={200} defaultValue={initialSubject} className={field} />
          </label>
          <label className="block font-medium">
            Message <span className="font-normal text-muted-foreground">(optional)</span>
            <textarea
              name="message"
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
    </div>
  );
}
