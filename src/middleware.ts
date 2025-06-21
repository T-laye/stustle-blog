import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "";
  const url = req.nextUrl;

  // Handle subdomain routing for events
  if (
    hostname.endsWith(".stustle.com") &&
    hostname !== "www.stustle.com" &&
    hostname !== "stustle.com"
  ) {
    const subdomain = hostname.replace(".stustle.com", "");

    // Map subdomain to event slug
    if (url.pathname === "/") {
      url.pathname = `/events/${subdomain}`;
      return NextResponse.rewrite(url);
    }

    // Handle additional paths on the subdomain (like /register, /tickets, etc.)
    // These would rewrite to /events/[slug]/[...path]
    if (url.pathname !== "/") {
      const eventPath = `/events/${subdomain}${url.pathname}`;
      url.pathname = eventPath;
      return NextResponse.rewrite(url);
    }
  }

  // Optional: Redirect main domain event URLs to subdomains
  // This redirects stustle.com/events/big-conference to big.stustle.com
  if (
    (hostname === "stustle.com" || hostname === "www.stustle.com") &&
    url.pathname.startsWith("/events/")
  ) {
    const eventSlug = url.pathname.split("/events/")[1];
    if (eventSlug) {
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
    // Add other paths that might be accessed on subdomains
    "/register",
    "/tickets",
    "/speakers",
    "/schedule",
  ],
};
