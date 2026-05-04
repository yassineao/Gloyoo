import type { AboutInfoItem, ContentSection } from "@/app/types/LocaleDictionary";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3 text-sm leading-7 text-brand-graySoft sm:text-base">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-petalPink"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionCard({ section }: { section: ContentSection }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-brand-panel sm:p-6">
      <h2 className="text-xl font-semibold text-white sm:text-2xl">
        {section.title}
      </h2>

      {section.paragraphs && (
        <div className="mt-5 space-y-4 text-sm leading-7 text-brand-graySoft sm:text-base sm:leading-8">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}

      {section.bullets && <BulletList items={section.bullets} />}
    </article>
  );
}

export default function Infos({
  infos,
  sections,
}: {
  infos?: AboutInfoItem[];
  sections: ContentSection[];
}) {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {infos && infos.length > 0 && (
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {infos.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-3xl font-semibold text-white sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-brand-graySoft">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {sections.map((section) => (
            <SectionCard key={section.title} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
