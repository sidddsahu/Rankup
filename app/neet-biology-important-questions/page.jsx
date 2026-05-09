// export const metadata = {
//   title: "NEET Biology Important Questions 🔥 Chapter-wise Most Expected 2026",
//   description:
//     "Practice NEET Biology important questions chapter-wise for 2026. Most expected and repeated questions with answers to boost your score.",
//   keywords: [
//     "neet biology important questions",
//     "neet biology questions 2026",
//     "most important biology questions neet",
//     "neet chapter wise biology questions",
//     "neet biology practice questions",
//   ],
// };

// export default function ImportantQuestionsPage() {
//   const chapters = [
//     "Cell: The Unit of Life",
//     "Biomolecules",
//     "Human Physiology",
//     "Genetics and Evolution",
//     "Ecology",
//   ];

//   const faqs = [
//     {
//       q: "Are important questions enough for NEET Biology?",
//       a: "Important questions cover high-weightage topics, but combine with NCERT for best results.",
//     },
//     {
//       q: "How many Biology questions should I practice daily?",
//       a: "At least 80–100 questions daily for strong preparation.",
//     },
//     {
//       q: "Is Biology easy to score in NEET?",
//       a: "Yes, Biology is the most scoring subject if NCERT is mastered properly.",
//     },
//   ];

//   return (
//     <div className="min-h-screen  bg-[var(--color-paper)] text-[var(--color-deep)] mt-24">

//       {/* HERO */}
//       <section className="px-6 py-16 text-center">
//         <h1 className="text-3xl md:text-5xl mt-10 font-bold">
//           NEET Biology Important Questions 🔥
//         </h1>

//         <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
//           Practice most expected and high-weightage Biology questions for NEET 2026.
//         </p>

//         <a
//           href="/neet-mock-test-online"
//           className="inline-block mt-8 bg-[var(--color-accent)] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
//         >
//           🚀 Start Practice
//         </a>
//       </section>

//       {/* CHAPTER LIST */}
//       <section className="px-6 py-16 max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold mb-10 text-center">
//           📚 Chapter-wise Important Questions
//         </h2>

//         <div className="grid md:grid-cols-2 gap-6">
//           {chapters.map((chapter, i) => (
//             <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
//               <h3 className="font-semibold text-lg">{chapter}</h3>

//               <a
//                 href="/neet-pyq"
//                 className="mt-4 inline-block text-[var(--color-primary)] font-medium"
//               >
//                 Practice Questions →
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SAMPLE QUESTIONS (IMPORTANT FOR SEO) */}
//       <section className="max-w-4xl mx-auto px-6 py-16">
//         <h2 className="text-2xl font-bold mb-6">
//           🔥 Sample NEET Biology Important Questions
//         </h2>

//         <div className="space-y-6">

//           <div className="bg-white p-6 rounded-xl shadow">
//             <p className="font-semibold mb-3">
//               Q1. Which organelle is known as the powerhouse of the cell?
//             </p>
//             <p className="text-gray-600">Answer: Mitochondria</p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <p className="font-semibold mb-3">
//               Q2. DNA is located in which part of the cell?
//             </p>
//             <p className="text-gray-600">Answer: Nucleus</p>
//           </div>

//         </div>
//       </section>

//       {/* SEO CONTENT */}
//       <section className="max-w-4xl mx-auto px-6 py-16 text-gray-700 leading-relaxed">
//         <h2 className="text-2xl font-bold mb-4">
//           NEET Biology Important Questions 2026
//         </h2>

//         <p className="mb-4">
//           NEET Biology important questions are selected based on previous year trends,
//           NCERT weightage, and frequently asked concepts. Practicing these questions
//           improves accuracy and boosts confidence.
//         </p>

//         <p className="mb-4">
//           Focus on chapters like Genetics, Human Physiology, and Ecology as they carry
//           high weightage in NEET exams.
//         </p>

