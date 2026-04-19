import Link from "next/link";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  note?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
  note,
  ctaHref,
  ctaLabel,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[#0B0B0F] px-4 pb-20 pt-28 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-petalPink">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-brand-graySoft sm:text-lg">
            {intro}
          </p>

          {ctaHref && ctaLabel ? (
            <div className="mt-8">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-xl border border-brand-petalPink px-5 py-3 text-sm font-semibold text-brand-petalPink transition-colors hover:border-brand-teal hover:text-white"
              >
                {ctaLabel}
              </Link>
            </div>
          ) : null}

          <div className="mt-12 space-y-8">
            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-2xl border border-white/8 bg-black/20 p-6"
              >
                <h2 className="text-2xl font-semibold text-white">
                  {section.title}
                </h2>

                {section.paragraphs?.length ? (
                  <div className="mt-4 space-y-4 text-base leading-8 text-brand-graySoft">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}

                {section.bullets?.length ? (
                  <ul className="mt-4 space-y-3 text-base leading-8 text-brand-graySoft">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 rounded-full bg-brand-petalPink" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          {note ? (
            <div className="mt-8 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5 text-sm leading-7 text-amber-50">
              {note}
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
