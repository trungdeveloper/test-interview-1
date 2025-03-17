import { useLingui } from "@lingui/react/macro";
import { NAVS } from "../utils/constants";
import { LanguageSelector } from "../language-selector";

function NavBar() {
  const { i18n } = useLingui();

  return (
    <div className="font-montserrat flex justify-between items-center lg:items-start px-4 py-6 mt-[env(safe-area-inset-top)] lg:h-[162px] lg:pt-5 lg:px-20">
      <div className="logo">
        <a href="/" target="_blank">
          <img
            src={`/White_logo.svg`}
            className="logo lg:w-[108px] lg:h-auto"
            alt="App logo"
          />
        </a>
      </div>
      <div className="hidden lg:flex justify-center items-center gap-[84px] text-white font-bold">
        {NAVS.map((item) => (
          <a className="cursor-pointer" key={item.href} href={item.href}>
            {i18n._(item.title)}
          </a>
        ))}
        <LanguageSelector />
      </div>
    </div>
  );
}

export default NavBar;
