import { FaApple, FaGooglePlay } from "react-icons/fa";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "NEET Online Preparation App | RankUp — PYQs, Mock Tests & AI Revision",
  description:
    "RankUp is a NEET online preparation app with PYQ-based mock tests, flashcards, smart revision planner, leaderboard and AI-powered result analytics. Download free on Play Store & App Store.",
  openGraph: {
    title: "RankUp — NEET Online Preparation App",
    description:
      "Prepare smarter for NEET-UG with PYQs, mock tests, flashcards, leaderboard and AI-powered performance analysis.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RankUp NEET Preparation App Preview",
      },
    ],
  },
};

export default function Cta() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RankUp – NEET Online Preparation App",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Android, iOS, Web",
    "description":
      "RankUp is a NEET online preparation app offering PYQ-based mock tests, flashcards, smart revision planner, leaderboard and AI-powered result analysis for NEET-UG aspirants.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
    },
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
    },
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="cta-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        className="relative overflow-hidden bg-[#fefcfc] pb-20"
        aria-label="Download RankUp NEET Online Preparation App"
      >
        {/* Decorative Glass Shapes */}
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-white/40 backdrop-blur-xl rounded-full shadow-lg"></div>
        <div className="absolute -bottom-5 -right-5 w-60 h-60 bg-white/20 backdrop-blur-xl rounded-full shadow-lg"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('/bg-lines.svg')] bg-cover bg-center pointer-events-none"></div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-14 relative z-10">
          {/* LEFT CONTENT */}
          <div>
            {/* 🔥 SEO POWER HEADING */}
            <h2 className="text-4xl md:text-4xl font-extrabold leading-snug text-[#1E3A5F] tracking-tight">
              NEET Online Preparation App
              <br />
              <span className="text-[#1E3A5F]">With PYQs, Mock Tests & Smart Revision</span>
            </h2>

            <p className="mt-4 text-lg text-gray-700 max-w-md leading-relaxed">
              Study smarter with{" "}
              <strong className="text-[#1E3A5F]">RankUp</strong> — a NEET preparation
              app built for serious aspirants. Practice PYQs, attempt major &
              minor mock tests, revise with flashcards and track performance using
              AI-powered analytics.
            </p>

            {/* SAFE HIDDEN SEO CONTENT */}
            <p className="sr-only">
              RankUp NEET online preparation app helps NEET-UG students with
              PYQ-based mock tests, smart QBank, flashcards, leaderboard,
              instant result analysis, time accuracy tracking and AI-driven
              revision planner for Class 11 and Class 12 aspirants.
            </p>

            {/* App Download Buttons */}
            <div className="flex items-center mt-4 gap-6">
              {/* Google Play */}
              <a
                href="#"
                aria-label="Download RankUp NEET preparation app from Google Play Store"
                className="group flex items-center gap-3 bg-black border border-white/20 backdrop-blur-md px-3 py-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#295176]"
              >
                <FaGooglePlay className="text-white text-2xl group-hover:scale-110 transition" />
                <div>
                  <p className="text-xs text-blue-100">GET IT ON</p>
                  <p className="text-white font-semibold text-sm md:text-lg">
                    Google Play
                  </p>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                aria-label="Download RankUp NEET preparation app from Apple App Store"
                className="group flex items-center gap-3 bg-black border border-white/20 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#295176]"
              >
                <FaApple className="text-white text-2xl group-hover:scale-110 transition" />
                <div>
                  <p className="text-xs text-blue-100">Download on the</p>
                  <p className="text-white font-semibold text-sm md:text-lg">
                    App Store
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative flex justify-center items-center w-full">
            <div className="relative w-full md:w-[480px] flex justify-center items-center gap-3">
      <Image
  src="/screen1.jpg"
  alt="NEET online preparation app with PYQs and mock tests"
  width={180}
  height={300}
  className="rounded-3xl shadow-2xl w-[180px] md:w-[280px] h-auto"
/>

<Image
  src="/screen2.webp"
  alt="NEET online preparation app with PYQs and mock tests"
  width={180}
  height={300}
  className="rounded-3xl shadow-2xl w-[180px] md:w-[280px] h-auto"
/>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
