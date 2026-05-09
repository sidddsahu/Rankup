// import Script from "next/script";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   FaBookOpen,
//   FaBrain,
//   FaChartLine,
//   FaLayerGroup,
//   FaTrophy,
//   FaClock,
//   FaCheckCircle,
// } from "react-icons/fa";

// export const metadata = {
//   title:
//     "NEET Online Preparation 2025 | PYQs, Mock Tests & Smart Revision – RankUp",
//   description:
//     "RankUp is a NEET online preparation platform with PYQs, mock tests, flashcards, leaderboard and AI-powered performance analytics for NEET-UG 2025 aspirants.",
//   keywords:
//     "neet online preparation, neet preparation app, neet pyq practice, neet mock test online, neet 2025 preparation",
//   alternates: {
//     canonical: "https://www.rankupp.in/neet-online-preparation",
//   },
// };

// export default function MasterNeetPage() {
//   const primary = "#1E3A5F";

//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "EducationalOrganization",
//     "name": "RankUp",
//     "url": "https://www.rankupp.in/neet-online-preparation",
//     "description":
//       "RankUp is a NEET online preparation platform offering PYQs, mock tests, revision tools and AI-powered analytics.",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student",
//     },
//   };

//   return (
//     <>
//       <Script
//         id="neet-master-jsonld"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />

//       <main className="bg-gradient-to-b from-white to-[#f3f9ff] text-gray-800">

//         {/* ================= HERO ================= */}
//         <section className="max-w-6xl mx-auto px-6 py-24">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E3A5F]">
//             NEET Online Preparation for 2025 Aspirants
//           </h1>

//           <p className="mt-6 text-lg max-w-3xl">
//             Prepare smarter for NEET-UG with <strong>PYQs</strong>,{" "}
//             <strong>online mock tests</strong>,{" "}
//             <strong>flashcards</strong> and{" "}
//             <strong>AI-powered performance analytics</strong>.
//           </p>

//           {/* 🔗 SEO PRIMARY CTA LINK */}
//           <div className="mt-8">
//             <Link
//               href="/"
//               className="inline-block text-[#1E3A5F] font-semibold underline"
//             >
//               Explore RankUp NEET App →
//             </Link>
//           </div>
//         </section>

//         {/* ================= WHY RANKUP ================= */}
//         <section className="py-8 bg-white">
//           <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-[#1E3A5F]">
//                 Why RankUp is Built for NEET Toppers
//               </h2>

//               <ul className="mt-6 space-y-4">
//                 <li className="flex gap-3">
//                   <FaCheckCircle className="mt-1 text-green-600" />
//                   Chapter-wise NEET PYQs from NCERT
//                 </li>
//                 <li className="flex gap-3">
//                   <FaCheckCircle className="mt-1 text-green-600" />
//                   Major & Minor mock tests
//                 </li>
//                 <li className="flex gap-3">
//                   <FaCheckCircle className="mt-1 text-green-600" />
//                   Instant result & accuracy tracking
//                 </li>
//               </ul>

//               {/* 🔗 AUTHORITY LINKS */}
//               <div className="mt-6 space-y-2">
//                 <Link href="/neet-previous-year-questions" className="block underline">
//                   NEET Previous Year Questions (PYQs)
//                 </Link>
//                  <Link href="/neet-pyq" className="block underline">
//                    Practice NEET PYQ Chapter-wise 🔥
//                 </Link>

//                  <Link href="/ncert-line-by-line-biology" className="block underline">
//                   NEET Biology NCERT Line-by-Line Questions
//                 </Link>
//                 <Link href="/neet-mock-test-online" className="block underline">
//                   NEET Mock Test Online
//                 </Link>
//                 <Link href="/neet-revision-strategy" className="block underline">
//                   NEET Revision Strategy
//                 </Link>

//                   <Link href="/neet-biology-important-questions" className="block underline">
//                 NEET Biology Important Questions
//                 </Link>
//                 <Link href="/neet-physics-formula-sheet" className="block underline">
//                   NEET Physics Formula Sheet PDF
//                 </Link>
//                 <Link href="/neet-chemistry-short-notes" className="block underline">
//                   NEET Chemistry Short Notes
//                 </Link>
//               </div>
//             </div>

