type ServiceSlug =
  | "social-media"
  | "content-creation"
  | "performance-marketing"
  | "webdesign";

type ServiceHero = {
  badge: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  imageAlt: string;
    imageUrl: string;
};

type ServiceHeroCollection = Record<ServiceSlug, ServiceHero>;

type ServiceFeaturesItem = {
  title: string;
  description: string;
  imageAlt: string;
  statLabel?: string;
};

type ServiceFeatureSection = {
  title: string;
  points: string[];
};

type ServiceFeatures = {
  badge: string;
  title: string;
  description: string;
  items: ServiceFeaturesItem[];
  sections: ServiceFeatureSection[];
};

export type {
  ServiceFeatureSection,
  ServiceFeatures,
  ServiceFeaturesItem,
  ServiceHero,
  ServiceHeroCollection,
  ServiceSlug,
};
