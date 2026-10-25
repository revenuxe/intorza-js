"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function ArticleChecklist({ items, title }: { items: string[]; title: string }) {
  const [checked, setChecked] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(
        `${title}\n\n${items.map((item) => `${checked.includes(item) ? "[x]" : "[ ]"} ${item}`).join("\n")}`,
      );
      setMessage("Checklist copied. Paste it into your project notes.");
    } catch {
      setMessage(
        "Copy is unavailable in this browser. You can select and copy the checklist text.",
      );
    }
  }
  return (
    <div className="rounded-xl border border-border bg-background p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-semibold text-primary">Your preparation checklist</span>
        <span aria-live="polite" className="text-sm text-muted-foreground">
          {checked.length} of {items.length} ready
        </span>
      </div>
      <div className="my-5 h-1.5 overflow-hidden rounded-full bg-muted" aria-hidden="true">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${(checked.length / items.length) * 100}%` }}
        />
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <label
            key={item}
            className="flex min-h-12 cursor-pointer items-start gap-3 rounded-lg p-2 hover:bg-muted"
          >
            <input
              type="checkbox"
              checked={checked.includes(item)}
              onChange={(e) =>
                setChecked((current) =>
                  e.target.checked ? [...current, item] : current.filter((i) => i !== item),
                )
              }
              className="mt-1 h-5 w-5 shrink-0 accent-primary"
            />
            <span
              className={`text-sm leading-7 ${checked.includes(item) ? "text-muted-foreground line-through" : ""}`}
            >
              {item}
            </span>
          </label>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
        <button
          onClick={copy}
          type="button"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold hover:border-primary"
        >
          <Copy className="h-4 w-4" aria-hidden="true" />
          Copy checklist
        </button>
        <button
          onClick={() => {
            setChecked([]);
            setMessage("");
          }}
          type="button"
          className="min-h-11 px-2 text-sm text-muted-foreground underline underline-offset-4"
        >
          Reset
        </button>
      </div>
      <p role="status" className="mt-3 text-sm text-muted-foreground">
        {message || "Use this while reading. Your selections reset when you leave this page."}
      </p>
      {checked.length === items.length && (
        <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary">
          <Check className="h-4 w-4" aria-hidden="true" />
          You have the inputs ready for your quotation review.
        </p>
      )}
    </div>
  );
}
