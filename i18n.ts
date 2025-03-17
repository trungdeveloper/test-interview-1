import { LanguageType } from "@/types/language-type";
import { i18n } from "@lingui/core";

// Function to dynamically load messages
const localeFiles = {
  en: () => import("./src/locales/en/messages.js"),
  vi: () => import("./src/locales/vi/messages.js"),
};

export async function dynamicActivate(locale: LanguageType) {
  const { messages } = await localeFiles[locale]();
  i18n.load(locale, messages);
  i18n.activate(locale);
  return locale;
}

// Default activation with English
export async function initI18n() {
  await dynamicActivate(LanguageType.VI);
}
