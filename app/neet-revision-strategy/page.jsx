// import Script from "next/script";
// import Image from "next/image";
// import {
//   FaCheckCircle,
//   FaBrain,
//   FaClock,
//   FaChartLine,
//   FaLayerGroup,
//   FaBookOpen,
// } from "react-icons/fa";

// export const metadata = {
//   title:
//     "NEET Revision Strategy 2025 | Smart Revision Plan for Top Scores – RankUp",
//   description:
//     "Follow a smart NEET revision strategy for 2025 with RankUp. PYQ-based revision, flashcards, daily plans and AI performance insights for NEET-UG aspirants.",
//   keywords:
//     "neet revision strategy, neet 2025 revision plan, neet smart revision, neet last 6 months strategy, neet revision app",
//   alternates: {
//     canonical: "https://www.rankupp.in/neet-revision-strategy",
//   },
// };

// export default function RevisionAuthorityPage() {
//   const primary = "#1E3A5F";

//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "EducationalOrganization",
//     "name": "RankUp",
//     "url": "https://www.rankupp.in/neet-revision-strategy",
//     "description":
//       "RankUp provides a smart NEET revision strategy with PYQ-based revision, flashcards, daily plans and AI-powered performance analysis.",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student",
//     },
//   };

//   return (
//     <>
//       {/* Structured Data */}
//       <Script
//         id="revision-jsonld"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />

//       <main className="bg-gradient-to-b from-white to-[#f3f9ff] text-gray-800">

//         {/* ================= HERO ================= */}
//         <section className="max-w-6xl mx-auto px-6 py-24">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E3A5F]">
//             NEET Revision Strategy for 2025 Aspirants
//           </h1>

//           <p className="mt-6 text-lg max-w-3xl">
//             Revision decides your NEET rank. RankUp helps you revise smarter
//             using <strong>PYQ-based revision</strong>,{" "}
//             <strong>flashcards</strong>,{" "}
//             <strong>daily smart plans</strong> and{" "}
//             <strong>AI-powered performance insights</strong> so you remember
//             more and panic less in the exam.
//           </p>

//           {/* Hidden SEO authority */}
//           <p className="sr-only">
//             RankUp NEET revision strategy for Class 11 and Class 12 students
//             includes PYQ-driven revision, NCERT focused flashcards, daily
//             revision planner, accuracy tracking and weak topic identification.
//           </p>
//         </section>

//         {/* ================= WHY REVISION ================= */}
//         <section className="py-20 bg-white">
//           <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-[#1E3A5F]">
//                 Why Smart Revision Is the Key to NEET Success
//               </h2>

//               <p className="mt-4">
//                 Most NEET aspirants study a lot but revise randomly. Smart
//                 revision helps you strengthen memory, reduce silly mistakes and
//                 improve accuracy under exam pressure.
//               </p>

//               <ul className="mt-6 space-y-4">
//                 <li className="flex gap-3">
//                   <FaCheckCircle className="text-green-600 mt-1" />
//                   Reinforces NCERT-based concepts
//                 </li>
//                 <li className="flex gap-3">
//                   <FaCheckCircle className="text-green-600 mt-1" />
//                   Reduces forgetting and confusion
//                 </li>
//                 <li className="flex gap-3">
//                   <FaCheckCircle className="text-green-600 mt-1" />
//                   Improves speed and confidence
//                 </li>
//                 <li className="flex gap-3">
//                   <FaCheckCircle className="text-green-600 mt-1" />
//                   Prevents last-minute panic
//                 </li>
//               </ul>
//             </div>

//             <Image
//               src="/screen1.webp"
//               alt="NEET revision planner with flashcards and daily targets"
//               width={480}
//               height={800}
//               className="rounded-3xl shadow-2xl"
//             />
//           </div>
//         </section>

//         {/* ================= REVISION FRAMEWORK ================= */}
//         <section className="py-24 bg-gradient-to-br from-[#f5f9ff] to-white">
//           <div className="max-w-6xl mx-auto px-6">
//             <h2 className="text-3xl font-bold text-[#1E3A5F] text-center">
//               RankUp Smart NEET Revision Framework
//             </h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
//               {[
//                 {
//                   icon: <FaBookOpen />,
//                   title: "NCERT Focus",
//                   desc: "Revision strictly aligned with NCERT lines and diagrams.",
//                 },
//                 {
//                   icon: <FaLayerGroup />,
//                   title: "PYQ-Based",
//                   desc: "Revise concepts that are repeatedly asked in NEET.",
//                 },
//                 {
//                   icon: <FaClock />,
//                   title: "Daily Targets",
//                   desc: "AI-generated daily revision goals based on performance.",
//                 },
//                 {
//                   icon: <FaChartLine />,
//                   title: "Performance Tracking",
//                   desc: "Track accuracy, weak topics and improvement trends.",
//                 },
//               ].map((f, i) => (
//                 <div
//                   key={i}
//                   className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
//                 >
//                   <div
//                     className="w-14 h-14 flex items-center justify-center rounded-full text-white mb-5"
//                     style={{ background: primary }}
//                   >
//                     {f.icon}
//                   </div>

//                   <h3 className="font-bold text-lg text-[#1E3A5F]">
//                     {f.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ================= LAST 6 MONTHS ================= */}
//         <section className="py-20 bg-white">
//           <div className="max-w-6xl mx-auto px-6">
//             <h2 className="text-3xl font-bold text-[#1E3A5F]">
//               Last 6 Months NEET Revision Strategy
//             </h2>

