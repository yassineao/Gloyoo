import Link from "next/link";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
  subsections?: {
    title: string;
    paragraphs?: string[];
    bullets?: string[];
    note?: string;
    links?: {
      label: string;
      href: string;
    }[];
  }[];
  table?: {
    columns: string[];
    rows: string[][];
  };
  rights?: {
    article: string;
    title: string;
    description: string;
  }[];
  contactCards?: {
    label: string;
    value: string;
  }[];
  categories?: {
    name: string;
    description: string;
    badge?: string;
  }[];
  cookieTables?: {
    title: string;
    columns: string[];
    rows: string[][];
  }[];
  links?: {
    label: string;
    href: string;
  }[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  heroMeta?: string[];
  contents?: string[];
  sections: LegalSection[];
  note?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function LegalPage({
  eyebrow,
  title,
  intro,
  heroMeta,
  contents,
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

          {heroMeta?.length ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {heroMeta.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-brand-graySoft"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}

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

          {contents?.length ? (
            <div className="mt-8 rounded-2xl border border-white/8 bg-black/20 p-6">
              <h2 className="text-lg font-semibold text-white">Contents</h2>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-brand-graySoft sm:grid-cols-2">
                {contents.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-petalPink" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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

                {section.subsections?.length ? (
                  <div className="mt-6 space-y-5">
                    {section.subsections.map((subsection) => (
                      <div
                        key={subsection.title}
                        className="rounded-2xl border border-white/8 bg-white/5 p-5"
                      >
                        <h3 className="text-lg font-semibold text-white">
                          {subsection.title}
                        </h3>

                        {subsection.paragraphs?.length ? (
                          <div className="mt-3 space-y-3 text-base leading-8 text-brand-graySoft">
                            {subsection.paragraphs.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        ) : null}

                        {subsection.bullets?.length ? (
                          <ul className="mt-4 space-y-3 text-base leading-8 text-brand-graySoft">
                            {subsection.bullets.map((bullet) => (
                              <li key={bullet} className="flex gap-3">
                                <span className="mt-3 h-1.5 w-1.5 rounded-full bg-brand-petalPink" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        {subsection.links?.length ? (
                          <ul className="mt-4 space-y-3 text-base leading-8">
                            {subsection.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-brand-petalPink underline underline-offset-4 transition-colors hover:text-white"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        {subsection.note ? (
                          <div className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-7 text-amber-50">
                            {subsection.note}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : null}

                {section.table ? (
                  <div className="mt-6 overflow-hidden rounded-2xl border border-white/8 bg-white/5">
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-left text-sm text-brand-graySoft">
                        <thead className="bg-black/20 text-xs uppercase tracking-[0.2em] text-white/70">
                          <tr>
                            {section.table.columns.map((column) => (
                              <th key={column} className="px-5 py-4 font-semibold">
                                {column}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row) => (
                            <tr key={row.join("|")} className="border-t border-white/8">
                              {row.map((cell) => (
                                <td key={cell} className="px-5 py-4 align-top leading-7">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : null}

                {section.rights?.length ? (
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {section.rights.map((right) => (
                      <article
                        key={`${right.article}-${right.title}`}
                        className="rounded-2xl border border-white/8 bg-white/5 p-5"
                      >
                        <div className="flex items-start gap-3">
                          <span className="rounded-full border border-brand-petalPink/30 bg-brand-petalPink/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-petalPink">
                            {right.article}
                          </span>
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              {right.title}
                            </h3>
                            <p className="mt-2 text-base leading-7 text-brand-graySoft">
                              {right.description}
                            </p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : null}

                {section.contactCards?.length ? (
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {section.contactCards.map((card) => (
                      <article
                        key={`${card.label}-${card.value}`}
                        className="rounded-2xl border border-white/8 bg-white/5 p-5"
                      >
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-petalPink">
                          {card.label}
                        </p>
                        <p className="mt-3 text-base leading-7 text-brand-graySoft">
                          {card.value}
                        </p>
                      </article>
                    ))}
                  </div>
                ) : null}

                {section.note ? (
                  <div className="mt-5 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-7 text-amber-50">
                    {section.note}
                  </div>
                ) : null}

                {section.categories?.length ? (
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {section.categories.map((category) => (
                      <article
                        key={category.name}
                        className="rounded-2xl border border-white/8 bg-white/5 p-5"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <h3 className="text-lg font-semibold text-white">
                            {category.name}
                          </h3>
                          {category.badge ? (
                            <span className="rounded-full border border-brand-petalPink/30 bg-brand-petalPink/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-petalPink">
                              {category.badge}
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-3 text-base leading-7 text-brand-graySoft">
                          {category.description}
                        </p>
                      </article>
                    ))}
                  </div>
                ) : null}

                {section.cookieTables?.length ? (
                  <div className="mt-6 space-y-6">
                    {section.cookieTables.map((table) => (
                      <div
                        key={table.title}
                        className="overflow-hidden rounded-2xl border border-white/8 bg-white/5"
                      >
                        <div className="border-b border-white/8 bg-black/20 px-5 py-4">
                          <h3 className="text-lg font-semibold text-white">
                            {table.title}
                          </h3>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="min-w-full text-left text-sm text-brand-graySoft">
                            <thead className="bg-black/20 text-xs uppercase tracking-[0.2em] text-white/70">
                              <tr>
                                {table.columns.map((column) => (
                                  <th key={column} className="px-5 py-4 font-semibold">
                                    {column}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {table.rows.map((row) => (
                                <tr key={row.join("|")} className="border-t border-white/8">
                                  {row.map((cell) => (
                                    <td key={cell} className="px-5 py-4 align-top leading-7">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}

                {section.links?.length ? (
                  <ul className="mt-5 space-y-3 text-base leading-8">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-brand-petalPink underline underline-offset-4 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
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
