export default function FAQSection() {
    return (
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">WE'VE GOT ANSWERS</h2>
          <p className="text-lg text-gray-400 mb-8">Real Results from Real Partnerships</p>
          <div className="space-y-4">
            {[
              "What does Relay Digital do for my business?",
              "How can I be sure I’ll see a return on my investment?",
              "Do you work with large corporations or smaller businesses?",
              "Why is Relay Digital the best choice for my digital marketing needs?",
              "Can you guarantee results?",
              "What’s involved in your digital marketing services?",
            ].map((question, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300 cursor-pointer"
              >
                <p className="text-lg">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  