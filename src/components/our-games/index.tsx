import GameCard from "./game-card";
import { Trans } from "@lingui/react/macro";
import { mockGamesCard } from "../utils/mock-data";
import { cn } from "@/lib/utils";

const OurGames = () => {
  return (
    <section className="flex flex-col px-4 gap-y-10 justify-center mb-12 lg:mb-32">
      <div className="flex flex-col gap-y-4 items-center">
        <h1 className="font-playfair font-black text-[2.50rem] leading-[3.13rem] text-center">
          <Trans>Our Games</Trans>
        </h1>
        <p className="font-montserrat text-sm leading-[140%] text-center text-[#757575] max-w-215">
          <Trans>
            As a pioneer of mobile app gamification, we take pride in
            originality and individuality, providing global players with
            state-of-the-art games that feature splendid storylines, sensational
            sound effects and magnificent animation that never cease to impress.
          </Trans>
        </p>
      </div>
      <div className="flex flex-col gap-4 lg:gap-10 w-full max-h-476 flex-wrap lg:max-w-[1770px] mx-auto">
        {mockGamesCard.map((game, index) => {
          const isSecondOrFourthRow = index === 3 || index === 9;
          return (
            <div
              key={game.id}
              className={cn({
                "lg:mt-[118px]": isSecondOrFourthRow,
                "max-lg:mt-9": index === 6,
              })}
            >
              <GameCard
                image={game.image}
                title={game.title}
                description={game.description}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurGames;