//             <div className="grid md:grid-cols-2 gap-10 mt-10">
//               <div className="flex gap-4">
//                 <FaBrain className="text-[#1E3A5F] text-2xl" />
//                 <p>
//                   Revise PYQs and flashcards daily instead of starting new
//                   topics.
//                 </p>
//               </div>

//               <div className="flex gap-4">
//                 <FaClock className="text-[#1E3A5F] text-2xl" />
//                 <p>
//                   Analyze mock test results and revise weak chapters weekly.
//                 </p>
//               </div>

//               <div className="flex gap-4">
//                 <FaCheckCircle className="text-[#1E3A5F] text-2xl" />
//                 <p>
//                   Focus on accuracy first, speed automatically improves.
//                 </p>
//               </div>

//               <div className="flex gap-4">
//                 <FaChartLine className="text-[#1E3A5F] text-2xl" />
//                 <p>
//                   Use analytics to avoid repeating the same mistakes.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ================= FAQ ================= */}
//         <section className="py-20 bg-[#f5f9ff]">
//           <div className="max-w-5xl mx-auto px-6">
//             <h2 className="text-3xl font-bold text-[#1E3A5F]">
//               NEET Revision Strategy – FAQs
//             </h2>

//             <div className="mt-10 space-y-6">
//               <div className="bg-white p-6 rounded-xl shadow">
//                 <h3 className="font-semibold">
//                   How many times should I revise for NEET?
//                 </h3>
//                 <p className="text-sm mt-2">
//                   Ideally, revise important chapters at least 3–4 times before
//                   the exam.
//                 </p>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow">
//                 <h3 className="font-semibold">
//                   Is PYQ-based revision enough for NEET?
//                 </h3>
//                 <p className="text-sm mt-2">
//                   PYQs form the base, but combining them with mock tests and
//                   flashcards gives the best results.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ================= CTA ================= */}
//         <section className="py-24 text-center">
//           <h2 className="text-3xl font-bold text-[#1E3A5F]">
//             Revise Smarter for NEET 2025 with RankUp
//           </h2>
//           <p className="mt-4 text-gray-700">
//             Turn revision into your biggest strength, not a stress point.
//           </p>
//         </section>
//       </main>
//     </>
//   );
// }

// ============================================================
// FILE: app/neet-revision-strategy/page.jsx
// RANKUPP.IN — Full SEO + Power UI NEET Revision Strategy 2026
// ============================================================

import Link from "next/link";
import Image from "next/image";

// ============================================================
// METADATA
// ============================================================

