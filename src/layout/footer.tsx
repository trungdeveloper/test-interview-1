import TwitterIcon from "assets/icons/twitter-icon.svg?react";
import FacebookIcon from "assets/icons/facebook-icon.svg?react";
import LinkedinIcon from "assets/icons/linkedin-icon.svg?react";
import PinIcon from "assets/icons/pin-icon.svg?react";
import PhoneIcon from "assets/icons/phone-icon.svg?react";
import { Trans } from "@lingui/react/macro";
import ArrowRightIcon from "assets/arrow-right.svg?react";
import { NavItem } from "@/components/utils/constants";

const Footer = () => {
  return (
    <div className="flex flex-col text-white" id={NavItem.contactUs.id}>
      <div className="bg-[url('/assets/images/mobile-footer-bg.webp')] md:bg-[url('/assets/images/footer-bg.webp')] bg-no-repeat bg-cover bg-center flex flex-col lg:flex-row gap-y-17 pt-10 pb-15.5 px-4 lg:px-[230px] lg:py-25 lg:gap-x-10">
        <div className="flex flex-col items-center lg:items-start justify-between gap-y-10 flex-1">
          <img className="h-24 w-auto" src="/White_logo.svg" alt="logo" />
          <div className="flex gap-x-6">
            <TwitterIcon className="w-10 h-10" />
            <FacebookIcon className="w-10 h-10" />
            <LinkedinIcon className="w-10 h-10" />
          </div>
        </div>
        <div className="flex flex-col gap-y-5 font-montserrat">
          <h3 className="font-bold text-2xl leading-[1.88rem]">
            <Trans>Address</Trans>
          </h3>
          <div className="flex gap-x-2">
            <PinIcon className="w-10 h-10 shrink-0" />
            <div className="flex flex-col gap-y-4 text-sm leading-[140%]">
              <p>
                <Trans>
                  Valletta Buildings, South Street, Valletta - VLT 1103 Malta,
                  US
                </Trans>
              </p>
              <p>
                <Trans>
                  20 Phan Dang Luu street, Hai Chau District, Danang city,
                  Vietnam
                </Trans>
              </p>
            </div>
          </div>
          <div className="flex gap-x-2 items-center">
            <PhoneIcon className="w-10 h-10 shrink-0" />
            <div className="flex flex-col gap-y-4 text-sm leading-[140%]">
              <p>(+1) 555-0108-000 or (+236) 555-0108</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-montserrat gap-y-5 max-w-[410px]">
          <h3 className="font-bold text-2xl leading-[1.88rem]">
            <Trans>Subscribe</Trans>
          </h3>
          <div className="flex flex-col gap-y-4">
            <p>
              <Trans>
                Subscribe to our newsletter and be the first to know about our
                updates
              </Trans>
            </p>
            <div className="flex rounded-[8px] border border-white h-15 px-3.5 py-4.5">
              <input
                placeholder="Email"
                className="bg-transparent placeholder:text-sm w-full lg:w-[30vw] h-full focus:outline-none text-sm"
              />
              <ArrowRightIcon className="cursor-pointer color-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="font-montserrat bg-black font-normal text-lg leading-[126%] h-21.5 lg:h-20 flex items-center justify-center">
        2017 Copyright. Policy.
      </div>
    </div>
  );
};

export default Footer;
