import Link from "next/link";
export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-5 px-6 text-center">
      <h1 className="text-5xl font-bold">404 — Page not found</h1>
      <p>The page you’re looking for doesn’t exist or has moved.</p>
      <Link href="/" className="text-primary underline">
        Go home
      </Link>
    </main>
  );
}
