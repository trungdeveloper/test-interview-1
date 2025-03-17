import { Trans } from "@lingui/react/macro";
import React, { useState, useEffect } from "react";

// Define the type for the time left state
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center rounded-[21px] py-[1.3125rem] px-[2.4375rem] text-[2.5rem] lg:text-[3.75rem] bg-white text-black justify-between gap-[1rem] w-[343px] lg:w-[756px] lg:h-[150px]">
      <div className="flex flex-col gap-[0.5rem]">
        <div className="text-[2.5rem] max-sm:text-[1.5rem] font-black">
          <span>{timeLeft.days || "0"} </span>
        </div>
        <div className="font-montserrat font-bold text-[1rem] max-sm:text-[0.5rem]">
          <Trans>Days</Trans>
        </div>
      </div>
      <span className="font-normal">:</span>
      <div className="flex flex-col gap-[0.5rem]">
        <div className="text-[2.5rem] max-sm:text-[1.5rem] font-black">
          <span>{timeLeft.hours || "0"}</span>
        </div>
        <div className="font-montserrat font-bold text-[1rem] max-sm:text-[0.5rem] ">
          <Trans>Hours</Trans>
        </div>
      </div>
      <span className="font-normal">:</span>
      <div className="flex flex-col gap-[0.5rem]">
        <div className="text-[2.5rem] max-sm:text-[1.5rem] font-black">
          <span>{timeLeft.minutes || "0"}</span>
        </div>
        <div className="font-montserrat font-bold text-[1rem] max-sm:text-[0.5rem] ">
          <Trans>Minutes</Trans>
        </div>
      </div>
      <span className="font-normal">:</span>
      <div className="flex flex-col gap-[0.5rem]">
        <div className="text-[2.5rem] max-sm:text-[1.5rem] font-black">
          {timeLeft.seconds || "0"}
        </div>
        <div className="font-montserrat font-bold text-[1rem] max-sm:text-[0.5rem]">
          <Trans>Seconds</Trans>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
