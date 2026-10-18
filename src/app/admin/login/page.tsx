import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getAdmin } from "@/lib/admin/auth";
import { signIn } from "../actions";
import { SubmitButton } from "@/components/admin/SubmitButton";

export default async function AdminLogin({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await getAdmin()) redirect("/admin");
  const { error } = await searchParams;
  return (
    <main className="min-h-screen grid place-items-center bg-muted/40 px-5 py-12">
      <div className="w-full max-w-md border-2 border-foreground bg-background p-8 shadow-[6px_6px_0_0_var(--foreground)]">
        <Link href="/" aria-label="Intorza home">
          <Image
            src="/intorza-logo.webp"
            alt="Intorza"
            width={1080}
            height={219}
            className="w-36 h-auto mb-10"
          />
        </Link>

        <h1 className="font-display text-3xl font-bold mt-2 mb-3">Welcome back</h1>
        <p className="text-muted-foreground mb-7">Sign in with your administrator account.</p>
        {error && (
          <p role="alert" className="border border-destructive text-destructive p-3 mb-5 text-sm">
            {error === "access"
              ? "This account does not have administrator access."
              : "Unable to sign in. Check your email and password and try again."}
          </p>
        )}
        <form action={signIn} className="space-y-5">
          <div>
            <label htmlFor="email" className="block font-medium mb-2">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="username"
              defaultValue="admin@intorza.com"
              required
              maxLength={254}
              className="w-full border-2 border-foreground bg-background px-3 py-3"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              maxLength={1024}
              className="w-full border-2 border-foreground bg-background px-3 py-3"
            />
          </div>
          <SubmitButton pending="Signing in…" className="btn-hard w-full justify-center">
            Sign in
          </SubmitButton>
        </form>
        <p className="text-xs text-muted-foreground mt-6">
          Access is limited to accounts approved by an administrator.
        </p>
        <Link href="/" className="inline-block text-sm underline mt-5">
          Back to website
        </Link>
      </div>
    </main>
  );
}
