import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const user = req.cookies.get("user"); // Use cookies instead of localStorage

  if (!user && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Apply middleware to protect the admin routes
export const config = {
  matcher: ["/dashboard/:path*"], // Adjust to match your protected routes
};
