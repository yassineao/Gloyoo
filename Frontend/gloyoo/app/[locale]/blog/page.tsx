import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Blog from "@/app/components/blog/blog";
import { getDictionary, isValidLocale, locales, type Locale } from "@/app/lib/i18n";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const blog = getDictionary(locale).blog;

  return {
    title: blog.metadata.title,
    description: blog.metadata.description,
    alternates: {
      canonical: `/${locale}/blog`,
      languages: {
        de: "/de/blog",
        en: "/en/blog",
        nl: "/nl/blog",
        "x-default": "/de/blog",
      },
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);

  return <Blog content={dictionary.blog} locale={locale as Locale} />;
}
