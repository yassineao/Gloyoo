import type { MetadataRoute } from "next";
import { getSiteUrl } from "./lib/seo";
import { locales } from "./lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return locales.map((locale) => ({
      url: `${siteUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          de: `${siteUrl}/de`,
          en: `${siteUrl}/en`,
        },
      },
    }));
}
