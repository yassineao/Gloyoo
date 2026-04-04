import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ScrollVelocity from "../components/ScrollVelocity";
import AboutUs from "../components/AboutUs";
import Advantages from "../components/Advantages";
import Background from "../components/Background";
import {
  getAlternateLocale,
  getDictionary,
  isValidLocale,
  locales,
  type Locale,
} from "../lib/i18n";
import { getSiteUrl, siteConfig } from "../lib/seo";

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

  const dictionary = getDictionary(locale as Locale);
  const alternateLocale = getAlternateLocale(locale as Locale);

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    keywords: dictionary.metadata.keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        de: "/de",
        en: "/en",
        "x-default": "/de",
      },
    },
    openGraph: {
      type: "website",
      locale: dictionary.metadata.locale,
      url: `/${locale}`,
      siteName: siteConfig.name,
      title: `${siteConfig.name} | ${dictionary.metadata.title}`,
      description: dictionary.metadata.description,
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
      title: `${siteConfig.name} | ${dictionary.metadata.title}`,
      description: dictionary.metadata.description,
      images: ["/Logo.png"],
    },
    other: {
      "content-language": locale,
      "x-alternate-locale": alternateLocale,
    },
  };
}

export default async function LocalizedHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);
  const siteUrl = getSiteUrl();
  const localizedUrl = `${siteUrl}/${locale}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: localizedUrl,
    description: dictionary.metadata.description,
    inLanguage: locale === "de" ? "de-DE" : "en-US",
    areaServed: dictionary.seo.areaServed,
    image: `${siteUrl}/Logo.png`,
    knowsAbout: dictionary.seo.knowsAbout,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: dictionary.seo.offerCatalogName,
      itemListElement: dictionary.seo.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
  };

  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-1 flex-col items-center justify-center overflow-hidden bg-zinc-50 font-sans dark:bg-slate-950">
        <Hero content={dictionary.hero} />
      </div>

      <Advantages content={dictionary.advantages} />
      <div className="  " id="services">
        <Background>
          <div className="mt-13">
            <ScrollVelocity
              texts={dictionary.scrollTexts}
              velocity={100}
              className="custom-scroll-text text-3xl font-bold text-brand-teal sm:text-4xl lg:text-6xl xl:text-7xl "
            />

            <Services content={dictionary.services} />
          </div>
        </Background>
      </div>
      <AboutUs content={dictionary.about} />
    </main>
  );
}
