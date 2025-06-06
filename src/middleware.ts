export { default } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Get the token from next-auth (supports both dev & production)
  const token =
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("__Secure-next-auth.session-token")?.value;

  // Public pages
  const isPublicPath =
    path === "/" || path === "/login" || path === "/register";

  // 1. If user is logged in and tries to access public page, redirect to dashboard
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // 2. If user is not logged in and tries to access protected page, redirect to login
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 3. Allow everything else
  return NextResponse.next();
}

// Match all routes you want to protect or evaluate
export const config = {
  matcher: ["/", "/login", "/register", "/dashboard/:path*"], // Add more protected routes as needed
};
