import Grainient from "./Grainient";

export default function AboutUs() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center  font-sans  overflow-hidden">

            <section className="py-32">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                    <div className="flex justify-end bg-zinc-100 h-full ">
                       <Grainient />
                    </div>
                    <div className="flex flex-col items-center text-center lg:max-w-3xl lg:items-start lg:text-left">
                        <div
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            New Release<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-arrow-down-right ml-2 size-4">
                                <path d="m7 7 10 10"></path>
                                <path d="M17 7v10H7"></path>
                            </svg>
                        </div>
                        <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl xl:text-7xl">
                            About Us
                        </h1>
                        <p className="mb-8 max-w-xl text-zinc-600 lg:text-2xl">
                            Bei Gloyoo unterstützen wir Unternehmen dabei, ihre digitale Präsenz professionell aufzubauen und zu optimieren.
                            Unser Fokus liegt auf messbaren Ergebnissen: mehr Reichweite, mehr Kunden und mehr Umsatz.

                            Wir kombinieren modernes Webdesign mit effektiven Social Media Strategien – alles aus einer Hand.
                        </p>

                    </div>
                </div>
            </section>
        </div>
    );
}

