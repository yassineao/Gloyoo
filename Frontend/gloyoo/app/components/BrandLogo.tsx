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
        "overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/8 ring-1 ring-[#A855F7]/25 shadow-[0_0_40px_rgba(168,85,247,0.22)] backdrop-blur-md",
        isFooter ? "p-2.5" : "p-1.5",
      ].join(" ")}
    >
      <Image
        src="/Logo.png"
        alt="Gloyoo Logo"
        width={986}
        height={948}
        quality={80}
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
