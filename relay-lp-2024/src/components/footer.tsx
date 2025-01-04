'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 text-center">
        {/* Header Section */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">STAY IN THE RELAY LOOP</h2>
        <p className="text-gray-400 mb-8">
          Stay Ahead in the Race. Subscribe for tips, strategies, and success stories.
        </p>

        {/* Subscription Section */}
        <div className="flex justify-center items-center space-x-4 mb-10">
          <div className="flex items-center bg-white text-black rounded-full overflow-hidden shadow-lg">
            <span className="pl-4 text-xl">👋</span>
            <input
              type="email"
              placeholder="Claim Your Spot in the Winner's Circle..."
              className="px-4 py-3 w-96 focus:outline-none text-sm"
            />
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-blue-600 transition">
            GET IT*
          </button>
        </div>

        {/* Rating Section */}
        <div className="mb-10">
          <p className="text-yellow-400 text-lg mb-2">⭐⭐⭐⭐⭐</p>
          <p className="text-gray-400 text-sm">4.8 stars out of 5,848 reviews</p>
          <p className="text-gray-400 text-sm mt-2">Looking forward to potentially working with ya ✌️</p>
        </div>

        {/* Footer Links and Info */}
        <div className="flex flex-wrap justify-between items-start text-gray-400 text-sm">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start space-y-2 mb-6 md:mb-0">
            <div className="space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <p>Working 🌟 worldwide.</p>
            <p>Based in Calgary.</p>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 gap-6 text-center md:text-left">
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

        {/* Bottom Section */}
        <div className="mt-12 text-gray-400 text-xs">
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
