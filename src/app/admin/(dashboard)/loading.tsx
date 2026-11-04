export default function DashboardLoading() {
  return (
    <section role="status" aria-live="polite" aria-label="Loading dashboard">
      <p className="mb-6 text-sm text-muted-foreground">Loading dashboard…</p>
      <div aria-hidden="true" className="motion-safe:animate-pulse space-y-5">
        <div className="h-10 w-48 bg-muted" />
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="h-32 border border-border bg-muted" />
          <div className="h-32 border border-border bg-muted" />
        </div>
        <div className="h-48 border border-border bg-muted" />
      </div>
    </section>
  );
}
