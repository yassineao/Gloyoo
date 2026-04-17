import BackgroundVisual from "./BackgroundVisual";

export default function Background({
  children,
  animated = true,
}: {
  children?: React.ReactNode;
  animated?: boolean;
}) {
  return (
    <div className="relative min-h-[600px] w-full overflow-hidden bg-[#0B0B0F]">
      <div className="pointer-events-none absolute inset-0 z-0">
        {animated ? (
          <BackgroundVisual />
        ) : (
          <div
            aria-hidden="true"
            className="h-full min-h-[600px] w-full opacity-95"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(168,85,247,0.4), transparent 35%), radial-gradient(circle at 70% 40%, rgba(23,55,124,0.45), transparent 40%), linear-gradient(135deg, #0B0B0F 0%, #17377c 50%, #A855F7 100%)",
            }}
          />
        )}
      </div>

      <div className="relative z-10 min-h-[600px]">{children}</div>
    </div>
  );
}
