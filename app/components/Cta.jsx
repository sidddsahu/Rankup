import { FaApple, FaGooglePlay } from "react-icons/fa";
import Image from "next/image";

export const metadata = {
  title: "Boost Your NEET-UG Score | RankUp App — Smart Revision & AI Tools",
  description:
    "RankUp NEET-UG preparation app: flashcards, AI revision, mock tests, study planner & more. Download now on Google Play and App Store.",
  openGraph: {
    title: "RankUp — NEET-UG Preparation App",
    description:
      "Boost your NEET-UG score with AI revision boosters, flashcards, mock tests & analytics.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RankUp App Preview",
      },
    ],
  },
};

export default function Cta() {
  return (
    <section
      className="relative overflow-hidden bg-[#fefcfc] py-20"
      aria-label="RankUp NEET-UG Exam Preparation App Download Section"
    >
      {/* Decorative Glass Shapes */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-white/40 backdrop-blur-xl rounded-full shadow-lg"></div>
      <div className="absolute -bottom-5 -right-5 w-60 h-60 bg-white/20 backdrop-blur-xl rounded-full shadow-lg"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/bg-lines.svg')] bg-cover bg-center pointer-events-none"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-14 relative z-10">
        {/* LEFT SIDE CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug text-[#1E3A5F] tracking-tight">
            Boost Your NEET-UG Score
            <br />
            <span className="text-[#1E3A5F]">With RankUp — Guaranteed</span>
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-md leading-relaxed">
            Study smarter with <strong className="text-[#1E3A5F]">RankUp</strong> — daily revision boosters,
            flashcards, mock tests & AI-powered learning tools crafted for NEET-UG aspirants.
          </p>

          {/* App Download Buttons */}
          <div className="flex items-center mt-4 gap-6">
            {/* Google Play */}
            <a
              href="#"
              aria-label="Download RankUp from Google Play Store"
              className="group flex items-center gap-3 bg-black border border-white/20 backdrop-blur-md px-3 py-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#295176]"
            >
              <FaGooglePlay className="text-white text-2xl group-hover:scale-110 transition" />
              <div>
                <p className="text-xs text-blue-100">GET IT ON</p>
                <p className="text-white font-semibold text-sm md:text-lg">Google Play</p>
              </div>
            </a>

            {/* App Store */}
            <a
              href="#"
              aria-label="Download RankUp from Apple App Store"
              className="group flex items-center gap-3 bg-black border border-white/20 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#295176]"
            >
              <FaApple className="text-white text-2xl group-hover:scale-110 transition" />
              <div>
                <p className="text-xs text-blue-100">Download on the</p>
                <p className="text-white font-semibold text-sm md:text-lg">App Store</p>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="relative flex justify-center items-center w-full">
          <div className="relative w-full md:w-[480px] flex justify-center items-center">
            {/* Main Screen */}
            <Image
              src="/screen1.webp"
              alt="RankUp NEET-UG Learning App Interface"
              width={500}
              height={900}
              priority
              className="w-full md:w-[85%] lg:w-[95%] rounded-3xl drop-shadow-2xl object-cover"
            />

            {/* Overlapping Screen */}
            <Image
              src="/screen2.webp"
              alt="RankUp Mock Tests & AI Revision Features"
              width={300}
              height={600}
              className="absolute right-0 bottom-0 w-[47%] md:w-[50%] lg:w-[45%] rounded-3xl drop-shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
