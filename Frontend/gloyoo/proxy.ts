import { NextRequest, NextResponse } from "next/server";
import { locales, type Locale } from "./app/lib/i18n";

const LOCALE_COOKIE = "gloyoo-locale";
const PUBLIC_FILE = /\.[^/]+$/;

const localeSet = new Set<string>(locales);

const countryLocaleMap: Record<string, Locale> = {
  AT: "de",
  BE: "nl",
  CH: "de",
  DE: "de",
  LU: "de",
  NL: "nl",
};

function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && localeSet.has(value));
}

function getLocaleFromCountry(country: string | null): Locale | null {
  if (!country) {
    return null;
  }

  return countryLocaleMap[country.toUpperCase()] ?? null;
}

function getLocaleFromLanguageHeader(header: string | null): Locale | null {
  if (!header) {
    return null;
  }

  const languageTags = header
    .split(",")
    .map((entry) => entry.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean);

  for (const tag of languageTags) {
    if (tag === "de" || tag.startsWith("de-")) {
      return "de";
    }

    if (tag === "nl" || tag.startsWith("nl-")) {
      return "nl";
    }

    if (tag === "en" || tag.startsWith("en-")) {
      return "en";
    }
  }

  return null;
}

function detectLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;

  if (isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const countryHeader =
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("cf-ipcountry") ??
    request.headers.get("x-country-code");

  const localeFromCountry = getLocaleFromCountry(countryHeader);

  if (localeFromCountry) {
    return localeFromCountry;
  }

  const localeFromLanguage = getLocaleFromLanguageHeader(
    request.headers.get("accept-language"),
  );

  if (localeFromLanguage) {
    return localeFromLanguage;
  }

  return "en";
}

function withLocaleCookie(response: NextResponse, locale: Locale) {
  response.cookies.set(LOCALE_COOKIE, locale, {
    httpOnly: false,
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
  });

  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  const [, maybeLocale] = pathname.split("/");

  if (isLocale(maybeLocale)) {
    return withLocaleCookie(NextResponse.next(), maybeLocale);
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return withLocaleCookie(NextResponse.redirect(url), locale);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
