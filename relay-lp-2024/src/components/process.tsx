"use client";

import Image from "next/image";

export default function Process() {
  return (
    <section className="relative section text-center">
      {/* Heading */}
      <h2 className="text-start text-h2 font-geometos-soft font-extrabold max-w-[15ch]">
        Our Race To Success:&nbsp;
        <span className="relative inline-flex">
          <div className="absolute right-0 translate-x-2/3 bottom-0 -translate-y-1/3 pointer-events-none w-[clamp(31px,_5vw,_85px)]">
            <Image
              alt="hero decoration diamond"
              src="/assets/svgs/decoration-diamond.svg"
              width={85}
              height={77}
              className="size-full"
            />
          </div>
          <span className="z-10">Your</span>
        </span>{" "}
        <span className="text-relaydigital-blue">Winning Strategy</span>
      </h2>
    </section>
  );
}
