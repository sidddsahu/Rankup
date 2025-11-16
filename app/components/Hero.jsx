import Image from "next/image";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function Hero() {
  return (
    <header className="relative w-full h-full py-8 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/deepak3.png"
          alt="RankUp NEET-UG background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.65)] to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 py-20 md:py-32 px-6 md:px-16 text-white max-w-4xl">

        <p className="text-sm uppercase tracking-wide text-purple-200 font-medium">
          New: NEET-UG focused — curated question banks
        </p>

        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-left drop-shadow-lg">
          RankUp — Ace NEET-UG with Smart Revision
        </h1>

        <p className="mt-4 text-lg text-purple-200 max-w-xl text-left">
          Subject-wise practice, active-recall flashcards, and analytics
          to boost your NEET-UG rank faster.
        </p>


        {/* App Download Buttons */}
        <div className="flex  items-center max-w-3xl mt-4  gap-6">

          {/* Play Store */}
          <a
            href="#"
            className="group flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-md
              px-2 py-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300
              hover:-translate-y-1 hover:bg-white/20"
          >
            <FaGooglePlay className="text-white text-2xl group-hover:scale-110 transition" />
            <div>
              <p className="text-xs text-blue-100">GET IT ON</p>
              <p className="text-white font-semibold text-sm md:text-lg">Google Play</p>
            </div>
          </a>

          {/* Apple Store */}
          <a
            href="#"
            className="group flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-md
              px-6 py-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300
              hover:-translate-y-1 hover:bg-white/20"
          >
            <FaApple className="text-white text-2xl group-hover:scale-110 transition" />
            <div>
              <p className="text-xs text-blue-100">Download on the</p>
              <p className="text-white font-semibold text-sm md:text-lg">App Store</p>
            </div>
          </a>
        </div>

      </div>
    </header>
  );
}
