// import FounderSection from "../components/FounderSection";

// const baseUrl = "https://www.rankupp.in";
// const canonicalUrl = `${baseUrl}/founder`;

// export const metadata = {
//   title: "Meet Our Founder – RankUp NEET-UG",
//   description:
//     "Meet the founder of RankUp NEET-UG – MBBS Gold Medalist, NEET PG AIR 1731, UPSC CMS qualified medical educator guiding students to success.",
//   alternates: {
//     canonical: canonicalUrl,
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
//   openGraph: {
//     title: "Meet Our Founder – RankUp NEET-UG",
//     description:
//       "Learn about the journey and achievements of RankUp founder – MBBS Gold Medalist and NEET PG AIR 1731.",
//     url: canonicalUrl,
//     siteName: "RankUp NEET-UG",
//     type: "profile",
//     images: [
//       {
//         url: `${baseUrl}/og-founder.jpg`,
//         width: 1200,
//         height: 630,
//         alt: "Founder of RankUp NEET-UG",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Meet Our Founder – RankUp NEET-UG",
//     description:
//       "MBBS Gold Medalist | NEET PG AIR 1731 | Founder of RankUp NEET-UG",
//     images: [`${baseUrl}/og-founder.jpg`],
//   },
// };

// export default function FounderPage() {
//   return (
//     <>
//       {/* Person + WebPage Schema (ONLY what Google needs) */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "ProfilePage",
//             "mainEntity": {
//               "@type": "Person",
//               "name": "RankUp Founder",
//               "description":
//                 "MBBS Gold Medalist, NEET PG AIR 1731, UPSC CMS qualified medical educator and founder of RankUp NEET-UG.",
//               "jobTitle": "Medical Educator & Founder, RankUp",
//               "worksFor": {
//                 "@type": "Organization",
//                 "name": "RankUp Education",
//                 "url": baseUrl,
//               },
//               "alumniOf": {
//                 "@type": "EducationalOrganization",
//                 "name": "Shyam Shah Medical College, Rewa",
//               },
//             },
//             "url": canonicalUrl,
//           }),
//         }}
//       />

//       {/* MAIN CONTENT (must be visible, not lazy) */}
//       <FounderSection />
//     </>
//   );
// }


// ============================================================
// FILE: app/founder/page.jsx
// RANKUPP.IN — Full SEO + Premium UI Founder Page 2026
// ============================================================

const baseUrl = "https://www.rankupp.in";
const canonicalUrl = `${baseUrl}/founder`;

// ============================================================
// METADATA
// ============================================================

