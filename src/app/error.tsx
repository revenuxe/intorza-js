"use client";
export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-bold">This page couldn’t load</h1>
      <button onClick={reset} className="bg-primary text-primary-foreground px-5 py-3">
        Try again
      </button>
      <a href="/">Go home</a>
    </main>
  );
}