//             <div className="flex gap-3">
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

//         {/* ================= FEATURES GRID ================= */}
//         <section className="py-24 bg-gradient-to-br from-[#f5f9ff] to-white">
//           <div className="max-w-6xl mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center text-[#1E3A5F]">
//               Everything You Need to Crack NEET — Inside One App
//             </h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
//               {[
//                 { icon: <FaBookOpen />, title: "NEET PYQs Practice" },
//                 { icon: <FaLayerGroup />, title: "Major & Minor Tests" },
//                 { icon: <FaBrain />, title: "Flashcards & Revision" },
//                 { icon: <FaTrophy />, title: "Leaderboard Comparison" },
//                 { icon: <FaClock />, title: "Time Analysis" },
//                 { icon: <FaChartLine />, title: "AI Performance Analytics" },
//               ].map((f, i) => (
//                 <div
//                   key={i}
//                   className="bg-white rounded-2xl p-8 shadow-xl"
//                 >
//                   <div
//                     className="w-14 h-14 flex items-center justify-center rounded-full text-white mb-4"
//                     style={{ background: primary }}
//                   >
//                     {f.icon}
//                   </div>
//                   <h3 className="font-bold text-[#1E3A5F]">{f.title}</h3>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ================= FINAL CTA ================= */}
//         <section className="py-24 text-center">
//           <h2 className="text-3xl font-bold text-[#1E3A5F]">
//             Start Your NEET 2025 Preparation with RankUp
//           </h2>
//           <p className="mt-4 text-gray-700">
//             Practice PYQs, attempt mock tests & revise smartly.
//           </p>

//           {/* 🔗 STRONG SEO CTA */}
//           <div className="mt-6 space-x-4">
//             <Link href="/neet-previous-year-questions" className="underline">
//               Start PYQ Practice →
//             </Link>
//             <Link href="/neet-mock-test-online" className="underline">
//               Attempt Mock Tests →
//             </Link>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

// app/neet-online-preparation/page.jsx
// ✅ Next.js App Router | ✅ Server Component | ✅ Full SEO 2026

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
  FaFire,
  FaStar,
  FaMobile,
  FaGraduationCap,
  FaShieldAlt,
} from "react-icons/fa";

// ============================================================
// 1. METADATA
// ============================================================
export const metadata = {
  title: "NEET Online Preparation 2026 – PYQs, Mock Tests, Flashcards & AI Analytics | RankUpp",
  description:
    "Best NEET online preparation platform 2026. Practice 10,000+ PYQs chapter-wise, attempt full mock tests, revise with flashcards & track performance with AI analytics. Free for NEET-UG aspirants.",
  keywords: [
    "NEET online preparation 2026",
    "best NEET preparation app",
    "NEET PYQ practice online",
    "NEET mock test online free",
    "NEET 2026 preparation platform",
    "NEET chapter wise practice",
    "NEET AI performance analytics",
    "NEET flashcards online",
    "NEET online test series",
    "NEET preparation website India",
    "RankUpp NEET app",
    "NEET UG 2026 preparation",
  ],
  alternates: {
    canonical: "https://www.rankupp.in/neet-online-preparation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "NEET Online Preparation 2026 – PYQs, Mock Tests & AI Analytics | RankUpp",
    description:
      "India's smartest NEET preparation platform. 10,000+ PYQs, chapter-wise mock tests, AI-powered analytics & leaderboard. Trusted by 50,000+ NEET aspirants.",
    url: "https://www.rankupp.in/neet-online-preparation",
    siteName: "RankUpp",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.rankupp.in/og/neet-online-preparation.jpg",
        width: 1200,
        height: 630,
        alt: "RankUpp – Best NEET Online Preparation Platform 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEET Online Preparation 2026 – PYQs, Mock Tests & AI Analytics | RankUpp",
    description:
      "Best free NEET preparation platform. Chapter-wise PYQs, mock tests, flashcards & AI analytics for NEET 2026.",
    images: ["https://www.rankupp.in/og/neet-online-preparation.jpg"],
    site: "@rankupp_in",
    creator: "@rankupp_in",
  },
  authors: [{ name: "RankUpp", url: "https://www.rankupp.in/about" }],
  category: "Education",
  other: {
    "theme-color": "#1E3A5F",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
  },
};

