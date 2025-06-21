import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const hostname = req.headers.get("big-conference") || "";
  const url = req.nextUrl;

  // Force redirect stustle.com → www.stustle.com
  if (hostname === "stustle.com") {
    return NextResponse.redirect(
      `https://www.stustle.com${url.pathname}${url.search}`
    );
  }

  // Handle event subdomains (like big.stustle.com)
  if (hostname.endsWith(".stustle.com") && hostname !== "www.stustle.com") {
    const subdomain = hostname.replace(".stustle.com", "");

    // Rewrite subdomain to event path
    if (url.pathname === "/") {
      url.pathname = `/events/${subdomain}`;
      return NextResponse.rewrite(url);
    }

    // Handle additional paths on subdomains
    if (url.pathname !== "/") {
      url.pathname = `/events/${subdomain}${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // Optional: Redirect www.stustle.com/events/[slug] to [slug].stustle.com
  if (hostname === "www.stustle.com" && url.pathname.startsWith("/events/")) {
    const eventSlug = url.pathname.split("/events/")[1];
    if (eventSlug && !eventSlug.includes("/")) {
      return NextResponse.redirect(
        `https://${eventSlug}.stustle.com${url.search}`
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/events/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
