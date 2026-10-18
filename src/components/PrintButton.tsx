"use client";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
export default function PrintButton() {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => window.print()}
      className="btn-hard-ghost btn-hard-hover"
    >
      <Printer className="w-4 h-4 mr-2" />
      Print quotation
    </Button>
  );
}
