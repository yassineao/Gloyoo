"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  const [isOpen, setIsOpen] = React.useState(false);
  const alternateLocale = getAlternateLocale(locale);
  const localizedHref = (href: string) => `/${locale}${href}`;

  return (
    <header className="fixed top-0 z-20 min-w-full border-b border-brand-charcoal bg-transparent px-4 text-slate-50 shadow-brand-soft backdrop-blur-sm dark:bg-transparent sm:border-transparent sm:px-6 lg:px-27">
      <div className="container flex h-16 items-center justify-between px-0 sm:px-0">
        <nav
          aria-label={content.ariaLabel}
          className="grid w-full grid-cols-2 items-center justify-between py-2 shadow-brand-soft lg:grid-cols-4 lg:gap-4"
        >
          <Link
            href={`/${locale}#home`}
            className="col-span-1 shrink-0"
            aria-label={content.homeAriaLabel}
          >
            <div className="ml-0 inline-flex h-12 max-w-full items-center gap-2.5 overflow-hidden whitespace-nowrap rounded-full bg-white/92 px-5 text-brand-steel shadow-[0_10px_30px_rgba(15,23,42,0.12)] ring-1 ring-white/70 backdrop-blur-md transition-all duration-300 sm:gap-3 sm:px-5 sm:py-2.5 lg:ml-30">
              <Image
                src="/Logo.png"
                alt="Gloyoo Logo"
                width={1203}
                height={1203}
                quality={100}
                priority
                sizes="(max-width: 640px) 44px, 52px"
                className="h-10 w-auto shrink-0 object-contain sm:h-11"
              />
              <span className="pr-2 text-sm font-semibold leading-none tracking-[0.12em] text-brand-slate antialiased sm:text-base">
                GLOYOO
              </span>
            </div>
          </Link>

          <div className="hidden lg:col-span-2 lg:block lg:justify-self-center">
            <ul className="flex items-center gap-1 xl:gap-2">
              {content.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={localizedHref(item.href)}
                    className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-brand-teal hover:text-white focus:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden items-center gap-2 text-right lg:col-span-1 lg:flex lg:justify-end xl:gap-4">
            <Link
              href={`/${alternateLocale}`}
              className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-brand-slate transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal focus-visible:ring-offset-2"
            >
              {content.switchLabel}
            </Link>

            <Link
              href={`/${locale}#about-us`}
              className="relative overflow-hidden rounded-xl border border-brand-teal px-6 py-3 text-sm font-semibold text-brand-teal transition-all duration-300 hover:text-white sm:text-base"
            >
              <span className="relative z-10">{content.contactLabel}</span>
              <span className="absolute inset-0 origin-left scale-x-0 bg-brand-teal transition-transform duration-300 hover:scale-x-100"></span>
            </Link>
          </div>

          <div className="flex items-center justify-self-end lg:hidden">
            <Link
                href={`/${alternateLocale}`}
                className="block py-2 hover:text-amber-600 mr-4 text-sm font-medium "
                onClick={() => setIsOpen(false)}
              >
                {content.switchLabel}
              </Link>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={content.mobileMenuLabel}
              onClick={() => setIsOpen(!isOpen)}
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
            </button>
          </div>
        </nav>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-96 opacity-100 " : "max-h-0 opacity-0"
        }`}
      >
        <div className="absolute left-0 top-full w-full rounded-b-lg bg-transparent px-4 shadow-lg sm:px-6">
           
          <ul className="space-y-3 rounded-lg bg-white/80 px-4 pb-4 text-brand-steel backdrop-blur-sm dark:bg-slate-950/80 dark:text-white">
            {content.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={localizedHref(item.href)}
                  className="block py-2 hover:text-amber-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={`/${locale}#about-us`}
                className="block py-2 hover:text-amber-600"
                onClick={() => setIsOpen(false)}
              >
                {content.contactLabel}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
