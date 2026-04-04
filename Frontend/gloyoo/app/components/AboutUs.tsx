import Grainient from "./Grainient";
import type { LocaleDictionary } from "../lib/i18n";

export default function AboutUs({
    content,
}: {
    content: LocaleDictionary["about"];
}) {
    return (
        <section id="about-us" className="scroll-mt-24 overflow-hidden py-16 sm:py-20 lg:py-24" aria-labelledby="about-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="order-2 overflow-hidden rounded-3xl bg-zinc-100 shadow-brand-soft lg:order-1">
                        <div className="h-72 w-full sm:h-80 lg:h-[520px]">
                            <Grainient className="h-full w-full" />
                        </div>
                    </div>

                    <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:items-start lg:text-left">
                        <div className="inline-flex items-center rounded-full border border-brand-slate bg-white px-3 py-1 text-xs font-semibold text-brand-steel shadow-sm">
                            {content.eyebrow}
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
                                className="ml-2 size-4"
                            >
                                <path d="m7 7 10 10"></path>
                                <path d="M17 7v10H7"></path>
                            </svg>
                        </div>

                        <h2 id="about-heading" className="my-5 text-4xl font-bold text-brand-steel sm:text-5xl lg:text-6xl">
                            {content.title}
                        </h2>

                        <p className="max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 lg:text-xl">
                            {content.paragraphs[0]}
                        </p>
                        <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 lg:text-xl">
                            {content.paragraphs[1]}
                        </p>
                        <a
                            href="#home"
                            className="mt-8 inline-flex items-center justify-center rounded-md bg-brand-steel px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-charcoal"
                        >
                            {content.cta}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
