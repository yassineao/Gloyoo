import Grainient from "./Grainient";
export default function Background({ children }: { children?: React.ReactNode }) {
    return (
        <div className="relative w-full overflow-hidden" >
            <div className="absolute inset-0 -z-0">
                <Grainient
                    className="h-full min-h-[600px] w-full"
                    color1="#600b5d"
                    color2="#160e37"
                    color3="#534b6d"
                    timeSpeed={0.25}
                    colorBalance={0.2}
                    warpStrength={1}
                    warpFrequency={5}
                    warpSpeed={2}
                    warpAmplitude={50}
                    blendAngle={0}
                    blendSoftness={0.05}
                    rotationAmount={500}
                    noiseScale={2}
                    grainAmount={0.1}
                    grainScale={2}
                    grainAnimated={false}
                    contrast={1.5}
                    gamma={1}
                    saturation={1}
                    centerX={0}
                    centerY={0}
                    zoom={0.9}
                />
            </div>

            <div className="relative z-10 min-h-[600px]">
                {children}
            </div>
        </div>
    );
}
