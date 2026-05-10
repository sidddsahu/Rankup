// import Script from "next/script";
// import Image from "next/image";
// import {
//   FaLayerGroup,
//   FaClock,
//   FaChartLine,
//   FaTrophy,
//   FaCheckCircle,
//   FaBrain,
// } from "react-icons/fa";

// export const metadata = {
//   title:
//     "NEET Mock Test Online 2025 | Full Syllabus Test Series – RankUp",
//   description:
//     "Attempt NEET mock tests online with RankUp. Major & Minor test series, real exam pattern, instant results, accuracy analysis and leaderboard for NEET 2025 aspirants.",
//   keywords:
//     "neet mock test online, neet test series, neet full syllabus test, neet online test free, neet mock test app",
//   alternates: {
//     canonical: "https://www.rankupp.in/neet-mock-test-online",
//   },
// };

// export default function MockTestAuthorityPage() {
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "EducationalOrganization",
//     "name": "RankUp",
//     "url": "https://www.rankupp.in/neet-mock-test-online",
//     "description":
//       "RankUp provides NEET mock tests online with major and minor test series, instant results, accuracy analysis and AI-powered performance insights.",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student",
//     },
//   };

//   return (
//     <>
//       {/* Structured Data */}
//       <Script
//         id="mocktest-jsonld"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />

//       <main className="bg-gradient-to-b from-white to-[#f3f9ff] text-gray-800">

//         {/* ================= HERO ================= */}
//         <section className="max-w-6xl mx-auto px-6 py-24">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E3A5F]">
//             NEET Mock Test Online – Real Exam Practice for 2025
//           </h1>

//           <p className="mt-6 text-lg max-w-3xl">
//             Attempt <strong>NEET mock tests online</strong> designed exactly like
//             the real exam. RankUp offers <strong>major & minor test series</strong>,
//             full syllabus tests, instant results and detailed performance analysis
//             to help you maximize your NEET score.
//           </p>

//           {/* Hidden SEO authority */}
//           <p className="sr-only">
//             RankUp NEET mock test platform provides online test series with real
//             exam interface, time tracking, accuracy percentage, leaderboard
//             comparison and AI-based performance insights for NEET aspirants.
//           </p>
//         </section>

//         {/* ================= WHY MOCK TESTS ================= */}
//         <section className="py-10 bg-white">
//           <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-[#1E3A5F]">
//                 Why NEET Mock Tests Are Essential
//               </h2>

//               <p className="mt-4">
//                 Studying concepts alone is not enough for NEET. Mock tests help
//                 you apply knowledge under time pressure, improve accuracy and
//                 build exam temperament.
//               </p>

//               <ul className="mt-6 space-y-4">
//                 <li className="flex gap-3">
//                   <FaCheckCircle className="text-green-600 mt-1" />
//                   Real NEET exam pattern & difficulty level
//                 </li>
//                 <li className="flex gap-3">
//                   <FaCheckCircle className="text-green-600 mt-1" />
//                   Improve speed and time management
//                 </li>
//                 <li className="flex gap-3">
//                   <FaCheckCircle className="text-green-600 mt-1" />
//                   Identify weak chapters before the exam
//                 </li>
//                 <li className="flex gap-3">
//                   <FaCheckCircle className="text-green-600 mt-1" />
//                   Reduce exam fear and build confidence
//                 </li>
//               </ul>
//             </div>
//  <div className="flex gap-3">
//               <Image
//                 src="/screen1.jpg"
//                 alt="NEET online preparation app with PYQs"
//                 width={180}
//                 height={300}
//                 className="rounded-3xl shadow-2xl w-[180px] md:w-[280px]"
//               />
//               <Image
//                 src="/screen2.webp"
//                 alt="NEET mock tests and analytics screen"
//                 width={180}
//                 height={300}
//                 className="rounded-3xl shadow-2xl w-[180px] md:w-[280px]"
//               />
//             </div>
//           </div>
//         </section>

//         {/* ================= TEST TYPES ================= */}
//         <section className="py-24 bg-gradient-to-br from-[#f5f9ff] to-white">
//           <div className="max-w-6xl mx-auto px-6">
//             <h2 className="text-3xl font-bold text-[#1E3A5F] text-center">
//               Major & Minor NEET Test Series
//             </h2>

//             <div className="grid md:grid-cols-2 gap-12 mt-16">
//               <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
//                 <div className="w-14 h-14 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center mb-5">
//                   <FaLayerGroup />
//                 </div>
//                 <h3 className="font-bold text-lg text-[#1E3A5F]">
//                   Major Test Series
//                 </h3>
//                 <p className="text-sm text-gray-600 mt-2">
//                   Full syllabus NEET mock tests designed exactly like the real
//                   exam to assess your final preparation level.
//                 </p>
//               </div>

//               <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
//                 <div className="w-14 h-14 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center mb-5">
//                   <FaBrain />
//                 </div>
//                 <h3 className="font-bold text-lg text-[#1E3A5F]">
//                   Minor Test Series
//                 </h3>
//                 <p className="text-sm text-gray-600 mt-2">
//                   Chapter-wise and topic-wise tests to strengthen weak areas and
//                   improve accuracy step by step.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ================= RESULT ANALYSIS ================= */}
//         <section className="py-20 bg-white">
//           <div className="max-w-6xl mx-auto px-6">
//             <h2 className="text-3xl font-bold text-[#1E3A5F]">
//               Instant Result & Performance Analysis
//             </h2>

