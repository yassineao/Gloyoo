import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import type { Locale, LocaleDictionary } from "@/app/lib/i18n";

type ArticleProps = {
    content: LocaleDictionary["blog"];
    locale: Locale;
    articleId: string;
};

const postImages = ["/social-media.svg", "/webDesign.svg", "/KPI.svg"];

export default function Article({ content, locale, articleId }: ArticleProps) {
    const foundPostIndex = content.posts.findIndex(
        (post) => String(post.id) === articleId,
    );
    const postIndex = foundPostIndex >= 0 ? foundPostIndex : 0;
    const post = content.posts[postIndex] ?? content.posts[0];
    const imageSrc = postImages[postIndex] ?? postImages[0];

    return (
        <section className="relative isolate min-h-screen overflow-hidden px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(168,85,247,0.22),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(37,99,235,0.2),transparent_30%),linear-gradient(180deg,rgba(11,11,15,0)_0%,rgba(24,24,27,0.52)_100%)]"
            />

            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[16rem_1fr] lg:gap-16">
                <aside className="top-24 h-fit lg:sticky">
                    <Link
                        href={`/${locale}/blog`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-graySoft transition hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                        {content.title}
                    </Link>

                    <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                        <p className="text-xs font-semibold uppercase tracking-wide text-brand-graySoft">
                            {post.category}
                        </p>
                        <div className="mt-5 space-y-4 text-sm text-brand-graySoft">
                            <span className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock3 className="h-4 w-4" aria-hidden="true" />
                                {post.readTime}
                            </span>
                        </div>
                    </div>
                </aside>

                <article>
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-brand-panel backdrop-blur">
                        <div className="relative flex min-h-80 items-center justify-center overflow-hidden bg-brand-charcoal p-10">
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_28%,rgba(216,180,254,0.6),transparent_40%),radial-gradient(circle_at_72%_42%,rgba(191,219,254,0.5),transparent_45%),linear-gradient(145deg,#0B0B0F_0%,#17377c_58%,#A855F7_100%)]"
                            />
                            <Image
                                src={imageSrc}
                                alt={post.imageAlt}
                                width={240}
                                height={240}
                                className="relative h-auto w-52 object-contain drop-shadow-2xl sm:w-64"
                                priority
                            />
                        </div>
                    </div>

                    <div className="mx-auto max-w-3xl py-10">
                        <p className="text-sm font-semibold uppercase tracking-wide text-brand-graySoft">
                            {content.eyebrow}
                        </p>
                        <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                            {post.title}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-brand-graySoft">
                            {post.excerpt}
                        </p>

                        {/* <div className="mt-10 space-y-7 text-base leading-8 text-brand-graySoft">
                            <p>{content.description}</p>
                            <h2 className="text-2xl font-semibold text-white">
                                Why this matters
                            </h2>
                            <p>
                                Strong digital growth comes from repeated, recognizable signals:
                                clear positioning, useful content, and pages that make the next
                                step feel obvious. This article focuses on the practical details
                                behind that work.
                            </p>
                            <h2 className="text-2xl font-semibold text-white">
                                What to improve first
                            </h2>
                            <ul className="list-disc space-y-3 pl-6">
                                <li>
                                    Make the message specific enough that the right customer feels
                                    addressed.
                                </li>
                                <li>
                                    Use consistent visual patterns so every touchpoint feels
                                    connected.
                                </li>
                                <li>
                                    Measure the actions that indicate trust, not only the
                                    attention metrics.
                                </li>
                            </ul>
                        </div> */}
                    </div>

                </article>


            </div>
            <div className="mx-auto flex max-w-6xl justify-end">
                <Link
                    href={`/${locale}/blog`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-graySoft transition hover:text-white"
                >
                   
                    {content.title}
                     <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
            </div>
        </section>
    );
}
