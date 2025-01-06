// 'use client';

import Image from "next/image";

export default function ValueProp() {
  return (
    <section className="relative section gap-hero text-center">
      <h1 className="relative text-h1 font-geometos-soft font-extrabold max-w-[15ch]">
        Elevate Your Business, Scale{" "}
        <span className="relative inline-flex">
          <div className="absolute right-0 bottom-0 translate-x-[70%] w-[clamp(153px,_20vw,_300.15px)] pointer-events-none">
            <Image
              alt="hero decoration coil"
              src="/assets/svgs/decoration-coil.svg"
              width={300.15}
              height={83.1}
              className="size-full"
            />
          </div>
          <span className="z-10">Smarter</span>
        </span>
      </h1>
      <p className="text-p1 max-w-[45ch]">
        Forget the endless frustration of DIY marketing and the constant
        struggle to find strategies that stick. Instead, partner with Relay and
        tap into proven growth systems, battle-tested strategies, and&nbsp;
        <span className="underline">data-driven marketing</span> — designed
        to&nbsp;
        <span className="font-bold">consistently deliver results</span>, not
        just empty promises.
      </p>
    </section>
  );
}