//             <div className="grid md:grid-cols-2 gap-10 mt-10">
//               <div className="flex gap-4">
//                 <FaClock className="text-[#1E3A5F] text-2xl" />
//                 <p>Time spent per question analysis</p>
//               </div>

//               <div className="flex gap-4">
//                 <FaChartLine className="text-[#1E3A5F] text-2xl" />
//                 <p>Accuracy percentage and improvement tracking</p>
//               </div>

//               <div className="flex gap-4">
//                 <FaTrophy className="text-[#1E3A5F] text-2xl" />
//                 <p>Leaderboard comparison with NEET aspirants</p>
//               </div>

//               <div className="flex gap-4">
//                 <FaCheckCircle className="text-[#1E3A5F] text-2xl" />
//                 <p>Detailed correct vs incorrect answer breakdown</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ================= FAQ ================= */}
//         <section className="py-20 bg-[#f5f9ff]">
//           <div className="max-w-5xl mx-auto px-6">
//             <h2 className="text-3xl font-bold text-[#1E3A5F]">
//               NEET Mock Test Online – FAQs
//             </h2>

//             <div className="mt-10 space-y-6">
//               <div className="bg-white p-6 rounded-xl shadow">
//                 <h3 className="font-semibold">
//                   How many mock tests should I attempt for NEET?
//                 </h3>
//                 <p className="text-sm mt-2">
//                   Ideally, attempt 20–30 full syllabus mock tests before NEET,
//                   along with regular minor tests.
//                 </p>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow">
//                 <h3 className="font-semibold">
//                   Are RankUp mock tests based on latest NEET pattern?
//                 </h3>
//                 <p className="text-sm mt-2">
//                   Yes. All RankUp mock tests follow the latest NEET exam pattern
//                   and NCERT syllabus.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ================= CTA ================= */}
//         <section className="py-24 text-center">
//           <h2 className="text-3xl font-bold text-[#1E3A5F]">
//             Attempt NEET Mock Tests Online with RankUp
//           </h2>
//           <p className="mt-4 text-gray-700">
//             Practice under real exam conditions and improve your NEET rank.
//           </p>
//         </section>
//       </main>
//     </>
//   );
// }


// ============================================================
// FILE: app/neet-mock-test-online/page.jsx
// RANKUPP.IN — Full SEO Optimized NEET Mock Test Online Page
// ============================================================

import Link from "next/link";
import Image from "next/image";

// ============================================================
// METADATA — Maximum CTR + Semantic SEO + Rich Snippets
// ============================================================

