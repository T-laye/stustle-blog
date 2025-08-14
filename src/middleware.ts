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

  return NextResponse.next();
}

export const config = {
  matcher: ["/events/big-conference"],
};

