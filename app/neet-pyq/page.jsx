// export const metadata = {
//   title: "NEET PYQ Chapter-wise (1988–2026) 📚 Free PDF + Solutions 🔥",
//   description:
//     "Download NEET previous year questions chapter-wise with detailed solutions (1988–2026). Practice most repeated PYQs and boost your NEET score fast.",
//   keywords: [
//     "neet pyq",
//     "neet previous year questions",
//     "neet pyq chapter wise",
//     "neet pyq pdf",
//     "neet questions with solutions",
//   ],
// };

// export default function NeetPYQPage() {
//   const stats = [
//     { label: "Years Covered", value: "1988–2026" },
//     { label: "Questions", value: "20,000+" },
//     { label: "Subjects", value: "3" },
//     { label: "Accuracy Boost", value: "95%" },
//   ];

//   const subjects = [
//     {
//       title: "🧬 Biology",
//       color: "green",
//       topics: ["Class 11 PYQ", "Class 12 PYQ", "NCERT Based Questions"],
//       btn: "bg-green-500",
//     },
//     {
//       title: "🧪 Chemistry",
//       color: "blue",
//       topics: ["Organic PYQ", "Inorganic PYQ", "Physical PYQ"],
//       btn: "bg-blue-500",
//     },
//     {
//       title: "⚡ Physics",
//       color: "purple",
//       topics: ["Mechanics PYQ", "Modern Physics", "Electrostatics"],
//       btn: "bg-purple-500",
//     },
//   ];

//   const colorMap = {
//     green: "text-green-600",
//     blue: "text-blue-600",
//     purple: "text-purple-600",
//   };

//   const faqs = [
//     {
//       q: "Are NEET PYQs enough for 600+?",
//       a: "Yes, but combine PYQs with NCERT for best results.",
//     },
//     {
//       q: "How many years PYQs should I solve?",
//       a: "At least 10–15 years.",
//     },
//     {
//       q: "Are questions repeated in NEET?",
//       a: "Yes, many concepts are repeated frequently.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-deep)]">

//       {/* HERO */}
//       <section className="px-6 py-16 text-center">
//         <h1 className="text-3xl md:text-5xl mt-10 font-bold leading-tight">
//           NEET PYQ Chapter-wise{" "}
//           <span className="text-[var(--color-accent)]">(1988–2026)</span>
//         </h1>

//         <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
//           Practice the most repeated NEET questions with detailed solutions. Boost your score faster 🚀
//         </p>

//         <div className="mt-8 flex justify-center gap-4 flex-wrap">
//           <a
//             href="#"
//             className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
//           >
//             📥 Download PDF
//           </a>

//           <a
//             href="/neet-mock-test-online"
//             className="border border-[var(--color-primary)] px-6 py-3 rounded-xl hover:bg-[var(--color-primary)] hover:text-white transition"
//           >
//             🧠 Start Practice
//           </a>
//         </div>
//       </section>

//       {/* STATS */}
//       <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-12 max-w-5xl mx-auto">
//         {stats.map((item, i) => (
//           <div key={i} className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
//             <h3 className="text-2xl font-bold text-[var(--color-primary)]">{item.value}</h3>
//             <p className="text-gray-500">{item.label}</p>
//           </div>
//         ))}
//       </section>

