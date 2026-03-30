import Samsung from "./Samsung";

export default function Hero() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="container px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-4 text-balance text-3xl font-semibold leading-tight sm:my-6 sm:text-4xl lg:text-5xl">
              A Universal Hero Section
            </h1>

            <p className="mb-6 max-w-xl text-sm leading-6 text-zinc-600 sm:mb-8 sm:text-base sm:leading-7 lg:text-lg">
              Universal design in UI aims to create interfaces that are accessible and usable for users of all abilities. It
              involves designing with flexibility, providing alternative input methods, and ensuring compatibility with
              assistive technologies.
            </p>

            <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:w-auto">
                Get Started
              </button>

              <button className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md border border-input bg-zinc-200 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:w-auto">
                Read The Docs
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

          <div className="relative flex justify-center">
            <div className="relative z-10">
              <Samsung media="/intro.mp4" mediaType="video" width={180} />
            </div>

            <div className="absolute right-0 top-10 scale-90 opacity-90 sm:top-14 sm:scale-95 md:right-4">
              <Samsung media="/intro.png" mediaType="image" width={160} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}