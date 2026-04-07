import type { LocaleDictionary } from "../../lib/i18n";    
import Image from "next/image";

export default function Advantages({
    content,
}: {
    content: LocaleDictionary["home"]["advantages"];
}) {
    return (
        <section
            id="advantages"
            className="scroll-mt-24 overflow-hidden bg-[#0B0B0F] py-2 sm:py-20 lg:py-4"
            aria-labelledby="advantages-heading"
        >
                <div className="flex w-full justify-center">
                   <Image
                        src="/Logo.png"
                        alt="Gloyoo Logo"
                        width={1203}
                        height={1203}
                        quality={100}
                        priority
                        sizes="(max-width: 1000px) 120px, 208px"
                        className="h-20 w-auto shrink-0 sm:h-32 lg:h-60"
                    />
                </div>
           
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A1A1AA]">
                        {content.eyebrow}
                    </p>
                    <h2 id="advantages-heading" className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                        {content.title}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-[#A1A1AA] sm:text-lg">
                        {content.description}
                    </p>
                </div>
              

                <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-3 lg:mt-16 lg:gap-8">
                    {content.items.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#7C3AED]/18 to-[#2563EB]/18 p-6 text-center shadow-[0_0_40px_rgba(168,85,247,0.14)] sm:p-8"
                        >
                            <p className="text-4xl font-semibold text-[#A855F7] sm:text-5xl lg:text-6xl">
                                {item.value}
                            </p>
                            <p className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl lg:text-6xl">
                                {item.title}
                            </p>

                            <p className="mt-8 pt-3 text-base leading-7 text-[#A1A1AA] sm:text-sm">
                                {item.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
