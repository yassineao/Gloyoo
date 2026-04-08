import type { SamsungS26MockupProps } from "@/app/types/Samsung";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";

export default function Samsung({
  media,
  mediaType = "image",
  alt = "Phone display preview",
  width = 340,
  children,
  className = "",
  imagePriority = false,
  imageQuality,
  imageSizes,
  videoProps,
}: SamsungS26MockupProps) {
  const height = Math.round(width * 2.08);
  const bezel = Math.max(8, Math.round(width * 0.028));
  const screenRadius = Math.round(width * 0.09);
  const shellRadius = Math.round(width * 0.12);
  const cameraSize = Math.max(10, Math.round(width * 0.035));

  return (
    <div
      className={`relative select-none ${className}`}
      style={{ width, height }}
      aria-label="Samsung-style phone mockup"
    >
      <div
        className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-zinc-300 via-zinc-100 to-zinc-400 shadow-2xl"
        style={{ borderRadius: shellRadius }}
      />

      <div
        className="absolute bottom-[20px] right-[2px] top-[20px] w-[1px] rounded-full bg-black/20"
        aria-hidden="true"
      />

      <div
        className="absolute -right-[3px] top-[20%] h-[12%] w-[4px] rounded-full bg-zinc-300 shadow-md"
        aria-hidden="true"
      />
      <div
        className="absolute -right-[3px] top-[35%] h-[7%] w-[4px] rounded-full bg-zinc-300 shadow-md"
        aria-hidden="true"
      />
      <div
        className="absolute -left-[3px] top-[26%] h-[10%] w-[4px] rounded-full bg-zinc-300 shadow-md"
        aria-hidden="true"
      />

      <div
        className="absolute inset-[3px] bg-black shadow-inner"
        style={{ borderRadius: shellRadius - 4 }}
      />

      <div
        className="absolute overflow-hidden bg-neutral-950"
        style={{
          top: bezel,
          left: bezel,
          right: bezel,
          bottom: bezel,
          borderRadius: screenRadius,
        }}
      >
        {media ? (
          mediaType === "video" ? (
            <div className="h-full w-full justify-center bg-black">
              <video
                src={media}
                className="max-h-full max-w-full object-contain"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                preload="none"
                poster="/intro-hero.jpg"
                {...videoProps}
              />
            </div>
          ) : (
            <div className="relative h-full w-full justify-center bg-black">
              <Image
                src={media}
                alt={alt}
                fill
                sizes={imageSizes ?? `${width}px`}
                quality={imageQuality ?? (imagePriority ? 70 : 80)}
                priority={imagePriority}
                className="object-contain"
                loading={imagePriority ? undefined : "lazy"}
                fetchPriority={imagePriority ? "high" : "low"}
              />
            </div>
          )
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-zinc-900 to-black text-zinc-400">
            <div className="rounded-full bg-white/5 p-4">
              <ImageIcon className="h-8 w-8" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-zinc-200">Drop in your app preview</p>
              <p className="mt-1 max-w-[220px] text-xs text-zinc-500">
                Pass a {mediaType} URL through the <code>media</code> prop to show your app on the display.
              </p>
            </div>
          </div>
        )}

        {children ? (
          <div className="pointer-events-none absolute inset-0">{children}</div>
        ) : null}

        <div
          className="absolute left-1/2 top-3 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-black shadow-brand-camera"
          style={{ width: cameraSize, height: cameraSize }}
          aria-label="Front camera"
        >
          <div className="absolute inset-[22%] rounded-full bg-zinc-900" />
          <div className="absolute left-[26%] top-[22%] h-[20%] w-[20%] rounded-full bg-sky-200/20 blur-[1px]" />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-brand-glass" />
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/5" />
      </div>

      <span className="sr-only">
        Samsung-inspired phone frame with a centered punch-hole camera and image preview on screen.
      </span>
    </div>
  );
}
