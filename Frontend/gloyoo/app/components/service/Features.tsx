import type { LocaleDictionary } from "../../lib/i18n";

type FeaturesProps = {
  content: LocaleDictionary["servicePage"]["features"];
};

function CheckIcon() {
  return (
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
      className="mr-2 mt-1 inline-block w-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Features({ content }: FeaturesProps) {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-6">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            {content.badge}
          </div>
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-4xl">
            {content.title}
          </h2>
          <p className="text-center text-brand-petalPink lg:text-lg">
            {content.description}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          {content.sections.map((section) => (
            <div key={section.title} className="w-full max-w-96 lg:max-w-none">
              <div
                data-orientation="horizontal"
                role="none"
                className="my-16 h-[1px] w-full shrink-0 bg-border"
              />
              <div className="mx-auto inline-block w-full gap-x-10 lg:grid lg:grid-cols-4">
                <h3 className="mb-4 text-2xl font-semibold lg:text-3xl">
                  {section.title}
                </h3>
                <ul className="col-span-3 grid gap-x-10 gap-y-4 lg:grid-cols-3">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-1 text-zinc-300">
                      <CheckIcon />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
