"use client";

import { renderStars } from "@/components/ui/renderStars";
import Image from "next/image";

export default function CaseStudies() {
  const starRating = 4.8;

  return (
    <section className="relative section text-center">
      {/* Heading */}
      <div className="flex flex-col gap-[10px]">
        <h3 className="text-h3 font-geometos-soft font-extrabold max-w-[20ch]">
          <span className="relative inline-flex">
            <div className="absolute right-0 translate-x-1/3 top-0 -translate-y-1/2 pointer-events-none w-[clamp(31.46px,_5vw,_89.63px)]">
              <Image
                alt="hero decoration heart"
                src="/assets/svgs/decoration-heart_outline.svg"
                width={89.63}
                height={87.89}
                className="size-full"
              />
            </div>
            <span className="z-10">Success</span>
          </span>{" "}
          Stories That&nbsp;
          <span className="relative inline-flex">
            <div className="absolute right-0 translate-x-1/3 top-0 -translate-y-1/2 pointer-events-none w-[clamp(18px,_5vw,_44.52px)]">
              <Image
                alt="hero decoration heart"
                src="/assets/svgs/decoration-heart_filled.svg"
                width={44.52}
                height={43.95}
                className="size-full"
              />
            </div>
            Inspire
          </span>
        </h3>
        <p className="text-p1 text-white/60">Take a Look For Yourself</p>
      </div>

      {/* Call to Action */}
      <div className="z-10 flex flex-col align-center gap-y-[30px]">
        <button className="relative w-full group overflow-hidden font-geometos-soft font-extrabold text-button bg-relaydigital-blue py-7 px-14 rounded-2xl hover:scale-110 transition-all duration-500">
          {/* Decorative overlay */}
          <div className="absolute -top-[50%] left-0 rotate-[20deg] bg-white/40 w-[90px] h-[200%] group-hover:translate-x-[300%] group-hover:opacity-100 transition-all duration-500 ease-out opacity-0 pointer-events-none" />

          {/* Main content */}
          <span className="relative flex overflow-hidden h-[1em] pointer-events-none">
            {/* Placeholder for spacing */}
            <span className="opacity-0">View More Wins</span>

            {/* Animated content */}
            <span className="absolute w-full h-full left-1/2 -translate-x-1/2 translate-y-0 group-hover:-translate-y-[200%] group-hover:opacity-50 transition-all duration-500">
              View More Wins
            </span>
            <span className="absolute w-full h-full left-1/2 -translate-x-1/2 opacity-50 translate-y-[200%] group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500">
              View More Wins
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
