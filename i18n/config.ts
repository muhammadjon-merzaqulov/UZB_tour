export type Locale = "en" | "ru" | "uz"

export const defaultLocale: Locale = "en"

export const locales: Locale[] = ["en", "ru", "uz"]

export const localeNames: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  uz: "O'zbek",
}

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  ru: "🇷🇺",
  uz: "🇺🇿",
}
