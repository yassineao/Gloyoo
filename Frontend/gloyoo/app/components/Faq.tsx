import Link from "next/link";
import type { FaqContent } from "../types/LocaleDictionary";

type FaqProps = {
  content: FaqContent;
  items?: FaqContent["items"];
  ctaHref?: string;
};

export default function Faq({ content, items, ctaHref }: FaqProps) {
  const faqItems = items ?? content.items;

  return (
    <section className="w-full py-24 px-70">
      <div className="container max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-petalPink">
            {content.badge}
          </div>
          <h2 className="mt-6 text-3xl font-semibold text-white lg:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-zinc-300 lg:text-base">
            {content.description}
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors open:bg-white/[0.05]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-medium text-white [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span className="text-2xl leading-none text-brand-petalPink transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 lg:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        {ctaHref ? (
          <div className="mt-10 flex justify-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-xl border border-brand-petalPink px-5 py-3 text-sm font-semibold text-brand-petalPink transition-colors hover:border-brand-teal hover:text-white"
            >
              {content.ctaLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