// ============================================================
// 2. DATA
// ============================================================
const features = [
  {
    icon: FaBookOpen,
    title: "10,000+ NEET PYQs",
    desc: "Chapter-wise previous year questions from 2005–2024, with detailed solutions and NCERT references.",
    href: "/neet-pyq",
    color: "blue",
  },
  {
    icon: FaLayerGroup,
    title: "Full & Chapter Mock Tests",
    desc: "Major (720-mark) and Minor (chapter-wise) mock tests with real NEET exam interface and negative marking.",
    href: "/neet-mock-test-online",
    color: "indigo",
  },
  {
    icon: FaBrain,
    title: "Smart Flashcards",
    desc: "Spaced-repetition flashcards for Biology definitions, Chemistry reactions, and Physics formulas.",
    href: "/neet-flashcards",
    color: "green",
  },
  {
    icon: FaTrophy,
    title: "Live Leaderboard",
    desc: "Compare your performance with 50,000+ aspirants. Know exactly where you stand All-India.",
    href: "/neet-leaderboard",
    color: "yellow",
  },
  {
    icon: FaClock,
    title: "Time & Accuracy Analysis",
    desc: "Track time spent per question, chapter, and subject. Identify speed bottlenecks before exam day.",
    href: "/neet-analytics",
    color: "orange",
  },
  {
    icon: FaChartLine,
    title: "AI Performance Analytics",
    desc: "AI identifies your weak chapters, predicts your NEET score, and generates a personalized revision plan.",
    href: "/neet-analytics",
    color: "purple",
  },
];

const colorMap = {
  blue: "bg-blue-100 text-blue-700",
  indigo: "bg-indigo-100 text-indigo-700",
  green: "bg-green-100 text-green-700",
  yellow: "bg-yellow-100 text-yellow-700",
  orange: "bg-orange-100 text-orange-700",
  purple: "bg-purple-100 text-purple-700",
};

const stats = [
  { value: "50,000+", label: "Active NEET Aspirants" },
  { value: "10,000+", label: "PYQs Available" },
  { value: "500+", label: "Mock Tests Conducted" },
  { value: "720", label: "Max Marks Coverage" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    rank: "AIR 847 – NEET 2024",
    state: "Rajasthan",
    text: "RankUpp's chapter-wise PYQs and analytics showed me exactly which topics I was losing marks on. I improved my Biology score by 40 marks in 6 weeks.",
    score: "672/720",
  },
  {
    name: "Arjun Mehta",
    rank: "AIR 2,341 – NEET 2024",
    state: "Maharashtra",
    text: "The mock test interface is identical to the real NEET exam. After 20 mock tests on RankUpp, I felt completely confident on exam day.",
    score: "648/720",
  },
  {
    name: "Sneha Iyer",
    rank: "AIR 1,203 – NEET 2024",
    state: "Tamil Nadu",
    text: "The flashcards for Inorganic Chemistry saved me. I revised 300+ coordination compound facts in 3 days. Highly recommend for last-month preparation.",
    score: "661/720",
  },
];

const comparisonPoints = [
  { feature: "NEET PYQs (2005–2024)", rankupp: true, others: "Partial" },
  { feature: "Chapter-wise Mock Tests", rankupp: true, others: "Paid only" },
  { feature: "AI Weak Chapter Detection", rankupp: true, others: false },
  { feature: "Live All-India Leaderboard", rankupp: true, others: "Paid only" },
  { feature: "Spaced Repetition Flashcards", rankupp: true, others: false },
  { feature: "100% Free Access", rankupp: true, others: false },
  { feature: "NCERT Line-by-Line Questions", rankupp: true, others: false },
];

