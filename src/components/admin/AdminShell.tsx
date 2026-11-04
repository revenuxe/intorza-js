import Link from "next/link";
import Image from "next/image";
import { requireAdmin } from "@/lib/admin/auth";
import { signOut } from "@/app/admin/actions";
import { SubmitButton } from "./SubmitButton";
import { AdminNavigation } from "./AdminNavigation";

export default async function AdminShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await requireAdmin();
  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b-2 border-foreground bg-background">
        <div className="max-w-7xl mx-auto px-5 py-5 flex flex-wrap items-center gap-5 justify-between">
          <Link href="/admin">
            <Image
              src="/intorza-logo.webp"
              alt="Intorza admin"
              width={1080}
              height={219}
              className="w-32 h-auto"
            />
          </Link>
          <div className="flex flex-wrap gap-5 items-center text-sm">
            <span className="text-muted-foreground break-all">{user.email}</span>
            <Link href="/" className="underline">
              View website
            </Link>
            <form action={signOut}>
              <SubmitButton
                pending="Signing out…"
                className="border-2 border-foreground px-3 py-2 font-medium"
              >
                Sign out
              </SubmitButton>
            </form>
          </div>
        </div>
        <AdminNavigation />
      </header>
      <main className="max-w-7xl mx-auto px-5 py-10">{children}</main>
    </div>
  );
}
