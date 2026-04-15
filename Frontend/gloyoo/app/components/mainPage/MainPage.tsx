import Background from "../Background";
import ScrollVelocity from "../ScrollVelocity";
import type { HomeContent } from "../../types/LocaleDictionary";
import type { Locale } from "../../lib/i18n";
import { getSiteUrl, siteConfig } from "../../lib/seo";
import AboutUs from "./AboutUs";
import Advantages from "./Advantages";
import Hero from "./Hero";
import Services from "./Services";

export default function MainPage({
  home,
  locale,
}: {
  home: HomeContent;
  locale: Locale;
}) {
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

      <div className="flex flex-1 flex-col items-center justify-center overflow-hidden bg-[#0B0B0F] font-sans lg:mt-10">
        <Background>
          <Hero content={home.hero} />
        </Background>
      </div>

      <div className="defer-section xl:mt-20 xl:mb-20">
        <Advantages content={home.advantages} />
      </div>

      <div className="defer-section lg:mt-10 lg:mb-10" id="services">
        <Background>
          <div className="lg:mt-20">
            <ScrollVelocity
              texts={home.scrollTexts}
              velocity={100}
              className="custom-scroll-text text-3xl font-bold text-[#A855F7] sm:text-4xl lg:text-6xl xl:text-7xl"
            />

            <Services content={home.services} />
          </div>
        </Background>
      </div>

      <div className="defer-section">
        <AboutUs content={home.about} locale={locale} />
      </div>
    </main>
  );
}
