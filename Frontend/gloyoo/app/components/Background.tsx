import BackgroundVisual from "./BackgroundVisual";

export default function Background({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-[600px] w-full overflow-hidden bg-[#0B0B0F]">
      <div className="pointer-events-none absolute inset-0 z-0">
        <BackgroundVisual />
      </div>

      <div className="relative z-10 min-h-[600px]">{children}</div>
    </div>
  );
}
