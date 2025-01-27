import { NextResponse } from 'next/server';

export function middleware(request) {
	// If accessing root path, redirect to dashboard
	if (request.nextUrl.pathname === '/') {
		return NextResponse.redirect(new URL('/dashboard', request.url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: '/',
};