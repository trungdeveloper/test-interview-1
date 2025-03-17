import { Card } from "@/components/ui/card";

interface GameCardProps {
  title: string;
  image: string;
  description: string;
}

export default function GameCard({ title, image, description }: GameCardProps) {
  return (
    <Card className="relative overflow-hidden rounded-2xl w-full transition-transform hover:scale-[1.02] min-w-41 h-67 max-w-[410px] lg:h-140 ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(src/${image})` }}
      />
      <div className="absolute bottom-0 left-0 p-4 text-white font-montserrat">
        <h3 className="font-bold text-2xl leading-[1.88rem] align-bottom mb-2 lg:text-5xl lg:leading-[3.75rem]">
          {title}
        </h3>
        <p className="text-xs leading-[0.94rem] align-bottom font-normal lg:text-sm lg:leading-[140%]">
          {description}
        </p>
      </div>
    </Card>
  );
}
