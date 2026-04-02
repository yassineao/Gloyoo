import Background from "./Background";
import Samsung from "./Samsung";
export default function Hero() {
  return (

    <Background>
      <section className="mt-9 min-h-screen py-14 sm:py-20 px-30">
        <div className="container ">
          <div className="grid items-center gap-12 lg:grid-cols-2 xl:gap-16">
            <div className="mx-auto flex max-w-2xl flex-col items-start text-left lg:mx-0">
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                Mehr Kunden
              </h1>
              <h1 className="text-3xl font-bold text-brand-cloud sm:text-4xl lg:text-5xl xl:text-6xl">
                durch Social Media & moderne Webseiten
              </h1>

              <div className="mt-4 mb-6 h-1 w-24 rounded bg-brand-purple"></div>
              <div className="w-full max-w-xl">
                <p className="mb-6 mt-6 max-w-xl text-base leading-7 text-brand-cloud sm:mb-8 sm:text-lg sm:leading-8 lg:mt-8 lg:py-4 lg:text-xl">
                  Gloyoo ist Ihre Social Media & Webagentur in Deutschland – wir helfen Unternehmen, online sichtbar zu werden und Kunden zu gewinnen.
                </p>

                <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
                  <button className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-brand-gray px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-sand hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:w-auto">
                    Kostenloses Beratungsgespräch
                  </button>

                  <button className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md   bg-brand-charcoal px-4 py-2 text-sm font-medium  transition-colors hover:bg-brand-teal hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:w-auto">
                    Jetzt starten
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
                  </button>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative z-10">
                <Samsung media="/intro.mp4" mediaType="video" width={260} />
              </div>

              <div className="absolute right-0 top-10 scale-90 opacity-90 sm:top-14 sm:scale-95 md:right-4">
                <Samsung media="/intro.png" mediaType="image" width={260} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Background>
  );
}

