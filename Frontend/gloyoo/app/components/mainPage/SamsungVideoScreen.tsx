"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type SamsungVideoScreenProps = {
  alt: string;
  imagePriority: boolean;
  imageQuality?: number;
  media: string;
  responsiveSizes: string;
  videoPoster?: string;
  videoProps?: React.VideoHTMLAttributes<HTMLVideoElement>;
};

export default function SamsungVideoScreen({
  alt,
  imagePriority,
  imageQuality,
  media,
  responsiveSizes,
  videoPoster,
  videoProps,
}: SamsungVideoScreenProps) {
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const { onLoadedData, ...restVideoProps } = videoProps ?? {};

  useEffect(() => {
    setShouldLoadVideo(false);
    setIsVideoReady(false);
  }, [media]);

  useEffect(() => {
    const videoWrapper = videoWrapperRef.current;
    let idleId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    if (!videoWrapper || shouldLoadVideo) {
      return;
    }

    const scheduleVideoLoad = () => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(() => setShouldLoadVideo(true), {
          timeout: 1200,
        });
      } else {
        timeoutId = globalThis.setTimeout(() => setShouldLoadVideo(true), 250);
      }
    };

    if (typeof IntersectionObserver === "undefined") {
      scheduleVideoLoad();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          scheduleVideoLoad();
          observer.disconnect();
        }
      },
      { rootMargin: "0px" },
    );

    observer.observe(videoWrapper);

    return () => {
      observer.disconnect();

      if (idleId !== null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }

      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [shouldLoadVideo]);

  return (
    <div
      ref={videoWrapperRef}
      className="relative h-full w-full justify-center bg-black"
    >
      {!isVideoReady && videoPoster ? (
        <Image
          src={videoPoster}
          alt={alt}
          fill
          sizes={responsiveSizes}
          quality={imageQuality ?? 60}
          priority={imagePriority}
          className="object-contain"
          loading={imagePriority ? undefined : "lazy"}
          fetchPriority={imagePriority ? "high" : "low"}
        />
      ) : null}
      <video
        src={shouldLoadVideo ? media : undefined}
        className={`max-h-full max-w-full object-contain ${isVideoReady ? "" : "opacity-0"}`}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        preload="none"
        onLoadedData={(event) => {
          setIsVideoReady(true);
          onLoadedData?.(event);
        }}
        {...restVideoProps}
      />
    </div>
  );
}
