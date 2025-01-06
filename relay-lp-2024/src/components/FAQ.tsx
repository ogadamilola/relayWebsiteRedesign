import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faq: FAQ[];
}

export default function FAQSection({ faq }: FAQSectionProps) {
  return (
    <section className="relative section text-center">
      <div className="flex flex-col gap-[10px]">
        <h3 className="text-h3 font-geometos-soft font-extrabold">
          We&apos;ve Got{" "}
          <span className="relative">
            <Image
              alt="hero decoration squiggle"
              src="/assets/svgs/decoration-squiggle.svg"
              width={600.52}
              height={11.31}
              className="absolute left-1/2 -translate-x-1/2 bottom-[15%] pointer-events-none"
            />
            Answers
          </span>
        </h3>
        <p className="text-p1 text-white/60">
          Real Results from Real Partnerships
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full md:max-w-screen-lg text-black">
        <div className="space-y-4">
          {faq.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-relaydigital-silver rounded-2xl p-5">
              <AccordionTrigger className="!text-p1 !no-underline !p-0">{faq.question}</AccordionTrigger>
              <AccordionContent className="!text-p3 text-start">{faq.answer} </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </Accordion>
    </section>
  );
}
