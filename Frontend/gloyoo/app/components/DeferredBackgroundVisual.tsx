"use client";

import dynamic from "next/dynamic";

const fallbackBackground = (
  <div
    aria-hidden="true"
    className="h-full min-h-[600px] w-full opacity-95"
    style={{
      background:
        "radial-gradient(circle at 30% 30%, rgba(168,85,247,0.4), transparent 35%), radial-gradient(circle at 70% 40%, rgba(23,55,124,0.45), transparent 40%), linear-gradient(135deg, #0B0B0F 0%, #17377c 50%, #A855F7 100%)",
    }}
  />
);

const BackgroundVisual = dynamic(() => import("./BackgroundVisual"), {
  ssr: false,
  loading: () => fallbackBackground,
});

export default function DeferredBackgroundVisual() {
  return <BackgroundVisual />;
}
