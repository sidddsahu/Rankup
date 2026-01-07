
// "use client";

// import {
//   FaBookOpen,
//   FaBrain,
//   FaChartLine,
//   FaCloudDownloadAlt,
//   FaListAlt,
//   FaLayerGroup,
//   FaCheckCircle,
//   FaClipboardList,
// } from "react-icons/fa";
// import Head from "next/head";
// import Image from "next/image";

// // Advanced SEO + Accessibility enhanced Features Section (Next.js + React)
// // - Semantic HTML (article, header)
// // - Canonical, OG, Twitter, keywords, alternates
// // - Structured data: Organization, WebSite, BreadcrumbList, SoftwareApplication, ItemList
// // - Optimized Image usage (next/image) with meaningful alt text
// // - ARIA labels and roles for assistive tech

// export const metadata = {
//   title:
//     "RankUp Features — NEET-UG Test Series, Flashcards & AI Analytics | RankUp App",
//   description:
//     "RankUp provides test series, smart QBank, flashcards, AI performance analytics and an offline mode to help NEET-UG aspirants score higher.",
//   keywords:
//     "RankUp, NEET-UG app, NEET preparation, flashcards, smart QBank, mock tests, AI analytics, offline study",
//   canonical: "https://www.rankupp.in/features",
// };

// export default function Features() {
//   const primary = "#295176";

//   const features = [
//     {
//       id: "major-minor-test-series",
//       icon: <FaLayerGroup size={26} aria-hidden />,
//       title: "Major & Minor Test-Series",
//       desc: "Full-length mock tests and micro-tests to strengthen weak topics and simulate exam conditions.",
//     },
//     {
//       id: "important-topics",
//       icon: <FaBookOpen size={26} aria-hidden />,
//       title: "A–Z Important Topics",
//       desc: "High-yield, syllabus-mapped flashcards for faster and focused revision.",
//     },
//     {
//       id: "flashcards",
//       icon: <FaListAlt size={26} aria-hidden />,
//       title: "Flashcards",
//       desc: "Topic-wise curated flashcard sets designed specifically for NEET-UG retention.",
//     },
//     {
//       id: "smart-qbank",
//       icon: <FaBrain size={26} aria-hidden />,
//       title: "Smart QBank",
//       desc: "Practice 20,000+ questions with instant explanations, difficulty filters and performance tracking.",
//     },
//     {
//       id: "ai-analytics",
//       icon: <FaChartLine size={26} aria-hidden />,
//       title: "AI Performance Analytics",
//       desc: "Rank prediction, topic-wise strengths & weaknesses, and improvement trend graphs.",
//     },
//     {
//       id: "offline-mode",
//       icon: <FaCloudDownloadAlt size={26} aria-hidden />,
//       title: "Offline Mode",
//       desc: "Download important packs and practice tests for uninterrupted offline revision.",
//     },
//   ];

//   // JSON-LD Structured Data (Organization, WebSite, BreadcrumbList, SoftwareApplication, ItemList)
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "Organization",
//         "@id": "https://www.rankupp.in/#org",
//         "name": "RankUp",
//         "url": "https://www.rankupp.in/",
//         "logo": "https://www.rankupp.in/logo.png",
//         "sameAs": [
//           "https://www.facebook.com/yourpage",
//           "https://twitter.com/yourhandle",
//           "https://www.instagram.com/yourhandle"
//         ]
//       },
//       {
//         "@type": "WebSite",
//         "@id": "https://www.rankupp.in/#website",
//         "url": "https://www.rankupp.in/",
//         "name": "RankUp",
//         "publisher": { "@id": "https://www.rankupp.in/#org" },
//         "potentialAction": {
//           "@type": "SearchAction",
//           "target": "https://www.rankupp.in/search?q={search_term_string}",
//           "query-input": "required name=search_term_string"
//         }
//       },
//       {
//         "@type": "BreadcrumbList",
//         "@id": "https://www.rankupp.in/features#breadcrumb",
//         "itemListElement": [
//           { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rankupp.in/" },
//           { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://www.rankupp.in/features" }
//         ]
//       },
//       {
//         "@type": "SoftwareApplication",
//         "@id": "https://www.rankupp.in/#app",
//         "name": "RankUp",
//         "operatingSystem": "ANDROID, iOS, Web",
//         "applicationCategory": "Education",
//         "url": "https://www.rankupp.in/",
//         "image": "https://www.rankupp.in/og-features.png",
//         "description": "NEET-UG preparation app with flashcards, QBank, test series and AI analytics.",
//         "aggregateRating": {
//           "@type": "AggregateRating",
//           "ratingValue": "4.7",
//           "reviewCount": "3421"
//         }
//       },
//       {
//         "@type": "ItemList",
//         "@id": "https://www.rankupp.in/features#list",
//         "itemListElement": features.map((f, idx) => ({
//           "@type": "ListItem",
//           position: idx + 1,
//           name: f.title,
//           url: `https://www.rankupp.in/features#${f.id}`,
//           description: f.desc,
//         }))
//       }
//     ]
//   };

//   return (
//     <>
//       <Head>
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//         <meta name="keywords" content={metadata.keywords} />
//         <link rel="canonical" href={metadata.canonical} />