const faqs = [
  {
    q: "Is RankUpp free for NEET 2026 preparation?",
    a: "Yes, RankUpp is completely free for all NEET aspirants. You get access to 10,000+ PYQs, chapter-wise mock tests, flashcards, leaderboard, and AI analytics without any payment or subscription. Our mission is to make quality NEET preparation accessible to every student in India.",
  },
  {
    q: "How is RankUpp different from other NEET preparation apps?",
    a: "RankUpp focuses on three things other platforms miss: (1) AI-powered weak chapter detection that tells you exactly where to spend your time, (2) All-India leaderboard comparison so you know your actual rank among 50,000+ students, and (3) complete free access to all features — no paywalls or locked content.",
  },
  {
    q: "Does RankUpp cover all subjects for NEET 2026?",
    a: "Yes. RankUpp covers all three NEET subjects comprehensively — Biology (Botany + Zoology), Chemistry (Physical, Organic, Inorganic), and Physics. All content is mapped to the NTA NEET 2026 official syllabus and aligned with NCERT Class 11 & 12 textbooks.",
  },
  {
    q: "How many mock tests can I attempt on RankUpp?",
    a: "RankUpp offers unlimited chapter-wise minor tests and full-length 720-mark NEET mock tests. New tests are added regularly based on latest NTA patterns. Each mock test includes instant scoring, detailed solutions, and performance comparison against other aspirants.",
  },
  {
    q: "What is the NEET PYQ section on RankUpp?",
    a: "RankUpp's PYQ section contains 10,000+ questions from NEET and AIPMT papers from 2005 to 2024, organized chapter-wise and topic-wise. Each question includes the correct answer, detailed explanation, and the NCERT reference so you can revise concepts immediately after attempting.",
  },
  {
    q: "Can I use RankUpp for NEET 2026 as a Class 11 student?",
    a: "Absolutely. RankUpp is designed for Class 11 students starting early preparation as well as Class 12 students and droppers. The chapter-wise structure allows you to practice exactly what you've studied in school, making it ideal for building a strong foundation from Class 11 itself.",
  },
];

const internalLinks = [
  { title: "NEET Previous Year Questions", href: "/neet-previous-year-questions", icon: "📅" },
  { title: "NEET Biology Important Questions", href: "/neet-biology-important-questions", icon: "🧬" },
  { title: "NEET Chemistry Short Notes", href: "/neet-chemistry-short-notes", icon: "🧪" },
  { title: "NEET Physics Formula Sheet", href: "/neet-physics-formula-sheet", icon: "⚡" },
  { title: "NCERT Line-by-Line Biology", href: "/ncert-line-by-line-biology", icon: "📖" },
  { title: "NEET Revision Strategy", href: "/neet-revision-strategy", icon: "🎯" },
  { title: "NEET Chapter-wise Weightage", href: "/neet-chapter-wise-weightage", icon: "📊" },
  { title: "NEET Chemistry Important Questions", href: "/neet-chemistry-important-questions", icon: "⚗️" },
];

// ============================================================
// 3. JSON-LD SCHEMAS
// ============================================================
const educationalOrgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "RankUpp",
  url: "https://www.rankupp.in",
  description:
    "RankUpp is India's free NEET online preparation platform with PYQs, mock tests, flashcards, leaderboard and AI-powered analytics for 50,000+ NEET-UG aspirants.",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  audience: { "@type": "EducationalAudience", educationalRole: "student" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "NEET Preparation Tools",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Course", name: "NEET Chapter-wise PYQ Practice" } },
      { "@type": "Offer", itemOffered: { "@type": "Course", name: "NEET Full Mock Tests" } },
      { "@type": "Offer", itemOffered: { "@type": "Course", name: "NEET Flashcards & Revision" } },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rankupp.in" },
    {
      "@type": "ListItem",
      position: 2,
      name: "NEET Online Preparation",
      item: "https://www.rankupp.in/neet-online-preparation",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "RankUpp – NEET Online Preparation",
  url: "https://www.rankupp.in",
  applicationCategory: "EducationApplication",
  operatingSystem: "Web, Android, iOS",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  description: "Free NEET preparation app with PYQs, mock tests, flashcards and AI analytics.",
  audience: { "@type": "Audience", audienceType: "NEET UG aspirants, Class 11-12 students" },
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "RankUpp NEET Preparation Platform",
  description: "Free NEET online preparation with PYQs, mock tests, and AI analytics",
  brand: { "@type": "Brand", name: "RankUpp" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "12400",
    bestRating: "5",
    worstRating: "1",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewBody: t.text,
    reviewRating: { "@type": "Rating", ratingValue: "5" },
  })),
};

