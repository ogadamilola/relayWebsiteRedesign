"use client";

import Image from "next/image";
import { renderStars } from "./ui/renderStars";

interface Services {
  title: string;
  description: string;
  icon: string;
}

interface ServicesSectionProps {
  services: Services[];
}

export default function Services({ services }: ServicesSectionProps) {
  const starRating = 4.8;

  return (
    <section className="relative section text-center">
      {/* Heading */}
      <div className="flex flex-col gap-[10px]">
        <h3 className="text-h3 font-geometos-soft font-extrabold">
          Our{" "}
          <span className="relative inline-flex">
            <div className="absolute right-0 sm:left-0 translate-x-1/3 sm:-translate-x-1/3 top-0 -translate-y-2/3 sm:-translate-y-1/3 pointer-events-none w-[clamp(19.53px,_5vw,_66.32px)]">
              <Image
                alt="hero decoration sparkle"
                src="/assets/svgs/decoration-sparkle_large.svg"
                width={66.32}
                height={70.46}
                className="size-full"
              />
            </div>
            <span className="z-10">Winning</span>
          </span>{" "}
          <span className="relative inline-flex">
            <div className="absolute right-0 translate-x-1/3 bottom-0 -translate-y-1/2 pointer-events-none w-[clamp(10.14px,_1vw,_26px)]">
              <Image
                alt="hero decoration sparkle"
                src="/assets/svgs/decoration-sparkle_small.svg"
                width={26}
                height={27.62}
                className="size-full"
              />
            </div>
            Strategies
          </span>
        </h3>
        <p className="text-p1 text-white/60">
          Everything you need to leave competitors in the dust
        </p>
      </div>
      {/* Main Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Website Development */}
        {services.map((services, index) => (
          <div
            key={index}
            className="flex flex-col align-start text-start text-black bg-relaydigital-silver rounded-2xl gap-6 p-8"
          >
            <div className="bg-relaydigital-grey size-40 rounded"></div>
            <h3 className="text-p1 font-geometos-soft font-extrabold">
              {services.title}
            </h3>
            <p className="text-p3">{services.description}</p>
          </div>
        ))}
        {/* Additional Services */}
        <div className="md:col-span-3 flex flex-col w-full align-start text-start text-black bg-relaydigital-silver rounded-2xl gap-6 p-8">
          <h5 className="text-p1 font-geometos-soft font-extrabold">
            And A Whole Lot More ...
          </h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-4 md:gap-x-20">
            {[
              "Illustration",
              "UI/UX",
              "Social Media",
              "T-shirt & Merch",
              "Branding",
              "Web Design",
              "Infographics",
              "eBook and Courses",
              "Product Design",
              "Iconography",
              "Appstore Graphics",
              "Accessibility",
              "Webflow",
              "Print Design",
              "Posters & Banners",
              "Typography",
              "Consulting",
              "Packaging",
              "Email Newsletters",
              "Marketing",
              "Graphic Design",
              "Naming",
              "NFT Art",
            ].map((service) => (
              <p key={service} className="text-p3">
                {service}
              </p>
            ))}
            <p className="font-geometos-soft font-extrabold">
              Don&apos;t See It?{" "}
              <a href="#" className="text-blue-500 underline">
                Ask Us
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="z-10 flex flex-col align-center gap-y-[30px]">
        <button className="relative w-full group overflow-hidden font-geometos-soft font-extrabold text-button bg-relaydigital-blue py-7 px-14 rounded-2xl hover:scale-110 transition-all duration-500">
          {/* Decorative overlay */}
          <div className="absolute -top-[50%] left-0 rotate-[20deg] bg-white/40 w-[90px] h-[200%] group-hover:translate-x-[300%] group-hover:opacity-100 transition-all duration-500 ease-out opacity-0 pointer-events-none" />

          {/* Main content */}
          <span className="relative flex overflow-hidden h-[1em] pointer-events-none">
            {/* Placeholder for spacing */}
            <span className="opacity-0">Show Me More</span>

            {/* Animated content */}
            <span className="absolute w-full h-full left-1/2 -translate-x-1/2 translate-y-0 group-hover:-translate-y-[200%] group-hover:opacity-50 transition-all duration-500">
              Show Me More
            </span>
            <span className="absolute w-full h-full left-1/2 -translate-x-1/2 opacity-50 translate-y-[200%] group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500">
              Show Me More
            </span>
          </span>
        </button>
        <div className="flex align-center pointer-events-none text-rating text-white/60">
          <div className="flex w-[70px] h-[12.11px] sm:w-[115px] sm:h-[19.9px] align-center">
            {renderStars(starRating)}
          </div>
          &nbsp;4.8 stars out of 5,848 reviews
        </div>
      </div>
    </section>
  );
}
