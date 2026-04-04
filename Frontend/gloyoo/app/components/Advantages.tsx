import type { LocaleDictionary } from "../lib/i18n";

export default function Advantages({
    content,
}: {
    content: LocaleDictionary["advantages"];
}) {
    return (
        <section id="advantages" className="scroll-mt-24 overflow-hidden bg-black py-16 sm:py-20 lg:py-24" aria-labelledby="advantages-heading">
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
