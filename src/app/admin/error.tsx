"use client";
export default function AdminError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen grid place-items-center px-5">
      <div className="max-w-md">
        <h1 className="font-display text-2xl font-bold">The dashboard couldn’t load</h1>
        <p className="my-4 text-muted-foreground">
          The database or authentication service may be unavailable. Please try again.
        </p>
        <button onClick={reset} className="btn-hard">
          Try again
        </button>
        <a href="/admin/login" className="block underline mt-5">
          Return to sign in
        </a>
      </div>
    </main>
  );
}
