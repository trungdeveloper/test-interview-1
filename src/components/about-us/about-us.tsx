import Detail from "./detail";
import DesignIcon from "assets/icons/design-icon.svg?react";
import TeamIcon from "assets/icons/team-icon.svg?react";
import TimeIcon from "assets/icons/time-icon.svg?react";
import { NavItem } from "../utils/constants";
import { Trans } from "@lingui/react/macro";
import AnimatedWizardMap from "./animated-wizzard-map";

const AboutUs = () => {
  return (
    <section className=" max-w-[1160px] mx-auto" id={NavItem.aboutUs.id}>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10 ">
        <div className="px-4 xl:px-0">
          <h1 className="font-playfair text-[40px] font-[900] xl:text-[60px] tracking-[3.6px]">
            <Trans>About Us</Trans>
          </h1>
          <p className="text-[#757575] font-montserrat text-sm mt-4 leading-[140%] ">
            <Trans>
              Browse our selection of free online games and have a great time
              without leaving the site! Our Kids Games option also includes game
              reviews, extensive game cheats and walkthroughs, and much more. We
              have exclusive free downloads, videos, and articles as well. Etech
              reviews the most popular kids games from all the most popular
              video gaming platforms, so you don’t need to search around for fun
              anywhere else on the Internet. Explore a whole new world of gaming
              on Etech.
            </Trans>
          </p>
          <div className="grid grid-cols-2 gap-4 mt-10 xl:mt-20 font-montserrat xl:grid-cols-1 xl:gap-y-10">
            <div className="flex flex-col">
              <span className=" text-[#079BEE] tracking-[-1px] text-[44px] xl:text-[80px] font-bold">
                600<span className="font-bold text-xl">M</span>+
              </span>
              <span className="font-bold text-2xl leading-[1.88rem]">
                <Trans>Users</Trans>
              </span>
            </div>
            <div className="flex flex-col">
              <span className=" text-[#079BEE] tracking-[-1px] text-[44px] xl:text-[80px] font-bold">
                135+
              </span>
              <span className="font-bold text-2xl leading-[1.88rem]">
                <Trans>Games</Trans>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#EEEEEE] px-4 xl:px-[75px] py-10 gap-10 justify-center">
          <Detail
            icon={<TimeIcon />}
            title={<Trans>24 - Hour</Trans>}
            description={
              <Trans>
                24/7 access ensures operators' businesses runs smoothly all year
                long.
              </Trans>
            }
          />
          <Detail
            icon={<DesignIcon />}
            title={<Trans>Design</Trans>}
            description={
              <Trans>
                Combining imaginative universes, play dynamics, and
                unprecedented gameplay, our games transcend the boundaries of
                the virtual world by weaving innovative gameplay.
              </Trans>
            }
          />
          <Detail
            icon={<TeamIcon />}
            title={<Trans>Team</Trans>}
            description={
              <Trans>
                Etech is an award-winning, international studio of designers,
                artists, animators and producers that create content for the
                biggest names in film and video games.
              </Trans>
            }
          />
        </div>
      </div>
      <AnimatedWizardMap />
    </section>
  );
};

export default AboutUs;
