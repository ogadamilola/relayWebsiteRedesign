'use client';

export default function Services() {
    return (
      <section className="text-white py-16">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">OUR </span>
            <span className="text-blue-500">WINNING STRATEGIES</span>
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Everything you need to leave competitors in the dust
          </p>
  
          {/* Main Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Website Development */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="bg-gray-700 h-16 w-16 mx-auto mb-4 rounded"></div>
              <h3 className="text-xl font-semibold mb-2">WEBSITE DEVELOPMENT</h3>
              <p className="text-gray-400">
                Get a website that doesn’t just look good but performs
                exceptionally. Our award-winning developers design and build
                websites optimized for conversions, speed, and SEO, ensuring your
                online presence is as powerful as it is beautiful.
              </p>
            </div>
  
            {/* Paid Traffic & Marketing */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="bg-gray-700 h-16 w-16 mx-auto mb-4 rounded"></div>
              <h3 className="text-xl font-semibold mb-2">PAID TRAFFIC & MARKETING</h3>
              <p className="text-gray-400">
                Propel your business forward with tailored paid traffic
                strategies. From Google Ads to social media campaigns, we design,
                execute, and optimize marketing funnels that deliver consistent
                results and maximize your ROI.
              </p>
            </div>
  
            {/* SEO & Content Marketing */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="bg-gray-700 h-16 w-16 mx-auto mb-4 rounded"></div>
              <h3 className="text-xl font-semibold mb-2">SEO & CONTENT MARKETING</h3>
              <p className="text-gray-400">
                Take control of your market with SEO strategies that get your
                business seen. Our content-driven approach ensures you rank
                higher, attract organic traffic, and convert leads into loyal
                customers.
              </p>
            </div>
          </div>
  
          {/* Additional Services */}
          <div className="bg-gray-900 mt-12 p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-6">AND A WHOLE LOT MORE ...</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-400">
              {[
                "Illustration",
                "UI/UX",
                "Social Media",
                "T-shirt & Merch",
                "Branding",
                "Web Design",
                "Infographics",
                "eBook and Courses",
                "Product Design",
                "Iconography",
                "Appstore Graphics",
                "Accessibility",
                "Webflow",
                "Print Design",
                "Posters & Banners",
                "Typography",
                "Consulting",
                "Packaging",
                "Email Newsletters",
                "Marketing",
                "Graphic Design",
                "Naming",
                "NFT Art",
              ].map((service) => (
                <p key={service}>{service}</p>
              ))}
            </div>
            <p className="text-white mt-6">
              DON’T SEE IT?{" "}
              <a href="#" className="text-blue-500 underline">
                ASK US
              </a>
            </p>
          </div>
  
          {/* CTA Button */}
          <button className="mt-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition">
            SHOW ME MORE
          </button>
  
          {/* Reviews */}
          <p className="text-gray-400 mt-4">
            ⭐ 4.8 stars out of 5,848 reviews
          </p>
        </div>
      </section>
    );
  }
  