//         <h3 className="text-xl font-semibold mt-6 mb-2">
//           How to prepare using important questions?
//         </h3>

//         <ul className="list-disc pl-6 space-y-2">
//           <li>Revise NCERT before solving</li>
//           <li>Practice daily chapter-wise questions</li>
//           <li>Analyze mistakes carefully</li>
//         </ul>

//         <p className="mt-6">
//           Also solve{" "}
//           <a href="/neet-mock-test-online" className="text-blue-600 underline">
//             NEET Mock Tests
//           </a>{" "}
//           to improve your score.
//         </p>
//       </section>

//       {/* FAQ */}
//       <section className="px-6 py-16 max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-10 text-center">❓ FAQs</h2>

//         <div className="space-y-6">
//           {faqs.map((faq, i) => (
//             <div key={i} className="bg-white p-6 rounded-xl shadow">
//               <h3 className="font-semibold text-lg">{faq.q}</h3>
//               <p className="text-gray-600 mt-2">{faq.a}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FAQ SCHEMA */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "FAQPage",
//             mainEntity: faqs.map((f) => ({
//               "@type": "Question",
//               name: f.q,
//               acceptedAnswer: {
//                 "@type": "Answer",
//                 text: f.a,
//               },
//             })),
//           }),
//         }}
//       />

//       {/* STICKY CTA */}
//       <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 flex justify-center">
//         <a
//           href="/neet-mock-test-online"
//           className="bg-[var(--color-accent)] text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition"
//         >
//           🔥 Practice Now
//         </a>
//       </div>

//     </div>
//   );
// }


// app/neet-biology-important-questions/page.jsx
// ✅ Next.js App Router | ✅ Server Component | ✅ Full SEO 2026

import Link from "next/link";
import Script from "next/script";

