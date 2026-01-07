import Script from "next/script";
import Image from "next/image";
import {
  FaCheckCircle,
  FaBrain,
  FaClock,
  FaChartLine,
  FaLayerGroup,
  FaBookOpen,
} from "react-icons/fa";

export const metadata = {
  title:
    "NEET Revision Strategy 2025 | Smart Revision Plan for Top Scores – RankUp",
  description:
    "Follow a smart NEET revision strategy for 2025 with RankUp. PYQ-based revision, flashcards, daily plans and AI performance insights for NEET-UG aspirants.",
  keywords:
    "neet revision strategy, neet 2025 revision plan, neet smart revision, neet last 6 months strategy, neet revision app",
  alternates: {
    canonical: "https://www.rankupp.in/neet-revision-strategy",
  },
};

export default function RevisionAuthorityPage() {
  const primary = "#1E3A5F";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "RankUp",
    "url": "https://www.rankupp.in/neet-revision-strategy",
    "description":
      "RankUp provides a smart NEET revision strategy with PYQ-based revision, flashcards, daily plans and AI-powered performance analysis.",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
    },
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="revision-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-gradient-to-b from-white to-[#f3f9ff] text-gray-800">

        {/* ================= HERO ================= */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E3A5F]">
            NEET Revision Strategy for 2025 Aspirants
          </h1>

          <p className="mt-6 text-lg max-w-3xl">
            Revision decides your NEET rank. RankUp helps you revise smarter
            using <strong>PYQ-based revision</strong>,{" "}
            <strong>flashcards</strong>,{" "}
            <strong>daily smart plans</strong> and{" "}
            <strong>AI-powered performance insights</strong> so you remember
            more and panic less in the exam.
          </p>

          {/* Hidden SEO authority */}
          <p className="sr-only">
            RankUp NEET revision strategy for Class 11 and Class 12 students
            includes PYQ-driven revision, NCERT focused flashcards, daily
            revision planner, accuracy tracking and weak topic identification.
          </p>
        </section>

        {/* ================= WHY REVISION ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1E3A5F]">
                Why Smart Revision Is the Key to NEET Success
              </h2>

              <p className="mt-4">
                Most NEET aspirants study a lot but revise randomly. Smart
                revision helps you strengthen memory, reduce silly mistakes and
                improve accuracy under exam pressure.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  Reinforces NCERT-based concepts
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  Reduces forgetting and confusion
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  Improves speed and confidence
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  Prevents last-minute panic
                </li>
              </ul>
            </div>

            <Image
              src="/screen1.webp"
              alt="NEET revision planner with flashcards and daily targets"
              width={480}
              height={800}
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </section>

        {/* ================= REVISION FRAMEWORK ================= */}
        <section className="py-24 bg-gradient-to-br from-[#f5f9ff] to-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#1E3A5F] text-center">
              RankUp Smart NEET Revision Framework
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
              {[
                {
                  icon: <FaBookOpen />,
                  title: "NCERT Focus",
                  desc: "Revision strictly aligned with NCERT lines and diagrams.",
                },
                {
                  icon: <FaLayerGroup />,
                  title: "PYQ-Based",
                  desc: "Revise concepts that are repeatedly asked in NEET.",
                },
                {
                  icon: <FaClock />,
                  title: "Daily Targets",
                  desc: "AI-generated daily revision goals based on performance.",
                },
                {
                  icon: <FaChartLine />,
                  title: "Performance Tracking",
                  desc: "Track accuracy, weak topics and improvement trends.",
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-full text-white mb-5"
                    style={{ background: primary }}
                  >
                    {f.icon}
                  </div>

                  <h3 className="font-bold text-lg text-[#1E3A5F]">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= LAST 6 MONTHS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#1E3A5F]">
              Last 6 Months NEET Revision Strategy
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mt-10">
              <div className="flex gap-4">
                <FaBrain className="text-[#1E3A5F] text-2xl" />
                <p>
                  Revise PYQs and flashcards daily instead of starting new
                  topics.
                </p>
              </div>

              <div className="flex gap-4">
                <FaClock className="text-[#1E3A5F] text-2xl" />
                <p>
                  Analyze mock test results and revise weak chapters weekly.
                </p>
              </div>

              <div className="flex gap-4">
                <FaCheckCircle className="text-[#1E3A5F] text-2xl" />
                <p>
                  Focus on accuracy first, speed automatically improves.
                </p>
              </div>

              <div className="flex gap-4">
                <FaChartLine className="text-[#1E3A5F] text-2xl" />
                <p>
                  Use analytics to avoid repeating the same mistakes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="py-20 bg-[#f5f9ff]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#1E3A5F]">
              NEET Revision Strategy – FAQs
            </h2>

            <div className="mt-10 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold">
                  How many times should I revise for NEET?
                </h3>
                <p className="text-sm mt-2">
                  Ideally, revise important chapters at least 3–4 times before
                  the exam.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold">
                  Is PYQ-based revision enough for NEET?
                </h3>
                <p className="text-sm mt-2">
                  PYQs form the base, but combining them with mock tests and
                  flashcards gives the best results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-24 text-center">
          <h2 className="text-3xl font-bold text-[#1E3A5F]">
            Revise Smarter for NEET 2025 with RankUp
          </h2>
          <p className="mt-4 text-gray-700">
            Turn revision into your biggest strength, not a stress point.
          </p>
        </section>
      </main>
    </>
  );
}
