"use client";
import { useFormStatus } from "react-dom";
export function SubmitButton({
  children,
  pending = "Saving…",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { pending?: string }) {
  const status = useFormStatus();
  return (
    <button
      {...props}
      type="submit"
      disabled={status.pending || props.disabled}
      aria-disabled={status.pending || props.disabled}
    >
      {status.pending ? pending : children}
    </button>
  );
}