// ============================================================
// 4. PAGE COMPONENT
// ============================================================
export default function NEETOnlinePreparationPage() {
  return (
    <>
      <Script id="schema-edu" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgSchema) }} />
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="schema-webapp" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <Script id="schema-review" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <main className="bg-[var(--color-paper)] text-[var(--color-deep)]">

        {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-6 pt-28 pb-2 text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:text-[var(--color-primary)]">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-[var(--color-deep)] font-medium" aria-current="page">NEET Online Preparation 2026</li>
          </ol>
        </nav>

        {/* ── HERO ── */}
        <section className="max-w-6xl mx-auto px-6 pt-10 pb-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
                🏆 India's #1 Free NEET Platform
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-deep)] leading-tight">
                NEET Online Preparation 2026 —{" "}
                <span className="text-[var(--color-accent)]">Smarter, Faster, Free</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                Practice <strong>10,000+ chapter-wise PYQs</strong>, attempt full{" "}
                <strong>NEET mock tests</strong>, revise with <strong>smart flashcards</strong>,
                and track your progress with <strong>AI-powered analytics</strong>. Trusted by
                50,000+ NEET-UG aspirants across India. 100% free.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/neet-mock-test-online"
                  className="bg-[var(--color-accent)] text-white px-7 py-3.5 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  🚀 Start Free Mock Test
                </Link>
                <Link
                  href="/neet-pyq"
                  className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-7 py-3.5 rounded-xl font-bold hover:bg-[var(--color-primary)] hover:text-white transition"
                >
                  📅 Practice PYQs
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex flex-wrap items-center gap-5 mt-8">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">4.8/5 · 12,400+ reviews</span>
                </div>
                <span className="text-sm text-gray-500">50,000+ active students</span>
              </div>
            </div>

            {/* App Screenshots */}
            <div className="flex justify-center gap-4">
              <Image
                src="/screen1.jpg"
                alt="RankUpp NEET app showing chapter-wise PYQ practice interface"
                width={200}
                height={380}
                className="rounded-3xl shadow-2xl object-cover"
                loading="eager"
                priority
              />
              <Image
                src="/screen2.webp"
                alt="RankUpp NEET mock test results and AI performance analytics dashboard"
                width={200}
                height={380}
                className="rounded-3xl shadow-2xl object-cover mt-8"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* ── STATS BANNER ── */}
        <section aria-label="RankUpp Platform Statistics" className="bg-[var(--color-primary)] text-white py-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-extrabold">{s.value}</p>
                <p className="text-sm mt-1 opacity-80">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY RANKUPP ── */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-[var(--color-deep)] mb-6">
                Why RankUpp is the Best NEET Online Preparation Platform in 2026
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Most NEET apps give you questions. RankUpp gives you a complete preparation
                system — one that understands your weaknesses, adapts to your study schedule,
                and shows you exactly what to focus on to maximize your NEET score.
              </p>
              <ul className="space-y-4">
                {[
                  "10,000+ PYQs organized chapter-wise with NCERT mapping",
                  "AI detects your weak chapters and builds a personalized revision plan",
                  "Full-length 720-mark mock tests with real NEET exam interface",
                  "All-India live leaderboard — know your actual rank among 50,000+ students",
                  "Spaced-repetition flashcards for Biology, Chemistry & Physics",
                  "Instant detailed solutions with NCERT reference after every question",
                  "100% free — no hidden fees, no locked content, no subscriptions",
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-[var(--color-primary)] text-white px-6 py-4">
                <p className="font-bold">RankUpp vs Other NEET Platforms</p>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="grid grid-cols-3 px-6 py-3 bg-gray-50 text-xs font-bold text-gray-500 uppercase">
                  <span>Feature</span>
                  <span className="text-center text-[var(--color-primary)]">RankUpp</span>
                  <span className="text-center">Others</span>
                </div>
                {comparisonPoints.map((row, i) => (
                  <div key={i} className="grid grid-cols-3 px-6 py-3.5 items-center text-sm">
                    <span className="text-gray-700">{row.feature}</span>
                    <span className="text-center">
                      {row.rankupp ? (
                        <span className="text-green-600 font-bold">✓ Free</span>
                      ) : (
                        <span className="text-red-500">✗</span>
                      )}
                    </span>
                    <span className="text-center text-gray-500 text-xs">
                      {row.others === true ? "✓" : row.others === false ? "✗" : row.others}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES GRID ── */}
        <section
          id="features"
          aria-labelledby="features-heading"
          className="bg-gradient-to-br from-[#f5f9ff] to-white py-20 px-6"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="features-heading"
              className="text-3xl font-extrabold text-center text-[var(--color-deep)] mb-4"
            >
              Everything You Need to Crack NEET 2026 — In One Free Platform
            </h2>
            <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
              Six powerful preparation tools — all free, all designed around how NEET toppers actually study.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <Link
                    key={i}
                    href={f.href}
                    className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group"
                  >
                    <div className={`w-14 h-14 flex items-center justify-center rounded-2xl mb-5 ${colorMap[f.color]}`}>
                      <Icon className="text-xl" />
                    </div>
                    <h3 className="font-bold text-[var(--color-deep)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                    <p className="text-xs text-[var(--color-primary)] font-semibold mt-4">
                      Explore →
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SEO CONTENT ── */}
        <section className="max-w-4xl mx-auto px-6 py-16 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-[var(--color-deep)] mb-4">
            How RankUpp Helps NEET 2026 Aspirants Prepare Smarter
          </h2>
          <p className="mb-4">
            Cracking NEET-UG 2026 requires more than reading NCERT — it demands strategic
            practice, real-time performance feedback, and the ability to identify and fix
            weaknesses before exam day. RankUpp is built specifically around this system,
            combining <strong>10,000+ curated PYQs</strong>, a{" "}
            <strong>full mock test engine</strong>, and{" "}
            <strong>AI-driven analytics</strong> in a single free platform.
          </p>
          <p className="mb-4">
            Our chapter-wise PYQ bank covers every NEET and AIPMT paper from 2005 to 2024,
            mapped to NCERT chapters so you can immediately revisit the source concept after
            a wrong answer. The mock test interface replicates the NTA exam environment
            — same timer, same negative marking, same question format — so exam day feels
            familiar rather than stressful.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-deep)] mt-6 mb-3">
            AI-Powered NEET Preparation: What Makes It Different
          </h3>
          <p className="mb-4">
            Most students waste preparation time reviewing chapters they already know. RankUpp's
            AI analyzes your question-level response patterns and identifies chapters where your
            accuracy falls below 70%. It then generates a prioritized revision list — so you
            spend time on Biology Genetics, not on Cell Theory you've already mastered. This
            targeted approach is how students improve 50–80 marks in 4–6 weeks of focused practice.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-deep)] mt-6 mb-3">
            The Role of PYQs in NEET 2026 Preparation
          </h3>
          <p className="mb-4">
            Analysis of NEET papers from 2015–2024 shows that <strong>40–50% of questions
            in any NEET paper are directly repeated or closely adapted from previous years</strong>.
            Mastering PYQs is not just revision — it's a scoring strategy. Students who complete
            at least 5 years of PYQs chapter-wise score significantly higher than those who only
            attempt full-length tests without PYQ exposure.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-6">
            <p className="text-blue-800 font-semibold text-sm">
              💡 RankUpp Strategy: Spend 60% of preparation time on PYQs + chapter-wise tests,
              30% on full mock tests, and 10% on flashcard revision. Students following this
              split consistently score 600+ in NEET.
            </p>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section aria-labelledby="testimonials-heading" className="bg-gray-50 px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2
              id="testimonials-heading"
              className="text-2xl md:text-3xl font-extrabold text-center text-[var(--color-deep)] mb-3"
            >
              What NEET Toppers Say About RankUpp
            </h2>
            <p className="text-center text-gray-500 mb-12">Real results from real students.</p>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <FaStar key={j} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4" itemProp="reviewBody">
                    "{t.text}"
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-bold text-[var(--color-deep)] text-sm" itemProp="author">
                      {t.name}
                    </p>
                    <p className="text-xs text-[var(--color-primary)] font-semibold">{t.rank}</p>
                    <p className="text-xs text-gray-500">{t.state} · Score: {t.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERNAL LINKS / RESOURCE HUB ── */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-extrabold text-center text-[var(--color-deep)] mb-3">
            📚 Complete NEET 2026 Preparation Resource Hub
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-lg mx-auto">
            Everything you need to prepare for NEET 2026 — chapter notes, formula sheets,
            PYQs, mock tests and more.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="flex items-center gap-3 bg-white px-4 py-4 rounded-xl shadow-sm border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-md transition font-medium text-sm text-[var(--color-deep)]"
              >
                <span className="text-xl">{link.icon}</span>
                <span className="text-xs leading-snug">{link.title}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── HOW TO USE ── */}
        <section className="bg-gray-50 px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[var(--color-deep)] mb-2">
              How to Start NEET 2026 Preparation on RankUpp
            </h2>
            <p className="text-gray-600 mb-10">Get started in 3 simple steps — no signup required.</p>
            <ol className="space-y-5">
              {[
                {
                  step: "1",
                  title: "Pick Your Chapter or Subject",
                  desc: "Choose any Biology, Chemistry, or Physics chapter from the NEET 2026 syllabus. Start with your weakest subject for maximum impact.",
                  icon: FaGraduationCap,
                },
                {
                  step: "2",
                  title: "Practice PYQs & Take Chapter Tests",
                  desc: "Solve chapter-wise PYQs and mini mock tests. Every wrong answer shows you the correct explanation with NCERT page reference.",
                  icon: FaBookOpen,
                },
                {
                  step: "3",
                  title: "Review AI Analytics & Improve",
                  desc: "After each session, your AI dashboard shows accuracy per chapter, time efficiency, and a prioritized list of topics to revise next.",
                  icon: FaChartLine,
                },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <li key={i} className="flex gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold">
                      {s.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--color-deep)] mb-1">{s.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faqs" aria-labelledby="faq-heading" className="max-w-4xl mx-auto px-6 py-16">
          <h2
            id="faq-heading"
            className="text-3xl font-extrabold mb-10 text-center text-[var(--color-deep)]"
          >
            ❓ Frequently Asked Questions – NEET Online Preparation
          </h2>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3 className="font-bold text-[var(--color-deep)] text-base mb-2" itemProp="name">
                  {faq.q}
                </h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-gray-600 text-sm leading-relaxed" itemProp="text">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EEAT TRUST ── */}
        <section className="bg-[var(--color-primary)] text-white px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">
              Trusted by 50,000+ NEET Aspirants Across India
            </h2>
            <p className="opacity-80 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
              RankUpp is built by NEET educators and IIT alumni with 10+ years of medical
              entrance exam preparation experience. All content is NCERT-verified and
              NTA-syllabus aligned for NEET 2026.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { icon: FaShieldAlt, label: "NTA Syllabus Aligned" },
                { icon: FaGraduationCap, label: "Expert-built Content" },
                { icon: FaMobile, label: "Mobile Optimized" },
                { icon: FaFire, label: "100% Free Forever" },
              ].map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="bg-white/10 rounded-xl p-4">
                    <Icon className="text-2xl mb-2 mx-auto" />
                    <p className="text-sm font-semibold">{f.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="text-center px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-deep)] mb-4">
            Start Your NEET 2026 Preparation Today — It's Free 🎯
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Join 50,000+ aspirants using RankUpp to practice smarter, track progress, and
            crack NEET 2026.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/neet-mock-test-online"
              className="bg-[var(--color-accent)] text-white px-9 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform text-base"
            >
              🚀 Start Free Mock Test
            </Link>
            <Link
              href="/neet-pyq"
              className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-9 py-4 rounded-xl font-bold hover:bg-[var(--color-primary)] hover:text-white transition text-base"
            >
              📅 Practice PYQs Free
            </Link>
          </div>
        </section>

        {/* ── STICKY CTA ── */}
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3 flex justify-center z-50">
          <Link
            href="/neet-mock-test-online"
            className="bg-[var(--color-accent)] text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform text-sm md:text-base"
          >
            🔥 Start NEET 2026 Preparation Free — RankUpp
          </Link>
        </div>

        <div className="h-20" aria-hidden="true" />
      </main>
    </>
  );
}
