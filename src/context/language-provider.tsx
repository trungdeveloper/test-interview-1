import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useEffect,
} from "react";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { dynamicActivate, initI18n } from "../../i18n";
import { LanguageType } from "../types/language-type";

type LanguageContextType = {
  locale: LanguageType;
  setLocale: (locale: LanguageType) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState(LanguageType.VI);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize i18n on first render
  useEffect(() => {
    initI18n().then(() => setIsLoaded(true));
  }, []);

  // Function to change the locale
  const setLocale = async (newLocale: LanguageType) => {
    await dynamicActivate(newLocale);
    setLocaleState(newLocale);
  };

  if (!isLoaded) {
    return <div>Loading translations...</div>;
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      <I18nProvider i18n={i18n}>{children}</I18nProvider>
    </LanguageContext.Provider>
  );
}

// Hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
