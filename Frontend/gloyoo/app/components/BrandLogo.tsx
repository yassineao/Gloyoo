"use client";

import Image from "next/image";

type BrandLogoProps = {
  size?: "nav" | "footer";
  priority?: boolean;
};

export default function BrandLogo({
  size = "nav",
  priority = false,
}: BrandLogoProps) {
  const isFooter = size === "footer";

  return (
    <div
      className={[
        "overflow-hidden rounded-[1.4rem] bg-white/95 ring-1 ring-black/5 shadow-[0_12px_28px_rgba(15,23,42,0.14)]",
        isFooter ? "p-2.5" : "p-1.5",
      ].join(" ")}
    >
      <Image
        src="/Logo.png"
        alt="Gloyoo Logo"
        width={1203}
        height={1203}
        quality={100}
        priority={priority}
        sizes={isFooter ? "96px" : "(max-width: 640px) 40px, 48px"}
        className={[
          "w-auto object-contain",
          isFooter ? "h-20 sm:h-24" : "h-9 sm:h-10",
        ].join(" ")}
      />
    </div>
  );
}
