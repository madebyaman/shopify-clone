import { NextRequest, NextResponse } from "next/server";

const protectedPages = ["/", "/playlist", "/library"];

export default function middleware(req: NextRequest) {
  if (protectedPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
