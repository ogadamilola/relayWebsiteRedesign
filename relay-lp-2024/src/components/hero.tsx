"use client";

import { renderStars } from "@/components/ui/renderStars";
import Image from "next/image";

export default function Hero() {
  const starRating = 4.8;
  return (
    <section className="section pad-hero gap-hero text-center">
      <h1 className="relative text-h1 font-geometos-soft font-extrabold">
        <span className="relative">
          <div className="absolute w-[clamp(1.5rem,_5vw,_6.125rem)] left-0 top-0 translate-x-0 -translate-y-full sm:-translate-x-full sm:translate-y-0 sm:top-[20%] pointer-events-none">
            <Image
              alt="hero decoration arrow"
              src="/assets/svgs/decoration-arrow.svg"
              width={98}
              height={56}
              className="size-full"
            />
          </div>
          Pass
        </span>
        &nbsp;The&nbsp;
        <span className="relative">
          Baton,
          <div className="absolute w-[clamp(18.63px,_5vw,_34.55px)] right-0 -top-[20%] pointer-events-none">
            <Image
              alt="hero decoration quatrefoil"
              src="/assets/svgs/decoration-quatrefoil.svg"
              width={34.55}
              height={34.55}
              className="size-full"
            />
          </div>
        </span>
        <br />
        <span className="relative">
          <Image
            alt="hero decoration squiggle"
            src="/assets/svgs/decoration-squiggle.svg"
            width={600.52}
            height={11.31}
            className="absolute left-1/2 -translate-x-1/2 bottom-[15%] pointer-events-none"
          />
          Fast Track
        </span>
        <br />
        Your Growth
      </h1>
      <p className="text-p1 max-w-[44ch]">
        From the starting blocks to the finish line, Relay Digital drives your
        business growth with precision and speed.
      </p>
      <form className="relative flex flex-col align-center w-[710px] max-w-full gap-hero">
        <div className="flex flex-row align-center size-full h-[67px]">
          <div className="flex flex-row align-center size-full w-2/3 sm:w-[85%] pl-[25px] rounded-l-full text-black text-[18px] leading-[21.6px] bg-relaydigital-grey">
            <span className="hidden sm:block text-[27px] leading-[27px] mr-[1rem]">
              &#128075;
            </span>
            {/* Input for Mobile */}
            <input
              type="email"
              placeholder="Claim Your Spot"
              className="size-full outline-none bg-transparent sm:hidden"
              required
            />
            {/* Input for Desktop */}
            <input
              type="email"
              placeholder="Claim Your Spot in the Winner's Circle..."
              className="size-full outline-none bg-transparent hidden sm:block"
              required
            />
          </div>
          <button className="text-[22px] font-geometos-soft font-extrabold tracking-[-1.5px] leading-[22px] rounded-r-full bg-relaydigital-blue h-full w-1/3 sm:w-[15%] px-[1rem]">
            Get It*
          </button>
        </div>
        <div className="size-full w-[90%] flex flex-col sm:flex-row items-center justify-between gap-y-[0.5rem] text-sub opacity-60">
          <span>*Don&apos;t worry, we won&apos;t spam or sell your email!</span>
          <div className="flex pointer-events-none">
            <div className="flex align-start">{renderStars(starRating)}</div>
            &nbsp;4.8 stars out of 5,848 reviews
          </div>
        </div>
      </form>
    </section>
  );
}
