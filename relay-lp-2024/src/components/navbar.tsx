import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-4 py-3 flex items-center justify-between">
      {/* RelayDigital Text */}
      <div>
        <Image
          src="/images/relayText.svg" 
          alt="RelayDigital Text"
          width={120}
          height={40}
        />
      </div>

      {/* Center Logo */}
      <div>
        <Image
          src="/images/relayLogo.svg" 
          alt="RelayDigital Logo"
          width={40}
          height={40}
        />
      </div>

      {/* Navigation Button */}
      <div>
        <button className="bg-blue-500 p-3 rounded-full flex flex-col items-center justify-center">
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
