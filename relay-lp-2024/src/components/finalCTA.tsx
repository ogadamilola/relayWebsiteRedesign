'use client';

export default function FinalCTA (){
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            NO MORE GUESSWORK—JUST RESULTS
          </h2>
          <h1 className="text-5xl sm:text-6xl font-extrabold my-4">
            Harness the <span className="underline decoration-blue-500">Power</span> of Proven Strategies
          </h1>
        </div>

        {/* Video Section */}
        {/* We'll put the bagira video here, just placeholding for now */}
        <div className="flex items-center justify-center w-full h-screen bg-black text-white">
          <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl">
            <iframe
              className="rounded-lg"
              src="https://www.youtube.com/embed/example"
              title="Proven Strategies"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8 text-lg text-gray-400 text-center">
          <p>
            Many entrepreneurs struggle with growth, stumbling through a maze
            of trial and error, and hoping for success. This approach is
            stressful, unreliable, and often leads to disappointment.
          </p>
          <p className="mt-4">
            At Relay Digital, we’ve refined our strategies to deliver real
            results. Our experience means you don’t have to navigate this
            journey alone—we provide a clear, actionable path to success.
          </p>
          <p className="mt-4">
          We're here to transform your business from uncertain to unstoppable, cutting through the noise with precision and expertise. With our proven methods, you’ll move from a fledgling entrepreneur to a market leader, confidently and efficiently. Let’s shift your strategy into high gear and achieve your goals faster than you imagined."
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-8 rounded-lg text-xl hover:opacity-90 transition">
            Join the Victory Lane
          </button>
        </div>

        {/* Rating Section */}
        <div className="mt-6 text-center">
          <p className="text-gray-300 flex items-center justify-center space-x-2">
            <span>⭐</span>
            <span>4.8 stars out of 5,848 reviews</span>
          </p>
        </div>
      </div>
    </section>
  );
};

