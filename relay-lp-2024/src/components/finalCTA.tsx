"use client";

import Image from "next/image";
import { renderStars } from "./ui/renderStars";

export default function FinalCTA() {
  const starRating = 4.8;

  return (
    <section className="relative section gap-hero text-center">
      {/* Heading */}
      <div className="z-10 flex flex-col gap-y-[20px]">
        <h5 className="text-h5 uppercase text-relaydigital-blue">
          No More Guesswork—Just Results
        </h5>
        <h1 className="relative text-h1 font-geometos-soft font-extrabold max-w-[14ch]">
          Harness the&nbsp;
          <span className="relative inline-flex">
            <div className="absolute -left-[5%] w-[clamp(153px,_20vw,_407px)] pointer-events-none">
              <Image
                alt="hero decoration circling"
                src="/assets/svgs/decoration-circling.svg"
                width={407}
                height={98}
                className="size-full"
              />
            </div>
            Power
          </span>
          &nbsp;of Proven Strategies
        </h1>
      </div>

      {/* Video Section */}
      {/* We'll put the bagira video here, just placeholding for now */}
      <div className="z-10 flex items-center justify-center w-[919.99px] max-w-full rounded-3xl overflow-hidden">
        <div className="aspect-video w-full">
          <iframe
            className="size-full"
            src="https://www.youtube.com/embed/example"
            title="Proven Strategies"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Description */}
      <div className="z-10 text-p1 text-relaydigital-grey text-start max-w-[44ch]">
        <p>
          Many entrepreneurs struggle with growth, stumbling through a maze of
          trial and error, and hoping for success. This approach is stressful,
          unreliable, and often leads to disappointment.
        </p>
        <p className="mt-[2rem]">
          At Relay Digital, we&apos;ve refined our strategies to deliver real
          results. Our experience means you don&apos;t have to navigate this
          journey alone—we provide a clear, actionable path to success.
        </p>
        <p className="mt-[2rem]">
          We&apos;re here to transform your business from uncertain to
          unstoppable, cutting through the noise with precision and expertise.
          With our proven methods, you&apos;ll move from a fledgling
          entrepreneur to a market leader, confidently and efficiently.
          Let&apos;s shift your strategy into high gear and achieve your goals
          faster than you imagined.
        </p>
      </div>

      {/* Call to Action */}
      <div className="z-10 flex flex-col align-center gap-y-[30px]">
        <button className="relative w-full group overflow-hidden font-geometos-soft font-extrabold text-button bg-relaydigital-blue py-7 px-4 sm:px-14 rounded-2xl hover:scale-110 transition-all duration-500">
          {/* Decorative overlay */}
          <div className="absolute -top-[50%] rotate-[20deg] bg-white/40 w-[90px] h-[200%] group-hover:translate-x-[400%] group-hover:opacity-100 transition-all duration-500 ease-out opacity-0 pointer-events-none" />

          {/* Main content */}
          <span className="relative flex overflow-hidden h-[1em] pointer-events-none">
            {/* Placeholder for spacing */}
            <span className="opacity-0">Join the Victory Lane</span>

            {/* Animated content */}
            <span className="absolute w-full h-full left-1/2 -translate-x-1/2 translate-y-0 group-hover:-translate-y-[200%] group-hover:opacity-50 transition-all duration-500">
              Join the Victory Lane
            </span>
            <span className="absolute w-full h-full left-1/2 -translate-x-1/2 opacity-50 translate-y-[200%] group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500">
              Join the Victory Lane
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

      {/* Track Decoration */}
      <div className="absolute top-[5%] translate-x-1/2 flex flex-row size-full gap-5 rotate-[70deg] pointer-events-none">
        <div className="bg-white/20 w-[157px] h-[400%]" />
        <div className="bg-white/20 w-[157px] h-[400%]" />
        <div className="bg-white/20 w-[157px] h-[400%]" />
        <div className="bg-white/20 w-[157px] h-[400%]" />
      </div>
    </section>
  );
}
