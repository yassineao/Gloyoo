"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const fallbackBackground = (
  <div
    aria-hidden="true"
    className="h-full min-h-[600px] w-full opacity-95"
    style={{
      background:
        "radial-gradient(circle at 30% 30%, rgba(168,85,247,0.4), transparent 35%), radial-gradient(circle at 70% 40%, rgba(23,55,124,0.45), transparent 40%), linear-gradient(135deg, #000000 0%, #17377c 50%, #A855F7 100%)",
    }}
  />
);

const Grainient = dynamic(() => import("./Grainient"), {
  ssr: false,
  loading: () => fallbackBackground,
});

export default function BackgroundVisual() {
  const [shouldRenderShader, setShouldRenderShader] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let idleId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const cancelScheduledLoad = () => {
      if (idleId !== null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }

      if (timeoutId !== null) {
        globalThis.clearTimeout(timeoutId);
      }
    };

    const scheduleLoad = () => {
      cancelScheduledLoad();

      const enableShader = () => setShouldRenderShader(true);

      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(enableShader, { timeout: 1200 });
      } else {
        timeoutId = globalThis.setTimeout(enableShader, 150);
      }
    };

    const update = () => {
      const canAnimate = desktopQuery.matches && !motionQuery.matches;

      if (!canAnimate) {
        cancelScheduledLoad();
        setShouldRenderShader(false);
        return;
      }

      scheduleLoad();
    };

    update();
    desktopQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);

    return () => {
      cancelScheduledLoad();
      desktopQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  if (!shouldRenderShader) {
    return fallbackBackground;
  }

  return (
    <Grainient
      className="h-full min-h-[600px] w-full opacity-95"
      color3="#A855F7"
      color2="#17377c"
      color1="#0B0B0F"
      timeSpeed={0.25}
      colorBalance={0.1}
      warpStrength={1}
      warpFrequency={5}
      warpSpeed={2}
      warpAmplitude={50}
      blendAngle={0}
      blendSoftness={0.05}
      rotationAmount={500}
      noiseScale={2}
      grainAmount={0}
      grainScale={1.4}
      grainAnimated={true}
      contrast={1.35}
      gamma={1}
      saturation={1.1}
      centerX={0}
      centerY={0}
      zoom={0.9}
    />
  );
}