//         {/* Open Graph */}
//         <meta property="og:site_name" content="RankUp" />
//         <meta property="og:title" content={metadata.title} />
//         <meta property="og:description" content={metadata.description} />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://www.rankupp.in/features" />
//         <meta property="og:image" content="https://www.rankupp.in/og-features.png" />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={metadata.title} />
//         <meta name="twitter:description" content={metadata.description} />
//         <meta name="twitter:image" content="https://www.rankupp.in/og-features.png" />

//         {/* Mobile & Performance hints */}
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="theme-color" content={primary} />

//         {/* Preconnect to common CDNs if used (replace with your CDN) */}
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

//         {/* Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//         />
//       </Head>

//       <section id="feature"
//         className="relative py-10 bg-gradient-to-br from-white via-[#f3f9ff] to-[#e7f3ff] overflow-hidden"
//         aria-labelledby="features-heading"
//         role="region"
//       >
//         {/* Decorative Background (non-intrusive) */}
//         <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
//           <div className="absolute w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(41,81,118,0.25),transparent_70%)] -top-40 -left-40 blur-3xl" />
//           <svg className="absolute bottom-0 right-0 w-[550px] opacity-40" viewBox="0 0 500 500" fill="none" aria-hidden>
//             <path
//               d="M0 300 C150 250 200 350 260 330 C310 310 330 260 380 275 C430 290 470 260 500 270"
//               stroke={primary}
//               strokeWidth="3"
//               strokeLinecap="round"
//               strokeDasharray="10 12"
//             />
//           </svg>
//           <div className="absolute w-[350px] h-[350px] bg-blue-200/30 rounded-full blur-2xl top-20 right-20" />
//         </div>

//         <div className="relative max-w-6xl mx-auto px-6">
//           <header className="max-w-3xl mb-14">
//             <h1 id="features-heading" className="text-4xl font-extrabold leading-snug drop-shadow-sm" style={{ color: primary }}>
//               Everything You Need to Crack NEET-UG
//               <span className="text-gray-800"> — Inside One App</span>
//             </h1>

//             <p className="text-lg text-gray-600 mt-4">
//               RankUp brings test-series, smart QBanks, flashcards and AI analytics — built to boost your NEET-UG score faster.
//             </p>
//           </header>

//           {/* Features Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((f, i) => (
//               <article
//                 id={f.id}
//                 key={f.id}
//                 className="p-6 bg-white/90 backdrop-blur-xl shadow-xl rounded-xl border border-white/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
//                 aria-labelledby={`${f.id}-title`}
//                 tabIndex={0}
//                 itemScope
//                 itemType="https://schema.org/Service"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-full flex items-center justify-center mb-0 shadow-md" style={{ background: primary + "15", color: primary }}>
//                     {/* Icon is decorative — aria-hidden true */}
//                     {f.icon}
//                   </div>

//                   <div>
//                     <h2 id={`${f.id}-title`} itemProp="name" className="font-bold text-lg" style={{ color: primary }}>
//                       {f.title}
//                     </h2>
//                     <p itemProp="description" className="text-sm text-gray-700 mt-2">{f.desc}</p>

//                     <div className="mt-4 flex items-center text-xs gap-2 font-semibold" style={{ color: primary }}>
//                       <FaCheckCircle size={14} aria-hidden />
//                       <span>Included in RankUp</span>
//                     </div>

//                     {/* Optional: deep link to learn more about each feature */}
//                     <a href={`#${f.id}`} className="sr-only">Permalink to {f.title}</a>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>

//           {/* Smart Daily Plan Section with semantic markup */}
//           <section aria-labelledby="daily-plan-heading" className="mt-20 grid md:grid-cols-2 gap-12 items-center">
//             <div className="max-w-lg">
//               <h3 id="daily-plan-heading" className="text-3xl font-extrabold" style={{ color: primary }}>
//                 Daily Smart Revision Plan
//               </h3>

//               <p className="mt-4 text-gray-700">
//                 AI-powered daily targets, weak-area suggestions & personalized chapter-wise revision — designed to make your preparation smarter.
//               </p>

//               <ul className="mt-6 space-y-3 text-gray-700">
//                 <li className="flex items-start gap-2">
//                   <FaCheckCircle className="mt-1" style={{ color: primary }} aria-hidden />
//                   <span>Auto-generated study plan based on your performance.</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <FaCheckCircle className="mt-1" style={{ color: primary }} aria-hidden />
//                   <span>Important chapters selected from weak areas.</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <FaCheckCircle className="mt-1" style={{ color: primary }} aria-hidden />
//                   <span>Test suggestions matched with your previous accuracy.</span>
//                 </li>
//               </ul>
//             </div>

//             <aside className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-6 border border-white/40 max-w-sm mx-auto" aria-label="Smart daily plan preview">
//               <h4 className="font-bold" style={{ color: primary }}>Smart Daily Plan</h4>
//               <p className="text-sm text-gray-600 mt-2">AI-powered revision path for consistent improvement.</p>

//               <div className="mt-4 rounded-xl border flex flex-col items-center justify-center">
//                 <Image
//                   src="/screen.webp"
//                   alt="RankUp smart daily plan preview showing tasks and progress"
//                   width={468}     // Actual image width
//                   height={804}    // Actual image height (468x804 aspect ratio 0.58)
//                   className="w-full h-auto object-contain"   // Changed from object-fill to object-contain
//                   priority={false}
//                 />
//                 <p className="text-xs text-gray-500 mt-3">Mobile preview — personalized plan & progress</p>
//               </div>
//             </aside>
//           </section>
//         </div>
//       </section>
//     </>
//   );
// }

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
