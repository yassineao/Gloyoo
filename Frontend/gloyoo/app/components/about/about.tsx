import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ContentPage } from "@/app/types/LocaleDictionary";
import type { Locale } from "@/app/lib/i18n";
import Infos from "./infos";
import TeamSection from "./team";

export default function About({
  content,
  locale,
}: {
  content: ContentPage;
  locale: Locale;
}) {
  return (
    <main className="overflow-x-hidden bg-brand-navyDark text-white">
      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pb-20 lg:px-8 lg:pt-40">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-brand-glass opacity-90"
        />
        <div className="container relative mx-auto">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-petalPink">
              {content.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-brand-graySoft sm:text-lg sm:leading-9">
              {content.intro}
            </p>

            {content.ctaLabel && (
              <Link
                href={`/${locale}/form`}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-brand-purple to-brand-teal px-5 py-3 text-sm font-semibold text-white shadow-brand-cta transition-all hover:brightness-110"
              >
                {content.ctaLabel}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <Infos infos={content.infos} sections={content.sections} />

      {content.team && <TeamSection content={content.team} />}
    </main>
  );
}