export const metadata = {
  title: "NEET Revision Strategy 2026 | Smart 6-Month Revision Plan — RankUpp",
  description:
    "Complete NEET revision strategy 2026 — 6-month plan, chapter-wise revision schedule, PYQ-based revision, spaced repetition, and daily targets. Used by NEET 700+ scorers. Free on RankUpp.",
  keywords: [
    "neet revision strategy 2026",
    "neet 2026 revision plan",
    "neet smart revision strategy",
    "neet last 6 months revision plan",
    "how to revise for neet 2026",
    "neet revision schedule",
    "neet biology revision strategy",
    "neet revision tips for top score",
    "neet revision plan month wise",
    "neet last minute revision strategy",
    "neet 30 day revision plan",
    "neet revision app",
    "neet revision notes",
    "best revision strategy for neet",
    "neet 2026 preparation plan",
  ],
  alternates: {
    canonical: "https://www.rankupp.in/neet-revision-strategy",
  },
  openGraph: {
    type: "website",
    url: "https://www.rankupp.in/neet-revision-strategy",
    title: "NEET Revision Strategy 2026 | Smart 6-Month Revision Plan — RankUpp",
    description:
      "Complete NEET 2026 revision strategy — 6-month plan, PYQ-based revision, spaced repetition, and daily targets. Trusted by 2L+ students.",
    siteName: "RankUpp",
    images: [
      {
        url: "https://www.rankupp.in/og/neet-revision-strategy.jpg",
        width: 1200,
        height: 630,
        alt: "NEET Revision Strategy 2026 — Smart 6-Month Plan — RankUpp",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rankupp_in",
    creator: "@rankupp_in",
    title: "NEET Revision Strategy 2026 | Smart 6-Month Revision Plan",
    description:
      "Complete NEET 2026 revision strategy — 6-month plan, PYQ-based revision, daily targets. Free on RankUpp.",
    images: ["https://www.rankupp.in/og/neet-revision-strategy.jpg"],
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
    "apple-mobile-web-app-title": "RankUpp NEET Revision",
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
// JSON-LD SCHEMAS
// ============================================================

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RankUpp",
  url: "https://www.rankupp.in",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://www.rankupp.in/search?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "RankUpp",
  alternateName: "RankUpp NEET Preparation Platform",
  url: "https://www.rankupp.in",
  logo: { "@type": "ImageObject", url: "https://www.rankupp.in/logo.png", width: 200, height: 60 },
  description:
    "RankUpp provides NEET 2026 revision strategy with PYQ-based revision plans, spaced repetition, chapter-wise schedules, mock tests and performance analytics for NEET aspirants.",
  sameAs: ["https://www.instagram.com/rankupp_in", "https://www.youtube.com/@rankupp", "https://twitter.com/rankupp_in"],
  foundingDate: "2023",
  areaServed: "IN",
  knowsAbout: ["NEET Revision Strategy", "NEET Preparation Plan", "NEET 2026", "Medical Entrance Exam Revision"],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.rankupp.in/neet-revision-strategy#webpage",
  url: "https://www.rankupp.in/neet-revision-strategy",
  name: "NEET Revision Strategy 2026 | Smart 6-Month Revision Plan — RankUpp",
  description: "Complete NEET revision strategy 2026 — 6-month plan, PYQ-based revision, spaced repetition, and daily targets.",
  inLanguage: "en-IN",
  datePublished: "2024-01-01",
  dateModified: "2026-01-01",
  breadcrumb: { "@id": "https://www.rankupp.in/neet-revision-strategy#breadcrumb" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.rankupp.in/neet-revision-strategy#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rankupp.in" },
    { "@type": "ListItem", position: 2, name: "NEET Preparation", item: "https://www.rankupp.in/neet-preparation" },
    { "@type": "ListItem", position: 3, name: "NEET Revision Strategy", item: "https://www.rankupp.in/neet-revision-strategy" },
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "NEET Revision Strategy 2026 — Complete 6-Month Plan",
  description: "Structured NEET 2026 revision plan with month-wise schedule, PYQ-based revision, spaced repetition, daily targets, and mock test integration.",
  provider: { "@type": "Organization", name: "RankUpp", sameAs: "https://www.rankupp.in" },
  url: "https://www.rankupp.in/neet-revision-strategy",
  courseMode: "online",
  isAccessibleForFree: true,
  educationalLevel: "Higher Secondary",
  inLanguage: "en-IN",
  audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "NEET Aspirants" },
  teaches: [
    "NEET revision schedule",
    "Spaced repetition for NEET",
    "PYQ-based revision",
    "Biology chapter-wise revision",
    "Mock test integration strategy",
    "Last 30 days NEET revision plan",
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Revise for NEET 2026 — Smart 6-Month Strategy",
  description: "Step-by-step NEET revision strategy used by 700+ scorers — from 6 months out to exam day.",
  totalTime: "P6M",
  step: [
    { "@type": "HowToStep", position: 1, name: "Month 6–5: Diagnostic + Chapter-Wise NCERT Revision", text: "Take a diagnostic mock test to identify weak chapters. Begin chapter-wise NCERT revision starting with highest-weightage chapters. Complete one chapter per day for Biology." },
    { "@type": "HowToStep", position: 2, name: "Month 4–3: PYQ-Based Chapter Revision", text: "After NCERT revision for each chapter, solve all NEET PYQs for that chapter. Map wrong answers back to NCERT. Build a high-frequency topic list." },
    { "@type": "HowToStep", position: 3, name: "Month 2: Full Mock Tests + Weak Area Targeting", text: "Attempt 2 full-length mock tests per week. After each test, revise weak chapters using NCERT and PYQs. Track accuracy trends by chapter." },
    { "@type": "HowToStep", position: 4, name: "Month 1: Intensive Revision + Daily Mock Tests", text: "Revise formula sheets and Biology keyword lists daily. Attempt one mock test every 2 days. Final week: only revision, no new topics." },
  ],
};

const faqSchemaData = [
  {
    q: "How many times should I revise for NEET 2026?",
    a: "For NEET 2026, revise each chapter a minimum of 3 times before the exam — and high-weightage chapters like Human Physiology, Genetics, Ecology, and Modern Physics should be revised 4–5 times. The recommended schedule is: first revision immediately after completing the chapter (within 48 hours), second revision 7–10 days later, third revision 4–6 weeks later, and a final rapid revision in the last 30 days before NEET. This spaced repetition schedule is based on the Ebbinghaus forgetting curve and ensures concepts stay active in long-term memory. NEET toppers who score 700+ typically complete 4–5 revision cycles for their strongest subjects.",
  },
  {
    q: "What is the best NEET revision strategy for 2026?",
    a: "The most effective NEET 2026 revision strategy combines four components: (1) NCERT-first revision — every revision session starts and ends with NCERT, not coaching notes. (2) PYQ-based revision — focus your revision time on concepts that have appeared repeatedly in past NEET papers, as these are the highest-probability exam topics. (3) Spaced repetition — use RankUpp's revision schedule to revisit chapters at scientifically optimal intervals (1 day, 7 days, 30 days) to prevent forgetting. (4) Mock test integration — attempt full-length tests every 10 days and revise weak chapters immediately after analyzing results. This four-component system, consistently applied over 6 months, is what separates 650+ scorers from the rest.",
  },
  {
    q: "Is PYQ-based revision enough for NEET 2026?",
    a: "PYQ-based revision is the most important component of NEET revision, but it is most powerful when combined with NCERT revision rather than used alone. The ideal approach is: revise NCERT chapter → immediately solve all chapter-wise PYQs → identify gaps → re-revise those specific NCERT sections. Biology PYQs from 1988–2025 cover approximately 85–90% of the concepts NEET 2026 will test, making them indispensable. For Physics, PYQs reveal which formula applications are tested most. For Chemistry, PYQs identify the specific reactions and mechanisms NTA prioritizes. Use RankUpp's chapter-wise PYQ bank alongside NCERT for the complete revision system.",
  },
  {
    q: "How to revise NEET in the last 30 days?",
    a: "The last 30 days before NEET should follow this structured plan: Days 30–21 — complete one full NCERT revision of all high-weightage chapters (Human Physiology, Genetics, Ecology, Modern Physics, Electrostatics). Solve 50 PYQs daily. Attempt 2 full mock tests per week. Days 20–11 — shift focus to weak chapters identified in mock tests. Revise formula sheets and Biology keywords daily. Attempt 3 mock tests per week. Days 10–4 — only revision, no new topics. Quick NCERT chapter scans. Solve previous-year papers under timed conditions. Days 3–1 — light revision of keywords, formulas, and diagrams only. Full sleep schedule. No new topics, no new mock tests. Exam day: carry your formula/keyword revision sheet to the centre for a 15-minute pre-exam scan.",
  },
  {
    q: "How to make a NEET revision schedule chapter-wise?",
    a: "Create your NEET revision schedule in three phases. Phase 1 (6–3 months before NEET): Map all 38 NEET Biology chapters, 15 Physics chapters, and 30+ Chemistry chapters. Rank them by weightage (Human Physiology first, Modern Physics second, Genetics third, etc.). Allocate revision days proportionally — high-weightage chapters get 2 revision sessions, lower-weightage chapters get 1. Phase 2 (3–1 month): Build a weekly revision block. Week 1: Biology units 1–3. Week 2: Biology units 4–6. Week 3: Physics major chapters. Week 4: Chemistry. Rotate weekly throughout this phase. Phase 3 (last 30 days): Daily rotating revision — Biology in the morning, Physics afternoon, Chemistry evening. 3 mock tests per week with analysis.",
  },
  {
    q: "Should I start new topics or revise for NEET in the last 3 months?",
    a: "In the last 3 months before NEET, revision should take clear priority over starting new topics — but with one important exception. If there are complete chapters you have never studied (not weak, but completely untouched), you must cover them, even briefly, before the exam. Leaving an entire NEET chapter completely unstudied guarantees losing 3–6 marks from that topic. For everything else — chapters you have studied but feel uncertain about — revision is far more valuable than starting new supplementary material. The risk of starting new topics in the final 3 months is that new information competes with existing knowledge and disrupts consolidation. Revise deeply, not broadly.",
  },
  {
    q: "How to use spaced repetition for NEET revision?",
    a: "Spaced repetition for NEET works by scheduling chapter revisits at scientifically optimal intervals that counteract natural forgetting. After studying a chapter for the first time, review it after 1 day (to consolidate initial learning), then after 7 days (first retention check), then after 21 days (long-term encoding), then after 45 days (pre-exam reinforcement). For Biology, where fact retention is critical, this system ensures that even chapters studied 4 months before NEET remain accessible on exam day. RankUpp's revision planner automates this scheduling — it tracks which chapters you have studied and automatically surfaces the chapters due for revision each day, removing the planning burden from your study sessions.",
  },
  {
    q: "How many hours should I study for NEET revision daily?",
    a: "For NEET 2026 revision, 8–10 hours of focused study per day is the realistic target for aspirants in the final 3–6 months. However, quality consistently outperforms quantity. 6 hours of focused NCERT revision and PYQ practice produces better results than 10 hours of distracted or fatigued study. The recommended daily structure is: 3 hours Biology (NCERT revision + PYQs), 2.5 hours Physics (concept review + numericals), 2.5 hours Chemistry (NCERT + reaction revision), and 1 hour mock test review or flashcard revision. Maintain this schedule 6 days per week, with Sunday reserved for a full mock test and thorough analysis.",
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

const revisionFramework = [
  {
    icon: "📖",
    title: "NCERT-First Revision",
    desc: "Every revision session anchors to NCERT — not coaching notes, not YouTube videos. NCERT is the source; everything else is commentary.",
    color: "bg-blue-600",
    lightBg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: "📂",
    title: "PYQ-Driven Focus",
    desc: "Revise concepts that have appeared 3+ times in past NEET papers. High-frequency PYQ topics are near-guaranteed to appear again.",
    color: "bg-green-600",
    lightBg: "bg-green-50",
    border: "border-green-100",
  },
  {
    icon: "🔁",
    title: "Spaced Repetition",
    desc: "Scientifically scheduled revisits — 1 day, 7 days, 21 days, 45 days after first study. Prevents forgetting under the Ebbinghaus curve.",
    color: "bg-purple-600",
    lightBg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: "🎯",
    title: "Daily Targets",
    desc: "Specific, measurable daily revision goals — chapters, question counts, and accuracy targets — rather than vague 'study more' intentions.",
    color: "bg-orange-600",
    lightBg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: "📊",
    title: "Performance Analytics",
    desc: "Weekly accuracy tracking by chapter identifies exactly which topics need more revision. Data-driven decisions, not guesswork.",
    color: "bg-teal-600",
    lightBg: "bg-teal-50",
    border: "border-teal-100",
  },
  {
    icon: "🧪",
    title: "Mock Test Integration",
    desc: "Full mock tests every 10 days during revision phase. Each test result generates a targeted chapter revision list for the following week.",
    color: "bg-rose-600",
    lightBg: "bg-rose-50",
    border: "border-rose-100",
  },
];

const monthlyPlan = [
  {
    month: "Month 6–5",
    phase: "Diagnostic & Chapter Reset",
    color: "from-slate-700 to-slate-800",
    accent: "bg-slate-100 text-slate-800",
    tasks: [
      "Take a full diagnostic mock test — record chapter-wise accuracy",
      "Rank all chapters: Strong (>75%), Average (50–75%), Weak (<50%)",
      "Begin NCERT chapter-wise revision — highest weightage first",
      "Human Physiology → Genetics → Ecology → Cell Biology → Biomolecules",
      "Solve 30–40 chapter PYQs immediately after each chapter revision",
      "Build error log — note every wrong answer with NCERT source",
    ],
    target: "Complete first NCERT revision of all high-weightage chapters",
  },
  {
    month: "Month 4–3",
    phase: "PYQ Deep Dive",
    color: "from-blue-700 to-blue-800",
    accent: "bg-blue-100 text-blue-800",
    tasks: [
      "Solve all chapter-wise PYQs for Biology (1988–2025)",
      "Physics: solve chapter PYQs focusing on Modern Physics, Electrostatics, Optics",
      "Chemistry: Organic + Coordination Compounds PYQ priority",
      "Identify 'hot topics' — concepts appearing in 5+ NEET papers",
      "Create subject-wise 'high-frequency concept' revision list",
      "Attempt one full mock test every 2 weeks — analyze same day",
    ],
    target: "Complete chapter-wise PYQ practice for all 3 subjects",
  },
  {
    month: "Month 2",
    phase: "Mock Test + Weak Area Targeting",
    color: "from-violet-700 to-violet-800",
    accent: "bg-violet-100 text-violet-800",
    tasks: [
      "2 full mock tests per week — analyze every result within 24 hours",
      "Revise weak chapters immediately after each mock test",
      "Third NCERT revision of consistently weak chapters",
      "Physics: daily formula revision using chapter formula sheet",
      "Chemistry: daily reaction and mechanism revision",
      "Biology: diagram revision — nephron, heart, brain, flower",
    ],
    target: "Achieve consistent 550+ in mock tests before month end",
  },
  {
    month: "Month 1",
    phase: "Intensive Rapid Revision",
    color: "from-orange-600 to-red-700",
    accent: "bg-orange-100 text-orange-800",
    tasks: [
      "Days 30–21: Complete rapid revision of all chapters using formula sheets and keyword lists",
      "Days 20–11: Mock test every 2 days — biology-focused revision between tests",
      "Days 10–4: Only revision — no new topics, no new books",
      "Days 3–1: Light keyword and formula scan only — full sleep priority",
      "Exam day: 15-min revision of formula/keyword sheet before entering exam hall",
      "No new topics after Day 10 — strictly enforce this rule",
    ],
    target: "Peak performance on exam day — 600+ execution goal",
  },
];

const subjectRevisionTips = [
  {
    subject: "Biology",
    icon: "🧬",
    gradient: "from-green-500 to-emerald-600",
    bgLight: "bg-green-50",
    tips: [
      "Revise NCERT diagrams separately — know every label by position, not just name",
      "Make a scientific names list — NEET tests them directly from NCERT examples",
      "Revise exceptions and special cases — NEET examiners love 'except in' sentences",
      "Biology keyword flashcards: 10 per chapter, revised every 7 days",
      "Human Physiology: revise numerical values (tidal volume, RBC lifespan, cardiac output) as a dedicated list",
    ],
    priority: "Human Physiology → Genetics → Ecology → Reproduction → Cell Biology",
  },
  {
    subject: "Physics",
    icon: "⚡",
    gradient: "from-purple-500 to-indigo-600",
    bgLight: "bg-purple-50",
    tips: [
      "Revise formula sheets daily — not by reading, by covering labels and recalling applications",
      "Modern Physics: Bohr model + photoelectric effect equations — highest ROI chapter",
      "For each formula, note: variable definitions, SI units, and one NEET trap",
      "Revise sign conventions for Optics as a separate dedicated session",
      "Dimensional analysis: practice 5 questions weekly — appears 1–2 times per NEET",
    ],
    priority: "Modern Physics → Electrostatics → Optics → Current Electricity → Mechanics",
  },
  {
    subject: "Chemistry",
    icon: "🧪",
    gradient: "from-blue-500 to-cyan-600",
    bgLight: "bg-blue-50",
    tips: [
      "Organic Chemistry: revise named reactions and their mechanisms — NEET tests both",
      "Coordination compounds: ligand field strength series + hybridization patterns weekly",
      "Physical Chemistry: all formula-based — revise alongside Physics formula sessions",
      "Inorganic: periodic table trends and p-block element properties via daily quick-recall",
      "Electrochemistry: Nernst equation, EMF calculations, Faraday's laws — all numeric",
    ],
    priority: "Organic Basics → Coordination Compounds → Electrochemistry → Chemical Bonding → d-block",
  },
];

const commonMistakes = [
  {
    mistake: "Starting new topics in the last 60 days",
    fix: "New information competes with consolidated knowledge. After Day 60, revision only — zero new topics.",
    icon: "🚫",
  },
  {
    mistake: "Revising from coaching notes instead of NCERT",
    fix: "NEET questions are set from NCERT, not coaching notes. Always go back to the source text.",
    icon: "📚",
  },
  {
    mistake: "Skipping mock test analysis",
    fix: "A mock test without analysis is wasted time. Spend equal time analyzing as attempting. Review every wrong answer.",
    icon: "📊",
  },
  {
    mistake: "Revising uniformly — all chapters get equal time",
    fix: "Allocate revision time proportional to NEET weightage. Human Physiology deserves 3× more time than Mineral Nutrition.",
    icon: "⚖️",
  },
  {
    mistake: "Passive re-reading as revision",
    fix: "Active recall beats re-reading 3:1 for retention. After reading NCERT, close it and write everything you remember — then verify.",
    icon: "✍️",
  },
  {
    mistake: "No sleep schedule in the final month",
    fix: "Memory consolidation happens during sleep. 7–8 hours non-negotiable in the final month. Late-night study destroys retention.",
    icon: "😴",
  },
];

const relatedLinks = [
  { href: "/neet-mock-test-online", label: "NEET Mock Tests 2026" },
  { href: "/neet-pyq", label: "NEET PYQ Chapter-Wise" },
  { href: "/neet-biology-ncert-questions", label: "NEET Biology NCERT Questions" },
  { href: "/neet-biology-important-questions", label: "NEET Biology Important Questions" },
  { href: "/neet-physics-formula-sheet", label: "NEET Physics Formula Sheet" },
  { href: "/neet-biology", label: "NEET Biology Hub" },
  { href: "/neet-physics", label: "NEET Physics Hub" },
  { href: "/neet-chemistry", label: "NEET Chemistry Hub" },
  { href: "/neet-cutoff", label: "NEET Cutoff 2026" },
  { href: "/neet-syllabus", label: "NEET Syllabus 2026" },
  { href: "/neet-preparation-tips", label: "NEET Preparation Tips" },
  { href: "/neet-biology/human-physiology", label: "Human Physiology Questions" },
];

// ============================================================
// PAGE COMPONENT
// ============================================================

export default function RevisionStrategyPage() {
  return (
    <>
      {/* ── JSON-LD SCHEMAS ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-gradient-to-b from-white to-[#f3f9ff] text-gray-800">

        {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="px-4 md:px-6 py-3 max-w-7xl mx-auto">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500"
            itemScope itemType="https://schema.org/BreadcrumbList">
            {[
              { href: "/", label: "Home", position: 1 },
              { href: "/neet-preparation", label: "NEET Preparation", position: 2 },
              { href: "/neet-revision-strategy", label: "Revision Strategy", position: 3 },
            ].map((crumb, i, arr) => (
              <li key={crumb.href} itemProp="itemListElement" itemScope
                itemType="https://schema.org/ListItem" className="flex items-center gap-1">
                {i < arr.length - 1 ? (
                  <>
                    <Link href={crumb.href} itemProp="item" className="hover:text-[#1E3A5F] transition-colors">
                      <span itemProp="name">{crumb.label}</span>
                    </Link>
                    <span aria-hidden="true" className="text-gray-400">›</span>
                  </>
                ) : (
                  <span itemProp="name" aria-current="page" className="text-[#1E3A5F] font-medium">{crumb.label}</span>
                )}
                <meta itemProp="position" content={String(crumb.position)} />
              </li>
            ))}
          </ol>
        </nav>

        {/* ── HERO ── */}
        <section aria-labelledby="hero-heading"
          className="max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-24 grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              <span aria-hidden="true">🎯</span>
              <span>Used by NEET 700+ Scorers — Updated for 2026</span>
            </div>

            <h1 id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E3A5F] leading-tight">
              NEET Revision Strategy{" "}
              <span className="text-blue-500">2026</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              The complete 6-month smart revision plan — NCERT-first, PYQ-driven,
              spaced repetition scheduling, and mock test integration. Everything
              you need to peak on exam day.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "6-month month-wise revision schedule",
                "Subject-wise chapter priority order",
                "Spaced repetition timing system",
                "Last 30-day intensive revision plan",
                "6 most common revision mistakes to avoid",
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-500 text-lg shrink-0 mt-0.5" aria-hidden="true">✅</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/neet-mock-test-online"
                className="inline-flex items-center justify-center gap-2 bg-[#1E3A5F] text-white px-8 py-4 rounded-xl shadow-lg hover:bg-[#162d4a] hover:scale-105 transition-all font-bold text-lg"
                aria-label="Start NEET revision practice with mock tests">
                🚀 Start Revision Practice
              </Link>
              <Link href="/neet-pyq"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#1E3A5F] text-[#1E3A5F] px-8 py-4 rounded-xl hover:bg-blue-50 transition-all font-semibold text-lg"
                aria-label="Practice NEET PYQ chapter-wise for revision">
                📋 PYQ-Based Revision
              </Link>
            </div>
          </div>

          {/* Right: App screenshot */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-60 blur-xl" aria-hidden="true" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-100 rounded-full opacity-60 blur-xl" aria-hidden="true" />
              <Image
                src="/screen1.webp"
                alt="RankUpp NEET revision planner showing chapter-wise progress, spaced repetition schedule, and daily revision targets"
                width={340}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl object-cover"
                loading="eager"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── SPACED REPETITION EXPLAINER ── */}
        <section aria-labelledby="spaced-rep-heading" className="bg-[#1E3A5F] text-white py-14 px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 id="spaced-rep-heading" className="text-3xl md:text-4xl font-bold mb-4">
              The Science Behind Smart Revision: Spaced Repetition
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto mb-10 text-lg">
              The Ebbinghaus Forgetting Curve shows we forget 70% of new information
              within 24 hours. Spaced repetition counteracts this by scheduling
              revisits at the exact moments when memory begins to fade.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { day: "Day 1", action: "First revision", retention: "100%", color: "bg-green-500" },
                { day: "Day 7", action: "Second revision", retention: "~85%", color: "bg-blue-500" },
                { day: "Day 21", action: "Third revision", retention: "~90%", color: "bg-purple-500" },
                { day: "Day 45", action: "Fourth revision", retention: "~95%", color: "bg-orange-500" },
              ].map((item) => (
                <div key={item.day} className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center">
                  <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-sm`}>
                    {item.day.split(" ")[1]}
                  </div>
                  <p className="font-bold text-lg">{item.day}</p>
                  <p className="text-blue-200 text-sm mt-1">{item.action}</p>
                  <p className="text-yellow-300 font-bold mt-2">{item.retention}</p>
                  <p className="text-blue-300 text-xs">retention</p>
                </div>
              ))}
            </div>
            <p className="text-blue-200 text-sm mt-6">
              RankUpp's revision planner automatically schedules your chapter revisits using this system — removing the planning burden entirely.
            </p>
          </div>
        </section>

        {/* ── REVISION FRAMEWORK ── */}
        <section aria-labelledby="framework-heading" className="py-16 px-4 md:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 id="framework-heading" className="text-3xl md:text-4xl font-bold text-[#1E3A5F]">
                RankUpp's 6-Component NEET Revision Framework
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                Every component addresses a specific failure point in how most
                NEET aspirants approach revision.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {revisionFramework.map((item) => (
                <div key={item.title}
                  className={`p-6 rounded-2xl border ${item.lightBg} ${item.border} hover:shadow-md transition-shadow`}>
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-white text-2xl mb-4 shrink-0`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6-MONTH PLAN ── */}
        <section aria-labelledby="monthly-plan-heading"
          className="py-16 px-4 md:px-6 bg-gradient-to-br from-[#f5f9ff] to-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 id="monthly-plan-heading" className="text-3xl md:text-4xl font-bold text-[#1E3A5F]">
                6-Month NEET Revision Plan — Month by Month
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                A structured, phase-wise revision roadmap from 6 months out to exam day.
              </p>
            </div>

            <div className="space-y-6">
              {monthlyPlan.map((phase, i) => (
                <article key={phase.month}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                  aria-label={`Revision phase: ${phase.month} — ${phase.phase}`}>

                  {/* Phase header */}
                  <div className={`bg-gradient-to-r ${phase.color} text-white p-6 flex flex-wrap items-center justify-between gap-4`}>
                    <div>
                      <span className="text-white/60 text-sm font-medium">Phase {i + 1}</span>
                      <h3 className="font-extrabold text-2xl mt-0.5">{phase.month}</h3>
                      <p className="text-white/80 text-sm mt-1">{phase.phase}</p>
                    </div>
                    <span className={`text-xs font-bold px-4 py-2 rounded-full ${phase.accent}`}>
                      🎯 Target: {phase.target}
                    </span>
                  </div>

                  {/* Task list */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {phase.tasks.map((task, ti) => (
                        <li key={ti} className="flex items-start gap-3 text-gray-700">
                          <span className="text-[#1E3A5F] font-bold text-sm shrink-0 mt-0.5 w-5">
                            {String(ti + 1).padStart(2, "0")}.
                          </span>
                          <span className="text-sm leading-relaxed">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SUBJECT-WISE TIPS ── */}
        <section aria-labelledby="subject-tips-heading" className="py-16 px-4 md:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 id="subject-tips-heading" className="text-3xl md:text-4xl font-bold text-[#1E3A5F]">
                Subject-Wise NEET Revision Tips
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Each subject demands a different revision approach — here's exactly what works.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {subjectRevisionTips.map((sub) => (
                <article key={sub.subject}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
                  aria-label={`${sub.subject} NEET revision tips`}>

                  <div className={`bg-gradient-to-r ${sub.gradient} p-6 text-white`}>
                    <div className="flex items-center gap-3">
                      <span className="text-4xl" role="img" aria-label={sub.subject}>{sub.icon}</span>
                      <h3 className="font-extrabold text-2xl">{sub.subject}</h3>
                    </div>
                  </div>

                  <div className={`p-5 ${sub.bgLight}`}>
                    <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Priority Order</p>
                    <p className="text-sm text-gray-700 font-medium leading-relaxed mb-5">{sub.priority}</p>
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Revision Tips</p>
                    <ul className="space-y-3">
                      {sub.tips.map((tip, ti) => (
                        <li key={ti} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-green-500 shrink-0 mt-0.5" aria-hidden="true">✓</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMMON MISTAKES ── */}
        <section aria-labelledby="mistakes-heading"
          className="py-16 px-4 md:px-6 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="mistakes-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
                6 NEET Revision Mistakes That Kill Your Score
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Avoid these — they are the most common reasons NEET aspirants
                underperform relative to their knowledge level.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {commonMistakes.map((item) => (
                <div key={item.mistake}
                  className="bg-white rounded-2xl p-6 border border-red-100 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl shrink-0" role="img" aria-label="Mistake">{item.icon}</span>
                    <div>
                      <p className="font-bold text-red-700 text-sm mb-2">❌ {item.mistake}</p>
                      <p className="text-green-800 text-sm leading-relaxed">
                        <span className="font-semibold text-green-700">✅ Fix: </span>{item.fix}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO CONTENT ── */}
        <section aria-labelledby="seo-content-heading" className="max-w-4xl mx-auto px-4 md:px-6 py-16">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">

            <h2 id="seo-content-heading" className="text-3xl font-bold text-[#1E3A5F] mb-6">
              NEET Revision Strategy 2026: The Complete Guide to Revising Smarter
            </h2>

            <p className="mb-5">
              The difference between a NEET aspirant who scores 580 and one who
              scores 650, despite similar knowledge levels, is almost always
              revision quality. Both students have covered the NCERT syllabus.
              Both have solved PYQs. The difference lies in how consistently and
              systematically the higher scorer has revisited that content —
              converting short-term knowledge into long-term retrievable memory
              that holds up under three hours of exam pressure.
            </p>

            <p className="mb-5">
              Revision is not re-reading. This distinction matters enormously for
              NEET preparation. Re-reading NCERT passively for the fourth time
              produces minimal improvement. Active revision — closing the book,
              recalling chapter content from memory, checking accuracy, and
              specifically targeting forgotten elements — produces the kind of
              durable retention that shows up as a correct answer on exam day.
            </p>

            <h3 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">
              Why Most NEET Aspirants Revise Incorrectly
            </h3>

            <p className="mb-5">
              The most common NEET revision error is uniform allocation — treating
              every chapter as equally important and spending equal time on each.
              This approach feels fair and thorough, but it is strategically
              disastrous. A student who spends the same revision time on Human
              Physiology (15–20% NEET Biology weightage) and Mineral Nutrition
              (2–3% weightage) has misallocated their most limited resource: time.
              The correct approach assigns revision time proportional to NEET
              weightage — a principle that sounds obvious but is violated by most
              aspirants under time pressure.
            </p>

            <h3 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">
              How Mock Tests and Revision Work Together
            </h3>

            <p className="mb-5">
              Mock tests and revision are not sequential activities — they are
              interdependent components of the same preparation loop. A mock test
              without revision analysis is a diagnostic without treatment. Revision
              without mock test feedback is studying without measurement. The
              optimal loop is: revise chapters → attempt mock test → analyze
              result → identify specific weak areas → revise those specific
              areas → attempt next mock test. Each iteration of this loop
              reduces weaknesses and builds scoring consistency. Students who
              maintain this loop throughout the final three months before NEET
              typically improve by 40–80 marks compared to their starting mock
              test score.
            </p>

            <h3 className="text-2xl font-bold text-[#1E3A5F] mt-10 mb-4">
              The Last 30 Days: RankUpp's Intensive Revision Protocol
            </h3>

            <p className="mb-5">
              The final 30 days before NEET should follow a completely different
              rhythm from the earlier preparation months. This phase is not for
              learning — it is entirely for consolidation and performance
              optimization. No new topics. No new books. No new supplementary
              material. Every hour goes toward reinforcing what is already in
              memory, identifying and closing residual gaps through targeted
              NCERT revision, and building the exam-day execution habits that
              convert knowledge into marks.
            </p>
          </div>
        </section>

        {/* ── EEAT TRUST ── */}
        <section aria-labelledby="trust-heading" className="max-w-4xl mx-auto px-4 md:px-6 pb-16">
          <div className="bg-gradient-to-br from-[#1E3A5F] to-[#162d4a] rounded-3xl p-8 md:p-12 text-white">
            <h2 id="trust-heading" className="text-2xl md:text-3xl font-bold mb-6">
              Why 2 Lakh+ NEET Aspirants Trust RankUpp for Revision
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "🏆", title: "Topper-Validated", desc: "Strategy built from preparation habits of NEET 700+ scorers — not generic study advice." },
                { icon: "📊", title: "Data-Driven Plans", desc: "Revision schedules are generated from your actual mock test performance — not pre-made templates." },
                { icon: "🔁", title: "Spaced Repetition Built-In", desc: "RankUpp's planner automatically schedules your chapter revisits at scientifically optimal intervals." },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <span className="text-3xl" role="img" aria-label={item.title}>{item.icon}</span>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-blue-500">
              <p className="text-blue-100 text-sm">
                <strong className="text-white">Disclaimer:</strong> RankUpp is an independent educational platform and is not affiliated with NTA or any official NEET authority. All preparation strategies are based on NEET PYQ analysis and academic research on learning science.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq-heading" className="px-4 md:px-6 py-16 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-[#1E3A5F]">
              NEET Revision Strategy — FAQs
            </h2>
            <p className="mt-4 text-gray-600">Every question NEET aspirants ask about smart revision for 2026</p>
          </div>
          <div className="space-y-4">
            {faqSchemaData.map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-semibold text-gray-900 text-left pr-4">{faq.q}</h3>
                  <span className="text-[#1E3A5F] text-xl shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── RELATED LINKS ── */}
        <section aria-labelledby="related-links-heading" className="bg-gray-50 py-12 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 id="related-links-heading" className="text-xl font-bold text-gray-900 mb-6 text-center">
              Related NEET Preparation Resources
            </h2>
            <nav aria-label="Related NEET resources">
              <ul className="flex flex-wrap justify-center gap-3">
                {relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}
                      className="inline-block bg-white border border-gray-200 text-gray-700 hover:text-[#1E3A5F] hover:border-blue-200 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section aria-labelledby="final-cta-heading"
          className="px-4 md:px-6 py-20 text-center bg-gradient-to-b from-white to-[#f3f9ff]">
          <h2 id="final-cta-heading" className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
            Turn Your Revision into Your Biggest NEET Advantage
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg">
            Join 2 lakh+ NEET aspirants using RankUpp's smart revision system.
            Mock tests, PYQs, and spaced repetition — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/neet-mock-test-online"
              className="inline-flex items-center justify-center gap-2 bg-[#1E3A5F] text-white px-10 py-4 rounded-xl shadow-lg hover:bg-[#162d4a] hover:scale-105 transition-all font-bold text-lg"
              aria-label="Start smart NEET revision with mock tests on RankUpp">
              🚀 Start Smart Revision
            </Link>
            <Link href="/neet-pyq"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 hover:border-[#1E3A5F] hover:text-[#1E3A5F] px-10 py-4 rounded-xl transition-all font-semibold text-lg"
              aria-label="Practice NEET PYQs for revision">
              📚 Revise with PYQs
            </Link>
          </div>
        </section>

        {/* ── STICKY CTA ── */}
        <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-50 border-t border-gray-100"
          role="complementary" aria-label="Revision quick start CTA">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-900">NEET Revision Strategy 2026</p>
              <p className="text-xs text-gray-500">6-month plan · Spaced repetition · Mock tests</p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <Link href="/neet-mock-test-online"
                className="flex-1 sm:flex-none text-center bg-[#1E3A5F] text-white px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all"
                aria-label="Start NEET revision practice">
                🚀 Start Practice
              </Link>
              <Link href="/neet-pyq"
                className="flex-1 sm:flex-none text-center bg-gray-100 text-gray-800 px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all"
                aria-label="Revise with NEET PYQs">
                📋 PYQ Revision
              </Link>
            </div>
          </div>
        </div>

        <div className="h-20" aria-hidden="true" />
      </div>
    </>
  );
}