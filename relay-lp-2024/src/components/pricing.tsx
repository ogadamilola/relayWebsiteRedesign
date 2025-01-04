export default function Pricing() {
    return (
      <section className="text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">PRICING</h2>
          <p className="text-gray-300 mb-12">
            To ensure we deliver top-tier quality designs on time, we work with a limited number of clients.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Digital Domination Package */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Digital Domination Package</h3>
              <p className="text-gray-400 mb-6">
                Designed for businesses looking to optimize their online presence with high-converting websites and data-driven marketing funnels.
              </p>
              <p className="text-3xl font-bold mb-4">CUSTOM</p>
              <p className="text-gray-400 mb-6">
                Flexible payment schedule. Tailored to your business needs.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium mb-6">
                BOOK INTRO CALL
              </button>
              <ul className="text-left space-y-3 text-gray-300">
                <li>✓ Bespoke project proposal</li>
                <li>✓ Fully customized website and funnel development</li>
                <li>✓ Dedicated project timeline</li>
                <li>✓ Delivered in phases</li>
                <li>✓ Weekly strategy sync</li>
                <li>✓ Managed via Slack, Trello, and other project management tools</li>
                <li>✓ Invite your team to collaborate with us in real-time</li>
              </ul>
            </div>
  
            {/* Growth Partner Package */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Growth Partner Package</h3>
              <p className="text-gray-400 mb-6">
                Ideal for fast-growing companies and busy entrepreneurs who need a reliable partner to take over all digital marketing, lead generation, and automation tasks.
              </p>
              <p className="text-3xl font-bold mb-4">$10,000 - $50,000/M</p>
              <p className="text-gray-400 mb-6">
                Based on services required. Paid monthly. Pause or cancel anytime.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium mb-6">
                ON REQUEST
              </button>
              <ul className="text-left space-y-3 text-gray-300">
                <li>✓ End-to-end marketing automation</li>
                <li>✓ Unlimited paid media management (Google, Facebook, LinkedIn)</li>
                <li>✓ Full-funnel setup and continuous A/B testing</li>
                <li>✓ SEO & content management</li>
                <li>✓ Access to real-time performance dashboard</li>
                <li>✓ 24/7 priority support</li>
                <li>✓ Managed via Slack, Trello, or preferred client tools</li>
                <li>✓ Monthly strategy sessions and growth reports</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  