// ============================================================
// 1. METADATA — CTR-optimized, semantic, rich snippet ready
// ============================================================
export const metadata = {
  title: "NEET Biology Important Questions 2026 – Chapter-wise Most Expected & Repeated",
  description:
    "Download NEET Biology important questions 2026 chapter-wise — Genetics, Physiology, Ecology & more. Most expected, NCERT-based, PYQ-aligned questions with answers. Free PDF.",
  keywords: [
    "NEET biology important questions 2026",
    "NEET biology chapter wise questions",
    "most important questions for NEET biology",
    "NEET biology expected questions",
    "NEET biology practice questions with answers",
    "NEET biology questions from NCERT",
    "genetics important questions NEET",
    "human physiology NEET questions",
    "ecology NEET important questions",
    "biomolecules NEET questions",
    "cell biology NEET questions",
    "NEET 2026 biology preparation",
  ],
  alternates: {
    canonical: "https://www.rankupp.in/neet-biology-important-questions",
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
    title: "NEET Biology Important Questions 2026 – Chapter-wise Most Expected",
    description:
      "Practice NEET Biology important questions chapter-wise. Most expected, repeated & NCERT-based questions with answers. Trusted by 50,000+ NEET aspirants.",
    url: "https://www.rankupp.in/neet-biology-important-questions",
    siteName: "RankUpp",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://www.rankupp.in/og/neet-biology-important-questions.jpg",
        width: 1200,
        height: 630,
        alt: "NEET Biology Important Questions 2026 – RankUpp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEET Biology Important Questions 2026 – Chapter-wise Most Expected",
    description:
      "Practice NEET Biology important questions chapter-wise with answers. Free for all NEET 2026 aspirants.",
    images: ["https://www.rankupp.in/og/neet-biology-important-questions.jpg"],
    site: "@rankupp_in",
    creator: "@rankupp_in",
  },
  authors: [{ name: "RankUpp NEET Experts", url: "https://www.rankupp.in/about" }],
  category: "Education",
  classification: "NEET Preparation",
  other: {
    "theme-color": "#1a1a2e",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

// ============================================================
// 2. DATA
// ============================================================
const chapters = [
  {
    name: "Cell: The Unit of Life",
    slug: "cell-unit-of-life",
    count: 42,
    difficulty: "Medium",
    weightage: "High",
    icon: "🧬",
    topics: ["Cell organelles", "Prokaryotic vs Eukaryotic", "Cell membrane", "Nucleus"],
  },
  {
    name: "Biomolecules",
    slug: "biomolecules",
    count: 38,
    difficulty: "Hard",
    weightage: "Very High",
    icon: "⚗️",
    topics: ["Carbohydrates", "Proteins & Enzymes", "Nucleic Acids", "Lipids"],
  },
  {
    name: "Human Physiology",
    slug: "human-physiology",
    count: 65,
    difficulty: "Hard",
    weightage: "Very High",
    icon: "🫀",
    topics: ["Digestion", "Respiration", "Circulation", "Neural control", "Excretion"],
  },
  {
    name: "Genetics and Evolution",
    slug: "genetics-and-evolution",
    count: 58,
    difficulty: "Hard",
    weightage: "Very High",
    icon: "🧫",
    topics: ["Mendel's Laws", "Molecular basis of inheritance", "DNA replication", "Evolution"],
  },
  {
    name: "Ecology",
    slug: "ecology",
    count: 45,
    difficulty: "Medium",
    weightage: "High",
    icon: "🌿",
    topics: ["Ecosystems", "Biodiversity", "Population", "Environmental issues"],
  },
  {
    name: "Plant Physiology",
    slug: "plant-physiology",
    count: 36,
    difficulty: "Medium",
    weightage: "Medium",
    icon: "🌱",
    topics: ["Photosynthesis", "Respiration in Plants", "Plant growth", "Transport"],
  },
  {
    name: "Reproduction",
    slug: "reproduction",
    count: 40,
    difficulty: "Medium",
    weightage: "High",
    icon: "🔬",
    topics: ["Sexual reproduction in plants", "Human reproduction", "Reproductive health"],
  },
  {
    name: "Biotechnology",
    slug: "biotechnology",
    count: 30,
    difficulty: "Medium",
    weightage: "Medium",
    icon: "💉",
    topics: ["Recombinant DNA", "PCR", "Biotechnology applications", "GMOs"],
  },
];

const sampleQuestions = [
  {
    q: "Which organelle is known as the powerhouse of the cell and produces ATP via oxidative phosphorylation?",
    a: "Mitochondria — they carry out cellular respiration and synthesize ATP through the electron transport chain and chemiosmosis.",
    chapter: "Cell Biology",
    year: "NEET 2022",
    difficulty: "Easy",
  },
  {
    q: "In Mendel's experiment, what is the phenotypic ratio obtained in a dihybrid cross (F2 generation)?",
    a: "9:3:3:1 — This ratio represents dominant-dominant : dominant-recessive : recessive-dominant : recessive-recessive combinations.",
    chapter: "Genetics",
    year: "NEET 2023",
    difficulty: "Medium",
  },
  {
    q: "Which of the following is the correct site of fertilization in the human female reproductive system?",
    a: "Ampullary-isthmic junction of the fallopian tube (oviduct) — this is where the sperm typically meets the secondary oocyte.",
    chapter: "Human Reproduction",
    year: "NEET 2021",
    difficulty: "Medium",
  },
  {
    q: "What is the role of the enzyme RuBisCO in the Calvin cycle and why is it considered the most abundant enzyme on Earth?",
    a: "RuBisCO (Ribulose-1,5-bisphosphate carboxylase/oxygenase) catalyzes carbon fixation — binding CO₂ to RuBP. It's the most abundant enzyme because photosynthesis is the primary carbon-fixation process on Earth.",
    chapter: "Plant Physiology",
    year: "NEET 2023",
    difficulty: "Hard",
  },
  {
    q: "The concept of 'Ecological Pyramids' was given by which ecologist, and what does an inverted pyramid of biomass indicate?",
    a: "Charles Elton proposed ecological pyramids. An inverted pyramid of biomass (e.g., in aquatic ecosystems) indicates producers have less biomass than consumers at any given time, due to rapid turnover of phytoplankton.",
    chapter: "Ecology",
    year: "NEET 2022",
    difficulty: "Hard",
  },
];

const faqs = [
  {
    q: "Which chapters have the highest weightage in NEET Biology 2026?",
    a: "Human Physiology, Genetics & Evolution, Plant Physiology, and Ecology together account for approximately 60–65% of NEET Biology questions. Focus maximum preparation time on these chapters for the best returns.",
  },
  {
    q: "Are NCERT Biology books sufficient for NEET 2026?",
    a: "NCERT is the foundation and covers 80–85% of NEET Biology directly. However, for remaining questions — especially application-based ones — supplement with previous year questions (PYQs) and chapter-wise important questions available on RankUpp.",
  },
  {
    q: "How many Biology questions are there in NEET 2026?",
    a: "NEET 2026 has 90 Biology questions in total — 45 from Botany and 45 from Zoology — each carrying 4 marks, with a -1 negative marking. Biology section has a total of 360 marks out of 720.",
  },
  {
    q: "How many Biology questions should I practice daily for NEET?",
    a: "For strong NEET preparation, aim for 80–120 Biology questions daily. Practice chapter-wise for the first 3 months, then shift to mixed full-length mocks in the final 2 months before the exam.",
  },
  {
    q: "Is Biology easy to score in NEET compared to Physics and Chemistry?",
    a: "Yes, Biology is the highest-scoring section in NEET. With thorough NCERT mastery and consistent practice of important questions, scoring 340–360/360 in Biology is achievable and realistic.",
  },
  {
    q: "What are the most repeated topics in NEET Biology from previous years?",
    a: "The most repeated NEET Biology topics include: Genetics (Mendelism, Molecular Biology), Human Physiology (Heart, Kidney, Nervous System), Plant Physiology (Photosynthesis, Respiration), Ecology (Ecosystems, Biodiversity), and Cell Biology (Organelles, Cell division).",
  },
];

const stats = [
  { value: "90", label: "Biology Questions in NEET", suffix: "" },
  { value: "360", label: "Total Marks (Biology)", suffix: "" },
  { value: "50K+", label: "Students Practicing on RankUpp", suffix: "" },
  { value: "95%", label: "Questions from NCERT", suffix: "" },
];

const relatedPages = [
  { title: "NEET Mock Test Online", href: "/neet-mock-test-online", icon: "📝" },
  { title: "NEET Previous Year Questions", href: "/neet-pyq", icon: "📅" },
  { title: "NEET Biology Syllabus 2026", href: "/neet-syllabus-biology", icon: "📋" },
  { title: "NEET Chapter-wise Weightage", href: "/neet-chapter-wise-weightage", icon: "📊" },
  { title: "NEET Physics Important Questions", href: "/neet-physics-important-questions", icon: "⚡" },
  { title: "NEET Chemistry Important Questions", href: "/neet-chemistry-important-questions", icon: "🧪" },
];

// ============================================================
// 3. JSON-LD SCHEMAS
// ============================================================
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rankupp.in" },
    { "@type": "ListItem", position: 2, name: "NEET Preparation", item: "https://www.rankupp.in/neet" },
    {
      "@type": "ListItem",
      position: 3,
      name: "NEET Biology Important Questions",
      item: "https://www.rankupp.in/neet-biology-important-questions",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "NEET Biology Important Questions 2026 – Chapter-wise Most Expected & Repeated",
  description:
    "Practice NEET Biology important questions chapter-wise for 2026. Most expected and repeated questions with answers to boost your score.",
  author: { "@type": "Organization", name: "RankUpp", url: "https://www.rankupp.in" },
  publisher: {
    "@type": "Organization",
    name: "RankUpp",
    logo: { "@type": "ImageObject", url: "https://www.rankupp.in/logo.png" },
  },
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  mainEntityOfPage: "https://www.rankupp.in/neet-biology-important-questions",
  image: "https://www.rankupp.in/og/neet-biology-important-questions.jpg",
  keywords: "NEET biology important questions, NEET 2026, chapter-wise biology questions",
  about: { "@type": "Thing", name: "NEET Biology Preparation" },
  audience: { "@type": "Audience", audienceType: "Medical entrance exam students" },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NEET Biology Important Questions – Chapter-wise List",
  description: "Chapter-wise important questions for NEET Biology 2026",
  numberOfItems: chapters.length,
  itemListElement: chapters.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${c.name} – NEET Important Questions`,
    url: `https://www.rankupp.in/neet-biology-important-questions/${c.slug}`,
  })),
};

const educationalSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "RankUpp",
  url: "https://www.rankupp.in",
  description:
    "RankUpp is India's trusted NEET preparation platform offering chapter-wise questions, mock tests, and PYQs for 50,000+ medical aspirants.",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "NEET Biology Practice Resources",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Course", name: "NEET Biology Chapter-wise Questions" } },
      { "@type": "Offer", itemOffered: { "@type": "Course", name: "NEET Full Mock Tests" } },
    ],
  },
};

// ============================================================
// 4. PAGE COMPONENT
// ============================================================
export default function NEETBiologyImportantQuestionsPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="schema-itemlist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Script
        id="schema-educational"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalSchema) }}
      />

      <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-deep)]">

        {/* ── BREADCRUMB ── */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-6xl mx-auto px-6 pt-28 pb-2 text-sm text-gray-500"
        >
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:text-[var(--color-primary)]">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/neet" className="hover:text-[var(--color-primary)]">NEET</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-[var(--color-deep)] font-medium" aria-current="page">
              Biology Important Questions
            </li>
          </ol>
        </nav>

        {/* ── HERO SECTION ── */}
        <section className="px-6 py-14 text-center max-w-4xl mx-auto">
          <div className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            NEET 2026 Preparation
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-[var(--color-deep)]">
            NEET Biology Important Questions 2026{" "}
            <span className="text-[var(--color-accent)]">🔥 Chapter-wise</span>
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Practice the most expected, high-weightage, and frequently repeated NEET Biology
            questions for 2026 — curated from <strong>NCERT</strong>, previous year papers (PYQs),
            and expert analysis. Covers all chapters from Class 11 &amp; 12 Biology.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link
              href="/neet-mock-test-online"
              className="bg-[var(--color-accent)] text-white px-7 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              🚀 Start Free Practice
            </Link>
            <Link
              href="/neet-pyq"
              className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-7 py-3 rounded-xl font-semibold hover:bg-[var(--color-primary)] hover:text-white transition"
            >
              📅 Solve PYQs
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-gray-500">
            <span className="flex items-center gap-1">✅ NCERT-aligned</span>
            <span className="flex items-center gap-1">✅ PYQ-based</span>
            <span className="flex items-center gap-1">✅ Free for all students</span>
            <span className="flex items-center gap-1">✅ 50,000+ students trusted</span>
          </div>
        </section>

        {/* ── STATS ── */}
        <section
          aria-label="NEET Biology Quick Stats"
          className="bg-[var(--color-primary)] text-white py-10 px-6"
        >
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-extrabold">
                  {s.value}
                  {s.suffix}
                </p>
                <p className="text-sm mt-1 opacity-80">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SEO INTRO CONTENT ── */}
        <section className="max-w-4xl mx-auto px-6 py-14 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-[var(--color-deep)] mb-4">
            Why Practice NEET Biology Important Questions 2026?
          </h2>
          <p className="mb-4">
            NEET Biology carries <strong>360 out of 720 marks</strong> — making it the single
            largest section in the exam. Unlike Physics and Chemistry, Biology rewards consistent
            practice and NCERT mastery more than conceptual derivation. Students who systematically
            practice chapter-wise important questions consistently score <strong>340–360/360</strong>{" "}
            in Biology.
          </p>
          <p className="mb-4">
            Our NEET Biology important questions for 2026 are curated by subject matter experts
            based on a rigorous analysis of{" "}
            <Link href="/neet-pyq" className="text-[var(--color-primary)] underline font-medium">
              NEET previous year question papers (2011–2024)
            </Link>
            , NTA's official syllabus, and NCERT chapter weightage. Every question is mapped to
            its source chapter, difficulty level, and frequency of appearance in past exams.
          </p>
          <p>
            Focus areas for NEET 2026 Biology include <strong>Genetics and Evolution</strong>{" "}
            (12–15 questions), <strong>Human Physiology</strong> (14–16 questions),{" "}
            <strong>Ecology</strong> (10–12 questions), and{" "}
            <strong>Plant Physiology</strong> (8–10 questions). Together, these four units make up
            nearly 60% of the entire Biology section.
          </p>
        </section>

        {/* ── CHAPTER-WISE CARDS ── */}
        <section
          id="chapter-wise-questions"
          aria-labelledby="chapter-heading"
          className="px-6 py-10 max-w-6xl mx-auto"
        >
          <h2
            id="chapter-heading"
            className="text-3xl font-extrabold mb-3 text-center text-[var(--color-deep)]"
          >
            📚 Chapter-wise Important Questions – NEET Biology 2026
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
            Select any chapter to practice targeted questions. Each set is ordered by
            NEET weightage and difficulty level.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((ch, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{ch.icon}</span>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-full ${
                      ch.weightage === "Very High"
                        ? "bg-red-100 text-red-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {ch.weightage} Weightage
                  </span>
                </div>

                <h3 className="font-bold text-lg text-[var(--color-deep)] mb-1">{ch.name}</h3>
                <p className="text-sm text-gray-500 mb-3">
                  {ch.count} questions · Difficulty:{" "}
                  <span
                    className={
                      ch.difficulty === "Hard"
                        ? "text-red-600 font-semibold"
                        : "text-yellow-600 font-semibold"
                    }
                  >
                    {ch.difficulty}
                  </span>
                </p>

                <ul className="text-xs text-gray-500 space-y-1 mb-4">
                  {ch.topics.map((t, j) => (
                    <li key={j} className="flex items-center gap-1">
                      <span className="text-green-500">✓</span> {t}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/neet-biology-important-questions/${ch.slug}`}
                  className="inline-block w-full text-center bg-[var(--color-primary)] text-white rounded-lg py-2.5 text-sm font-semibold hover:bg-[var(--color-accent)] transition"
                  aria-label={`Practice ${ch.name} important questions for NEET`}
                >
                  Practice Now →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ── SAMPLE QUESTIONS ── */}
        <section
          id="sample-questions"
          aria-labelledby="sample-heading"
          className="max-w-4xl mx-auto px-6 py-14"
        >
          <h2
            id="sample-heading"
            className="text-2xl md:text-3xl font-extrabold mb-3 text-[var(--color-deep)]"
          >
            🔥 Sample NEET Biology Important Questions with Answers
          </h2>
          <p className="text-gray-500 mb-8">
            These questions are from{" "}
            <Link href="/neet-pyq" className="text-[var(--color-primary)] underline">
              NEET previous years
            </Link>{" "}
            and are highly expected to repeat in NEET 2026.
          </p>

          <div className="space-y-6">
            {sampleQuestions.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
                itemScope
                itemType="https://schema.org/Question"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
                    {item.chapter}
                  </span>
                  <span className="bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                    {item.year}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      item.difficulty === "Hard"
                        ? "bg-red-50 text-red-700"
                        : item.difficulty === "Medium"
                        ? "bg-yellow-50 text-yellow-700"
                        : "bg-gray-50 text-gray-700"
                    }`}
                  >
                    {item.difficulty}
                  </span>
                </div>

                <p className="font-semibold text-[var(--color-deep)] mb-3" itemProp="name">
                  Q{i + 1}. {item.q}
                </p>

                <div
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                  className="bg-green-50 border-l-4 border-green-500 pl-4 py-3 rounded-r-lg"
                >
                  <p className="text-sm text-gray-700" itemProp="text">
                    <strong className="text-green-700">Answer:</strong> {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/neet-mock-test-online"
              className="inline-block bg-[var(--color-accent)] text-white px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition-transform"
            >
              🚀 Practice 500+ More Questions Free
            </Link>
          </div>
        </section>

        {/* ── HOW TO PREPARE ── */}
        <section className="bg-gray-50 px-6 py-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-[var(--color-deep)]">
              📋 How to Use Important Questions for NEET Biology 2026
            </h2>
            <p className="text-gray-600 mb-8">
              A proven step-by-step strategy used by NEET toppers to maximize Biology scores.
            </p>

            <ol className="space-y-5">
              {[
                {
                  step: "1",
                  title: "Master NCERT First",
                  desc: "Read NCERT Biology Class 11 & 12 thoroughly. Every diagram, every definition, and every example is exam-relevant. At least 80% of NEET Biology comes directly from NCERT.",
                },
                {
                  step: "2",
                  title: "Practice Chapter-wise Important Questions",
                  desc: "After each chapter, immediately solve 40–50 important questions mapped to that topic. This reinforces concepts and exposes frequently tested patterns before they appear in exams.",
                },
                {
                  step: "3",
                  title: "Analyze Previous Year Patterns",
                  desc: "Study NEET PYQs from 2015–2024 to identify repeating concepts, question styles, and common traps. Genetics, Physiology, and Ecology have strong repeating patterns.",
                },
                {
                  step: "4",
                  title: "Take Full-length Mock Tests",
                  desc: "Practice at least 2 full-length NEET mock tests per week in exam conditions. Time management in Biology (90 questions in ~50 minutes) is a learnable skill.",
                },
                {
                  step: "5",
                  title: "Revise Weak Areas Weekly",
                  desc: "Maintain an error log. Review wrong answers every Sunday. Focus 60% of revision time on your weak chapters — typically Biomolecules and Human Physiology for most students.",
                },
              ].map((s, i) => (
                <li key={i} className="flex gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-deep)] mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── TOPICAL AUTHORITY CONTENT ── */}
        <section className="max-w-4xl mx-auto px-6 py-14 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-[var(--color-deep)] mb-4">
            Most Important Topics in NEET Biology 2026 – Chapter-wise Weightage Analysis
          </h2>

          <p className="mb-4">
            Based on analysis of NEET question papers from 2011 to 2024, the following chapters
            and topics receive consistent heavy representation every year. Understanding this
            distribution helps students prioritize effort and maximize their Biology score.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-deep)] mt-6 mb-3">
            Genetics and Evolution (12–15 Questions)
          </h3>
          <p className="mb-4">
            This is consistently the highest-weighted unit in NEET Biology. Key areas include
            Mendel's laws of inheritance, molecular basis of inheritance (DNA replication,
            transcription, translation), chromosomal theory, mutations, and evolution theories
            (Darwinism, Modern Synthesis). Questions from this unit often involve application
            of Punnett squares, blood group genetics, and molecular biology numericals.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-deep)] mt-6 mb-3">
            Human Physiology (14–16 Questions)
          </h3>
          <p className="mb-4">
            Human Physiology spans digestion, circulation, respiration, excretion, locomotion,
            neural and chemical integration, and immune response. NEET regularly tests specific
            values — cardiac output, tidal volume, glomerular filtration rate — so learn these
            numbers precisely from NCERT. Process-based questions (steps of digestion,
            mechanism of muscle contraction) are very common.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-deep)] mt-6 mb-3">
            Ecology and Environment (10–12 Questions)
          </h3>
          <p className="mb-4">
            Ecology questions are largely factual and concept-based, making them the easiest
            marks to secure with focused preparation. Important areas include ecosystem structure
            and function, energy flow, nutrient cycling, population ecology, biodiversity
            conservation, and environmental issues. Questions about named ecosystems, specific
            species, and conservation terminology appear regularly.
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-deep)] mt-6 mb-3">
            Plant Physiology (8–10 Questions)
          </h3>
          <p className="mb-4">
            Photosynthesis (light reaction, dark reaction/Calvin cycle, C3 vs C4 pathways)
            and plant respiration (glycolysis, Krebs cycle, ETC) are the most tested areas.
            Plant growth regulators (phytohormones) and their specific functions — auxins,
            cytokinins, gibberellins, abscisic acid, ethylene — are also frequently tested.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-6">
            <p className="text-blue-800 font-semibold text-sm">
              💡 Expert Tip: If you can score 85%+ in Genetics, Physiology, and Ecology alone,
              you will likely score 300+ in Biology. These three units cover ~45 of the 90
              Biology questions in NEET 2026.
            </p>
          </div>
        </section>

        {/* ── RELATED PAGES (INTERNAL LINKING) ── */}
        <section className="bg-gray-50 px-6 py-14">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-[var(--color-deep)] mb-8">
              🔗 Related NEET Preparation Resources
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {relatedPages.map((p, i) => (
                <Link
                  key={i}
                  href={p.href}
                  className="flex items-center gap-3 bg-white px-4 py-4 rounded-xl shadow-sm border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-md transition font-medium text-sm text-[var(--color-deep)]"
                >
                  <span className="text-xl">{p.icon}</span>
                  {p.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          id="faqs"
          aria-labelledby="faq-heading"
          className="max-w-4xl mx-auto px-6 py-14"
        >
          <h2
            id="faq-heading"
            className="text-3xl font-extrabold mb-10 text-center text-[var(--color-deep)]"
          >
            ❓ Frequently Asked Questions – NEET Biology 2026
          </h2>

          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3
                  className="font-bold text-[var(--color-deep)] text-base mb-2"
                  itemProp="name"
                >
                  {faq.q}
                </h3>
                <div
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <p className="text-gray-600 text-sm leading-relaxed" itemProp="text">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EEAT / TRUST SECTION ── */}
        <section className="bg-[var(--color-primary)] text-white px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">
              Why Trust RankUpp for NEET Biology Preparation?
            </h2>
            <p className="opacity-80 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
              RankUpp's NEET Biology question bank is curated by experienced biology educators
              with 10+ years of NEET teaching experience. All questions are verified against
              official NCERT textbooks and NTA guidelines. Updated regularly with the latest
              exam trends.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { icon: "🏆", label: "Expert-curated Questions" },
                { icon: "📖", label: "100% NCERT Aligned" },
                { icon: "📊", label: "PYQ Pattern Analysis" },
                { icon: "🆓", label: "Completely Free" },
              ].map((f, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl mb-1">{f.icon}</p>
                  <p className="text-sm font-semibold">{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="text-center px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-deep)] mb-4">
            Ready to Score 360/360 in NEET Biology? 🎯
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Start practicing chapter-wise important questions now — completely free. Join
            50,000+ NEET aspirants already preparing on RankUpp.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/neet-mock-test-online"
              className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform text-base"
            >
              🚀 Start Free Mock Test
            </Link>
            <Link
              href="/neet-pyq"
              className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold hover:bg-[var(--color-primary)] hover:text-white transition text-base"
            >
              📅 Solve NEET PYQs
            </Link>
          </div>
        </section>

        {/* ── STICKY BOTTOM CTA ── */}
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3 flex justify-center z-50">
          <Link
            href="/neet-mock-test-online"
            className="bg-[var(--color-accent)] text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform text-sm md:text-base"
          >
            🔥 Practice NEET Biology Questions — Free
          </Link>
        </div>

        {/* Bottom padding for sticky CTA */}
        <div className="h-20" aria-hidden="true" />
      </div>
    </>
  );
}