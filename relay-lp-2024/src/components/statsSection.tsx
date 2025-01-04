'use client';

export default function StatsSection(){
  return (
    <section className="text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-blue-400 text-sm font-medium">Average Conversion Rate Boost</h3>
            <p className="text-4xl font-bold mt-2">22%</p>
            <p className="mt-4 text-sm text-gray-400">
              Achieve a 22% average increase in conversion rates, turning more visitors into customers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-blue-400 text-sm font-medium">More Time Spent on Page</h3>
            <p className="text-4xl font-bold mt-2">60%</p>
            <p className="mt-4 text-sm text-gray-400">
              Increase average time spent on your pages by 60%, enhancing engagement and retention.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-blue-400 text-sm font-medium">Faster Than Typical Websites</h3>
            <p className="text-4xl font-bold mt-2">10X</p>
            <p className="mt-4 text-sm text-gray-400">
              Experience load times up to 10 times faster than typical websites, improving user satisfaction.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-blue-400 text-sm font-medium">Average Ad ROI Increase</h3>
            <p className="text-4xl font-bold mt-2">39%</p>
            <p className="mt-4 text-sm text-gray-400">
              See a 39% average boost in ad ROI, maximizing the effectiveness of your marketing spend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

