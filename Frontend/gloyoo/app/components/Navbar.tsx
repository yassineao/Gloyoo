import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import {
  getAlternateLocale,
  type Locale,
  type LocaleDictionary,
} from "../lib/i18n";

export default function Navbar({
  locale,
  content,
}: {
  locale: Locale;
  content: LocaleDictionary["nav"];
}) {
  const alternateLocale = getAlternateLocale(locale);
  const localizedHref = (href: string) => `/${locale}${href}`;

  return (
    <header className="fixed top-0 z-20 min-w-full border-b border-white/8 bg-[#0B0B0F]/45 px-4 text-slate-50  backdrop-blur-md sm:border-transparent sm:px-6 lg:px-27">
      <div className="container flex h-16 items-center justify-between px-0 sm:px-0">
        <nav
          aria-label={content.ariaLabel}
          className="grid w-full grid-cols-2 items-center justify-between py-2  lg:grid-cols-4 lg:gap-4"
        >
          <Link
            href={`/${locale}#home`}
            className="col-span-1 shrink-0"
            aria-label={content.homeAriaLabel}
          >
            <div className="ml-0 inline-flex h-12 max-w-full items-center gap-2.5 overflow-hidden whitespace-nowrap rounded-full border border-white/10 bg-white/8 px-5 text-white shadow-[0_0_40px_rgba(168,85,247,0.25)] ring-1 ring-[#A855F7]/30 backdrop-blur-md transition-all duration-300 sm:gap-3 sm:px-5 sm:py-2.5 lg:ml-30">
              <Image
                src="/Logo.png"
                alt="Gloyoo Logo"
                width={96}
                height={96}
                quality={80}
                priority
                sizes="(max-width: 640px) 36px, (max-width: 1024px) 44px, 52px"
                className="h-8 w-auto shrink-0 object-contain sm:h-9 lg:h-10"
              />
              <span className="pr-1 text-xs font-semibold leading-none tracking-[0.1em] text-white antialiased sm:pr-2 sm:text-sm lg:text-base">
                GLOYOO
              </span>
            </div>
          </Link>

          <div className="hidden lg:col-span-2 lg:block lg:justify-self-center">
            <ul className="flex items-center gap-1 xl:gap-2">
              {content.items.map((item) => (
                <li key={item.href} className="group relative">
                  <Link
                    href={localizedHref(item.href)}
                    className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-[#A1A1AA] transition-colors hover:bg-white/8 hover:text-white focus:outline-none"
                  >
                    {item.label}
                    {item.children?.length ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="ml-1 size-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    ) : null}
                  </Link>

                  {item.children?.length ? (
                    <div className="invisible absolute left-0 top-full z-30 mt-2 w-64 translate-y-1 rounded-xl border border-white/10 bg-[#0B0B0F]/95 p-2 opacity-0 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <ul className="space-y-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={localizedHref(child.href)}
                              className="block rounded-lg px-3 py-2 text-sm text-[#A1A1AA] transition-colors hover:bg-white/8 hover:text-white focus:outline-none"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden items-center gap-2 text-right lg:col-span-1 lg:flex lg:justify-end xl:gap-4">
            <Link
              href={`/${alternateLocale}`}
              className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-[#A1A1AA] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F]"
            >
              {content.switchLabel}
            </Link>

            <Link
              href={`/${locale}/form`}
              className="group text-center relative inline-flex h-11 items-center justify-center overflow-hidden rounded-xl border border-[#A855F7] px-4 text-sm font-semibold text-[#A855F7] transition-[color,border-color,transform,box-shadow] duration-300 ease-out hover:border-[#2563EB] hover:text-white hover:shadow-[0_16px_36px_rgba(37,99,235,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F] sm:px-5 sm:text-sm xl:px-6 xl:text-base"
            >
              <span className="relative z-10">{content.contactLabel}</span>
              <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"></span>
            </Link>
          </div>

          <MobileNav
            locale={locale}
            alternateLocale={alternateLocale}
            content={content}
          />
        </nav>
      </div>
    </header>
  );
}
