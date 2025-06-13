import { defaultLocale, type Locale } from "./config"
import enTranslations from "./translations/en.json"
import ruTranslations from "./translations/ru.json"
import uzTranslations from "./translations/uz.json"

const translations = {
  en: enTranslations,
  ru: ruTranslations,
  uz: uzTranslations,
}

export function getTranslations(locale: Locale = defaultLocale) {
  return translations[locale] || translations[defaultLocale]
}

export function useTranslation(locale: Locale = defaultLocale) {
  const t = (key: string) => {
    const keys = key.split(".")
    let value = getTranslations(locale)

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k as keyof typeof value]
      } else {
        return key
      }
    }

    return value as string
  }

  return { t }
}