export const metadata = {
  title: "Meet Our Founder | MBBS Gold Medalist, NEET PG AIR 1731 — RankUpp",
  description:
    "Meet the founder of RankUpp — MBBS Gold Medalist, NEET PG AIR 1731, UPSC CMS qualified. The doctor who built India's most trusted NEET preparation platform to help every aspirant reach their medical dream.",
  keywords: [
    "rankupp founder",
    "neet preparation app founder",
    "mbbs gold medalist neet educator",
    "neet pg air 1731",
    "upsc cms qualified doctor",
    "rankupp about founder",
    "best neet preparation platform india",
    "neet 2026 trusted platform",
    "doctor founded neet app",
    "rankupp neet ug founder",
  ],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Meet Our Founder | MBBS Gold Medalist, NEET PG AIR 1731 — RankUpp",
    description:
      "The doctor who built RankUpp — MBBS Gold Medalist, NEET PG AIR 1731, UPSC CMS qualified. Helping 2L+ NEET aspirants reach their medical dream.",
    url: canonicalUrl,
    siteName: "RankUpp",
    type: "profile",
    images: [
      {
        url: `${baseUrl}/og/founder.jpg`,
        width: 1200,
        height: 630,
        alt: "RankUpp Founder — MBBS Gold Medalist, NEET PG AIR 1731",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rankupp_in",
    creator: "@rankupp_in",
    title: "Meet Our Founder | MBBS Gold Medalist, NEET PG AIR 1731 — RankUpp",
    description:
      "MBBS Gold Medalist · NEET PG AIR 1731 · UPSC CMS Qualified · Founder of RankUpp — India's trusted NEET preparation platform.",
    images: [`${baseUrl}/og/founder.jpg`],
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
  authors: [{ name: "RankUpp Founder", url: canonicalUrl }],
  creator: "RankUpp",
  publisher: "RankUpp",
  category: "Education",
  other: {
    "theme-color": "#1E3A5F",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "og:locale:alternate": "hi_IN",
    rating: "general",
    language: "en-IN",
    "geo.region": "IN",
  },
};

// ============================================================
// JSON-LD SCHEMAS
// ============================================================

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${canonicalUrl}#profilepage`,
  url: canonicalUrl,
  name: "Meet the Founder of RankUpp — MBBS Gold Medalist, NEET PG AIR 1731",
  inLanguage: "en-IN",
  datePublished: "2024-01-01",
  dateModified: "2026-01-01",
  breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
  mainEntity: {
    "@type": "Person",
    "@id": `${baseUrl}/#founder`,
    name: "RankUpp Founder",
    description:
      "MBBS Gold Medalist from Shyam Shah Medical College Rewa, NEET PG AIR 1731, UPSC CMS qualified medical educator and founder of RankUpp — India's trusted NEET preparation platform serving 2 lakh+ aspirants.",
    jobTitle: "Medical Educator & Founder",
    worksFor: {
      "@type": "Organization",
      name: "RankUpp",
      url: baseUrl,
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Shyam Shah Medical College, Rewa",
    },
    knowsAbout: [
      "NEET Preparation",
      "Medical Education",
      "MBBS Curriculum",
      "NEET Biology",
      "NEET Physics",
      "NEET Chemistry",
    ],
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/founder-photo.jpg`,
      width: 400,
      height: 400,
    },
    sameAs: [
      "https://www.instagram.com/rankupp_in",
      "https://www.youtube.com/@rankupp",
      "https://twitter.com/rankupp_in",
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${canonicalUrl}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    { "@type": "ListItem", position: 2, name: "About RankUpp", item: `${baseUrl}/about` },
    { "@type": "ListItem", position: 3, name: "Meet Our Founder", item: canonicalUrl },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${baseUrl}/#organization`,
  name: "RankUpp",
  url: baseUrl,
  logo: { "@type": "ImageObject", url: `${baseUrl}/logo.png`, width: 200, height: 60 },
  description:
    "RankUpp is India's trusted NEET preparation platform founded by an MBBS Gold Medalist and NEET PG AIR 1731 holder, offering NCERT questions, mock tests, PYQs, and revision tools for 2 lakh+ NEET aspirants.",
  founder: { "@id": `${baseUrl}/#founder` },
  foundingDate: "2023",
  areaServed: "IN",
  sameAs: [
    "https://www.instagram.com/rankupp_in",
    "https://www.youtube.com/@rankupp",
    "https://twitter.com/rankupp_in",
  ],
};

// ============================================================
// PAGE DATA
// ============================================================

const credentials = [
  {
    icon: "🏅",
    title: "MBBS Gold Medalist",
    institution: "Shyam Shah Medical College, Rewa",
    color: "from-yellow-500 to-amber-600",
    lightBg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    icon: "🩺",
    title: "NEET PG AIR 1731",
    institution: "All India Rank — National Level",
    color: "from-blue-600 to-indigo-700",
    lightBg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: "🏛️",
    title: "UPSC CMS Qualified",
    institution: "Combined Medical Services Examination",
    color: "from-emerald-600 to-teal-700",
    lightBg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    icon: "👨‍🏫",
    title: "Medical Educator",
    institution: "7+ Years Teaching NEET Biology",
    color: "from-purple-600 to-violet-700",
    lightBg: "bg-purple-50",
    border: "border-purple-200",
  },
];

const impactStats = [
  { value: "2L+", label: "Students Guided", icon: "👨‍🎓" },
  { value: "700+", label: "NEET Top Scorers Mentored", icon: "🏆" },
  { value: "38", label: "Years of PYQ Analysed", icon: "📚" },
  { value: "4.8★", label: "Platform Rating", icon: "⭐" },
];

const founderJourney = [
  {
    year: "2009–2015",
    title: "MBBS Journey Begins",
    desc: "Enrolled at Shyam Shah Medical College, Rewa. Graduated with Gold Medal — top of the batch across all 5 years of MBBS.",
    type: "education",
    icon: "🎓",
  },
  {
    year: "2016",
    title: "NEET PG AIR 1731",
    desc: "Cleared NEET PG with All India Rank 1731 — a testament to the systematic study approach that now forms the backbone of RankUpp's preparation methodology.",
    type: "achievement",
    icon: "🏆",
  },
  {
    year: "2017",
    title: "UPSC CMS Qualification",
    desc: "Cleared the Union Public Service Commission Combined Medical Services Examination — one of India's most competitive government medical entrance tests.",
    type: "achievement",
    icon: "🏛️",
  },
  {
    year: "2018–2022",
    title: "Teaching NEET Aspirants",
    desc: "Spent 4+ years teaching NEET Biology at classroom coaching institutes. Mentored hundreds of students, observed patterns in where aspirants struggle most.",
    type: "teaching",
    icon: "👨‍🏫",
  },
  {
    year: "2023",
    title: "Founded RankUpp",
    desc: "Built RankUpp to solve the problem every NEET student faces — quality practice questions mapped to NCERT, with the analytics coaching institutes don't provide.",
    type: "founding",
    icon: "🚀",
  },
  {
    year: "2024–2026",
    title: "Serving 2 Lakh+ Students",
    desc: "RankUpp now serves 2 lakh+ NEET aspirants across India with NCERT-based question banks, chapter-wise PYQs, mock tests, and a structured revision system.",
    type: "growth",
    icon: "🌟",
  },
];

const founderPrinciples = [
  {
    icon: "📖",
    title: "NCERT Is the Bible",
    quote:
      "Every NEET question I've ever solved — and every question I've ever written — traces back to NCERT. There is no shortcut that bypasses it. There is no coaching material that replaces it.",
  },
  {
    icon: "📊",
    title: "Data Over Instinct",
    quote:
      "Students revise the chapters they feel weak in. But feeling weak and being weak are different things. Mock test data tells you where you actually lose marks. That's what should drive your revision schedule.",
  },
  {
    icon: "🔁",
    title: "Revision Wins Ranks",
    quote:
      "I've seen students who knew less score higher than students who knew more. The difference was always revision quality — how consistently they revisited what they'd learned.",
  },
  {
    icon: "🎯",
    title: "Pattern Recognition Beats Memorization",
    quote:
      "NEET has a pattern. After solving 20,000+ PYQs, that pattern becomes obvious. I built RankUpp so every student could see that pattern — not just the ones in expensive coaching centres.",
  },
];

const whyRankUpp = [
  {
    problem: "Coaching institutes charge ₹1–3 lakhs per year",
    solution: "RankUpp delivers the same quality practice for free",
    icon: "💰",
  },
  {
    problem: "Generic MCQ banks have no NCERT connection",
    solution: "Every RankUpp question is tagged to its exact NCERT source",
    icon: "📚",
  },
  {
    problem: "No data on where you actually lose marks",
    solution: "Chapter-wise accuracy tracking after every test",
    icon: "📊",
  },
  {
    problem: "PYQs scattered across different books and websites",
    solution: "20,000+ PYQs organized chapter-wise in one platform",
    icon: "🗂️",
  },
];

// ============================================================
// IMPORT LINK
// ============================================================

import Link from "next/link";
import Image from "next/image";

// ============================================================
// PAGE COMPONENT
// ============================================================

export default function FounderPage() {
  return (
    <>
      {/* ── JSON-LD SCHEMAS ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <div className="min-h-screen bg-white text-gray-800">

        {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="px-4 md:px-6 py-3 max-w-7xl mx-auto border-b border-gray-100">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500"
            itemScope itemType="https://schema.org/BreadcrumbList">
            {[
              { href: "/", label: "Home", position: 1 },
              { href: "/about", label: "About", position: 2 },
              { href: "/founder", label: "Our Founder", position: 3 },
            ].map((crumb, i, arr) => (
              <li key={crumb.href} itemProp="itemListElement" itemScope
                itemType="https://schema.org/ListItem" className="flex items-center gap-1">
                {i < arr.length - 1 ? (
                  <>
                    <Link href={crumb.href} itemProp="item" className="hover:text-[#1E3A5F] transition-colors">
                      <span itemProp="name">{crumb.label}</span>
                    </Link>
                    <span aria-hidden="true" className="text-gray-300">›</span>
                  </>
                ) : (
                  <span itemProp="name" aria-current="page" className="text-[#1E3A5F] font-medium">{crumb.label}</span>
                )}
                <meta itemProp="position" content={String(crumb.position)} />
              </li>
            ))}
          </ol>
        </nav>

        {/* ══════════════════════════════════════════
            HERO — PREMIUM SPLIT LAYOUT
        ══════════════════════════════════════════ */}
        <section
          aria-labelledby="founder-hero-heading"
          className="relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1E3A5F] to-[#0d2340]" aria-hidden="true" />
          <div className="absolute inset-0 opacity-5" aria-hidden="true"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Glow accents */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-400 rounded-full opacity-10 blur-3xl" aria-hidden="true" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">

            {/* Left: Content */}
            <div>
              {/* Trust label */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
                <span aria-hidden="true">🏅</span>
                <span>MBBS Gold Medalist · NEET PG AIR 1731 · UPSC CMS Qualified</span>
              </div>

              <h1 id="founder-hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                The Doctor Who{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
                  Built RankUpp
                </span>{" "}
                for You
              </h1>

              <p className="mt-6 text-lg md:text-xl text-blue-100 leading-relaxed max-w-lg">
                A Gold Medalist MBBS doctor who cleared NEET PG and UPSC CMS,
                then built the platform he wished existed when he was preparing.
                Because every student deserves coaching-level preparation — not just those who can afford it.
              </p>

              {/* Credential pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { text: "🏅 MBBS Gold Medal", bg: "bg-yellow-400/20 border-yellow-400/30 text-yellow-300" },
                  { text: "🩺 NEET PG AIR 1731", bg: "bg-blue-400/20 border-blue-400/30 text-blue-200" },
                  { text: "🏛️ UPSC CMS Cleared", bg: "bg-green-400/20 border-green-400/30 text-green-200" },
                ].map((pill) => (
                  <span key={pill.text}
                    className={`text-xs font-semibold px-4 py-2 rounded-full border backdrop-blur-sm ${pill.bg}`}>
                    {pill.text}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/neet-mock-test-online"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 hover:scale-105 transition-all shadow-lg"
                  aria-label="Start NEET practice on RankUpp">
                  🚀 Start Practicing Free
                </Link>
                <Link href="/about"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
                  aria-label="Learn more about RankUpp">
                  📖 About RankUpp
                </Link>
              </div>
            </div>

            {/* Right: Photo Card */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400/30 to-blue-500/30 rounded-3xl blur-xl" aria-hidden="true" />

                {/* Main card */}
                <div className="relative bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-2 shadow-2xl">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden w-72 h-80 md:w-80 md:h-96 flex items-center justify-center">
                    <Image
                      src="/founder-photo.jpg"
                      alt="RankUpp Founder — MBBS Gold Medalist, NEET PG AIR 1731, Founder of India's trusted NEET preparation platform"
                      width={320}
                      height={384}
                      className="w-full h-full object-cover rounded-2xl"
                      priority
                    />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 text-xs font-extrabold px-4 py-2 rounded-xl shadow-lg">
                    🏆 Gold Medalist
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── IMPACT STATS ── */}
        <section aria-label="Founder impact statistics" className="bg-gray-50 border-b border-gray-100 py-10">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {impactStats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <span className="text-3xl block mb-2" role="img" aria-label={stat.label}>{stat.icon}</span>
                <p className="text-3xl font-extrabold text-[#1E3A5F]">{stat.value}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CREDENTIALS — PREMIUM CARDS
        ══════════════════════════════════════════ */}
        <section aria-labelledby="credentials-heading" className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 id="credentials-heading" className="text-3xl md:text-4xl font-bold text-[#1E3A5F]">
              Qualifications & Credentials
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              The academic foundation behind RankUpp's teaching philosophy and question quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred) => (
              <article key={cred.title}
                className={`relative overflow-hidden rounded-2xl border-2 ${cred.border} ${cred.lightBg} p-6 hover:shadow-lg transition-all`}
                aria-label={`${cred.title} — ${cred.institution}`}>
                {/* Gradient accent top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cred.color}`} aria-hidden="true" />
                <span className="text-4xl block mb-4" role="img" aria-label={cred.title}>{cred.icon}</span>
                <h3 className="font-extrabold text-lg text-gray-900 mb-1">{cred.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{cred.institution}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            JOURNEY TIMELINE
        ══════════════════════════════════════════ */}
        <section aria-labelledby="journey-heading" className="py-20 px-4 md:px-6 bg-gradient-to-br from-[#f8faff] to-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 id="journey-heading" className="text-3xl md:text-4xl font-bold text-[#1E3A5F]">
                The Journey: From MBBS to Building RankUpp
              </h2>
              <p className="mt-4 text-gray-500 max-w-xl mx-auto">
                Every milestone that shaped the preparation system 2 lakh+ students now use.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#1E3A5F] via-blue-300 to-transparent" aria-hidden="true" />

              <div className="space-y-10">
                {founderJourney.map((item, i) => (
                  <div key={item.year}
                    className={`relative flex gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>

                    {/* Dot */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1E3A5F] border-4 border-white shadow-lg flex items-center justify-center text-white text-lg shrink-0 z-10"
                      role="img" aria-label={item.title}>
                      {item.icon}
                    </div>

                    {/* Card */}
                    <div className={`ml-20 md:ml-0 w-full md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"}`}>
                      <div className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 hover:shadow-lg transition-shadow">
                        <span className="inline-block bg-[#1E3A5F] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                          {item.year}
                        </span>
                        <h3 className="font-extrabold text-lg text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FOUNDER'S PRINCIPLES — QUOTE CARDS
        ══════════════════════════════════════════ */}
        <section aria-labelledby="principles-heading" className="py-20 px-4 md:px-6 bg-[#1E3A5F]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 id="principles-heading" className="text-3xl md:text-4xl font-bold text-white">
                The Founder's 4 Core Beliefs About NEET Success
              </h2>
              <p className="mt-4 text-blue-200 max-w-xl mx-auto">
                Principles that every RankUpp feature is built on — directly from his MBBS and teaching experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {founderPrinciples.map((item) => (
                <blockquote key={item.title}
                  className="bg-white/8 border border-white/15 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/12 transition-colors"
                  aria-label={`Founder's belief: ${item.title}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl" role="img" aria-label={item.title}>{item.icon}</span>
                    <h3 className="font-extrabold text-xl text-white">{item.title}</h3>
                  </div>
                  {/* Large opening quote mark */}
                  <div className="text-6xl text-yellow-400/30 font-serif leading-none mb-2" aria-hidden="true">"</div>
                  <p className="text-blue-100 leading-relaxed text-base italic pl-2">{item.quote}</p>
                  <footer className="mt-5 text-yellow-400 text-xs font-semibold">
                    — RankUpp Founder, MBBS Gold Medalist
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            WHY RANKUPP — PROBLEM / SOLUTION
        ══════════════════════════════════════════ */}
        <section aria-labelledby="why-heading" className="py-20 px-4 md:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-[#1E3A5F]">
                Why the Founder Built RankUpp
              </h2>
              <p className="mt-4 text-gray-500 max-w-xl mx-auto">
                Specific problems observed while teaching 500+ NEET students — and what RankUpp solves.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {whyRankUpp.map((item) => (
                <div key={item.problem}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <span className="text-3xl block mb-4" role="img" aria-label="Problem and solution">{item.icon}</span>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 font-bold text-sm shrink-0 mt-0.5">✗</span>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.problem}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-sm shrink-0 mt-0.5">✓</span>
                      <p className="text-gray-800 text-sm font-medium leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FOUNDER'S MESSAGE — PREMIUM EDITORIAL
        ══════════════════════════════════════════ */}
        <section aria-labelledby="message-heading" className="py-20 px-4 md:px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">

              {/* Top accent */}
              <div className="h-2 bg-gradient-to-r from-[#1E3A5F] via-blue-500 to-indigo-600" aria-hidden="true" />

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1E3A5F] to-blue-600 flex items-center justify-center text-white text-xl font-bold shrink-0">
                    R
                  </div>
                  <div>
                    <h2 id="message-heading" className="text-xl font-extrabold text-gray-900">
                      A Message from the Founder
                    </h2>
                    <p className="text-gray-500 text-sm">MBBS Gold Medalist · NEET PG AIR 1731</p>
                  </div>
                </div>

                <div className="space-y-5 text-gray-700 leading-relaxed">
                  <p>
                    When I was preparing for NEET PG, I had access to the best
                    coaching, the best study material, and a well-structured
                    preparation plan. I know, from firsthand experience, what
                    systematic preparation feels like — and what results it produces.
                  </p>
                  <p>
                    After years of teaching NEET aspirants, I kept seeing the same
                    gap. Students were working incredibly hard. But they were
                    practicing on generic question banks with no NCERT connection,
                    revising randomly without data, and going into exams without
                    a clear picture of where they actually stood. The problem
                    wasn't effort. It was the system.
                  </p>
                  <p>
                    I built RankUpp to give every NEET aspirant — regardless of
                    their coaching budget or their city — the same quality of
                    structured practice that top coaching institute students get.
                    Every question on RankUpp traces back to NCERT. Every wrong
                    answer tells you exactly where to revise. Every mock test
                    gives you data, not just a score.
                  </p>
                  <p className="font-semibold text-[#1E3A5F]">
                    If you're preparing for NEET 2026, you belong here.
                    The platform was built for exactly one purpose: to help
                    you get into medical college.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-extrabold text-gray-900">RankUpp Founder</p>
                    <p className="text-gray-500 text-sm">MBBS Gold Medalist · NEET PG AIR 1731 · UPSC CMS</p>
                  </div>
                  <div className="flex gap-3">
                    <Link href="/neet-mock-test-online"
                      className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#162d4a] hover:scale-105 transition-all"
                      aria-label="Start practicing NEET on RankUpp">
                      🚀 Start Practicing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            EEAT DISCLAIMER + TRUST
        ══════════════════════════════════════════ */}
        <section aria-label="Platform trust and credibility" className="py-12 px-4 md:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🏥", title: "Doctor-Founded", desc: "Built by a practicing medical professional who has cleared NEET PG and UPSC CMS — not a startup." },
                { icon: "📚", title: "NCERT-Grounded", desc: "Every question, explanation, and revision resource traces to NCERT — the actual source of NEET questions." },
                { icon: "🛡️", title: "Student-First", desc: "Free access to core features. No misleading claims. No paid promotions disguised as content." },
              ].map((item) => (
                <div key={item.title} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-3xl block mb-3" role="img" aria-label={item.title}>{item.icon}</span>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-gray-400 max-w-2xl mx-auto">
              RankUpp is an independent educational platform. Not affiliated with NTA or any government body.
              All preparation content is based on NCERT textbooks published by the Ministry of Education, Government of India.
            </p>
          </div>
        </section>

        {/* ── RELATED INTERNAL LINKS ── */}
        <section aria-labelledby="related-links-heading" className="bg-gray-50 py-12 px-4 md:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h2 id="related-links-heading" className="text-xl font-bold text-gray-900 mb-6 text-center">
              Start Preparing with RankUpp
            </h2>
            <nav aria-label="RankUpp preparation resources">
              <ul className="flex flex-wrap justify-center gap-3">
                {[
                  { href: "/neet-mock-test-online", label: "NEET Mock Tests 2026" },
                  { href: "/neet-pyq", label: "NEET PYQ 1988–2026" },
                  { href: "/neet-biology-ncert-questions", label: "NEET Biology NCERT Questions" },
                  { href: "/neet-biology-important-questions", label: "NEET Biology Important Questions" },
                  { href: "/neet-physics-formula-sheet", label: "NEET Physics Formula Sheet" },
                  { href: "/neet-revision-strategy", label: "NEET Revision Strategy" },
                  { href: "/neet-syllabus", label: "NEET Syllabus 2026" },
                  { href: "/neet-cutoff", label: "NEET Cutoff 2026" },
                  { href: "/about", label: "About RankUpp" },
                ].map((link) => (
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
          className="px-4 md:px-6 py-20 text-center bg-gradient-to-br from-[#1E3A5F] to-[#0d2340] text-white">
          <h2 id="final-cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Prepare the Smarter Way?
          </h2>
          <p className="text-blue-200 max-w-xl mx-auto mb-8 text-lg">
            Join 2 lakh+ NEET aspirants on the platform built by a doctor,
            for the students who want to become one.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/neet-mock-test-online"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 px-10 py-4 rounded-xl shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all font-bold text-lg"
              aria-label="Start free NEET preparation on RankUpp">
              🚀 Start Free — No Signup Needed
            </Link>
            <Link href="/neet-pyq"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-10 py-4 rounded-xl hover:bg-white/20 transition-all font-semibold text-lg"
              aria-label="Practice NEET PYQs on RankUpp">
              📚 Practice NEET PYQs
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}