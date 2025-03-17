import CountdownTimer from "./Coundown";
import arrowRight from "assets/arrow-right.svg";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { Trans, useLingui } from "@lingui/react/macro";

function Banner() {
  const targetDate = new Date("2025-04-30T00:00:00"); // Pick some date
  const { width = 0 } = useWindowDimensions();
  const smallScreen = width <= 1024;
  const { i18n } = useLingui();

  return (
    <div className="flex flex-col items-center justify-between lg:text-[5rem] text-[2.5rem] max-sm:gap-10 text-white px-4 py-6 overflow-y-visible max-sm:relative lg:pt-[132px]">
      <div className="font-playfair text-white text-center font-black text-[2.50rem] leading-[3.13rem]  tracking-[0.6px] lg:text-[5.00rem] lg:leading-[7.50rem]">
        <Trans>We’re {smallScreen && <br />}Getting Ready</Trans>
      </div>
      <div className="font-playfair z-11 leading-none lg:pt-[21px]">
        <CountdownTimer targetDate={targetDate} />
      </div>
      <div className="flex flex-col items-center justify-center z-10 gap-4 lg:pt-[91px] max-w-140 overflow-visible">
        <span className="font-montserrat text-center text-xs leading-[0.94rem] tracking-[0.9px] z-10 lg:text-lg lg:leading-[126%]">
          <Trans>
            We will back to something amazing. Getting the latest updates about
            our games. Please sign up to our newsletter.
          </Trans>
        </span>
        <div className="flex justify-center items-center bg-white rounded-[8px] pr-[14px] z-10">
          <input
            placeholder={i18n._("Enter your email")}
            className="bg-white rounded-[8px] placeholder:text-sm w-[85vw] lg:w-[30vw] py-[18px] px-[14px] h-[56px] border-none focus:outline-none text-sm text-black"
          />
          <img src={arrowRight} className="cursor-pointer" alt="Enter Name" />
        </div>
        <div
          className="w-[500px] lg:w-[900px] absolute z-0 top-[45%]"
          style={{
            clipPath: "ellipse(closest-side farthest-side)",
            backdropFilter: "blur(10px)",
            aspectRatio: 2 / 1,
            background:
              "radial-gradient(56.72% 66.79% at 50.81% 50.81%, #210544 0%, rgba(23, 5, 68, 0.71) 15.52%, rgba(23, 5, 68, 0) 90%)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Banner;
