import Script from "next/script";
import Image from "next/image";
import {
  FaBook,
  FaCheckCircle,
  FaBrain,
  FaChartLine,
  FaLayerGroup,
} from "react-icons/fa";

export const metadata = {
  title:
    "NEET Previous Year Questions (PYQs) | Chapter-wise Practice – RankUp",
  description:
    "Practice NEET previous year questions chapter-wise with RankUp. PYQs from Physics, Chemistry and Biology with smart analysis, mock tests and revision tools.",
  keywords:
    "neet pyq, neet previous year questions, neet pyq chapter wise, neet pyq practice online, neet pyq app",
  alternates: {
    canonical: "https://www.rankupp.in/neet-previous-year-questions",
  },
};

export default function PyqAuthorityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "RankUp",
    "url": "https://www.rankupp.in/neet-previous-year-questions",
    "description":
      "RankUp provides chapter-wise NEET previous year questions (PYQs) with mock tests, smart revision and AI-powered performance analytics.",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
    },
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="pyq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-gradient-to-b from-white to-[#f5f9ff] text-gray-800">

        {/* ================= HERO ================= */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E3A5F]">
            NEET Previous Year Questions (PYQs) – Chapter Wise Practice
          </h1>

          <p className="mt-6 text-lg max-w-3xl">
            Practicing <strong>NEET previous year questions (PYQs)</strong> is
            the smartest way to understand exam pattern, important NCERT topics
            and repeated concepts. RankUp provides chapter-wise PYQs with smart
            analysis to help you score higher in NEET.
          </p>

          {/* Hidden SEO authority */}
          <p className="sr-only">
            RankUp NEET PYQ practice platform offers chapter-wise previous year
            questions from Physics, Chemistry and Biology with instant solutions,
            accuracy analysis, time tracking and revision support.
          </p>
        </section>

        {/* ================= WHY PYQs ================= */}
        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">
            <div>
              <h2 className="text-3xl font-bold text-[#1E3A5F]">
                Why NEET PYQs Are Most Important
              </h2>

              <p className="mt-4">
                More than 70% of NEET questions are directly or indirectly based
                on concepts repeated from previous year questions. PYQs help you
                identify high-weightage chapters and avoid common mistakes.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  Understand real NEET exam pattern
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  Identify most repeated NCERT concepts
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  Improve accuracy and time management
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  Build confidence before mock tests
                </li>
              </ul>
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

        {/* ================= SUBJECT WISE ================= */}
        <section className="py-24 bg-gradient-to-br from-[#f3f9ff] to-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#1E3A5F] text-center">
              NEET PYQs – Subject Wise Practice
            </h2>

            <div className="grid md:grid-cols-3 gap-10 mt-16">
              {[
                {
                  title: "NEET Physics PYQs",
                  desc: "Mechanics, Current Electricity, Magnetism, Modern Physics & more.",
                  icon: <FaChartLine />,
                },
                {
                  title: "NEET Chemistry PYQs",
                  desc: "Physical, Organic & Inorganic Chemistry from NCERT.",
                  icon: <FaBrain />,
                },
                {
                  title: "NEET Biology PYQs",
                  desc: "Botany & Zoology with maximum NCERT-based questions.",
                  icon: <FaBook />,
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center mb-5">
                    {s.icon}
                  </div>

                  <h3 className="font-bold text-lg text-[#1E3A5F]">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= HOW RANKUP HELPS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#1E3A5F]">
              How RankUp Makes PYQ Practice More Effective
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mt-10">
              <div className="flex gap-4">
                <FaLayerGroup className="text-[#1E3A5F] text-2xl" />
                <p>
                  Chapter-wise PYQs aligned with NCERT syllabus for focused
                  preparation.
                </p>
              </div>

              <div className="flex gap-4">
                <FaBrain className="text-[#1E3A5F] text-2xl" />
                <p>
                  Smart analytics showing accuracy, weak topics and progress.
                </p>
              </div>

              <div className="flex gap-4">
                <FaChartLine className="text-[#1E3A5F] text-2xl" />
                <p>
                  Time analysis to improve speed and exam temperament.
                </p>
              </div>

              <div className="flex gap-4">
                <FaCheckCircle className="text-[#1E3A5F] text-2xl" />
                <p>
                  Seamless transition from PYQs to mock tests and revision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="py-20 bg-[#f5f9ff]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#1E3A5F]">
              NEET PYQs – Frequently Asked Questions
            </h2>

            <div className="mt-10 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold">
                  Are NEET previous year questions enough?
                </h3>
                <p className="text-sm mt-2">
                  PYQs are the foundation of NEET preparation, but combining them
                  with mock tests and revision gives best results.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold">
                  How many years of PYQs should I practice?
                </h3>
                <p className="text-sm mt-2">
                  Ideally, practice last 10–15 years of NEET/AIPMT questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-24 text-center">
          <h2 className="text-3xl font-bold text-[#1E3A5F]">
            Practice NEET PYQs Smarter with RankUp
          </h2>
          <p className="mt-4 text-gray-700">
            Build accuracy, confidence and speed with PYQ-focused preparation.
          </p>
        </section>
      </main>
    </>
  );
}
