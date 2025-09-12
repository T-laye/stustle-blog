import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "";
  const url = req.nextUrl;

  // Redirect www.stustle.com/events/big-conference → big.stustle.com/
  if (
    hostname === "www.stustle.com" &&
    url.pathname === "/events/big-conference"
  ) {
    return NextResponse.redirect("https://big.stustle.com");
  }

  // Rewrite big.stustle.com/ → /events/big-conference
  if (hostname === "big.stustle.com" && url.pathname === "/") {
    url.pathname = "/events/big-conference";
    return NextResponse.rewrite(url);
  }

  // Rewrite portfolio.stustle.com/ → /portfolio
  if (hostname === "portfolio.stustle.com" && url.pathname === "/") {
    url.pathname = "/portfolio";
    return NextResponse.rewrite(url);
  }

  // Rewrite blog.stustle.com/ → /blog
  if (hostname === "blog.stustle.com" && url.pathname === "/") {
    url.pathname = "/blog";
    return NextResponse.rewrite(url);
  }

  // Rewrite community.stustle.com/ → /community
  if (hostname === "community.stustle.com" && url.pathname === "/") {
    url.pathname = "/community";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/events/big-conference", "/portfolio", "/blog"],
};