export const metadata = {
  title: "NEET Mock Test Online 2026 | Free Full Syllabus Test Series — RankUpp",

  description:
    "Attempt free NEET mock tests online 2026 — full syllabus & chapter-wise. Real exam pattern, 180-question format, instant results, accuracy analysis & leaderboard. Trusted by 2L+ NEET aspirants. Start free on RankUpp.",

  keywords: [
    "neet mock test online 2026",
    "neet mock test free 2026",
    "neet online test series 2026",
    "neet full syllabus mock test",
    "neet chapter wise mock test",
    "neet test series online free",
    "neet practice test 2026",
    "neet mock test with answers",
    "best neet mock test online",
    "neet online test with instant results",
    "neet major test series",
    "neet minor test series",
    "neet mock test app",
    "neet full length test online",
    "neet exam practice test 2026",
  ],

  alternates: {
    canonical: "https://www.rankupp.in/neet-mock-test-online",
  },

  openGraph: {
    type: "website",
    url: "https://www.rankupp.in/neet-mock-test-online",
    title: "NEET Mock Test Online 2026 | Free Full Syllabus Test Series — RankUpp",
    description:
      "Free NEET mock tests online 2026 — real exam pattern, instant results, accuracy analysis & leaderboard. Trusted by 2L+ students.",
    siteName: "RankUpp",
    images: [
      {
        url: "https://www.rankupp.in/og/neet-mock-test-online.jpg",
        width: 1200,
        height: 630,
        alt: "NEET Mock Test Online 2026 — Full Syllabus Test Series — RankUpp",
      },
    ],
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    site: "@rankupp_in",
    creator: "@rankupp_in",
    title: "NEET Mock Test Online 2026 | Free Full Syllabus Test Series — RankUpp",
    description:
      "Free NEET mock tests 2026 — real exam pattern, 180 questions, instant results. Start now on RankUpp.",
    images: ["https://www.rankupp.in/og/neet-mock-test-online.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  authors: [{ name: "RankUpp Academic Team", url: "https://www.rankupp.in/about" }],
  creator: "RankUpp",
  publisher: "RankUpp",
  category: "Education",

  other: {
    "theme-color": "#1E3A5F",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "RankUpp NEET Mock Test",
    "application-name": "RankUpp",
    "format-detection": "telephone=no",
    "og:locale:alternate": "hi_IN",
    rating: "general",
    language: "en-IN",
    "geo.region": "IN",
    "geo.placename": "India",
  },
};

// ============================================================
// JSON-LD SCHEMAS — 8 schemas for maximum rich results
// ============================================================

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RankUpp",
  url: "https://www.rankupp.in",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.rankupp.in/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "RankUpp",
  alternateName: "RankUpp NEET Preparation Platform",
  url: "https://www.rankupp.in",
  logo: {
    "@type": "ImageObject",
    url: "https://www.rankupp.in/logo.png",
    width: 200,
    height: 60,
  },
  description:
    "RankUpp is India's trusted NEET preparation platform offering free online mock tests, full syllabus test series, chapter-wise tests, instant results and AI-powered performance analytics for NEET 2026 aspirants.",
  sameAs: [
    "https://www.instagram.com/rankupp_in",
    "https://www.youtube.com/@rankupp",
    "https://twitter.com/rankupp_in",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["English", "Hindi"],
  },
  foundingDate: "2023",
  areaServed: "IN",
  knowsAbout: [
    "NEET Mock Test Online",
    "NEET Test Series",
    "NEET Online Practice",
    "Medical Entrance Exam Preparation",
    "NEET 2026 Preparation",
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.rankupp.in/neet-mock-test-online#webpage",
  url: "https://www.rankupp.in/neet-mock-test-online",
  name: "NEET Mock Test Online 2026 | Free Full Syllabus Test Series — RankUpp",
  description:
    "Free NEET mock tests online 2026 — full syllabus, real exam pattern, instant results, accuracy analysis & leaderboard.",
  inLanguage: "en-IN",
  isPartOf: { "@id": "https://www.rankupp.in/#website" },
  about: { "@type": "Thing", name: "NEET Mock Test Online" },
  datePublished: "2024-01-01",
  dateModified: "2026-01-01",
  breadcrumb: {
    "@id": "https://www.rankupp.in/neet-mock-test-online#breadcrumb",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.rankupp.in/neet-mock-test-online#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.rankupp.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "NEET Preparation",
      item: "https://www.rankupp.in/neet-preparation",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "NEET Mock Test Online",
      item: "https://www.rankupp.in/neet-mock-test-online",
    },
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "NEET Mock Test Online 2026 — Full Syllabus Test Series",
  description:
    "Complete NEET mock test series for 2026 — major and minor tests, real exam pattern, 180 questions, instant results, and performance analytics.",
  provider: {
    "@type": "Organization",
    name: "RankUpp",
    sameAs: "https://www.rankupp.in",
  },
  url: "https://www.rankupp.in/neet-mock-test-online",
  courseMode: "online",
  educationalLevel: "Higher Secondary",
  inLanguage: "en-IN",
  isAccessibleForFree: true,
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "NEET Aspirants, Class 11-12 Students",
  },
  teaches: [
    "NEET exam time management",
    "Full syllabus Biology, Physics, Chemistry practice",
    "Accuracy improvement under exam conditions",
    "Performance analysis and weak area identification",
    "NEET question pattern recognition",
  ],
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "RankUpp NEET Mock Test",
  applicationCategory: "EducationApplication",
  operatingSystem: "Android, iOS, Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  description:
    "Free NEET mock test app with full syllabus tests, chapter-wise tests, instant results, accuracy analysis, and leaderboard for NEET 2026 aspirants.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "12400",
    bestRating: "5",
    worstRating: "1",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NEET Mock Test Series 2026 — Available Tests on RankUpp",
  description: "Complete list of NEET mock tests available on RankUpp for 2026 preparation",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "NEET Full Syllabus Major Mock Test",
      url: "https://www.rankupp.in/neet-mock-test-online",
      description: "180-question full syllabus NEET mock test — Physics, Chemistry, Biology in real exam format with 3-hour timer.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "NEET Biology Chapter-Wise Mock Test",
      url: "https://www.rankupp.in/neet-biology",
      description: "Chapter-specific Biology mock tests for targeted weak area practice — NCERT-based questions.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "NEET Physics Chapter-Wise Mock Test",
      url: "https://www.rankupp.in/neet-physics",
      description: "Chapter-wise Physics mock tests covering Mechanics, Thermodynamics, Optics, and Modern Physics.",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "NEET Chemistry Chapter-Wise Mock Test",
      url: "https://www.rankupp.in/neet-chemistry",
      description: "Chapter-wise Chemistry mock tests for Physical, Organic, and Inorganic Chemistry.",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "NEET Minor Test Series",
      url: "https://www.rankupp.in/neet-mock-test-online",
      description: "Topic-specific minor tests to strengthen individual concepts before full mock test attempts.",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "NEET PYQ-Based Practice Test",
      url: "https://www.rankupp.in/neet-pyq",
      description: "Practice tests built from NEET previous year questions — year-wise and chapter-wise formats.",
    },
  ],
};

