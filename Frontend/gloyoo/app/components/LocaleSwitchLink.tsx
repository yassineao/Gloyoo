"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "../lib/i18n";

type LocaleSwitchLinkProps = {
  currentLocale: Locale;
  label: string;
  className: string;
};

export default function LocaleSwitchLink({
  currentLocale,
  label,
  className,
}: LocaleSwitchLinkProps) {
  const pathname = usePathname();
  const localeLinks = locales.map((locale) => ({
    locale,
    href:
      pathname?.replace(/^\/(de|en|nl)(?=\/|$)/, `/${locale}`) ?? `/${locale}`,
  }));

  return (
    <details className="group relative">
      <summary
        aria-label={label}
        className={`${className} list-none cursor-pointer select-none [&::-webkit-details-marker]:hidden`}
      >
        <span>{currentLocale.toUpperCase()}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="ml-1 size-4 transition-transform duration-200 group-open:rotate-180"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>

      <div
        className="invisible absolute right-0 top-full z-40 mt-2 min-w-24 translate-y-1 rounded-xl border border-white/10 bg-[#0B0B0F]/95 p-2 opacity-0 shadow-2xl backdrop-blur-md transition-all duration-200 group-open:visible group-open:translate-y-0 group-open:opacity-100"
      >
        <ul className="space-y-1">
          {localeLinks.map(({ locale, href }) => (
            <li key={locale}>
              <Link
                href={href}
                aria-current={locale === currentLocale ? "page" : undefined}
                className={`block rounded-lg px-3 text-center py-2 text-sm transition-colors hover:bg-white/8 hover:text-white ${
                  locale === currentLocale
                    ? "bg-white/8 text-white"
                    : "text-brand-graySoft"
                }`}
              >
                {locale.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
