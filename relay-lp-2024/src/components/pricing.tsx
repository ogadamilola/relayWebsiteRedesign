"use client";

interface PricingPackages {
  title: string;
  description: string;
  price: string;
  priceDetails: string;
  button: { text: string; link: string };
  features: string[];
}

interface PricingSectionProps {
  packages: PricingPackages[];
}

export default function Pricing({ packages }: PricingSectionProps) {
  return (
    <section className="relative section text-center">
      {/* Heading */}
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-h2 font-geometos-soft font-extrabold">Pricing</h2>
        <p className="text-p1 text-white/60">
          To ensure we deliver top-tier quality designs on time, we work with a
          limited number of clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-screen-xl">
        {/* Digital Domination Package */}
        {packages.map((packages, index) => (
          <div
            key={index}
            className="group md:hover:scale-105 hover:opacity-100 md:opacity-75 flex flex-col align-start text-start text-black bg-relaydigital-silver rounded-2xl gap-6 p-8 transition-all duration-500"
          >
            <div className="flex flex-col gap-y-3 mb-10">
              <h3 className="text-p1 font-geometos-soft font-extrabold">{packages.title}</h3>
              <p className="text-p3">{packages.description}</p>
            </div>
            <div className="flex flex-col gap-y-3">
              <p className="text-p1 font-geometos-soft font-extrabold">{packages.price}</p>
              <p className="text-p3">{packages.priceDetails}</p>
            </div>
            <button className="relative w-full group/button overflow-hidden font-geometos-soft font-extrabold text-button text-white bg-relaydigital-blue py-7 px-4 sm:px-14 rounded-2xl transition-all duration-500">
              {/* Decorative overlay */}
              <div className="absolute -top-[50%] rotate-[20deg] bg-white/40 w-[90px] h-[200%] group-hover/button:translate-x-[400%] group-hover/button:opacity-100 transition-all duration-500 ease-out opacity-0 pointer-events-none" />

              {/* Main content */}
              <span className="relative flex overflow-hidden h-[1em] pointer-events-none">
                {/* Placeholder for spacing */}
                <span className="opacity-0">{packages.button.text}</span>

                {/* Animated content */}
                <span className="absolute w-full h-full left-1/2 -translate-x-1/2 translate-y-0 group-hover/button:-translate-y-[200%] group-hover/button:opacity-50 transition-all duration-500">
                  {packages.button.text}
                </span>
                <span className="absolute w-full h-full left-1/2 -translate-x-1/2 opacity-50 translate-y-[200%] group-hover/button:-translate-y-0 group-hover/button:opacity-100 transition-all duration-500">
                  {packages.button.text}
                </span>
              </span>
            </button>
            <ul className="text-p3 space-y-3">
              {packages.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
