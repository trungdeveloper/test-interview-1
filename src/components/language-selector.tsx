import { useState } from "react";
import { Check } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/context/language-provider";
import { LanguageType } from "@/types/language-type";
import ChevronIcon from "@/assets/icons/chevron-icon.svg?react";

type Language = {
  code: LanguageType;
  name: string;
  flag: string;
};

const languages: Language[] = [
  {
    code: LanguageType.VI,
    name: "Vietnamese",
    flag: "/assets/images/vietnam-flag.webp", // Using the provided img for demo
  },
  {
    code: LanguageType.EN,
    name: "English",
    flag: "/assets/images/us-flag.webp", // Using the provided img for demo
  },
];

export function LanguageSelector() {
  const { locale, setLocale } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages.find((lg) => lg.code === locale) || languages[0]
  );

  const handleChangeLanguage = (language: Language) => {
    setLocale(language.code);
    setSelectedLanguage(language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center justify-center select-none lg:h-10 lg:w-16 focus:outline-none">
          <img
            src={selectedLanguage.flag || "/placeholder.svg"}
            alt={selectedLanguage.name}
            width={40}
            className="rounded-sm"
          />
          <ChevronIcon className="pl-1 w-6 h-6" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="rounded-[8px] p-0 border shadow-md"
      >
        {languages.map((language) => (
          <>
            <DropdownMenuItem
              key={language.code}
              className="flex items-center cursor-pointer focus:bg-gray-200 transition-colors rounded-none px-2"
              onClick={() => handleChangeLanguage(language)}
            >
              <div className="w-full flex items-center gap-2  ">
                {language.code === selectedLanguage.code ? (
                  <Check
                    className="h-6 w-6 text-black"
                    style={{
                      height: "24px",
                      width: "24px",
                    }}
                  />
                ) : (
                  <div className="h-6 w-6 flex-shrink-0" />
                )}
                <div className="flex items-center gap-1">
                  <img
                    src={language.flag || "/placeholder.svg"}
                    alt={language.name}
                    width={40}
                    height={40}
                  />
                  <span className="font-medium text-base">{language.name}</span>
                </div>
              </div>
            </DropdownMenuItem>
            <div className="border-b mx-2 border-[rgba(196, 196, 196, 1)]"></div>
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