const faqSchemaData = [
  {
    q: "How many NEET mock tests should I attempt before the exam?",
    a: "For NEET 2026, ideally attempt 25–35 full syllabus major mock tests across your preparation period, along with 50–80 chapter-wise minor tests. The exact breakdown recommended by NEET toppers is: 1–2 diagnostic tests at the start to identify weak areas, 15–20 chapter-wise minor tests per subject during the learning phase, and 20–30 full syllabus major tests in the final 3–4 months before NEET. Quality matters as much as quantity — reviewing every test thoroughly, including all incorrect answers, is as important as attempting the next test.",
  },
  {
    q: "Are RankUpp NEET mock tests based on the latest NEET 2026 pattern?",
    a: "Yes. All RankUpp mock tests are designed to match the latest NEET exam pattern — 180 questions, 720 marks total, 200 questions in the paper with a choice to attempt 180, comprising Physics (45+5 questions), Chemistry (45+5 questions), Botany (45+5 questions), and Zoology (45+5 questions). The 3-hour timer, marking scheme (+4 for correct, -1 for incorrect), and subject-section structure all mirror the actual NTA NEET examination interface. Tests are updated based on NTA's official NEET notifications for 2026.",
  },
  {
    q: "What is the difference between major and minor NEET test series?",
    a: "Major NEET mock tests are full-length, full-syllabus tests that simulate the complete NEET exam — 180 questions across all three subjects in a single 3-hour session. These assess your overall readiness and rank potential. Minor NEET tests are chapter-wise or topic-wise shorter tests (20–40 questions) that focus on one specific area of the syllabus. The recommended strategy is to use minor tests regularly during the study phase to master individual chapters, and shift to major full-length tests in the last 3–4 months for exam temperament building.",
  },
  {
    q: "Is NEET mock test practice really effective for improving rank?",
    a: "Yes — consistent mock test practice is the single most effective activity for improving NEET rank after concept learning. Research on NEET toppers shows that students who attempt 30+ full mock tests score on average 45–60 marks higher than students who only study without timed testing. The reasons are clear: mock tests build time management skills (averaging 1 minute per question), identify weak chapters before the real exam, reduce exam anxiety through familiarity, train the brain to perform under pressure, and provide accurate practice data on which to base study decisions.",
  },
  {
    q: "Can I attempt NEET mock tests for free on RankUpp?",
    a: "Yes, RankUpp offers free access to a substantial portion of its NEET mock test library. Free users can attempt chapter-wise minor tests, select full-length major tests, and access instant result summaries. Premium plans unlock the complete test series library, detailed answer explanations, AI-powered performance analytics, weak chapter identification reports, and the national leaderboard comparison feature. Free tests are a genuine representation of the platform quality — not limited or simplified versions.",
  },
  {
    q: "How should I analyse my NEET mock test results?",
    a: "Effective NEET mock test analysis follows a structured process: (1) Calculate your total score and compare against your target rank's cutoff score. (2) Subject-wise breakdown — identify which subject lost you the most marks. (3) Chapter-wise accuracy review — which chapters had below 60% accuracy. (4) Time analysis — which sections consumed too much time. (5) Error classification — mark each wrong answer as 'knowledge gap' (didn't know the concept) or 'careless mistake' (knew but chose wrong). (6) For knowledge gaps, immediately revise the relevant NCERT section. This analysis process, done seriously after every mock test, produces more improvement than any additional study session.",
  },
  {
    q: "When should I start NEET mock tests in my preparation?",
    a: "Start NEET minor chapter-wise mock tests as soon as you finish each chapter — even in Class 11. There is no benefit to waiting until the entire syllabus is complete. For full-length major mock tests, begin as soon as you have covered at least 70% of the NEET syllabus — typically 4–5 months before the exam. The most common mistake is attempting full mock tests too late (1–2 months before NEET), leaving insufficient time to act on the results. Students who start full mock tests 4+ months before NEET have time to identify and fix weak areas, which is the entire point of the exercise.",
  },
  {
    q: "What score should I target in NEET mock tests to get into a government medical college?",
    a: "For a government MBBS seat in India through NEET 2026, a score of 550+ (out of 720) is generally required for the general category, though top government colleges (AIIMS Delhi, Maulana Azad, Grant Medical) require 680–700+. As a benchmark in mock tests: consistently scoring 500–540 in mock tests typically translates to 520–570 in the actual NEET (many students perform 10–30 marks better on the real exam due to reduced anxiety). Target 560–580 in your mock tests consistently if your goal is a government MBBS seat. Track your mock test scores weekly and look for a consistent upward trend rather than individual high scores.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSchemaData.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ============================================================
// PAGE DATA
// ============================================================

const testTypes = [
  {
    id: "major",
    icon: "📋",
    title: "Major Test Series",
    subtitle: "Full Syllabus Mock Tests",
    badge: "Most Popular",
    badgeColor: "bg-blue-100 text-blue-800",
    description:
      "Complete 180-question, 3-hour NEET mock tests designed exactly like the real NTA exam. Physics + Chemistry + Biology in one session with real-time timer and instant marking.",
    features: [
      "180 questions — real NEET format",
      "3-hour countdown timer",
      "+4 / –1 marking scheme",
      "Instant score and rank estimate",
      "Subject-wise accuracy breakdown",
      "National leaderboard comparison",
    ],
    href: "/neet-mock-test-online",
    cta: "Attempt Major Test",
  },
  {
    id: "minor",
    icon: "📝",
    title: "Minor Test Series",
    subtitle: "Chapter & Topic-Wise Tests",
    badge: "Best for Revision",
    badgeColor: "bg-green-100 text-green-800",
    description:
      "Focused 20–45 question chapter-wise tests to master individual topics and identify weak areas before attempting full mock tests. Complete one chapter, test it immediately.",
    features: [
      "20–45 questions per chapter",
      "All 38 NEET Biology chapters",
      "Physics and Chemistry chapters",
      "Instant correct/incorrect feedback",
      "NCERT source tag on each question",
      "Weakness identification report",
    ],
    href: "/neet-biology",
    cta: "Start Chapter Test",
  },
];

const analysisFeatures = [
  {
    icon: "⏱️",
    title: "Time Per Question Analysis",
    desc: "See exactly how long you spent on each question. Identify where you're losing time and where you can afford to move faster.",
  },
  {
    icon: "📊",
    title: "Accuracy Tracking",
    desc: "Track accuracy percentage by subject, chapter, and question difficulty. Watch your improvement over successive mock tests.",
  },
  {
    icon: "🏆",
    title: "National Leaderboard",
    desc: "Compare your score with 2L+ NEET aspirants across India. Understand exactly where you stand before the real exam.",
  },
  {
    icon: "✅",
    title: "Answer Breakdown",
    desc: "Correct vs incorrect vs unattempted analysis with detailed NCERT-referenced explanations for every wrong answer.",
  },
  {
    icon: "📉",
    title: "Weak Chapter Report",
    desc: "Automatically identifies chapters where your accuracy falls below 60% — so you know exactly where to focus next.",
  },
  {
    icon: "📈",
    title: "Score Trend Graph",
    desc: "Visual representation of your mock test scores over time. The trend line is more important than any single score.",
  },
];

const stats = [
  { value: "2L+", label: "Students Practicing" },
  { value: "50+", label: "Mock Tests Available" },
  { value: "4.8★", label: "App Rating" },
  { value: "720", label: "Max Score Format" },
];

const whyMockTests = [
  {
    step: "01",
    title: "Builds Exam Temperament",
    desc: "Timed practice under real conditions eliminates exam anxiety. Students who attempt 30+ mocks report significantly lower stress on the actual NEET day.",
  },
  {
    step: "02",
    title: "Reveals True Weak Areas",
    desc: "You cannot identify weak chapters by studying alone. Mock tests expose which chapters cost you marks under time pressure — which is the only metric that matters.",
  },
  {
    step: "03",
    title: "Trains Time Management",
    desc: "NEET gives 1 minute per question. Mock test practice trains your brain to allocate time correctly across Physics, Chemistry, and Biology automatically.",
  },
  {
    step: "04",
    title: "Improves Accuracy",
    desc: "Reviewing wrong answers after every mock test and tracing them back to NCERT sources is the fastest known method for improving Biology accuracy.",
  },
  {
    step: "05",
    title: "Predicts Real NEET Score",
    desc: "Students who consistently attempt 25+ full mock tests develop a reliable sense of their actual NEET score range — removing uncertainty and enabling targeted revision.",
  },
  {
    step: "06",
    title: "Reinforces Concepts",
    desc: "Attempting a question on a concept cements it far more effectively than rereading the NCERT paragraph. Mock tests are active recall at scale.",
  },
];

const scoreTargets = [
  { score: "680–720", college: "AIIMS Delhi, Top Government MBBS", color: "bg-green-50 border-green-200 text-green-800" },
  { score: "620–680", college: "State Top Government Colleges", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { score: "550–620", college: "Government MBBS (Most States)", color: "bg-amber-50 border-amber-200 text-amber-800" },
  { score: "470–550", college: "Private MBBS / BDS Government", color: "bg-orange-50 border-orange-200 text-orange-800" },
];

const relatedLinks = [
  { href: "/neet-biology-ncert-questions", label: "NCERT Line-by-Line Biology Questions" },
  { href: "/neet-biology-important-questions", label: "NEET Biology Important Questions" },
  { href: "/neet-pyq", label: "NEET Previous Year Questions" },
  { href: "/neet-biology", label: "NEET Biology Hub" },
  { href: "/neet-physics", label: "NEET Physics Practice" },
  { href: "/neet-chemistry", label: "NEET Chemistry Practice" },
  { href: "/neet-biology/human-physiology", label: "Human Physiology Questions" },
  { href: "/neet-biology/genetics-evolution", label: "Genetics & Evolution Questions" },
  { href: "/neet-cutoff", label: "NEET Cutoff 2026" },
  { href: "/neet-syllabus", label: "NEET Syllabus 2026" },
  { href: "/neet-preparation-tips", label: "NEET Preparation Strategy" },
  { href: "/neet-biology/ecology", label: "Ecology Questions" },
];

// ============================================================
// PAGE COMPONENT
// ============================================================

export default function MockTestPage() {
  return (
    <>
      {/* ── JSON-LD SCHEMAS ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b mt-20 from-white to-[#f3f9ff] text-gray-800">

        {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="px-4 md:px-6 py-3 max-w-7xl mx-auto">
          <ol
            className="flex flex-wrap items-center gap-1 text-sm text-gray-500"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            {[
              { href: "/", label: "Home", position: 1 },
              { href: "/neet-preparation", label: "NEET Preparation", position: 2 },
              { href: "/neet-mock-test-online", label: "NEET Mock Test Online", position: 3 },
            ].map((crumb, i, arr) => (
              <li
                key={crumb.href}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className="flex items-center gap-1"
              >
                {i < arr.length - 1 ? (
                  <>
                    <Link
                      href={crumb.href}
                      itemProp="item"
                      className="hover:text-[#1E3A5F] transition-colors"
                    >
                      <span itemProp="name">{crumb.label}</span>
                    </Link>
                    <span aria-hidden="true" className="text-gray-400">›</span>
                  </>
                ) : (
                  <span itemProp="name" aria-current="page" className="text-[#1E3A5F] font-medium">
                    {crumb.label}
                  </span>
                )}
                <meta itemProp="position" content={String(crumb.position)} />
              </li>
            ))}
          </ol>
        </nav>

        {/* ── HERO ── */}
        <section
          aria-labelledby="hero-heading"
          className="max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-14"
        >
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              <span aria-hidden="true">🏆</span>
              <span>India's Most Trusted NEET Mock Test Platform — 2L+ Students</span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E3A5F] leading-tight"
            >
              NEET Mock Test Online 2026 —{" "}
              <span className="text-blue-500">Free Full Syllabus</span>{" "}
              Test Series
            </h1>

            <p className="mt-6 text-lg md:text-xl max-w-3xl text-gray-700 leading-relaxed">
              Attempt NEET mock tests in a real exam interface — 180 questions,
              3-hour timer, +4/–1 marking, instant results, and detailed
              accuracy analysis. Major and minor test series for complete NEET
              2026 preparation.
            </p>

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true" className="text-green-500">✅</span> Real NTA exam pattern
              </span>
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true" className="text-green-500">✅</span> Instant results & analysis
              </span>
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true" className="text-green-500">✅</span> National leaderboard
              </span>
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true" className="text-green-500">✅</span> Free to start
              </span>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/neet-mock-test-online"
                className="inline-flex items-center justify-center gap-2 bg-[#1E3A5F] text-white px-8 py-4 rounded-xl shadow-lg hover:bg-[#162d4a] hover:shadow-xl hover:scale-105 transition-all font-bold text-lg"
                aria-label="Attempt free NEET full syllabus mock test online"
              >
                🚀 Attempt Full Mock Test Free
              </Link>
              <Link
                href="/neet-pyq"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#1E3A5F] text-[#1E3A5F] px-8 py-4 rounded-xl hover:bg-blue-50 transition-all font-semibold text-lg"
                aria-label="Practice NEET previous year questions"
              >
                📋 NEET PYQ Practice
              </Link>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section aria-label="Platform statistics" className="bg-[#1E3A5F] text-white py-8">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-extrabold">{stat.value}</p>
                <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY MOCK TESTS SECTION ── */}
        <section
          aria-labelledby="why-heading"
          className="py-20 bg-white"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-14 items-center">

            {/* Left: Content */}
            <div>
              <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-6">
                Why NEET Mock Tests Are Non-Negotiable for NEET 2026
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Every NEET topper has one habit in common: consistent, disciplined
                mock test practice. Studying concepts builds your knowledge. Mock
                tests build your ability to use that knowledge under time pressure
                — which is the only thing that matters inside the exam hall.
              </p>
              <ul className="space-y-4">
                {[
                  "Simulates real NTA NEET exam conditions exactly",
                  "Builds the 1-minute-per-question discipline required",
                  "Identifies weak chapters before the actual exam",
                  "Reduces exam anxiety through repeated familiarity",
                  "Provides accurate data to guide study decisions",
                  "Leaderboard shows real rank among India's NEET aspirants",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-500 text-lg mt-0.5 shrink-0" aria-hidden="true">✅</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: App Screenshots */}
            <div className="flex justify-center gap-4" aria-label="RankUpp app screenshots">
              <Image
                src="/screen1.jpg"
                alt="RankUpp NEET mock test app showing question interface with timer and marking"
                width={180}
                height={360}
                className="rounded-3xl shadow-2xl object-cover"
                loading="lazy"
              />
              <Image
                src="/screen2.webp"
                alt="RankUpp NEET mock test performance analysis screen showing accuracy and score trends"
                width={180}
                height={360}
                className="rounded-3xl shadow-2xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ── TEST TYPES ── */}
        <section
          aria-labelledby="test-types-heading"
          className="py-20 bg-gradient-to-br from-[#f5f9ff] to-white"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2
                id="test-types-heading"
                className="text-3xl md:text-4xl font-bold text-[#1E3A5F]"
              >
                Major & Minor NEET Test Series — What's the Difference?
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                A complete two-tier system designed around how NEET toppers
                actually prepare — chapter mastery first, full-length simulation second.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {testTypes.map((test) => (
                <article
                  key={test.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                  aria-label={`${test.title}: ${test.subtitle}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center text-2xl shrink-0">
                      {test.icon}
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${test.badgeColor}`}>
                      {test.badge}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-xl text-[#1E3A5F] mb-1">
                    {test.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mb-4">{test.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {test.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {test.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-green-500 shrink-0" aria-hidden="true">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={test.href}
                    className="inline-flex items-center justify-center w-full gap-2 bg-[#1E3A5F] text-white py-3 rounded-xl font-semibold hover:bg-[#162d4a] transition-colors"
                    aria-label={test.cta}
                  >
                    {test.cta} →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── ANALYSIS FEATURES ── */}
        <section
          aria-labelledby="analysis-heading"
          className="py-20 bg-white"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2
                id="analysis-heading"
                className="text-3xl md:text-4xl font-bold text-[#1E3A5F]"
              >
                Instant Results & Deep Performance Analysis
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                The test result is only the beginning. RankUpp's analysis tools
                turn every mock test into a targeted study plan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analysisFeatures.map((feat) => (
                <div
                  key={feat.title}
                  className="bg-[#f5f9ff] p-6 rounded-2xl border border-blue-50 hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl mb-4 block" role="img" aria-label={feat.title}>
                    {feat.icon}
                  </span>
                  <h3 className="font-bold text-[#1E3A5F] text-lg mb-2">{feat.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY SECTION — 6-STEP ── */}
        <section
          aria-labelledby="strategy-heading"
          className="py-20 bg-gradient-to-br from-[#f5f9ff] to-white"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <h2
                id="strategy-heading"
                className="text-3xl md:text-4xl font-bold text-[#1E3A5F]"
              >
                6 Reasons Mock Tests Are the Fastest Path to a High NEET Rank
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyMockTests.map((item) => (
                <div
                  key={item.step}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-4xl font-black text-blue-100 block mb-3">
                    {item.step}
                  </span>
                  <h3 className="font-bold text-lg text-[#1E3A5F] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO CONTENT ── */}
        <section
          aria-labelledby="seo-content-heading"
          className="max-w-4xl mx-auto px-4 md:px-6 py-16"
        >
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <h2
              id="seo-content-heading"
              className="text-3xl font-bold text-[#1E3A5F] mb-6"
            >
              NEET Mock Test Online 2026: Complete Guide to Test Series Strategy
            </h2>

            <p className="mb-5">
              In every NEET cycle, the students who improve their scores most
              dramatically in the final three months are almost always the ones
              who shifted from passive studying to active mock test practice.
              The data is consistent: aspirants who attempt 25 or more full
              syllabus mock tests before NEET score significantly higher than
              equally knowledgeable peers who skipped structured test practice.
              The gap is not random — it is the direct result of what mock tests
              build that studying alone cannot.
            </p>

            <p className="mb-5">
              NEET is a time-constrained examination. You have 180 minutes for
              180 questions — exactly one minute per question on average. But
              the distribution is not uniform: Biology questions should take
              30–40 seconds each, while Physics numericals can take 90 seconds.
              Developing this internal time calibration is not something that
              happens from reading NCERT. It only comes from repeated timed
              practice, which is precisely what a structured mock test series
              provides.
            </p>

            <h3 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">
              How RankUpp NEET Mock Tests Mirror the Real NTA Exam
            </h3>

            <p className="mb-5">
              RankUpp's full-length major mock tests are engineered to be
              functionally indistinguishable from the actual NTA NEET interface.
              The question distribution — Physics Section A (35 questions) +
              Section B (15 questions, attempt any 10), Chemistry Section A
              (35) + Section B (15, attempt any 10), Botany Section A (35) +
              Section B (15, attempt any 10), Zoology Section A (35) + Section
              B (15, attempt any 10) — matches the current NTA pattern exactly.
              The marking scheme of +4 for correct and –1 for incorrect answers
              is applied in real time. The on-screen calculator, question
              palette, and flag-for-review system all mirror the actual exam
              interface.
            </p>

            <p className="mb-5">
              This interface familiarity matters more than most students
              appreciate. On exam day, students who have practiced in a
              similar interface navigate it automatically — they do not waste
              cognitive bandwidth on "how do I flag this question" or "where
              is the section timer." That cognitive bandwidth goes directly
              toward answering questions correctly.
            </p>

            <h3 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">
              NEET Mock Test Score Targets: What You Need for Government MBBS
            </h3>

            <p className="mb-6">
              Understanding your target score before you begin mock testing
              is essential — it transforms abstract "practice" into a
              concrete, measurable goal. The table below provides benchmark
              scores based on NEET 2024 cutoff data and expected 2026 trends:
            </p>

            <div
              className="grid gap-3 mb-8"
              role="list"
              aria-label="NEET score targets for different college types"
            >
              {scoreTargets.map((target) => (
                <div
                  key={target.score}
                  role="listitem"
                  className={`p-4 rounded-xl border-2 flex items-center justify-between ${target.color}`}
                >
                  <span className="font-bold text-lg">{target.score}</span>
                  <span className="text-sm font-medium text-right">{target.college}</span>
                </div>
              ))}
            </div>

            <p className="mb-5">
              When tracking your mock test scores, look for a consistent
              upward trend over 8–10 consecutive tests rather than focusing
              on any single result. A single high score on an easy mock test
              is far less informative than a steady improvement from 480 to
              560 across 15 tests. The trend is the signal. Individual scores
              are noise.
            </p>

            <h3 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">
              The Right Mock Test Schedule for NEET 2026
            </h3>

            <p className="mb-5">
              The most effective NEET mock test schedule depends on where
              you are in your preparation. In the early preparation phase
              (more than 6 months before NEET), use chapter-wise minor tests
              immediately after completing each chapter. Do not wait until
              you have finished the whole syllabus. In the middle phase
              (3–6 months before NEET), attempt one full-length major mock
              test every 10–12 days, spending at least 2 hours analyzing
              each result. In the final phase (last 3 months), increase to
              one full mock test every 5–7 days, plus daily chapter tests
              for weak areas identified in the major tests.
            </p>

            <p className="mb-5">
              The analysis session after each mock test is at least as
              important as the test itself. Most improvement does not happen
              during the test — it happens in the review session when wrong
              answers are traced back to their NCERT sources and weak concepts
              are re-studied. Students who skip the review phase gain very
              little from mock testing, regardless of how many tests they attempt.
            </p>
          </div>
        </section>

        {/* ── EEAT TRUST SECTION ── */}
        <section
          aria-labelledby="trust-heading"
          className="max-w-4xl mx-auto px-4 md:px-6 py-6 pb-16"
        >
          <div className="bg-gradient-to-br from-[#1E3A5F] to-[#162d4a] rounded-3xl p-8 md:p-12 text-white">
            <h2 id="trust-heading" className="text-2xl md:text-3xl font-bold mb-6">
              Why 2 Lakh+ NEET Aspirants Choose RankUpp for Mock Tests
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Exact NTA Pattern",
                  desc: "Every mock test mirrors the current NTA NEET interface, question distribution, and marking scheme. No surprises on exam day.",
                },
                {
                  icon: "📊",
                  title: "Actionable Analytics",
                  desc: "Time-per-question analysis, accuracy by chapter, weak area identification — data that converts into a specific study plan.",
                },
                {
                  icon: "🏆",
                  title: "Expert-Designed Tests",
                  desc: "Questions designed by NEET 700+ scorers and faculty with 10+ years of NEET coaching experience. Quality over quantity.",
                },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <span className="text-3xl" role="img" aria-label={item.title}>{item.icon}</span>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-blue-500">
              <p className="text-blue-100 text-sm leading-relaxed">
                <strong className="text-white">Disclaimer:</strong> RankUpp is an independent
                educational platform and is not affiliated with NTA or any official NEET
                authority. NEET is conducted by the National Testing Agency (NTA),
                Ministry of Education, Government of India.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ── */}
        <section
          aria-labelledby="faq-heading"
          className="px-4 md:px-6 py-16 max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-[#1E3A5F]">
              NEET Mock Test Online — Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600">
              Everything NEET aspirants ask about mock test strategy and preparation
            </p>
          </div>

          <div className="space-y-4">
            {faqSchemaData.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm group"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-semibold text-gray-900 text-left pr-4">{faq.q}</h3>
                  <span
                    className="text-[#1E3A5F] text-xl shrink-0 group-open:rotate-45 transition-transform"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── RELATED INTERNAL LINKS ── */}
        <section aria-labelledby="related-links-heading" className="bg-gray-50 py-12 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2
              id="related-links-heading"
              className="text-xl font-bold text-gray-900 mb-6 text-center"
            >
              Related NEET Preparation Resources
            </h2>
            <nav aria-label="Related NEET resources">
              <ul className="flex flex-wrap justify-center gap-3">
                {relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block bg-white border border-gray-200 text-gray-700 hover:text-[#1E3A5F] hover:border-blue-200 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section
          aria-labelledby="final-cta-heading"
          className="px-4 md:px-6 py-20 text-center bg-gradient-to-b from-white to-[#f3f9ff]"
        >
          <h2 id="final-cta-heading" className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
            Start Your NEET 2026 Mock Test Practice Today
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg">
            Join 2 lakh+ NEET aspirants who train on RankUpp's full-syllabus
            mock tests. Real exam interface. Free to start. No account required
            for the first test.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/neet-mock-test-online"
              className="inline-flex items-center justify-center gap-2 bg-[#1E3A5F] text-white px-10 py-4 rounded-xl shadow-lg hover:bg-[#162d4a] hover:shadow-xl hover:scale-105 transition-all font-bold text-lg"
              aria-label="Attempt free NEET full syllabus mock test on RankUpp"
            >
              🚀 Attempt Full Mock Test Free
            </Link>
            <Link
              href="/neet-biology-ncert-questions"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 hover:border-[#1E3A5F] hover:text-[#1E3A5F] px-10 py-4 rounded-xl transition-all font-semibold text-lg"
              aria-label="Practice NCERT line-by-line Biology questions"
            >
              📖 NCERT Biology Questions
            </Link>
          </div>
        </section>

        {/* ── STICKY CTA ── */}
        <div
          className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-50 border-t border-gray-100"
          role="complementary"
          aria-label="Quick access mock test CTA"
        >
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-900">NEET Mock Test Online 2026</p>
              <p className="text-xs text-gray-500">Full syllabus · Real exam pattern · Free</p>
            </div>
            <Link
              href="/neet-mock-test-online"
              className="w-full sm:w-auto text-center bg-[#1E3A5F] text-white px-8 py-3 rounded-xl shadow hover:scale-105 transition-all font-bold"
              aria-label="Start free NEET mock test now"
            >
              🔥 Start Mock Test — Free
            </Link>
          </div>
        </div>

        {/* Bottom padding for sticky CTA */}
        <div className="h-20" aria-hidden="true" />
      </div>
    </>
  );
}