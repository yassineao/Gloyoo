"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LocaleSwitchLinkProps = {
  alternateLocale: "de" | "en";
  label: string;
  className: string;
};

export default function LocaleSwitchLink({
  alternateLocale,
  label,
  className,
}: LocaleSwitchLinkProps) {
  const pathname = usePathname();
  const href =
    pathname?.replace(/^\/(de|en)(?=\/|$)/, `/${alternateLocale}`) ??
    `/${alternateLocale}`;

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
