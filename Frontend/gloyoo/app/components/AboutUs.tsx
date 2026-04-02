import Grainient from "./Grainient";

export default function AboutUs() {
    return (
        <section id="about-us" className="overflow-hidden py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="order-2 overflow-hidden rounded-3xl bg-zinc-100 shadow-brand-soft lg:order-1">
                        <div className="h-72 w-full sm:h-80 lg:h-[520px]">
                            <Grainient className="h-full w-full" />
                        </div>
                    </div>

                    <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:items-start lg:text-left">
                        <div className="inline-flex items-center rounded-full border border-brand-slate bg-white px-3 py-1 text-xs font-semibold text-brand-steel shadow-sm">
                            New Release
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

                        <h2 className="my-5 text-4xl font-bold text-brand-steel sm:text-5xl lg:text-6xl">
                            About Us
                        </h2>

                        <p className="max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 lg:text-xl">
                            Bei Gloyoo unterstuetzen wir Unternehmen dabei, ihre digitale Praesenz
                            professionell aufzubauen und zu optimieren. Unser Fokus liegt auf messbaren
                            Ergebnissen: mehr Reichweite, mehr Kunden und mehr Umsatz.
                        </p>
                        <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 lg:text-xl">
                            Wir kombinieren modernes Webdesign mit effektiven Social Media Strategien -
                            alles aus einer Hand.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
