import Background from "./Background";
import Samsung from "./Samsung";
import type { LocaleDictionary } from "../lib/i18n";

export default function Hero({
  content,
}: {
  content: LocaleDictionary["hero"];
}) {
  return (
    <Background>
      <section
        id="home"
        className="min-h-screen scroll-mt-24 px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-36"
      >
        <div className="container mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="mx-auto flex max-w-2xl flex-col items-start text-left lg:mx-0">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-cloud">
                {content.eyebrow}
              </p>
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                {content.titleFirst}
                <span className="block text-brand-cloud">
                  {content.titleSecond}
                </span>
              </h1>

              <div className="mb-6  h-1 w-20 rounded bg-brand-purple sm:w-24" />

              <p className="max-w-xl text-base leading-7 text-brand-cloud sm:text-lg sm:leading-8 lg:text-xl">
                {content.description}
              </p>

              <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#about-us"
                  className="inline-flex h-11 w-full items-center justify-center rounded-md bg-brand-gray px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-cloud hover:text-brand-navyDark sm:w-auto"
                >
                  {content.primaryCta}
                </a>

                <a
                  href="#services"
                  className="inline-flex h-11 w-full items-center justify-center rounded-md bg-brand-charcoal px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-teal sm:w-auto"
                >
                  {content.secondaryCta}
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
                </a>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-[320px] justify-center sm:max-w-[420px] lg:max-w-[520px]">
              <div className="relative z-10">
                <Samsung
                  media="/intro.mp4"
                  mediaType="video"
                  width={220}
                  alt={content.videoAlt}
                />
              </div>

              <div className="absolute -right-2 top-8 scale-75 opacity-90 sm:right-0 sm:top-10 sm:scale-90 md:right-4 lg:top-14">
                <Samsung
                  media="/intro.png"
                  mediaType="image"
                  width={220}
                  alt={content.imageAlt}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Background>
  );
}
