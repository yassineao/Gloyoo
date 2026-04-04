"use client";

import Grainient from "./Grainient";
import type { LocaleDictionary } from "../lib/i18n";

export default function Services({
    content,
}: {
    content: LocaleDictionary["services"];
}) {
    return (
        <div className="flex flex-1 flex-col items-center justify-center overflow-hidden">
            <section id="services-list" className="mx-auto w-full max-w-7xl scroll-mt-24 py-8" aria-labelledby="services-heading">
                <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center sm:gap-6 ">
                        <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-white/80">
                            {content.eyebrow}
                        </div>
                        <h2 id="services-heading" className="text-balance text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
                            {content.title}
                        </h2>
                        <p className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8 lg:text-lg">
                            {content.description}
                        </p>
                    </div>

                    <div className="mx-auto mt-10 grid max-w-6xl justify-items-center gap-6 sm:mt-14 lg:mt-16 lg:grid-cols-3 lg:gap-8">
                        {content.items.map((item) => (
                            <article
                                key={item.title}
                                className="w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-brand-soft backdrop-blur-sm"
                            >
                                <div className="h-48 w-full sm:h-56">
                                    <Grainient className="h-full w-full" />
                                </div>

                                <div className="p-5 text-center sm:p-6">
                                    <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                                    <p className="text-sm leading-7 text-zinc-300 sm:text-base">
                                        {item.description}
                                    </p>
                                    <a href="#about-us" className="mt-4 inline-flex items-center justify-center gap-2 font-medium text-white">
                                        {content.cta}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-4"
                                        >
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
