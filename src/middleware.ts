import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const secret = process.env.NEXTAUTH_SECRET

export async function middleware(req: NextRequest) {
    // const token = await getToken({ req, secret })
    const { pathname } = req.nextUrl
    const token = await getToken({ req, secret, secureCookie: process.env.NODE_ENV === "production" });

    // If user is logged in, redirect away from login page
    if (token && pathname === "/admin/login") {
        return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    // If user is NOT logged in and trying to access /dashboard or protected routes
    if (!token && pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/admin/login", req.url))
    }

    // Allow access to all other routes
    return NextResponse.next()
}

// Which paths to run middleware on
export const config = {
    matcher: ["/admin/login", "/dashboard/:path*"],
}
