import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {

    const token = cookies().get('auth_token')?.value || false

    const path = request.nextUrl.pathname

    const isPublicPath = path == '/login' || path == '/signup'

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/',request.nextUrl))
    }

    if(!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login',request.nextUrl))
    }


}

export const config = {
    matcher: ['/','/login','/signup']
  }