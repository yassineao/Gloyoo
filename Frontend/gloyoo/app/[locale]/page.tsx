import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "../components/mainPage/Hero";
import Services from "../components/mainPage/Services";
import ScrollVelocity from "../components/ScrollVelocity";
import AboutUs from "../components/mainPage/AboutUs";
import Advantages from "../components/mainPage/Advantages";
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
  const home = dictionary.home;
  const alternateLocale = getAlternateLocale(locale as Locale);

  return {
    title: home.metadata.title,
    description: home.metadata.description,
    keywords: home.metadata.keywords,
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
      locale: home.metadata.locale,
      url: `/${locale}`,
      siteName: siteConfig.name,
      title: `${siteConfig.name} | ${home.metadata.title}`,
      description: home.metadata.description,
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
      title: `${siteConfig.name} | ${home.metadata.title}`,
      description: home.metadata.description,
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
  const home = dictionary.home;
  const siteUrl = getSiteUrl();
  const localizedUrl = `${siteUrl}/${locale}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: localizedUrl,
    description: home.metadata.description,
    inLanguage: locale === "de" ? "de-DE" : "en-US",
    areaServed: home.seo.areaServed,
    image: `${siteUrl}/Logo.png`,
    knowsAbout: home.seo.knowsAbout,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: home.seo.offerCatalogName,
      itemListElement: home.seo.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
  };

  return (
    <main className="overflow-x-hidden bg-[#0B0B0F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-1 flex-col items-center justify-center overflow-hidden bg-[#0B0B0F] font-sans">
        <Hero content={home.hero} />
      </div>

      <div className="  " id="advantages">
        <Advantages content={home.advantages} />
      </div>

      <div className="  " id="services">
        <Background>
          <div className="lg:mt-20">
            <ScrollVelocity
              texts={home.scrollTexts}
              velocity={100}
              className="custom-scroll-text text-3xl font-bold text-[#A855F7] sm:text-4xl lg:text-6xl xl:text-7xl "
            />

            <Services content={home.services} />
          </div>
        </Background>
      </div>
      <AboutUs content={home.about} />
    </main>
  );
}
