export const PAGE_SIZE = 20;
export function pageNumber(value?: string) {
  const page = Number(value);
  return Number.isSafeInteger(page) && page > 0 ? Math.min(page, 100000) : 1;
}
export function adminDate(value: string | null) {
  return value
    ? new Date(value).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "Never";
}
