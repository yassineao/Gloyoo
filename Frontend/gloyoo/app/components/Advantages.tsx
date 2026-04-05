import type { LocaleDictionary } from "../lib/i18n";
import Image from "next/image";

export default function Advantages({
    content,
}: {
    content: LocaleDictionary["advantages"];
}) {
    return (
        <section id="advantages" className="scroll-mt-24 overflow-hidden bg-black py-2 sm:py-20 lg:py-4" aria-labelledby="advantages-heading">
            <div className="flex w-full justify-center">
                <div className="inline-flex h-12 max-w-full items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap rounded-full bg-white/92 px-5 text-brand-steel shadow-[0_10px_30px_rgba(15,23,42,0.12)] ring-1 ring-white/70 backdrop-blur-md transition-all duration-300 sm:gap-3 sm:px-5 sm:py-2.5">
                    <Image
                        src="/Logo.png"
                        alt="Gloyoo Logo"
                        width={1203}
                        height={1203}
                        quality={100}
                        priority
                        sizes="(max-width: 640px) 44px, 52px"
                        className="h-10 w-auto shrink-0 object-contain sm:h-11"
                    />
                </div>
            </div>
           
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-cloud">
                        {content.eyebrow}
                    </p>
                    <h2 id="advantages-heading" className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                        {content.title}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
                        {content.description}
                    </p>
                </div>
              

                <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-3 lg:mt-16 lg:gap-8">
                    {content.items.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center sm:p-8"
                        >
                            <p className="text-4xl font-semibold text-brand-petalPink sm:text-5xl lg:text-6xl">
                                {item.value}
                            </p>
                            <p className="text-4xl font-semibold text-brand-cloud sm:text-5xl lg:text-6xl">
                                {item.title}
                            </p>

                            <p className="mt-8 pt-3 text-base leading-7 text-zinc-300 sm:text-sm">
                                {item.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
