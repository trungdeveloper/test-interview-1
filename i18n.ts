import { LanguageType } from "@/types/language-type";
import { i18n } from "@lingui/core";

// Function to dynamically load messages
export async function dynamicActivate(locale: LanguageType) {
  const { messages } = await import(
    /* @vite-ignore */
    `./src/locales/${locale}/messages`
  );
  i18n.load(locale, messages);
  i18n.activate(locale);
  return locale;
}

// Default activation with English
export async function initI18n() {
  await dynamicActivate(LanguageType.VI);
}
