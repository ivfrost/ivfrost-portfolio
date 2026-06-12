import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'es'];
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
	const acceptLanguage = request.headers.get('accept-language') || '';
	return acceptLanguage.includes('es') ? 'es' : defaultLocale;
}

export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
	);

	if (pathnameHasLocale) return;

	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: [
		'/((?!_next|api|favicon.ico|.*\\.(?:svg|png|jpg|pdf|jpeg|gif|webp|ico|css|js|woff2?|ttf|otf)).*)',
	],
};
