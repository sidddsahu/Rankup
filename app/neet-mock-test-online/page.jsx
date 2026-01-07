import Script from "next/script";
import Image from "next/image";
import {
  FaLayerGroup,
  FaClock,
  FaChartLine,
  FaTrophy,
  FaCheckCircle,
  FaBrain,
} from "react-icons/fa";

export const metadata = {
  title:
    "NEET Mock Test Online 2025 | Full Syllabus Test Series – RankUp",
  description:
    "Attempt NEET mock tests online with RankUp. Major & Minor test series, real exam pattern, instant results, accuracy analysis and leaderboard for NEET 2025 aspirants.",
  keywords:
    "neet mock test online, neet test series, neet full syllabus test, neet online test free, neet mock test app",
  alternates: {
    canonical: "https://www.rankupp.in/neet-mock-test-online",
  },
};

export default function MockTestAuthorityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "RankUp",
    "url": "https://www.rankupp.in/neet-mock-test-online",
    "description":
      "RankUp provides NEET mock tests online with major and minor test series, instant results, accuracy analysis and AI-powered performance insights.",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
    },
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="mocktest-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-gradient-to-b from-white to-[#f3f9ff] text-gray-800">

        {/* ================= HERO ================= */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E3A5F]">
            NEET Mock Test Online – Real Exam Practice for 2025
          </h1>

          <p className="mt-6 text-lg max-w-3xl">
            Attempt <strong>NEET mock tests online</strong> designed exactly like
            the real exam. RankUp offers <strong>major & minor test series</strong>,
            full syllabus tests, instant results and detailed performance analysis
            to help you maximize your NEET score.
          </p>

          {/* Hidden SEO authority */}
          <p className="sr-only">
            RankUp NEET mock test platform provides online test series with real
            exam interface, time tracking, accuracy percentage, leaderboard
            comparison and AI-based performance insights for NEET aspirants.
          </p>
        </section>

        {/* ================= WHY MOCK TESTS ================= */}
        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1E3A5F]">
                Why NEET Mock Tests Are Essential
              </h2>

              <p className="mt-4">
                Studying concepts alone is not enough for NEET. Mock tests help
                you apply knowledge under time pressure, improve accuracy and
                build exam temperament.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  Real NEET exam pattern & difficulty level
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  Improve speed and time management
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  Identify weak chapters before the exam
                </li>
                <li className="flex gap-3">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  Reduce exam fear and build confidence
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

        {/* ================= TEST TYPES ================= */}
        <section className="py-24 bg-gradient-to-br from-[#f5f9ff] to-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#1E3A5F] text-center">
              Major & Minor NEET Test Series
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
                <div className="w-14 h-14 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center mb-5">
                  <FaLayerGroup />
                </div>
                <h3 className="font-bold text-lg text-[#1E3A5F]">
                  Major Test Series
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Full syllabus NEET mock tests designed exactly like the real
                  exam to assess your final preparation level.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
                <div className="w-14 h-14 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center mb-5">
                  <FaBrain />
                </div>
                <h3 className="font-bold text-lg text-[#1E3A5F]">
                  Minor Test Series
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Chapter-wise and topic-wise tests to strengthen weak areas and
                  improve accuracy step by step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= RESULT ANALYSIS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#1E3A5F]">
              Instant Result & Performance Analysis
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mt-10">
              <div className="flex gap-4">
                <FaClock className="text-[#1E3A5F] text-2xl" />
                <p>Time spent per question analysis</p>
              </div>

              <div className="flex gap-4">
                <FaChartLine className="text-[#1E3A5F] text-2xl" />
                <p>Accuracy percentage and improvement tracking</p>
              </div>

              <div className="flex gap-4">
                <FaTrophy className="text-[#1E3A5F] text-2xl" />
                <p>Leaderboard comparison with NEET aspirants</p>
              </div>

              <div className="flex gap-4">
                <FaCheckCircle className="text-[#1E3A5F] text-2xl" />
                <p>Detailed correct vs incorrect answer breakdown</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="py-20 bg-[#f5f9ff]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#1E3A5F]">
              NEET Mock Test Online – FAQs
            </h2>

            <div className="mt-10 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold">
                  How many mock tests should I attempt for NEET?
                </h3>
                <p className="text-sm mt-2">
                  Ideally, attempt 20–30 full syllabus mock tests before NEET,
                  along with regular minor tests.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold">
                  Are RankUp mock tests based on latest NEET pattern?
                </h3>
                <p className="text-sm mt-2">
                  Yes. All RankUp mock tests follow the latest NEET exam pattern
                  and NCERT syllabus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-24 text-center">
          <h2 className="text-3xl font-bold text-[#1E3A5F]">
            Attempt NEET Mock Tests Online with RankUp
          </h2>
          <p className="mt-4 text-gray-700">
            Practice under real exam conditions and improve your NEET rank.
          </p>
        </section>
      </main>
    </>
  );
}
