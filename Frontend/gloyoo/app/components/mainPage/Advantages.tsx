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
            className="overflow-hidden bg-black "
            aria-labelledby="advantages-heading"
        >
            <div className="flex w-full justify-center">
                <Image
                    src="/Logo.png"
                    alt="Gloyoo Logo"
                    width={986}
                    height={948}
                    quality={85}
                    loading="lazy"
                    sizes="(max-width: 640px) 28px, (max-width: 1024px) 56px, 112px"
                    className="h-10 w-auto shrink-0 sm:h-16 lg:h-28"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-brand-graySoft">
                        {content.eyebrow}
                    </p>
                    <h2 id="advantages-heading" className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                        {content.title}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-brand-graySoft sm:text-lg">
                        {content.description}
                    </p>

                </div>


                <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-3 lg:mt-16 lg:gap-8">
                    {content.items.map((item) => (
                        <div
                            key={item.title}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl sm:p-8"
                        >
                            {/* Glow background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-transparent to-brand-teal/20 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Content */}
                            <div className="relative z-10 space-y-3">
                                <p className="text-4xl font-bold tracking-tight text-brand-bluew sm:text-5xl lg:text-6xl">
                                    {item.value}
                                </p>

                                <p className="min-h-[4rem] bg-gradient-to-r from-brand-teal via-brand-petalPink to-brand-teal bg-clip-text text-2xl font-semibold leading-tight text-transparent sm:text-3xl lg:text-4xl">
                                    {item.title}
                                </p>

                                <p className="mx-auto max-w-xs pt-1 text-sm leading-6 text-brand-white/80 sm:text-base">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
