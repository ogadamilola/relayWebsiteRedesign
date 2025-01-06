"use client";

import Image from "next/image";

export default function Partners() {
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
            <span className="z-10">Friends</span>
          </span>{" "}
          &amp;&nbsp;
          <span className="relative inline-flex">
            <div className="absolute left-1/3 -translate-x-1/2 bottom-0 translate-y-1/3 pointer-events-none w-[clamp(18px,_5vw,_44.52px)]">
              <Image
                alt="hero decoration heart"
                src="/assets/svgs/decoration-heart_filled.svg"
                width={44.52}
                height={43.95}
                className="size-full"
              />
            </div>
            Partners
          </span>
        </h3>
        <p className="text-p1 text-white/60">
          Real Results from Real Partnerships
        </p>
      </div>
    </section>
  );
}