//       {/* SUBJECTS */}
//       <section className="px-6 py-16 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold mb-10 text-center">
//           📚 Chapter-wise PYQ Practice
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {subjects.map((sub, i) => (
//             <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition">
//               <h3 className={`text-xl font-semibold mb-4 ${colorMap[sub.color]}`}>
//                 {sub.title}
//               </h3>

//               <ul className="space-y-2 text-gray-600">
//                 {sub.topics.map((t, idx) => (
//                   <li key={idx}>{t}</li>
//                 ))}
//               </ul>

//               <a
//                 href="/neet-mock-test-online"
//                 className={`mt-6 block text-center w-full ${sub.btn} text-white py-2 rounded-lg hover:opacity-90`}
//               >
//                 Start Practice
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SEO CONTENT */}
//       <section className="max-w-4xl mx-auto px-6 py-16 text-gray-700 leading-relaxed">
//         <h2 className="text-2xl font-bold mb-4">
//           NEET Previous Year Questions (PYQ) Chapter-wise
//         </h2>

//         <p className="mb-4">
//           NEET previous year questions (PYQs) are one of the most powerful resources
//           for exam preparation. By solving chapter-wise NEET PYQs, students can
//           understand the exam pattern, identify important topics, and improve accuracy.
//         </p>

//         <p className="mb-4">
//           Practicing NEET PYQs from 1988 to 2026 helps in mastering frequently asked
//           concepts in Biology, Chemistry, and Physics.
//         </p>

//         <h3 className="text-xl font-semibold mt-6 mb-2">
//           Why NEET PYQs are important?
//         </h3>

//         <ul className="list-disc pl-6 space-y-2">
//           <li>Understand real exam pattern</li>
//           <li>Identify most repeated questions</li>
//           <li>Improve speed and accuracy</li>
//           <li>Strengthen concept clarity</li>
//         </ul>

//         <p className="mt-6">
//           Try our{" "}
//           <a href="/neet-mock-test-online" className="text-blue-600 underline">
//             NEET Mock Test
//           </a>{" "}
//           to test your preparation level.
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
//           🔥 Start Practicing Now
//         </a>
//       </div>

//     </div>
//   );
// }




import Link from "next/link";

// ============================================================
// METADATA
// ============================================================

export const metadata = {
  title: "NEET PYQ Chapter-Wise 1988–2026 | Previous Year Questions Free PDF + Solutions",
  description:
    "Solve 20,000+ NEET previous year questions (PYQ) chapter-wise from 1988–2026. Biology, Physics & Chemistry PYQs with detailed solutions. Free PDF download. Most repeated questions analysis. Trusted by 2L+ NEET aspirants.",
  keywords: [
    "neet pyq chapter wise 2026",
    "neet previous year questions chapter wise",
    "neet pyq pdf free download",
    "neet pyq with solutions",
    "neet pyq biology chapter wise",
    "neet pyq physics chapter wise",
    "neet pyq chemistry chapter wise",
    "neet previous year questions 1988 to 2026",
    "neet most repeated questions",
    "neet pyq analysis",
    "neet previous year paper with solution",
    "neet biology pyq chapter wise",
    "neet physics pyq chapter wise",
    "neet chemistry pyq chapter wise",
    "neet pyq free online practice",
  ],
  alternates: {
    canonical: "https://www.rankupp.in/neet-pyq",
  },
  openGraph: {
    type: "website",
    url: "https://www.rankupp.in/neet-pyq",
    title: "NEET PYQ Chapter-Wise 1988–2026 | Free PDF + Solutions — RankUpp",
    description:
      "20,000+ NEET PYQs chapter-wise from 1988–2026 with detailed solutions. Free PDF. Most repeated questions for Biology, Physics & Chemistry.",
    siteName: "RankUpp",
    images: [
      {
        url: "https://www.rankupp.in/og/neet-pyq.jpg",
        width: 1200,
        height: 630,
        alt: "NEET PYQ Chapter-Wise 1988–2026 — Free PDF + Solutions — RankUpp",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rankupp_in",
    creator: "@rankupp_in",
    title: "NEET PYQ Chapter-Wise 1988–2026 | Free PDF + Solutions",
    description:
      "20,000+ NEET previous year questions chapter-wise — Biology, Physics, Chemistry. Free solutions. Start now.",
    images: ["https://www.rankupp.in/og/neet-pyq.jpg"],
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
    "theme-color": "#0f172a",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "RankUpp NEET PYQ",
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
    "RankUpp provides 20,000+ NEET PYQs chapter-wise from 1988–2026 with detailed solutions, trend analysis, and mock test practice for NEET 2026 aspirants.",
  sameAs: [
    "https://www.instagram.com/rankupp_in",
    "https://www.youtube.com/@rankupp",
    "https://twitter.com/rankupp_in",
  ],
  foundingDate: "2023",
  areaServed: "IN",
  knowsAbout: ["NEET PYQ", "NEET Previous Year Questions", "Medical Entrance Exam", "NEET Biology PYQ", "NEET Physics PYQ", "NEET Chemistry PYQ"],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.rankupp.in/neet-pyq#webpage",
  url: "https://www.rankupp.in/neet-pyq",
  name: "NEET PYQ Chapter-Wise 1988–2026 | Previous Year Questions Free PDF + Solutions",
  description: "20,000+ NEET PYQs chapter-wise from 1988–2026 with solutions for Biology, Physics & Chemistry.",
  inLanguage: "en-IN",
  datePublished: "2024-01-01",
  dateModified: "2026-01-01",
  breadcrumb: { "@id": "https://www.rankupp.in/neet-pyq#breadcrumb" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.rankupp.in/neet-pyq#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rankupp.in" },
    { "@type": "ListItem", position: 2, name: "NEET Preparation", item: "https://www.rankupp.in/neet-preparation" },
    { "@type": "ListItem", position: 3, name: "NEET PYQ", item: "https://www.rankupp.in/neet-pyq" },
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "NEET PYQ Chapter-Wise Practice 1988–2026",
  description: "Complete NEET previous year questions bank — 20,000+ questions chapter-wise for Biology, Physics and Chemistry from 1988 to 2026 with detailed solutions.",
  provider: { "@type": "Organization", name: "RankUpp", sameAs: "https://www.rankupp.in" },
  url: "https://www.rankupp.in/neet-pyq",
  courseMode: "online",
  isAccessibleForFree: true,
  educationalLevel: "Higher Secondary",
  inLanguage: "en-IN",
  audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "NEET Aspirants" },
  teaches: ["NEET Biology PYQ", "NEET Physics PYQ", "NEET Chemistry PYQ", "NEET Exam Pattern", "Most Repeated NEET Questions"],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NEET PYQ Chapter-Wise Subject List",
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "NEET Biology PYQ Chapter-Wise 1988–2026",
      url: "https://www.rankupp.in/neet-pyq/biology",
      description: "All NEET Biology previous year questions chapter-wise from 1988–2026 with solutions — Cell, Genetics, Ecology, Human Physiology & more.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "NEET Physics PYQ Chapter-Wise 1988–2026",
      url: "https://www.rankupp.in/neet-pyq/physics",
      description: "All NEET Physics previous year questions chapter-wise from 1988–2026 — Mechanics, Modern Physics, Electrostatics, Optics & more.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "NEET Chemistry PYQ Chapter-Wise 1988–2026",
      url: "https://www.rankupp.in/neet-pyq/chemistry",
      description: "All NEET Chemistry previous year questions chapter-wise from 1988–2026 — Organic, Inorganic, Physical Chemistry PYQs with solutions.",
    },
  ],
};

const faqSchemaData = [
  {
    q: "Are NEET PYQs enough to score 600+ in NEET 2026?",
    a: "NEET PYQs alone are not enough for 600+, but they are the most critical component of preparation. Students who thoroughly solve chapter-wise PYQs from the last 15–20 years typically find that 60–70% of actual NEET questions are either direct repeats or close variants of previous questions. The correct approach is: complete NCERT reading first (providing the conceptual foundation), then solve PYQs chapter-wise to understand exam application patterns, and finally attempt full-length mock tests. Students who do all three — NCERT + PYQ + Mock Tests — consistently score in the 600–680 range. PYQ practice alone, without NCERT mastery, produces diminishing returns because some NEET questions test applications that PYQs alone don't prepare you for.",
  },
  {
    q: "How many years of NEET PYQs should I solve for NEET 2026?",
    a: "Solve at least 15 years of NEET PYQs for NEET 2026 — ideally all available papers from 2010 to 2025. For Biology, solving PYQs from 1988 onwards is highly recommended because NEET Biology frequently repeats questions even from papers 20–30 years old. For Physics and Chemistry, the last 10–12 years are most relevant as the syllabus and question style have evolved significantly. The most important papers for pattern analysis are the last 5 years (2020–2025), as they reflect the current NTA examination style. Start with recent years first to understand today's pattern, then go backward to build comprehensive topic coverage.",
  },
  {
    q: "Are questions actually repeated in NEET?",
    a: "Yes — NEET question repetition is documented and significant. Analysis of NEET papers from 2013–2024 shows that approximately 30–40% of questions in each Biology paper are direct or near-direct repeats from previous years. For Chemistry, repetition is around 20–25%, and for Physics, around 15–20%. Concept-level repetition (the same physical principle tested in a slightly different scenario) is even higher — close to 60–70% in Biology. This is precisely why chapter-wise PYQ practice is the highest-ROI activity for NEET preparation. A student who has practiced all PYQs chapter-wise has effectively previewed a large fraction of what will appear on their actual exam day.",
  },
  {
    q: "What is the best way to practice NEET PYQs?",
    a: "The most effective NEET PYQ practice method is chapter-wise, not year-wise. Instead of solving a full 2019 paper from start to finish, solve all NEET PYQs on 'Genetics and Evolution' together, then all PYQs on 'Electrostatics' together, and so on. This approach reveals the exam pattern for each topic — which concepts recur, which formula applications are tested most, and which NCERT lines generate the most questions. After completing chapter-wise PYQs for all chapters, switch to year-wise full papers in the final 2–3 months for timing practice. Track your accuracy chapter-wise and prioritize revision in chapters where PYQ accuracy falls below 70%.",
  },
  {
    q: "Which subject has the most repeated PYQs in NEET?",
    a: "Biology has the highest rate of question repetition in NEET, making Biology PYQ practice the most directly rewarding investment of your time. NEET Biology questions are primarily sourced from NCERT — a finite, unchanging text — so the pool of possible questions is limited and recurrence is natural. Specific Biology topics with extremely high repetition rates include: Cell organelle functions, Human Physiology (digestion, nephron, cardiac cycle), Genetic crosses and pedigree problems, Ecological terms and organism examples, and Reproductive system anatomy. Physics and Chemistry have lower repetition rates but still show significant concept-level repetition, particularly in Modern Physics, Electrochemistry, and Coordination Compounds.",
  },
  {
    q: "Is solving NEET PYQs from 1988 really useful?",
    a: "For Biology — yes, absolutely. NEET Biology questions from the 1980s and 1990s frequently appear in modern NEET papers in identical or near-identical form because the NCERT Biology textbook content has remained largely unchanged. Questions on mitosis stages, hormone functions, ecological relationships, and digestive enzyme roles from pre-2000 papers have appeared verbatim in NEET papers as recently as 2022–2024. For Physics and Chemistry, papers older than 2005 are less directly useful for the current NTA pattern, but they provide excellent concept practice. RankUpp tags each PYQ with its year of appearance, so students can quickly see which questions have been repeated and how recently.",
  },
  {
    q: "How should I analyse NEET PYQs to identify most important topics?",
    a: "Effective NEET PYQ analysis follows a structured process: (1) Download or access all PYQs for each subject organized by chapter. (2) Count how many times each chapter appears across all years — chapters with 5+ questions per paper are your highest priorities. (3) Within each chapter, identify which specific concepts, facts, or formula types appear most repeatedly — these are guaranteed exam topics. (4) For Biology, map repeated questions back to their NCERT lines to identify the exact textbook content being tested. (5) Build a 'hot topics' list for each chapter with the 5–10 most repeatedly tested concepts. RankUpp's PYQ platform does this analysis automatically, showing each question's frequency of appearance across NEET years.",
  },
  {
    q: "Can I download NEET PYQs PDF for free from RankUpp?",
    a: "Yes. RankUpp provides free downloadable NEET PYQ PDFs organized both chapter-wise and year-wise. The chapter-wise PDF is recommended for systematic preparation — it groups all Biology, Physics, and Chemistry questions by topic, making pattern recognition easy. The year-wise PDF is useful for full paper simulation in the final preparation phase. All PDFs include detailed solutions with NCERT source references for Biology questions and step-by-step calculation explanations for Physics and Chemistry. PDFs are updated with the most recent NEET papers and are available without mandatory signup.",
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

const stats = [
  { label: "Years Covered", value: "1988–2026", icon: "📅", sub: "38 years of NEET papers" },
  { label: "Total Questions", value: "20,000+", icon: "❓", sub: "All subjects combined" },
  { label: "Subjects", value: "3", icon: "📚", sub: "Biology · Physics · Chemistry" },
  { label: "Students Practicing", value: "2L+", icon: "👨‍🎓", sub: "Trusted across India" },
];

const subjects = [
  {
    id: "biology",
    title: "Biology",
    icon: "🧬",
    tagline: "Highest Repetition Rate — Start Here",
    badge: "Most Important",
    badgeClass: "bg-green-100 text-green-800",
    gradient: "from-green-500 to-emerald-600",
    lightBg: "bg-green-50",
    border: "border-green-200",
    accentText: "text-green-700",
    accentBg: "bg-green-500",
    chapters: [
      { name: "Cell: The Unit of Life", questions: 120, years: "1990–2024" },
      { name: "Genetics and Evolution", questions: 185, years: "1988–2024" },
      { name: "Human Physiology", questions: 210, years: "1988–2024" },
      { name: "Ecology", questions: 145, years: "1990–2024" },
      { name: "Reproduction", questions: 160, years: "1992–2024" },
      { name: "Biomolecules", questions: 110, years: "1994–2024" },
    ],
    href: "/neet-pyq/biology",
    class11: 48,
    class12: 52,
  },
  {
    id: "chemistry",
    title: "Chemistry",
    icon: "🧪",
    tagline: "High Concept Repetition — Organic & Inorganic",
    badge: "High Scoring",
    badgeClass: "bg-blue-100 text-blue-800",
    gradient: "from-blue-500 to-cyan-600",
    lightBg: "bg-blue-50",
    border: "border-blue-200",
    accentText: "text-blue-700",
    accentBg: "bg-blue-500",
    chapters: [
      { name: "Organic Chemistry — Basics", questions: 95, years: "1995–2024" },
      { name: "Coordination Compounds", questions: 85, years: "1998–2024" },
      { name: "Electrochemistry", questions: 75, years: "1997–2024" },
      { name: "Chemical Bonding", questions: 90, years: "1994–2024" },
      { name: "Aldehydes & Ketones", questions: 70, years: "1998–2024" },
      { name: "d & f Block Elements", questions: 65, years: "2000–2024" },
    ],
    href: "/neet-pyq/chemistry",
    class11: 50,
    class12: 50,
  },
  {
    id: "physics",
    title: "Physics",
    icon: "⚡",
    tagline: "Concept + Numericals — PYQs Reveal the Pattern",
    badge: "Rank Decider",
    badgeClass: "bg-purple-100 text-purple-800",
    gradient: "from-purple-500 to-indigo-600",
    lightBg: "bg-purple-50",
    border: "border-purple-200",
    accentText: "text-purple-700",
    accentBg: "bg-purple-500",
    chapters: [
      { name: "Modern Physics", questions: 135, years: "1990–2024" },
      { name: "Electrostatics", questions: 120, years: "1990–2024" },
      { name: "Optics", questions: 110, years: "1992–2024" },
      { name: "Kinematics", questions: 85, years: "1988–2024" },
      { name: "Current Electricity", questions: 100, years: "1993–2024" },
      { name: "Thermodynamics", questions: 90, years: "1994–2024" },
    ],
    href: "/neet-pyq/physics",
    class11: 55,
    class12: 45,
  },
];

const repetitionData = [
  { subject: "Biology", repetition: 92, color: "bg-green-500", label: "Direct or concept-level question repetition" },
  { subject: "Chemistry", repetition: 74, color: "bg-blue-500", label: "Concept-level repetition across years" },
  { subject: "Physics", repetition: 61, color: "bg-purple-500", label: "Concept-level repetition across years" },
];

const pyqStrategy = [
  {
    step: "01",
    icon: "📖",
    title: "NCERT First — Always",
    desc: "Before touching PYQs, complete NCERT for that chapter. PYQs without NCERT knowledge is like answering without understanding — you memorize answers without building the ability to handle modified questions.",
  },
  {
    step: "02",
    icon: "📂",
    title: "Chapter-Wise, Not Year-Wise",
    desc: "Group all NEET questions on 'Genetics' together, then all on 'Optics' — don't solve year-wise papers first. Chapter-wise PYQ reveals which concepts are tested repeatedly, which is the entire insight you need.",
  },
  {
    step: "03",
    icon: "🔍",
    title: "Map Every Question to NCERT",
    desc: "For Biology especially, trace every PYQ answer back to its exact NCERT sentence. This builds the habit of NCERT-level reading and proves that NCERT is sufficient when read at depth.",
  },
  {
    step: "04",
    icon: "📊",
    title: "Track Chapter-Wise Accuracy",
    desc: "After completing PYQs for each chapter, record your accuracy. Chapters below 65% accuracy need one more NCERT revision before you move forward. Don't skip this step — it's where preparation becomes targeted.",
  },
  {
    step: "05",
    icon: "🔁",
    title: "Identify and Drill Repeaters",
    desc: "Mark questions that have appeared in 3 or more NEET papers — these are near-guaranteed repeats. Create a dedicated 'high-frequency PYQ' list per subject and revise it every two weeks.",
  },
  {
    step: "06",
    icon: "🧪",
    title: "Full Papers in Final Phase",
    desc: "After completing all chapter-wise PYQs, switch to year-wise full paper practice in the final 2–3 months. This builds the timing and stamina for the real 3-hour exam while reinforcing PYQ patterns.",
  },
];

const samplePYQs = [
  {
    id: "B-001",
    subject: "Biology",
    year: "NEET 2023",
    chapter: "Human Physiology",
    frequency: "Asked 4 times (2013, 2017, 2020, 2023)",
    question: "Which of the following is the site of ultrafiltration in the nephron?",
    options: ["A. Bowman's capsule", "B. Loop of Henle", "C. Proximal convoluted tubule", "D. Collecting duct"],
    answer: "A. Bowman's capsule",
    explanation: "Ultrafiltration occurs at the glomerulus — blood is filtered under high pressure into the Bowman's capsule, forming the glomerular filtrate. NCERT Class 11 Chapter 19.",
    subjectColor: "bg-green-100 text-green-800",
    borderColor: "border-green-200",
  },
  {
    id: "P-001",
    subject: "Physics",
    year: "NEET 2022",
    chapter: "Modern Physics",
    frequency: "Asked 5 times (2013, 2015, 2018, 2021, 2022)",
    question: "The photoelectric effect supports the quantum nature of light because:",
    options: [
      "A. There is a minimum frequency below which no electrons are emitted",
      "B. The maximum KE of photoelectrons depends on intensity",
      "C. Even at low intensities, electrons are emitted",
      "D. Only A and C",
    ],
    answer: "D. Only A and C",
    explanation: "Einstein's photoelectric equation: KE_max = hf − φ. Below threshold frequency (φ/h), no electrons emit regardless of intensity. KE_max depends on frequency, not intensity — proving the quantum (photon) model. NCERT Class 12 Chapter 11.",
    subjectColor: "bg-purple-100 text-purple-800",
    borderColor: "border-purple-200",
  },
  {
    id: "C-001",
    subject: "Chemistry",
    year: "NEET 2024",
    chapter: "Coordination Compounds",
    frequency: "Asked 3 times (2018, 2021, 2024)",
    question: "The hybridization of the central metal ion in [Ni(CN)₄]²⁻ is:",
    options: ["A. sp³", "B. dsp²", "C. sp³d", "D. d²sp³"],
    answer: "B. dsp²",
    explanation: "CN⁻ is a strong field ligand. In [Ni(CN)₄]²⁻, Ni²⁺ has d⁸ configuration. Strong field CN⁻ causes pairing, making it square planar with dsp² hybridization. NCERT Class 12 Chapter 9.",
    subjectColor: "bg-blue-100 text-blue-800",
    borderColor: "border-blue-200",
  },
];

const relatedLinks = [
  { href: "/neet-mock-test-online", label: "NEET Mock Tests 2026" },
  { href: "/neet-biology-ncert-questions", label: "NEET Biology NCERT Questions" },
  { href: "/neet-biology-important-questions", label: "NEET Biology Important Questions" },
  { href: "/neet-physics-formula-sheet", label: "NEET Physics Formula Sheet" },
  { href: "/neet-pyq/biology", label: "NEET Biology PYQ" },
  { href: "/neet-pyq/physics", label: "NEET Physics PYQ" },
  { href: "/neet-pyq/chemistry", label: "NEET Chemistry PYQ" },
  { href: "/neet-biology/genetics-evolution", label: "Genetics & Evolution Questions" },
  { href: "/neet-biology/human-physiology", label: "Human Physiology Questions" },
  { href: "/neet-cutoff", label: "NEET Cutoff 2026" },
  { href: "/neet-syllabus", label: "NEET Syllabus 2026" },
  { href: "/neet-preparation-tips", label: "NEET Preparation Strategy" },
];

// ============================================================
// PAGE COMPONENT
// ============================================================

export default function NeetPYQPage() {
  return (
    <>
      {/* ── JSON-LD SCHEMAS ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-deep)]">

        {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="px-4 md:px-6 py-3 max-w-7xl mx-auto">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500"
            itemScope itemType="https://schema.org/BreadcrumbList">
            {[
              { href: "/", label: "Home", position: 1 },
              { href: "/neet-preparation", label: "NEET Preparation", position: 2 },
              { href: "/neet-pyq", label: "NEET PYQ", position: 3 },
            ].map((crumb, i, arr) => (
              <li key={crumb.href} itemProp="itemListElement" itemScope
                itemType="https://schema.org/ListItem" className="flex items-center gap-1">
                {i < arr.length - 1 ? (
                  <>
                    <Link href={crumb.href} itemProp="item" className="hover:text-gray-900 transition-colors">
                      <span itemProp="name">{crumb.label}</span>
                    </Link>
                    <span aria-hidden="true" className="text-gray-400">›</span>
                  </>
                ) : (
                  <span itemProp="name" aria-current="page" className="text-gray-900 font-medium">{crumb.label}</span>
                )}
                <meta itemProp="position" content={String(crumb.position)} />
              </li>
            ))}
          </ol>
        </nav>

        {/* ── HERO ── */}
        <section aria-labelledby="hero-heading"
          className="relative overflow-hidden px-4 md:px-6 py-14 md:py-24 text-center bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
          {/* Decorative year tags */}
          <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none select-none" aria-hidden="true">
            {["1988","1995","2002","2008","2013","2016","2019","2021","2023","2025","2026"].map((yr, i) => (
              <span key={yr} className="absolute text-white font-mono text-sm"
                style={{ top: `${10 + (i * 8)}%`, left: `${(i * 9) % 90}%` }}>
                {yr}
              </span>
            ))}
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
              <span aria-hidden="true">📚</span>
              <span>20,000+ Questions · 38 Years · Free PDF Download</span>
            </div>

            <h1 id="hero-heading" className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
              NEET PYQ Chapter-Wise{" "}
              <span className="text-yellow-400">(1988–2026)</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
              The most complete NEET previous year question bank — 20,000+ questions
              from Biology, Physics & Chemistry. Chapter-wise practice with detailed
              solutions and year-wise frequency analysis.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5 text-green-400">✅ Free PDF download</span>
              <span className="flex items-center gap-1.5 text-green-400">✅ Detailed solutions</span>
              <span className="flex items-center gap-1.5 text-green-400">✅ Frequency analysis</span>
              <span className="flex items-center gap-1.5 text-green-400">✅ Updated to 2025 paper</span>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/neet-pyq/download"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all font-bold text-lg"
                aria-label="Download NEET PYQ PDF chapter-wise free">
                📥 Download PDF Free
              </Link>
              <Link href="/neet-mock-test-online"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-semibold text-lg"
                aria-label="Start NEET PYQ practice online">
                🧠 Start Online Practice
              </Link>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section aria-label="PYQ statistics" className="bg-gray-900 text-white py-8 border-t border-gray-800">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-2xl block mb-1" role="img" aria-label={stat.label}>{stat.icon}</span>
                <p className="text-2xl md:text-3xl font-extrabold text-yellow-400">{stat.value}</p>
                <p className="text-gray-400 text-sm font-medium mt-1">{stat.label}</p>
                <p className="text-gray-600 text-xs mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── REPETITION RATE SECTION ── */}
        <section aria-labelledby="repetition-heading" className="bg-white py-14 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 id="repetition-heading" className="text-3xl font-bold text-gray-900">
                How Many NEET Questions Actually Repeat?
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                Data from 38-year NEET PYQ analysis — question and concept-level repetition rate by subject.
              </p>
            </div>

            <div className="space-y-6">
              {repetitionData.map((item) => (
                <div key={item.subject} className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-gray-900 text-lg">{item.subject}</span>
                    <span className="text-2xl font-extrabold text-gray-900">{item.repetition}%</span>
                  </div>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all`}
                      style={{ width: `${item.repetition}%` }}
                      role="progressbar"
                      aria-valuenow={item.repetition}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${item.subject} repetition rate: ${item.repetition}%`}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              * Based on RankUpp analysis of NEET papers from 1988–2024. Concept-level repetition includes questions testing the same NCERT concept in different forms.
            </p>
          </div>
        </section>

        {/* ── SUBJECT CARDS ── */}
        <section aria-labelledby="subjects-heading"
          className="px-4 md:px-6 py-16 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 id="subjects-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              Chapter-Wise NEET PYQ Practice — All Subjects
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Select your subject to access chapter-wise PYQs with year tags,
              frequency analysis, and NCERT-referenced solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {subjects.map((sub) => (
              <article key={sub.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
                aria-label={`NEET ${sub.title} PYQ — ${sub.badge}`}>

                {/* Subject header */}
                <div className={`bg-gradient-to-r ${sub.gradient} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl" role="img" aria-label={sub.title}>{sub.icon}</span>
                      <div>
                        <h3 className="font-extrabold text-2xl">{sub.title}</h3>
                        <p className="text-white/70 text-xs">{sub.tagline}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${sub.badgeClass}`}>
                      {sub.badge}
                    </span>
                  </div>

                  {/* Class split bar */}
                  <div className="mt-4">
                    <p className="text-white/60 text-xs mb-1">Class 11 vs Class 12 split</p>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden flex">
                      <div className="h-full bg-white/60 rounded-l-full" style={{ width: `${sub.class11}%` }} />
                      <div className="h-full bg-white/20 rounded-r-full" style={{ width: `${sub.class12}%` }} />
                    </div>
                    <div className="flex justify-between text-white/60 text-xs mt-1">
                      <span>Class 11: {sub.class11}%</span>
                      <span>Class 12: {sub.class12}%</span>
                    </div>
                  </div>
                </div>

                {/* Chapter list */}
                <div className="p-5">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Top Chapters by PYQ Frequency
                  </p>
                  <ul className="space-y-2" role="list">
                    {sub.chapters.map((ch) => (
                      <li key={ch.name}
                        className={`flex items-center justify-between p-3 rounded-xl border ${sub.lightBg} ${sub.border}`}
                        role="listitem">
                        <span className="text-sm font-medium text-gray-800">{ch.name}</span>
                        <div className="text-right shrink-0 ml-2">
                          <span className={`text-xs font-bold ${sub.accentText} block`}>{ch.questions}Q</span>
                          <span className="text-gray-400 text-xs">{ch.years}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <Link href={sub.href}
                    className={`mt-5 flex items-center justify-center gap-2 w-full ${sub.accentBg} text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity`}
                    aria-label={`Practice NEET ${sub.title} PYQ chapter-wise`}>
                    Practice {sub.title} PYQ →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── SAMPLE PYQs SECTION ── */}
        <section aria-labelledby="sample-pyq-heading" className="bg-gray-50 py-16 px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="sample-pyq-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
                Sample NEET PYQs — Most Repeated Questions
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Real questions from NEET papers — with year of appearance, frequency
                of repetition, and detailed NCERT-referenced explanations.
              </p>
            </div>

            <div className="space-y-6">
              {samplePYQs.map((pyq, i) => (
                <article key={pyq.id}
                  className={`bg-white rounded-2xl border-2 ${pyq.borderColor} shadow-sm p-6`}
                  aria-label={`Sample PYQ ${i + 1} — ${pyq.subject} — ${pyq.chapter}`}>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${pyq.subjectColor}`}>
                      {pyq.subject}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {pyq.chapter}
                    </span>
                    <span className="text-xs text-gray-500">{pyq.year}</span>
                  </div>

                  <div className="flex items-start gap-2 mb-1">
                    <span className="text-orange-500 text-xs font-bold shrink-0 mt-0.5">🔁 {pyq.frequency}</span>
                  </div>

                  <h3 className="font-semibold text-gray-900 text-base leading-relaxed my-3">
                    {pyq.question}
                  </h3>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {pyq.options.map((opt, oi) => (
                      <li key={oi}
                        className={`text-sm px-3 py-2 rounded-lg ${
                          opt === pyq.answer
                            ? "bg-green-50 border border-green-200 text-green-800 font-semibold"
                            : "bg-gray-50 border border-gray-100 text-gray-700"
                        }`}>
                        {opt === pyq.answer && <span className="mr-1" aria-label="Correct answer">✅</span>}
                        {opt}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                    <p className="text-xs font-bold text-blue-700 mb-1">📖 Explanation</p>
                    <p className="text-sm text-blue-800 leading-relaxed">{pyq.explanation}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/neet-mock-test-online"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 hover:scale-105 transition-all shadow-lg"
                aria-label="Practice 20000 more NEET PYQs on RankUpp">
                🚀 Practice 20,000+ PYQs Free
              </Link>
            </div>
          </div>
        </section>

        {/* ── PYQ STRATEGY ── */}
        <section aria-labelledby="strategy-heading" className="py-16 px-4 md:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 id="strategy-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
                6-Step NEET PYQ Strategy Used by Toppers
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                The exact sequence for getting maximum value from NEET PYQ practice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pyqStrategy.map((item) => (
                <div key={item.step} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-black text-gray-200">{item.step}</span>
                    <span className="text-2xl" role="img" aria-label={item.title}>{item.icon}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO CONTENT ── */}
        <section aria-labelledby="seo-content-heading" className="max-w-4xl mx-auto px-4 md:px-6 py-16">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">

            <h2 id="seo-content-heading" className="text-3xl font-bold text-gray-900 mb-6">
              NEET PYQ Chapter-Wise Analysis: The Most Effective NEET Preparation Tool
            </h2>

            <p className="mb-5">
              Among all the resources available to NEET aspirants — coaching
              notes, reference books, video lectures, and online courses — NEET
              previous year questions remain the single most reliable preparation
              tool. This is not a matter of preference; it is a matter of exam
              mechanics. NEET is a standardized examination designed by NTA with
              a consistent pattern. PYQs are the only direct evidence of what
              that pattern looks like in practice. Everything else is educated
              guesswork.
            </p>

            <p className="mb-5">
              The decision to organize PYQs chapter-wise rather than year-wise
              is one of the most impactful strategic choices a NEET aspirant
              can make. When you solve all Genetics PYQs from 1988 to 2024 in
              one sitting, you see — with stark clarity — which specific concepts
              NTA returns to year after year. Mendelian ratios, codominance,
              pedigree analysis, molecular basis of inheritance. These concepts
              appear so frequently that a student who has solved all Genetics
              PYQs chapter-wise has effectively seen most of the Genetics questions
              they will face on exam day, in some form or another.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Why Biology PYQs From 1988 Are Still Relevant in 2026
            </h3>

            <p className="mb-5">
              The NCERT Biology textbook has undergone only minor revisions since
              its foundational publication. The chapter on cell biology still
              describes the same organelles. The chapter on genetics still
              explains Mendel's laws in the same sequence. The chapter on human
              physiology still details the same digestive enzymes and cardiac
              cycle events. Because the source material is fixed, the questions
              derived from it recur naturally.
            </p>

            <p className="mb-5">
              Analysis of NEET Biology papers shows that a question on the
              function of the Golgi apparatus from a 1998 AIPMT paper is
              essentially interchangeable with a 2022 NEET question on the
              same topic. The wording changes. The correct option letter
              changes. The fundamental test — does the student know what the
              Golgi body does? — does not change. This is why solving 1988–2000
              Biology PYQs, while it may seem excessive, delivers genuine
              preparation value even for NEET 2026.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              NEET PYQ vs Mock Tests: Which Is More Important?
            </h3>

            <p className="mb-5">
              PYQs and mock tests serve different preparation functions and are
              not substitutes for each other. PYQs reveal the exam pattern —
              they show you which concepts NTA values and which NCERT sections
              generate questions. Mock tests build exam execution skills — they
              train time management, decision-making under pressure, and the
              mental stamina for a 3-hour examination.
            </p>

            <p className="mb-5">
              The optimal sequence is: chapter-wise PYQs during the learning
              and consolidation phase, followed by full-length mock tests in
              the final preparation phase. Students who attempt only PYQs
              without mock tests often find they know the content but struggle
              with the execution discipline the real exam demands. Students who
              attempt only mock tests without PYQ analysis miss the specific
              conceptual intelligence that PYQs provide. Both are essential
              components of a complete preparation strategy.
            </p>
          </div>
        </section>

        {/* ── EEAT TRUST ── */}
        <section aria-labelledby="trust-heading" className="max-w-4xl mx-auto px-4 md:px-6 pb-16">
          <div className="bg-gradient-to-br from-gray-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white">
            <h2 id="trust-heading" className="text-2xl md:text-3xl font-bold mb-6">
              How RankUpp's PYQ Bank Is Built
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "📋", title: "Verified Questions", desc: "Every PYQ is cross-verified against official NEET/AIPMT answer keys. No errors, no unofficial questions." },
                { icon: "🔗", title: "NCERT Source Tagged", desc: "Each Biology PYQ is mapped to its exact NCERT chapter and section for immediate revision routing." },
                { icon: "📈", title: "Frequency Analysis", desc: "Every question shows how many times it has appeared in NEET papers — prioritize the highest-frequency questions first." },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <span className="text-3xl" role="img" aria-label={item.title}>{item.icon}</span>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                <strong className="text-white">Disclaimer:</strong> RankUpp is independent and not affiliated with NTA or any official NEET authority. All PYQs are sourced from publicly available official NEET/AIPMT papers and answer keys.
              </p>
            </div>
          </div>
        </section>

        {/* ── PDF CTA BANNER ── */}
        <section aria-labelledby="pdf-cta-heading"
          className="mx-4 md:mx-auto max-w-4xl mb-16 rounded-3xl overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-400 to-amber-400 p-8 md:p-10 text-center">
            <h2 id="pdf-cta-heading" className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              📥 Download Complete NEET PYQ PDF — Free
            </h2>
            <p className="text-gray-800 mb-2 max-w-lg mx-auto">
              Chapter-wise + Year-wise PDFs for Biology, Physics & Chemistry. All solutions included. No signup required.
            </p>
            <p className="text-gray-600 text-sm mb-6">1988–2025 · 20,000+ Questions · Updated to latest NEET paper</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/neet-pyq/download"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 hover:scale-105 transition-all shadow-lg"
                aria-label="Download NEET PYQ PDF chapter-wise free">
                📄 Download Chapter-Wise PDF
              </Link>
              <Link href="/neet-pyq/download?type=year"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all shadow"
                aria-label="Download NEET PYQ year-wise PDF">
                📅 Download Year-Wise PDF
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ── */}
        <section aria-labelledby="faq-heading" className="px-4 md:px-6 py-16 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              NEET PYQ — Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600">Everything aspirants ask about NEET previous year question practice</p>
          </div>
          <div className="space-y-4">
            {faqSchemaData.map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-semibold text-gray-900 text-left pr-4">{faq.q}</h3>
                  <span className="text-gray-600 text-xl shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
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
                      className="inline-block bg-white border border-gray-200 text-gray-700 hover:text-gray-900 hover:border-gray-400 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-sm">
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
          className="px-4 md:px-6 py-20 text-center bg-gradient-to-b from-white to-gray-50">
          <h2 id="final-cta-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Solving NEET PYQs Chapter-Wise Today
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg">
            Join 2 lakh+ NEET aspirants solving 20,000+ PYQs on RankUpp.
            Chapter-wise. Free. With full solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/neet-mock-test-online"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-10 py-4 rounded-xl shadow-lg hover:bg-gray-800 hover:scale-105 transition-all font-bold text-lg"
              aria-label="Start NEET PYQ practice on RankUpp">
              🚀 Start PYQ Practice Free
            </Link>
            <Link href="/neet-pyq/download"
              className="inline-flex items-center justify-center gap-2 border-2 border-yellow-400 text-gray-900 hover:bg-yellow-400 px-10 py-4 rounded-xl transition-all font-bold text-lg"
              aria-label="Download NEET PYQ PDF free">
              📥 Download PDF Free
            </Link>
          </div>
        </section>

        {/* ── STICKY CTA ── */}
        <div className="fixed bottom-0 left-0 w-full bg-gray-900/95 backdrop-blur-sm shadow-[0_-4px_20px_rgba(0,0,0,0.3)] z-50 border-t border-gray-800"
          role="complementary" aria-label="PYQ quick access">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">NEET PYQ 1988–2026</p>
              <p className="text-xs text-gray-400">20,000+ questions · Chapter-wise · Free PDF</p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <Link href="/neet-pyq/download"
                className="flex-1 sm:flex-none text-center bg-yellow-400 text-gray-900 px-5 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all"
                aria-label="Download NEET PYQ PDF">
                📥 PDF Free
              </Link>
              <Link href="/neet-mock-test-online"
                className="flex-1 sm:flex-none text-center bg-white text-gray-900 px-5 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all"
                aria-label="Practice NEET PYQs online">
                🔥 Practice Now
              </Link>
            </div>
          </div>
        </div>

        <div className="h-20" aria-hidden="true" />
      </div>
    </>
  );
}
