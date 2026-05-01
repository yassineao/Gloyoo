import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import type { Locale, LocaleDictionary } from "@/app/lib/i18n";

type BlogProps = {
  content: LocaleDictionary["blog"];
  locale: Locale;
};

const postImages = ["/social-media.svg", "/webDesign.svg", "/KPI.svg"];

export default function Blog({ content, locale }: BlogProps) {
  const [featuredPost, ...secondaryPosts] = content.posts;

  return (
    <section
      id="blog-insights"
      className="relative isolate overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      aria-labelledby="blog-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(168,85,247,0.22),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(37,99,235,0.2),transparent_30%),linear-gradient(180deg,rgba(11,11,15,0)_0%,rgba(24,24,27,0.52)_100%)]"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-1 lg:grid-cols-[1.5fr_1.1fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-graySoft">
              {content.eyebrow}
            </p>
            <h1
              id="blog-heading"
              className="mt-5 max-w-3xl text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
            >
              {content.title}
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-brand-graySoft lg:justify-self-end lg:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-6">
          {featuredPost ? (
            <article
              id="post-1"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-brand-panel backdrop-blur"
            >
              <div className="grid min-h-full lg:grid-cols-[0.92fr_1.08fr]">
                <div className="relative flex min-h-72 items-center justify-center overflow-hidden bg-brand-navyDark p-8">
                  <div
                    aria-hidden="true"
           className="absolute inset-0 bg-[radial-gradient(circle_at_30%_28%,rgba(216,180,254,0.7),transparent_40%),radial-gradient(circle_at_72%_42%,rgba(191,219,254,0.6),transparent_45%),linear-gradient(145deg,#334155_0%,#93c5fd_60%,#e9d5ff_100%)]"
                  />
                  <Image
                    src={postImages[0]}
                    alt={featuredPost.imageAlt}
                    width={220}
                    height={220}
                    className="relative h-auto w-44 object-contain drop-shadow-2xl transition duration-500 group-hover:scale-105 sm:w-56"
                    priority
                  />
                </div>

                <div className="flex flex-col p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-brand-graySoft">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-white">
                      {content.featuredLabel}
                    </span>
                    <span>{featuredPost.category}</span>
                  </div>

                  <h2 className="mt-6 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-brand-graySoft sm:text-base">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-4 text-sm text-brand-graySoft">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" aria-hidden="true" />
                      {featuredPost.date}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock3 className="h-4 w-4" aria-hidden="true" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <Link
                    href={`/${locale}/blog/${featuredPost.id}`}
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-semibold text-white transition hover:text-brand-grayLight"
                  >
                    {content.readMoreLabel}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ) : null}

          <div className="grid gap-6">
            {secondaryPosts.map((post, index) => (
              <article
                id={`post-${index + 2}`}
                key={post.title}
                className="group grid overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] backdrop-blur transition hover:border-white/20 hover:bg-white/[0.055] sm:grid-cols-[11rem_1fr]"
              >
                <div className="relative flex min-h-44 items-center justify-center overflow-hidden bg-brand-charcoal p-6">
                  <div
                    aria-hidden="true"
         className="absolute inset-0 bg-[radial-gradient(circle_at_30%_28%,rgba(168,85,247,0.46),transparent_31%),radial-gradient(circle_at_72%_42%,rgba(37,99,235,0.38),transparent_34%),linear-gradient(145deg,#0B0B0F_0%,#17377c_58%,#A855F7_100%)]"                  />
                  <Image
                    src={postImages[index + 1] ?? postImages[0]}
                    alt={post.imageAlt}
                    width={132}
                    height={132}
                    className="relative h-auto w-28 object-contain transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-graySoft">
                    {post.category}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold leading-snug text-white">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-brand-graySoft">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4 text-xs text-brand-graySoft">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" aria-hidden="true" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock3 className="h-4 w-4" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/${locale}/blog/${post.id}`}
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-semibold text-white transition hover:text-brand-grayLight"
                  >
                    {content.readMoreLabel}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
