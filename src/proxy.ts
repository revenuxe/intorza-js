import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { supabaseConfig } from "@/lib/supabase/config";

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });
  const { url, key } = supabaseConfig();
  const supabase = createServerClient(url, key, {
    cookieOptions: {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    },
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll(values) {
        values.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        values.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      },
    },
  });
  // Validate and refresh the cookie session. Each protected page/action also checks the DB role.
  await supabase.auth.getClaims();
  response.headers.set("Cache-Control", "private, no-store, max-age=0");
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

export const config = { matcher: ["/admin/:path*"] };
