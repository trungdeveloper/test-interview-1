"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Trans } from "@lingui/react/macro";

const partners = [
  {
    name: "EA Games",
    logo: "/assets/images/partner.webp",
  },
  {
    name: "GAME",
    logo: "/assets/images/partner2.webp",
  },
  {
    name: "First Power Up",
    logo: "/assets/images/partner3.webp",
  },
  {
    name: "Disney",
    logo: "/assets/images/partner4.webp",
  },
  {
    name: "BookPro Game Show",
    logo: "/assets/images/partner5.webp",
  },
  {
    name: "Partner 6",
    logo: "/assets/images/partner6.webp",
  },
  {
    name: "Partner 7",
    logo: "/assets/images/partner7.webp",
  },
];

export default function PartnersSection() {
  return (
    <section className="py-10 px-4 bg-[#f6f6f6]">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair font-black lg:text-6xl lg:leading-[5.00rem] text-[2.50rem] leading-[3.13rem] text-center align-middle">
          <Trans>Our Partners</Trans>
        </h2>

        <div className="max-w-6xl mx-auto pt-10">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/5 ">
                  <div className="flex items-center justify-center h-24 p-2">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      className="object-contain max-h-20"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 -translate-x-4 bg-white shadow-md" />
            <CarouselNext className="absolute right-0 translate-x-4 bg-white shadow-md" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
