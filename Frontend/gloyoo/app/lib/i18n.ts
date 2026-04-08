import type { LocaleDictionary } from "../types/LocaleDictionary";
import { deDictionary } from "./i18n/locales/de";
import { enDictionary } from "./i18n/locales/en";

export const locales = ["de", "en"] as const;

export type Locale = (typeof locales)[number];
export type { LocaleDictionary };

export const dictionaries: Record<Locale, LocaleDictionary> = {
  de: deDictionary,
  en: enDictionary,
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "de" ? "en" : "de";
}
