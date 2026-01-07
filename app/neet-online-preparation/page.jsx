import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import {
  FaBookOpen,
  FaBrain,
  FaChartLine,
  FaLayerGroup,
  FaTrophy,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

export const metadata = {
  title:
    "NEET Online Preparation 2025 | PYQs, Mock Tests & Smart Revision – RankUp",
  description:
    "RankUp is a NEET online preparation platform with PYQs, mock tests, flashcards, leaderboard and AI-powered performance analytics for NEET-UG 2025 aspirants.",
  keywords:
    "neet online preparation, neet preparation app, neet pyq practice, neet mock test online, neet 2025 preparation",
  alternates: {
    canonical: "https://www.rankupp.in/neet-online-preparation",
  },
};

export default function MasterNeetPage() {
  const primary = "#1E3A5F";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "RankUp",
    "url": "https://www.rankupp.in/neet-online-preparation",
    "description":
      "RankUp is a NEET online preparation platform offering PYQs, mock tests, revision tools and AI-powered analytics.",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
    },
  };

  return (
    <>
      <Script
        id="neet-master-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-gradient-to-b from-white to-[#f3f9ff] text-gray-800">

        {/* ================= HERO ================= */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E3A5F]">
            NEET Online Preparation for 2025 Aspirants
          </h1>

          <p className="mt-6 text-lg max-w-3xl">
            Prepare smarter for NEET-UG with <strong>PYQs</strong>,{" "}
            <strong>online mock tests</strong>,{" "}
            <strong>flashcards</strong> and{" "}
            <strong>AI-powered performance analytics</strong>.
          </p>

          {/* 🔗 SEO PRIMARY CTA LINK */}
          <div className="mt-8">
            <Link
              href="/"
              className="inline-block text-[#1E3A5F] font-semibold underline"
            >
              Explore RankUp NEET App →
            </Link>
          </div>
        </section>

        {/* ================= WHY RANKUP ================= */}
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1E3A5F]">
                Why RankUp is Built for NEET Toppers
              </h2>

              <ul className="mt-6 space-y-4">
                <li className="flex gap-3">
                  <FaCheckCircle className="mt-1 text-green-600" />
                  Chapter-wise NEET PYQs from NCERT
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="mt-1 text-green-600" />
                  Major & Minor mock tests
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="mt-1 text-green-600" />
                  Instant result & accuracy tracking
                </li>
              </ul>

              {/* 🔗 AUTHORITY LINKS */}
              <div className="mt-6 space-y-2">
                <Link href="/neet-previous-year-questions" className="block underline">
                  NEET Previous Year Questions (PYQs)
                </Link>
                <Link href="/neet-mock-test-online" className="block underline">
                  NEET Mock Test Online
                </Link>
                <Link href="/neet-revision-strategy" className="block underline">
                  NEET Revision Strategy
                </Link>
              </div>
            </div>

            <div className="flex gap-3">
              <Image
                src="/screen1.jpg"
                alt="NEET online preparation app with PYQs"
                width={180}
                height={300}
                className="rounded-3xl shadow-2xl w-[180px] md:w-[280px]"
              />
              <Image
                src="/screen2.webp"
                alt="NEET mock tests and analytics screen"
                width={180}
                height={300}
                className="rounded-3xl shadow-2xl w-[180px] md:w-[280px]"
              />
            </div>
          </div>
        </section>

        {/* ================= FEATURES GRID ================= */}
        <section className="py-24 bg-gradient-to-br from-[#f5f9ff] to-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-[#1E3A5F]">
              Everything You Need to Crack NEET — Inside One App
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
              {[
                { icon: <FaBookOpen />, title: "NEET PYQs Practice" },
                { icon: <FaLayerGroup />, title: "Major & Minor Tests" },
                { icon: <FaBrain />, title: "Flashcards & Revision" },
                { icon: <FaTrophy />, title: "Leaderboard Comparison" },
                { icon: <FaClock />, title: "Time Analysis" },
                { icon: <FaChartLine />, title: "AI Performance Analytics" },
              ].map((f, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-xl"
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-full text-white mb-4"
                    style={{ background: primary }}
                  >
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-[#1E3A5F]">{f.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-24 text-center">
          <h2 className="text-3xl font-bold text-[#1E3A5F]">
            Start Your NEET 2025 Preparation with RankUp
          </h2>
          <p className="mt-4 text-gray-700">
            Practice PYQs, attempt mock tests & revise smartly.
          </p>

          {/* 🔗 STRONG SEO CTA */}
          <div className="mt-6 space-x-4">
            <Link href="/neet-previous-year-questions" className="underline">
              Start PYQ Practice →
            </Link>
            <Link href="/neet-mock-test-online" className="underline">
              Attempt Mock Tests →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
