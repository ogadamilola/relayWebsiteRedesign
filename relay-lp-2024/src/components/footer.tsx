"use client";

import Link from "next/link";
import { renderStars } from "./ui/renderStars";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Footer() {
  const starRating = 4.8;

  return (
    <footer className="relative section gap-footer text-center">
      <div className="flex flex-col size-full gap-[50px] align-center">
        <div className="flex flex-col size-full gap-[43px] align-center">
          {/* Header Section */}
          <h1 className="relative text-h1 font-geometos-soft font-extrabold max-w-[10ch]">
            STAY IN THE RELAY LOOP
          </h1>
          <p className="text-p1 text-white/60">
            Stay Ahead in the Race. Subscribe for tips, strategies, and success
            stories.
          </p>

          {/* Subscription Section */}
          <form className="relative flex flex-col align-center w-[710px] max-w-full gap-hero">
            <div className="flex flex-row align-center size-full h-[67px]">
              <div className="flex flex-row align-center size-full w-2/3 sm:w-[85%] pl-[25px] rounded-l-full text-black text-[18px] leading-[21.6px] bg-relaydigital-silver">
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
              <button className="relative group text-[clamp(18px,_4vw,_22px)] font-geometos-soft font-extrabold tracking-[-1.5px] leading-[clamp(18px,_4vw,_22px)] rounded-r-full bg-relaydigital-blue h-full w-1/3 sm:w-[15%] px-[1rem] overflow-hidden">
                {/* Decorative overlay */}
                <div className="absolute -top-[50%] -translate-x-[200%] rotate-[20deg] bg-white/40 w-[45px] h-[200%] group-hover:translate-x-[400%] group-hover:opacity-100 transition-all duration-500 ease-out opacity-0 pointer-events-none" />

                {/* Main content */}
                <span className="relative flex overflow-hidden h-[1em] pointer-events-none">
                  {/* Placeholder for spacing */}
                  <span className="opacity-0">Get It*</span>

                  {/* Animated content */}
                  <span className="absolute w-full h-full left-1/2 -translate-x-1/2 translate-y-0 group-hover:-translate-y-[200%] group-hover:opacity-50 transition-all duration-500">
                    Get It*
                  </span>
                  <span className="absolute w-full h-full left-1/2 -translate-x-1/2 opacity-50 translate-y-[200%] group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    Get It*
                  </span>
                </span>
              </button>
            </div>
            <div className="size-full w-[90%] flex flex-col sm:flex-row items-center justify-between gap-y-[0.5rem] text-sub text-white/60">
              <span>
                *Don&apos;t worry, we won&apos;t spam or sell your email!
              </span>
              <div className="flex align-center pointer-events-none">
                <div className="flex w-[70px] h-[12.07px] align-center">
                  {renderStars(starRating)}
                </div>
                &nbsp;4.8 stars out of 5,848 reviews
              </div>
            </div>
          </form>

          <div className="flex align-center pointer-events-none text-sub text-white/60">
            Looking forward to potentially working with ya ✌️
          </div>
        </div>
        <div className="flex gap-[26px] text-p3 h-[1.5em]">
          <p className="text-p3">Terms of Service</p>
          <Separator orientation="vertical" />
        </div>
      </div>
      {/* Footer Links and Info */}
      <div className="size-full flex flex-col md:flex-row justify-between items-stretch text-white/60 text-sm">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row w-full items-start gap-14">
          <button className="flex align-center rounded-full bg-relaydigital-blue px-5 py-10 h-full">
            <Image
              alt="vertical arrow"
              src="/assets/svgs/vertical-arrow.svg"
              width={17.74}
              height={29.7}
              className="w-[17.74px] h-[29.7px]"
            />
          </button>
          <div className="flex flex-col h-full items-start justify-between">
            <div className="flex h-[1.5em] space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <Separator orientation="vertical" />
              <a href="#" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <Separator orientation="vertical" />
              <a href="#" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <p className="text-start">
              Working <span className="text-relaydigital-blue">✲</span>{" "}
              worldwide.
              <br />
              Based in Calgary.
            </p>
          </div>
        </div>
        {/* Right Section */}
        <div className="grid md:grid-cols-2 gap-y-3 gap-x-36 text-left">
          <Link href="/approach">Approach</Link>
          <Link href="/capabilities">Capabilities</Link>
          <Link href="/work">Work</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/client-login">Client Login</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
