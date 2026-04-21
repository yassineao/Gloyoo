import Background from "../Background";
import Faq from "../Faq";
import ScrollVelocity from "../ScrollVelocity";
import type { FaqContent, HomeContent } from "../../types/LocaleDictionary";
import { getLanguageTag, type Locale } from "../../lib/i18n";
import { getSiteUrl, siteConfig } from "../../lib/seo";
import AboutUs from "./AboutUs";
import Advantages from "./Advantages";
import Hero from "./Hero";
import Services from "./Services";

export default function MainPage({
  home,
  faq,
  locale,
}: {
  home: HomeContent;
  faq: FaqContent;
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
    inLanguage: getLanguageTag(locale),
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
    <main className="overflow-x-hidden bg-brand-navyDark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-1 flex-col items-center justify-center overflow-hidden bg-brand-navyDark font-sans lg:mt-10">
        <Background>
          <Hero content={home.hero} />
        </Background>
      </div>

      <div className="defer-section lg:py-16 bg-black">
        <Advantages content={home.advantages} />
      </div>
<Background>
      <div className="defer-section  lg:py-16" id="services">
        
          <div className="">
            <ScrollVelocity
              texts={home.scrollTexts}
              velocity={100}
              className="custom-scroll-text text-3xl font-bold text-brand-petalPink sm:text-4xl lg:text-6xl xl:text-7xl"
            />

            <Services content={home.services} />
          </div>
      
      </div>
  </Background>
      <div className="defer-section bg-black">
        <AboutUs content={home.about} locale={locale} />
      </div>

      <div className="defer-section sm:py-16">
        <Faq
          content={faq}
          items={faq.items.slice(0, 4)}
          ctaHref={`/${locale}/faq`}
        />
      </div>
    </main>
  );
}
