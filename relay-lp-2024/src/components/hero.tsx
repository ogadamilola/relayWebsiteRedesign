'use client';

interface HeroSectionProps {
    title: string;
    subtitle: string;
  }
  
  export default function Hero({ title, subtitle }: HeroSectionProps) {
    return (
      <section className="bg-black text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-6">{title}</h1>
          <p className="text-lg md:text-xl mb-8">{subtitle}</p>
          <form className="flex flex-col md:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="&#128075;Claim Your Spot in the Winner's Circle..."
              className="w-full md:w-1/3 p-3 rounded-lg text-black"
              required
            />
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Get It*
            </button>
          </form>
          <p className="text-sm mt-4">*Don't worry, we won't spam or sell your email!</p>
        </div>
      </section>
    );
  }

  