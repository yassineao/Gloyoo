import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Article from "../../../components/blog/article";
import {
  getAlternateLocale,
  getDictionary,
  getLanguageTag,
  isValidLocale,
  locales,
  type Locale,
} from "../../../lib/i18n";
import { getSiteUrl, siteConfig } from "../../../lib/seo";

function getBlogPost(locale: Locale, blog: string) {
  return getDictionary(locale).blog.posts.find((post) => String(post.id) === blog);
}

export async function generateStaticParams() {
  return locales.reduce<Array<{ locale: Locale; blog: string }>>(
    (params, locale) => {
      getDictionary(locale).blog.posts.forEach((post) => {
        params.push({ locale, blog: String(post.id) });
      });

      return params;
    },
    [],
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; blog: string }>;
}): Promise<Metadata> {
  const { locale, blog } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale as Locale);
  const blogPage = dictionary.blog;
  const blogPost = getBlogPost(locale as Locale, blog);

  if (!blogPost) {
    return {};
  }

  const alternateLocale = getAlternateLocale(locale as Locale);

  return {
    title: `${siteConfig.name} | ${blogPost.title}`,
    description: blogPost.excerpt,
    keywords: blogPage.metadata.keywords,
    alternates: {
      canonical: `/${locale}/blog/${blog}`,
      languages: {
        de: `/de/blog/${blog}`,
        en: `/en/blog/${blog}`,
        nl: `/nl/blog/${blog}`,
        "x-default": `/de/blog/${blog}`,
      },
    },
    openGraph: {
      type: "website",
      locale: blogPage.metadata.locale,
      url: `/${locale}/blog/${blog}`,
      siteName: siteConfig.name,
      title: `${siteConfig.name} | ${blogPost.title}`,
      description: blogPost.excerpt,
      images: [
        {
          url: "/Logo.png",
          width: 1200,
          height: 630,
          alt: "Gloyoo Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} | ${blogPost.title}`,
      description: blogPost.excerpt,
      images: ["/Logo.png"],
    },
    other: {
      "content-language": locale,
      "x-alternate-locale": alternateLocale,
    },
  };
}

export default async function LocalizedBlogPage({
  params,
}: {
  params: Promise<{ locale: string; blog: string }>;
}) {
  const { locale, blog } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);
  const blogPage = dictionary.blog;
  const blogPost = getBlogPost(locale as Locale, blog);

  if (!blogPost) {
    notFound();
  }

  const siteUrl = getSiteUrl();
  const localizedUrl = `${siteUrl}/${locale}/blog/${blog}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blogPost.title,
    name: blogPost.title,
    url: localizedUrl,
    description: blogPost.excerpt,
    inLanguage: getLanguageTag(locale),
    image: `${siteUrl}/Logo.png`,
    datePublished: blogPost.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  return (
    <main className="overflow-x-hidden bg-[#0B0B0F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <div className=" overflow-hidden  font-sans">
          <Article content={blogPage} locale={locale as Locale} articleId={blog} />
        </div>
    </main>
  );
}
