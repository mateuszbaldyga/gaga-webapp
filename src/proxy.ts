/*
This middleware captures URL information (pathname and search params)
from each request to our Next.js app (except API routes, static files, etc)
and stores them in custom headers. This allows server components
to access current URL info via getServerCurrentUrl() without
needing the request object directly.
*/
import type { NextRequest } from 'next/server';
import { Locales } from '../messages/types';
import createMiddleware from 'next-intl/middleware';
import { CUSTOM_HEADERS } from '@/config/consts';

const locales = Object.values(Locales);
const defaultLocale = Locales.en;

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const searchParams = request.nextUrl.search;
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}';
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: blob:};
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    connect-src 'self';
    worker-src 'self';
    manifest-src 'self'
  `;

  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim();

  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
  });
  const response = handleI18nRouting(request);

  response.headers.set(CUSTOM_HEADERS.xPathname, pathname);
  response.headers.set(CUSTOM_HEADERS.xSearchParams, searchParams);
  response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon).*)'],
};
