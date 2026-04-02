"use client";

import Grainient from "./Grainient";

const serviceItems = [
    {
        title: "Social Media Betreuung",
        description:
            "Wir planen, gestalten und betreuen Ihre Kanaele professionell, damit Ihre Marke einheitlich, aktiv und vertrauenswuerdig auftritt.",
    },
    {
        title: "Content Creation",
        description:
            "Von Reels und Posts bis zu Storys und Werbemitteln erstellen wir Inhalte, die Aufmerksamkeit erzeugen und im Kopf bleiben.",
    },
    {
        title: "Performance Marketing",
        description:
            "Mit gezielten Kampagnen auf Instagram, Facebook und Co. bringen wir mehr Reichweite, mehr Leads und mehr Umsatz in Ihr Unternehmen.",
    },
];

export default function Services() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center overflow-hidden">
            <section className="mx-auto w-full max-w-7xl py-16">
                <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center sm:gap-6 ">
                        <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-white/80">
                            Unsere Services
                        </div>
                        <h2 className="text-balance text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
                            Social Media Leistungen, die Ihr Unternehmen wachsen lassen
                        </h2>
                        <p className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8 lg:text-lg">
                            Wir unterstuetzen Unternehmen mit kreativen Inhalten, klarer Strategie und Performance-Marketing,
                            damit aus Aufmerksamkeit echte Ergebnisse werden.
                        </p>
                    </div>

                    <div className="mx-auto mt-10 grid max-w-6xl justify-items-center gap-6 sm:mt-14 lg:mt-16 lg:grid-cols-3 lg:gap-8">
                        {serviceItems.map((item) => (
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
                                    <a href="#" className="mt-4 inline-flex items-center justify-center gap-2 font-medium text-white">
                                        Mehr erfahren
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
