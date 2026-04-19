import type { Infos } from "./Infos";
import type { ServiceFeatures, ServiceHero2, ServiceHeroCollection } from "./Service";

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

type ServiceItem = {
  title: string;
  description: string;
};

type AdvantageItem = {
  value: string;
  title: string;
  subtitle: string;
};

type FooterLink = {
  label: string;
  href: string;
};

type PageMetadata = {
  title: string;
  description: string;
  locale: "de_DE" | "en_US" | "nl_NL";
  keywords: string[];
};

type PageSeo = {
  areaServed: string[];
  knowsAbout: string[];
  offerCatalogName: string;
  services: string[];
};

type ContentSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type ContentPage = {
  metadata: PageMetadata;
  eyebrow: string;
  title: string;
  intro: string;
  sections: ContentSection[];
  note?: string;
  ctaLabel?: string;
};

type HomeContent = {
  metadata: PageMetadata;
  hero: {
    eyebrow: string;
    titleFirst: string;
    titleSecond: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    videoAlt: string;
    imageAlt: string;
  };
  advantages: {
    eyebrow: string;
    title: string;
    description: string;
    items: AdvantageItem[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    items: ServiceItem[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    cta: string;
  };
  scrollTexts: [string, string];
  seo: PageSeo;
};

type FormContent = {
  metadata: PageMetadata;
  content: Infos;
  seo: PageSeo;
};

type ServicePageContent = {
  metadata: PageMetadata;
  hero: ServiceHeroCollection;
  features: ServiceFeatures;
  seo: PageSeo;
  hero2: ServiceHero2;
};

type LocaleDictionary = {
  localeName: string;
  nav: {
    ariaLabel: string;
    homeAriaLabel: string;
    items: NavItem[];
    contactLabel: string;
    mobileMenuLabel: string;
    switchLabel: string;
  };
  footer: {
    tagline: string;
    navigationTitle: string;
    servicesTitle: string;
    contactTitle: string;
    navigationLinks: FooterLink[];
    serviceLinks: FooterLink[];
    contactLinks: FooterLink[];
    rights: string;
    legalLinks: FooterLink[];
  };
  home: HomeContent;
  servicePage: ServicePageContent;
  form: FormContent;
  pages: {
    about: ContentPage;
    privacy: ContentPage;
    impressum: ContentPage;
  };
};

export type {
  AdvantageItem,
  ContentPage,
  ContentSection,
  FooterLink,
  FormContent,
  HomeContent,
  LocaleDictionary,
  NavItem,
  PageMetadata,
  PageSeo,
  ServiceItem,
  ServicePageContent,
};
