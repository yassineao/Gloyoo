"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale, LocaleDictionary } from "../lib/i18n";

type MobileNavProps = {
  locale: Locale;
  alternateHref: string;
  content: LocaleDictionary["nav"];
};

export default function MobileNav({
  locale,
  alternateHref,
  content,
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const localizedHref = (href: string) => `/${locale}${href}`;

  return (
    <>
      <div className="flex items-center justify-self-end lg:hidden">
        <Link
          href={alternateHref}
          className="mr-4 block py-2 text-sm font-medium text-[#A1A1AA] hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          {content.switchLabel}
        </Link>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/12 bg-white/6 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F]"
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

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-96 opacity-100 " : "max-h-0 opacity-0"
        }`}
      >
        <div className="absolute left-0 top-full w-full rounded-b-lg bg-transparent px-4 shadow-lg sm:px-6">
          <ul className="space-y-3 rounded-lg border border-white/10 bg-[#0B0B0F]/92 px-4 pb-4 text-[#A1A1AA] backdrop-blur-md">
            {content.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={localizedHref(item.href)}
                  className="block py-2 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>

                {item.children?.length ? (
                  <ul className="ml-4 mt-2 space-y-2 border-l border-white/10 pl-4 text-sm">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={localizedHref(child.href)}
                          className="block py-1 hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
            <li>
              <Link
                href={`/${locale}#about-us`}
                className="block py-2 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {content.contactLabel}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
