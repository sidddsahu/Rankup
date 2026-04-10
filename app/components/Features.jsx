
"use client";

import {
  FaBookOpen,
  FaBrain,
  FaChartLine,
  FaCloudDownloadAlt,
  FaListAlt,
  FaLayerGroup,
  FaCheckCircle,
} from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";

/* =======================
   SEO METADATA
======================= */
export const metadata = {
  title:
    "RankUp App Features – NEET Test Series, PYQs, QBank, Flashcards & AI Analytics",
  description:
    "Explore RankUp NEET preparation app features including Major & Minor Test Series, PYQ-based QBank, flashcards, leaderboard, instant results, accuracy analysis and AI-powered performance insights.",
  keywords:
    "neet test series, neet pyq app, neet qbank, neet flashcards, neet online preparation app, neet mock test, neet leaderboard, neet result analysis",
  canonical: "https://www.rankupp.in/features",
};

/* =======================
   COMPONENT
======================= */
export default function Features() {
  const primary = "#295176";

  const features = [
    {
      id: "major-minor-test-series",
      icon: <FaLayerGroup size={26} aria-hidden />,
      title: "Major & Minor Test Series",
      desc: "Full-length NEET mock tests (Major) and topic-wise Minor tests to simulate real exam pressure and improve accuracy.",
    },
    {
      id: "pyq-qbank",
      icon: <FaBrain size={26} aria-hidden />,
      title: "PYQ-Based Smart QBank",
      desc: "Practice NEET previous year questions with NCERT-focused explanations, difficulty filters and instant solutions.",
    },
    {
      id: "flashcards",
      icon: <FaListAlt size={26} aria-hidden />,
      title: "High-Yield Flashcards",
      desc: "Revision flashcards created from repeated NEET PYQs and important NCERT lines for long-term retention.",
    },
    {
      id: "leaderboard",
      icon: <FaChartLine size={26} aria-hidden />,
      title: "Live Leaderboard",
      desc: "Compare your score, rank and accuracy with other NEET aspirants after every test and quiz.",
    },
    {
      id: "result-analysis",
      icon: <FaBookOpen size={26} aria-hidden />,
      title: "Instant Result & Accuracy Analysis",
      desc: "Get detailed test results including time taken, correct vs wrong questions and percentage accuracy.",
    },
    {
      id: "offline-mode",
      icon: <FaCloudDownloadAlt size={26} aria-hidden />,
      title: "Offline Practice Mode",
      desc: "Download important NEET tests, PYQs and flashcards to study without internet.",
    },
  ];

  /* =======================
     STRUCTURED DATA
  ======================= */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.rankupp.in/#org",
        "name": "RankUp",
        "url": "https://www.rankupp.in/",
        "logo": "https://www.rankupp.in/logo.png",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.rankupp.in/#website",
        "url": "https://www.rankupp.in/",
        "name": "RankUp NEET Online Preparation",
        "publisher": { "@id": "https://www.rankupp.in/#org" },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.rankupp.in/#app",
        "name": "RankUp – NEET Preparation App",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Android, iOS, Web",
        "description":
          "RankUp is a NEET online preparation app offering PYQ-based QBank, major & minor test series, flashcards, leaderboard and AI-powered result analytics.",
      },
      {
        "@type": "ItemList",
        "itemListElement": features.map((f, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: f.title,
          description: f.desc,
          url: `https://www.rankupp.in/features#${f.id}`,
        })),
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={metadata.canonical} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <section
        id="features"
        className="relative py-10 bg-gradient-to-br from-white via-[#f3f9ff] to-[#e7f3ff]"
        aria-labelledby="features-heading"
      >
        <div className="relative max-w-6xl mx-auto px-6">
          {/* =======================
              SEO POWER H1
          ======================= */}
          <header className="max-w-3xl mb-14">
            <h1
              id="features-heading"
              className="text-4xl font-extrabold"
              style={{ color: primary }}
            >
              NEET Online Preparation Features Built for Top Ranks
            </h1>

            <p className="text-lg text-gray-600 mt-4">
              RankUp offers PYQ-based test series, smart QBank, flashcards,
              leaderboard and instant result analysis to help NEET aspirants
              score higher with confidence.
            </p>

            {/* SAFE HIDDEN SEO AUTHORITY */}
            <p className="sr-only">
              RankUp NEET preparation app includes major test series, minor tests,
              PYQ-based QBank, flashcards, leaderboard comparison, instant test
              results, time analysis, accuracy percentage and AI-driven
              performance insights for NEET-UG students.
            </p>
          </header>

          {/* =======================
              FEATURES GRID
          ======================= */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <article
                key={f.id}
                id={f.id}
                className="p-6 bg-white/90 shadow-xl rounded-xl border hover:shadow-2xl transition"
              >
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full"
                    style={{ background: primary + "15", color: primary }}
                  >
                    {f.icon}
                  </div>

                  <div>
                    <h2 className="font-bold text-lg" style={{ color: primary }}>
                      {f.title}
                    </h2>
                    <p className="text-sm text-gray-700 mt-2">{f.desc}</p>

                    <div
                      className="mt-4 flex items-center gap-2 text-xs font-semibold"
                      style={{ color: primary }}
                    >
                      <FaCheckCircle size={14} aria-hidden />
                      Included in RankUp App
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* =======================
              RESULT ANALYSIS SECTION
          ======================= */}
          <section className="mt-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3
                className="text-3xl font-extrabold"
                style={{ color: primary }}
              >
                Detailed Test Result & Performance Analysis
              </h3>

              <p className="mt-4 text-gray-700">
                After every NEET test or quiz, RankUp shows detailed results
                including total time taken, correct answers, wrong answers,
                skipped questions and accuracy percentage.
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <FaCheckCircle style={{ color: primary }} />
                  Time spent per question analysis
                </li>
                <li className="flex gap-2">
                  <FaCheckCircle style={{ color: primary }} />
                  Correct vs incorrect answer breakdown
                </li>
                <li className="flex gap-2">
                  <FaCheckCircle style={{ color: primary }} />
                  Accuracy percentage & improvement tracking
                </li>
              </ul>
            </div>

            <aside className="bg-white/90 shadow-2xl rounded-2xl p-6 border max-w-sm mx-auto">
              <Image
                src="/screen.webp"
                alt="RankUp NEET test result showing accuracy, time and score"
                width={468}
                height={804}
                className="w-full h-auto object-contain"
              />
              <p className="text-xs text-gray-500 mt-3 text-center">
                Live test result & performance insights
              </p>
            </aside>
          </section>
        </div>
      </section>
    </>
  );
}
