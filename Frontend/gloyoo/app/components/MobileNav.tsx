import Link from "next/link";
import LocaleSwitchLink from "./LocaleSwitchLink";
import { type Locale, type LocaleDictionary } from "../lib/i18n";

type MobileNavProps = {
  locale: Locale;
  content: LocaleDictionary["nav"];
};

export default function MobileNav({ locale, content }: MobileNavProps) {
  const localizedHref = (href: string) => `/${locale}${href}`;

  return (
    <details className="relative justify-self-end lg:hidden [&_summary::-webkit-details-marker]:hidden">
      <div className="flex items-center">
        <LocaleSwitchLink
          currentLocale={locale}
          label={content.switchLabel}
          className="mr-4 inline-flex items-center py-2 text-sm font-medium text-brand-graySoft hover:text-white"
        />
        <summary className="flex cursor-pointer list-none items-center">
          <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/12 bg-white/6 text-sm font-medium text-white transition-colors hover:bg-white/10"
            aria-label={content.mobileMenuLabel}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </span>
        </summary>
      </div>

      <div className="absolute left-0 top-full w-full rounded-b-lg bg-transparent px-4 pt-2 shadow-lg sm:px-6">
        <ul className="space-y-3 rounded-lg border border-white/10 bg-brand-navyDark/92 px-4 pb-4 text-brand-graySoft backdrop-blur-md">
          {content.items.map((item) => (
            <li key={item.href}>
              <Link href={localizedHref(item.href)} className="block py-2 hover:text-white">
                {item.label}
              </Link>

              {item.children?.length ? (
                <ul className="ml-4 mt-2 space-y-2 border-l border-white/10 pl-4 text-sm">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={localizedHref(child.href)} className="block py-1 hover:text-white">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
          <li>
            <Link href={`/${locale}/form`} className="block py-2 hover:text-white">
              {content.contactLabel}
            </Link>
          </li>
        </ul>
      </div>
    </details>
  );
}
