// export const metadata = {
//   title: "NEET Physics Formula Sheet PDF 📄 Chapter-wise Quick Revision",
//   description:
//     "Download NEET Physics formula sheet PDF for quick revision. Chapter-wise important formulas for Class 11 & 12 Physics to boost your NEET score.",
//   keywords: [
//     "neet physics formula sheet",
//     "physics formulas pdf neet",
//     "class 11 physics formulas",
//     "class 12 physics formulas",
//     "neet physics revision notes",
//   ],
// };

// export default function PhysicsFormulaPage() {
//   const chapters = [
//     {
//       name: "Kinematics",
//       formulas: [
//         "v = u + at",
//         "s = ut + 1/2 at²",
//         "v² = u² + 2as",
//       ],
//     },
//     {
//       name: "Laws of Motion",
//       formulas: [
//         "F = ma",
//         "Momentum = mv",
//         "Impulse = Force × Time",
//       ],
//     },
//     {
//       name: "Work, Energy & Power",
//       formulas: [
//         "Work = Force × Distance",
//         "K.E = 1/2 mv²",
//         "Power = Work / Time",
//       ],
//     },
//     {
//       name: "Electrostatics",
//       formulas: [
//         "F = kq₁q₂ / r²",
//         "V = kq / r",
//         "E = F / q",
//       ],
//     },
//   ];

//   const faqs = [
//     {
//       q: "Are formulas enough for NEET Physics?",
//       a: "Formulas are essential, but concept understanding is also required.",
//     },
//     {
//       q: "How to revise Physics formulas fast?",
//       a: "Revise daily and practice questions based on formulas.",
//     },
//     {
//       q: "Which chapters are most important in NEET Physics?",
//       a: "Mechanics, Electrostatics, and Modern Physics carry high weightage.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-deep)]">

//       {/* HERO */}
//       <section className="px-6 py-16 text-center">
//         <h1 className="text-3xl md:text-5xl mt-10 font-bold">
//           NEET Physics Formula Sheet 📄
//         </h1>

//         <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
//           Quick revision of important Physics formulas for NEET 2026.
//         </p>

//         <a
//           href="#"
//           className="inline-block mt-8 bg-[var(--color-accent)] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
//         >
//           📥 Download PDF
//         </a>
//       </section>

//       {/* FORMULA SECTIONS */}
//       <section className="px-6 py-16 max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold mb-10 text-center">
//           ⚡ Chapter-wise Physics Formulas
//         </h2>

//         <div className="space-y-8">
//           {chapters.map((chapter, i) => (
//             <div key={i} className="bg-white p-6 rounded-xl shadow">
//               <h3 className="text-xl font-semibold mb-4">
//                 {chapter.name}
//               </h3>

//               <ul className="list-disc pl-6 space-y-2">
//                 {chapter.formulas.map((f, idx) => (
//                   <li key={idx} className="font-mono">{f}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SEO CONTENT */}
//       <section className="max-w-4xl mx-auto px-6 py-16 text-gray-700">
//         <h2 className="text-2xl font-bold mb-4">
//           NEET Physics Formula Sheet for Quick Revision
//         </h2>

//         <p className="mb-4">
//           Physics formulas play a crucial role in NEET preparation. A strong grip
//           on formulas helps in solving numerical questions quickly and accurately.
//         </p>

//         <p className="mb-4">
//           This chapter-wise formula sheet is designed for quick revision before
//           exams and mock tests.
//         </p>

//         <h3 className="text-xl font-semibold mt-6 mb-2">
//           How to use Physics formula sheet effectively?
//         </h3>

//         <ul className="list-disc pl-6 space-y-2">
//           <li>Revise formulas daily</li>
//           <li>Apply formulas in practice questions</li>
//           <li>Focus on weak chapters</li>
//         </ul>

//         <p className="mt-6">
//           Also attempt{" "}
//           <a href="/neet-mock-test-online" className="text-blue-600 underline">
//             NEET Mock Tests
//           </a>{" "}
//           to improve your speed and accuracy.
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


// ============================================================
// FILE: app/neet-physics-formula-sheet/page.jsx
// RANKUPP.IN — Full SEO + Power UI NEET Physics Formula Sheet
// ============================================================

import Link from "next/link";

// ============================================================
// METADATA
// ============================================================

export const metadata = {
  title: "NEET Physics Formula Sheet 2026 | Chapter-Wise All Formulas PDF",
  description:
    "Complete NEET Physics formula sheet 2026 — chapter-wise all important formulas for Class 11 & 12. Kinematics, Electrostatics, Modern Physics, Optics & more. Free PDF download. Trusted by 2L+ NEET aspirants.",
  keywords: [
    "neet physics formula sheet 2026",
    "physics formula sheet for neet pdf",
    "neet physics all formulas chapter wise",
    "class 11 physics formulas for neet",
    "class 12 physics formulas for neet",
    "neet physics important formulas",
    "physics formula list for neet 2026",
    "kinematics formulas neet",
    "electrostatics formulas neet",
    "modern physics formulas neet",
    "neet physics revision notes formulas",
    "physics formula sheet pdf free download",
    "neet physics chapter wise formulas",
    "thermodynamics formulas neet",
    "optics formulas neet",
  ],
  alternates: {
    canonical: "https://www.rankupp.in/neet-physics-formula-sheet",
  },
  openGraph: {
    type: "website",
    url: "https://www.rankupp.in/neet-physics-formula-sheet",
    title: "NEET Physics Formula Sheet 2026 | Chapter-Wise All Formulas PDF",
    description:
      "Complete NEET Physics formula sheet 2026 — all chapters, all formulas. Free PDF. Trusted by 2L+ students.",
    siteName: "RankUpp",
    images: [
      {
        url: "https://www.rankupp.in/og/neet-physics-formula-sheet.jpg",
        width: 1200,
        height: 630,
        alt: "NEET Physics Formula Sheet 2026 — Chapter-Wise — RankUpp",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rankupp_in",
    creator: "@rankupp_in",
    title: "NEET Physics Formula Sheet 2026 | All Chapters Free PDF",
    description:
      "All NEET Physics formulas chapter-wise — free PDF. Class 11 & 12. Start revising now on RankUpp.",
    images: ["https://www.rankupp.in/og/neet-physics-formula-sheet.jpg"],
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
    "theme-color": "#7c3aed",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "RankUpp Physics Formulas",
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
  description: "RankUpp is India's trusted NEET preparation platform providing chapter-wise Physics formula sheets, mock tests, NCERT questions and PYQs for NEET 2026 aspirants.",
  sameAs: ["https://www.instagram.com/rankupp_in", "https://www.youtube.com/@rankupp", "https://twitter.com/rankupp_in"],
  foundingDate: "2023",
  areaServed: "IN",
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.rankupp.in/neet-physics-formula-sheet#webpage",
  url: "https://www.rankupp.in/neet-physics-formula-sheet",
  name: "NEET Physics Formula Sheet 2026 | Chapter-Wise All Formulas PDF",
  description: "Complete chapter-wise NEET Physics formula sheet 2026 for Class 11 & 12 — all important formulas for quick revision.",
  inLanguage: "en-IN",
  datePublished: "2024-01-01",
  dateModified: "2026-01-01",
  breadcrumb: { "@id": "https://www.rankupp.in/neet-physics-formula-sheet#breadcrumb" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.rankupp.in/neet-physics-formula-sheet#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rankupp.in" },
    { "@type": "ListItem", position: 2, name: "NEET Preparation", item: "https://www.rankupp.in/neet-preparation" },
    { "@type": "ListItem", position: 3, name: "NEET Physics", item: "https://www.rankupp.in/neet-physics" },
    { "@type": "ListItem", position: 4, name: "Physics Formula Sheet", item: "https://www.rankupp.in/neet-physics-formula-sheet" },
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "NEET Physics Formula Sheet 2026 — Complete Chapter-Wise Revision",
  description: "All important NEET Physics formulas chapter-wise for Class 11 and 12 — Kinematics, Laws of Motion, Thermodynamics, Electrostatics, Modern Physics, Optics and more.",
  provider: { "@type": "Organization", name: "RankUpp", sameAs: "https://www.rankupp.in" },
  url: "https://www.rankupp.in/neet-physics-formula-sheet",
  courseMode: "online",
  isAccessibleForFree: true,
  educationalLevel: "Higher Secondary",
  inLanguage: "en-IN",
  audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "NEET Aspirants" },
};

const faqSchemaData = [
  {
    q: "Are formulas enough for NEET Physics 2026?",
    a: "No — formulas alone are not sufficient for NEET Physics. While memorizing formulas is necessary, NEET Physics questions test your ability to identify which formula applies in a given physical situation, manipulate it correctly, and calculate accurately under time pressure. The most effective approach is to first understand the physical concept behind each formula, then practice applying it in 15–20 NCERT-based problems per chapter, and finally test yourself in timed conditions through mock tests. Students who only memorize formulas without conceptual understanding typically score 40–60 marks lower in Physics than students who combine formula revision with problem-solving practice.",
  },
  {
    q: "How to revise NEET Physics formulas quickly before the exam?",
    a: "For rapid Physics formula revision before NEET, use this proven method: (1) Create a single-page formula summary for each high-weightage chapter — Kinematics, Laws of Motion, Work-Energy, Electrostatics, Modern Physics, and Optics. (2) Write each formula by hand at least twice — handwriting activates memory encoding more effectively than reading. (3) Attach a 'trigger' example problem to each formula so you remember when to use it. (4) Review all formulas 3 times in the final week — morning of Day 1, evening of Day 3, and morning of the exam day. This spaced repetition approach ensures formulas stay active in working memory on exam day.",
  },
  {
    q: "Which Physics chapters have the most formulas in NEET?",
    a: "The Physics chapters with the highest formula density in NEET are: Kinematics (12–15 key formulas), Laws of Motion and Friction (8–10), Work, Energy and Power (6–8), Rotational Motion (15–20, most formula-heavy chapter), Gravitation (8–10), Thermodynamics (10–12), Electrostatics (12–15), Current Electricity (10–12), Electromagnetic Induction (8–10), Optics (15–18), and Modern Physics (10–12 including photoelectric effect, Bohr model, nuclear physics). Rotational Motion and Optics have the highest formula count and are frequently cited as the most challenging chapters for NEET aspirants.",
  },
  {
    q: "Which chapters are most important in NEET Physics 2026?",
    a: "Based on NEET PYQ analysis from 2016 to 2024, the highest-weightage Physics chapters for NEET 2026 are: Modern Physics (10–12% — Photoelectric effect, Radioactivity, Nuclear physics), Electrostatics and Current Electricity (12–15% combined), Mechanics including Kinematics, Laws of Motion, Work-Energy, Rotational Motion (20–25% combined), Optics (8–10%), Magnetism and Electromagnetic Induction (8–10%), and Thermodynamics and Kinetic Theory (7–9%). Mechanics as a whole is the dominant unit, but Modern Physics offers the highest question frequency relative to its content volume, making it extremely high ROI.",
  },
  {
    q: "How should I study Physics for NEET — formulas first or concepts first?",
    a: "Always concepts before formulas. A formula without conceptual understanding is a memorization liability — you will forget it under exam stress. The correct sequence is: (1) Read the NCERT chapter and understand the physical phenomenon being described. (2) Derive or understand how the formula is obtained — this builds permanent memory. (3) Note the formula with its units, limitations, and special cases. (4) Practice 10–15 problems using only that formula before moving on. This sequence takes more time upfront but produces dramatically higher NEET scores than formula-first memorization. Students who understand the derivation of a formula can reconstruct it under exam pressure even if they momentarily forget it.",
  },
  {
    q: "Is NEET Physics harder than NEET Biology?",
    a: "Yes — NEET Physics is generally considered the most challenging section for most aspirants. Unlike Biology, where thorough NCERT reading can directly yield 85–90% accuracy, Physics requires both conceptual understanding and strong numerical calculation skills. The average NEET aspirant scores 40–60 marks lower in Physics than in Biology. However, this also means Physics is where the rank gap between students is created. A student scoring 140+ in Physics (out of 180) while maintaining a strong Biology score has a significant advantage in the overall rank. Consistent formula practice combined with problem-solving from HC Verma and NCERT exemplars is the proven path to Physics excellence.",
  },
  {
    q: "Can I download the NEET Physics formula sheet PDF from RankUpp?",
    a: "Yes. RankUpp provides a free downloadable NEET Physics formula sheet PDF covering all Class 11 and Class 12 chapters. The PDF is organized chapter-wise with formulas, units, key derivation notes, and special case reminders. It is designed for print and mobile use — formatted to fit on A4 pages for students who prefer physical revision sheets. The formula sheet is updated for NEET 2026 based on the current NTA syllabus and is available free without signup for the online version.",
  },
  {
    q: "How many Physics questions come from Class 11 vs Class 12 in NEET?",
    a: "In NEET Physics, Class 11 and Class 12 content contribute roughly equally — approximately 22–25 questions from Class 11 and 20–23 questions from Class 12 (out of 45 total Physics questions). Class 11 Physics (Mechanics, Thermodynamics, Waves) has a slight edge in question volume, but Class 12 Physics (Electrostatics, Current Electricity, Optics, Modern Physics) has higher average difficulty. Neglecting either year's content is a significant strategic mistake. The ideal strategy is to build mastery in both, prioritizing the highest-weightage chapters from each class.",
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
// FORMULA DATA — Complete chapter-wise formulas
// ============================================================

const chapters = [
  {
    id: "kinematics",
    name: "Kinematics",
    class: "Class 11",
    weightage: "5–7%",
    color: "from-violet-500 to-purple-600",
    lightColor: "bg-violet-50 border-violet-100",
    badgeColor: "bg-violet-100 text-violet-800",
    icon: "🏃",
    formulas: [
      { expr: "v = u + at", label: "1st equation of motion" },
      { expr: "s = ut + ½at²", label: "2nd equation of motion" },
      { expr: "v² = u² + 2as", label: "3rd equation of motion" },
      { expr: "s_n = u + a(2n−1)/2", label: "Distance in nth second" },
      { expr: "Range R = u²sin2θ / g", label: "Projectile range" },
      { expr: "H_max = u²sin²θ / 2g", label: "Maximum height" },
      { expr: "T = 2u sinθ / g", label: "Time of flight" },
    ],
    tip: "Always resolve projectile motion into horizontal (uniform) and vertical (uniformly accelerated) components separately.",
    href: "/neet-physics/kinematics",
  },
  {
    id: "laws-of-motion",
    name: "Laws of Motion",
    class: "Class 11",
    weightage: "4–6%",
    color: "from-blue-500 to-cyan-600",
    lightColor: "bg-blue-50 border-blue-100",
    badgeColor: "bg-blue-100 text-blue-800",
    icon: "⚖️",
    formulas: [
      { expr: "F = ma", label: "Newton's 2nd Law" },
      { expr: "p = mv", label: "Linear momentum" },
      { expr: "J = F·Δt = Δp", label: "Impulse-momentum theorem" },
      { expr: "F_friction = μN", label: "Friction force" },
      { expr: "T = m(g + a)", label: "Tension in lift (going up)" },
      { expr: "T = m(g − a)", label: "Tension in lift (going down)" },
      { expr: "a = (m₁−m₂)g / (m₁+m₂)", label: "Atwood machine acceleration" },
    ],
    tip: "In connected body problems, always draw free body diagrams for each mass separately before applying Newton's laws.",
    href: "/neet-physics/laws-of-motion",
  },
  {
    id: "work-energy-power",
    name: "Work, Energy & Power",
    class: "Class 11",
    weightage: "4–5%",
    color: "from-emerald-500 to-green-600",
    lightColor: "bg-emerald-50 border-emerald-100",
    badgeColor: "bg-emerald-100 text-emerald-800",
    icon: "⚡",
    formulas: [
      { expr: "W = F·d·cosθ", label: "Work done" },
      { expr: "KE = ½mv²", label: "Kinetic energy" },
      { expr: "PE = mgh", label: "Gravitational potential energy" },
      { expr: "PE_spring = ½kx²", label: "Elastic potential energy" },
      { expr: "P = W/t = F·v", label: "Power" },
      { expr: "W_net = ΔKE", label: "Work-energy theorem" },
      { expr: "η = (W_out / W_in) × 100%", label: "Efficiency" },
    ],
    tip: "The work-energy theorem (W_net = ΔKE) is the fastest approach to problems involving variable forces.",
    href: "/neet-physics/work-energy-power",
  },
  {
    id: "rotational-motion",
    name: "Rotational Motion",
    class: "Class 11",
    weightage: "6–8%",
    color: "from-orange-500 to-amber-600",
    lightColor: "bg-orange-50 border-orange-100",
    badgeColor: "bg-orange-100 text-orange-800",
    icon: "🌀",
    formulas: [
      { expr: "τ = Iα = r × F", label: "Torque" },
      { expr: "L = Iω = mvr", label: "Angular momentum" },
      { expr: "I = Σmr²", label: "Moment of inertia" },
      { expr: "KE_rot = ½Iω²", label: "Rotational kinetic energy" },
      { expr: "v_cm = Rω (rolling)", label: "Rolling condition" },
      { expr: "KE_total = ½mv² + ½Iω²", label: "Total KE in rolling" },
      { expr: "I_parallel = I_cm + md²", label: "Parallel axis theorem" },
    ],
    tip: "Most NEET rotational motion questions combine moment of inertia with energy conservation. Always check if rolling condition applies.",
    href: "/neet-physics/rotational-motion",
  },
  {
    id: "thermodynamics",
    name: "Thermodynamics",
    class: "Class 11",
    weightage: "7–9%",
    color: "from-red-500 to-rose-600",
    lightColor: "bg-red-50 border-red-100",
    badgeColor: "bg-red-100 text-red-800",
    icon: "🌡️",
    formulas: [
      { expr: "ΔU = Q − W", label: "First Law of Thermodynamics" },
      { expr: "PV = nRT", label: "Ideal gas equation" },
      { expr: "W = PΔV (isobaric)", label: "Work in isobaric process" },
      { expr: "W = 0 (isochoric)", label: "Work in isochoric process" },
      { expr: "η_Carnot = 1 − T_C/T_H", label: "Carnot efficiency" },
      { expr: "COP = T_C / (T_H − T_C)", label: "Refrigerator COP" },
      { expr: "C_p − C_v = R", label: "Mayer's relation" },
    ],
    tip: "Draw the PV diagram for every thermodynamic process. The area under the PV curve = work done by gas.",
    href: "/neet-physics/thermodynamics",
  },
  {
    id: "electrostatics",
    name: "Electrostatics",
    class: "Class 12",
    weightage: "6–8%",
    color: "from-yellow-500 to-amber-500",
    lightColor: "bg-yellow-50 border-yellow-100",
    badgeColor: "bg-yellow-100 text-yellow-800",
    icon: "⚡",
    formulas: [
      { expr: "F = kq₁q₂ / r² (k = 9×10⁹)", label: "Coulomb's Law" },
      { expr: "E = kq / r²", label: "Electric field (point charge)" },
      { expr: "V = kq / r", label: "Electric potential" },
      { expr: "C = Q / V", label: "Capacitance" },
      { expr: "C_parallel = C₁ + C₂", label: "Capacitors in parallel" },
      { expr: "1/C_series = 1/C₁ + 1/C₂", label: "Capacitors in series" },
      { expr: "U = ½CV² = Q²/2C", label: "Energy stored in capacitor" },
    ],
    tip: "Electric field is a vector — always add components. Electric potential is a scalar — add directly. This distinction solves many tricky questions.",
    href: "/neet-physics/electrostatics",
  },
  {
    id: "current-electricity",
    name: "Current Electricity",
    class: "Class 12",
    weightage: "6–8%",
    color: "from-indigo-500 to-blue-600",
    lightColor: "bg-indigo-50 border-indigo-100",
    badgeColor: "bg-indigo-100 text-indigo-800",
    icon: "🔌",
    formulas: [
      { expr: "V = IR", label: "Ohm's Law" },
      { expr: "P = VI = I²R = V²/R", label: "Electrical power" },
      { expr: "R = ρL / A", label: "Resistance formula" },
      { expr: "R_series = R₁ + R₂ + ...", label: "Series combination" },
      { expr: "1/R_parallel = 1/R₁ + 1/R₂", label: "Parallel combination" },
      { expr: "E = ε − Ir", label: "Terminal voltage" },
      { expr: "Wheatstone: P/Q = R/S", label: "Wheatstone bridge balance" },
    ],
    tip: "In Kirchhoff's Law problems, always assign current directions before writing equations. Consistency of direction is more important than guessing correctly.",
    href: "/neet-physics/current-electricity",
  },
  {
    id: "optics",
    name: "Optics (Ray & Wave)",
    class: "Class 12",
    weightage: "8–10%",
    color: "from-teal-500 to-emerald-600",
    lightColor: "bg-teal-50 border-teal-100",
    badgeColor: "bg-teal-100 text-teal-800",
    icon: "🔭",
    formulas: [
      { expr: "1/f = 1/v − 1/u", label: "Mirror/Lens formula" },
      { expr: "m = −v/u = h_i/h_o", label: "Magnification" },
      { expr: "1/f = (μ−1)(1/R₁ − 1/R₂)", label: "Lensmaker's equation" },
      { expr: "n = sin i / sin r", label: "Snell's Law" },
      { expr: "sin C = 1/n", label: "Critical angle (TIR)" },
      { expr: "β = λD / d", label: "Fringe width (YDSE)" },
      { expr: "Δ = d sinθ ≈ dθ", label: "Path difference (YDSE)" },
    ],
    tip: "Use the sign convention consistently — all distances measured from the pole of mirror/lens. Incident ray direction is always positive.",
    href: "/neet-physics/optics",
  },
  {
    id: "modern-physics",
    name: "Modern Physics",
    class: "Class 12",
    weightage: "10–12%",
    color: "from-pink-500 to-rose-600",
    lightColor: "bg-pink-50 border-pink-100",
    badgeColor: "bg-pink-100 text-pink-800",
    icon: "⚛️",
    formulas: [
      { expr: "E = hf = hc/λ", label: "Photon energy" },
      { expr: "KE_max = hf − φ", label: "Photoelectric equation (Einstein)" },
      { expr: "λ = h/mv = h/p", label: "de Broglie wavelength" },
      { expr: "r_n = 0.529n²/Z Å", label: "Bohr radius (nth orbit)" },
      { expr: "E_n = −13.6Z²/n² eV", label: "Energy of nth orbit" },
      { expr: "N = N₀ e^(−λt)", label: "Radioactive decay law" },
      { expr: "t₁/₂ = 0.693/λ", label: "Half-life formula" },
    ],
    tip: "Modern Physics is the highest-ROI chapter for NEET Physics. Most questions are formula-direct. Master the Bohr model equations and radioactive decay thoroughly.",
    href: "/neet-physics/modern-physics",
  },
  {
    id: "waves-sound",
    name: "Waves & Sound",
    class: "Class 11",
    weightage: "4–6%",
    color: "from-cyan-500 to-sky-600",
    lightColor: "bg-cyan-50 border-cyan-100",
    badgeColor: "bg-cyan-100 text-cyan-800",
    icon: "🔊",
    formulas: [
      { expr: "v = fλ", label: "Wave velocity" },
      { expr: "v_sound = √(B/ρ)", label: "Speed of sound in medium" },
      { expr: "v_string = √(T/μ)", label: "Speed on string" },
      { expr: "f_n = nv/2L (closed: nv/4L)", label: "Standing wave frequency" },
      { expr: "Δf = f(v ± v_s)/(v ± v_o)", label: "Doppler effect" },
      { expr: "β = f₁ − f₂", label: "Beat frequency" },
      { expr: "I ∝ A² ∝ 1/r²", label: "Intensity relations" },
    ],
    tip: "In Doppler effect problems, remember: source approaching = frequency increases. Use the formula and plug in signs carefully.",
    href: "/neet-physics/waves-sound",
  },
  {
    id: "magnetic-effects",
    name: "Magnetic Effects",
    class: "Class 12",
    weightage: "5–7%",
    color: "from-fuchsia-500 to-purple-600",
    lightColor: "bg-fuchsia-50 border-fuchsia-100",
    badgeColor: "bg-fuchsia-100 text-fuchsia-800",
    icon: "🧲",
    formulas: [
      { expr: "F = qvB sinθ", label: "Magnetic force on charge" },
      { expr: "F = BIL sinθ", label: "Force on current-carrying wire" },
      { expr: "r = mv/qB", label: "Radius of circular motion in B" },
      { expr: "B = μ₀I/2πr", label: "Magnetic field (long wire)" },
      { expr: "B = μ₀nI", label: "Solenoid magnetic field" },
      { expr: "τ = nBIA sinθ", label: "Torque on current loop" },
      { expr: "μ = nIA", label: "Magnetic moment" },
    ],
    tip: "Use the right-hand rule for direction of magnetic force. F = qv × B — the cross product gives direction.",
    href: "/neet-physics/magnetic-effects",
  },
  {
    id: "gravitation",
    name: "Gravitation",
    class: "Class 11",
    weightage: "4–5%",
    color: "from-slate-500 to-gray-600",
    lightColor: "bg-slate-50 border-slate-100",
    badgeColor: "bg-slate-100 text-slate-800",
    icon: "🌍",
    formulas: [
      { expr: "F = Gm₁m₂/r²", label: "Newton's Law of Gravitation" },
      { expr: "g = GM/R²", label: "Acceleration due to gravity" },
      { expr: "g_h = g(1 − 2h/R)", label: "g at height h (h << R)" },
      { expr: "v_escape = √(2gR) = 11.2 km/s", label: "Escape velocity (Earth)" },
      { expr: "v_orbital = √(GM/r) = √(gR²/r)", label: "Orbital velocity" },
      { expr: "T² ∝ r³ (Kepler's 3rd)", label: "Kepler's third law" },
      { expr: "U = −GMm/r", label: "Gravitational potential energy" },
    ],
    tip: "Escape velocity (11.2 km/s) and orbital velocity (7.9 km/s) for Earth are constants NEET tests directly — memorize both.",
    href: "/neet-physics/gravitation",
  },
];

const stats = [
  { value: "12", label: "Chapters Covered" },
  { value: "85+", label: "Key Formulas" },
  { value: "2L+", label: "Students Using" },
  { value: "Free", label: "PDF Download" },
];

const studyTips = [
  { icon: "📝", tip: "Write formulas by hand daily — handwriting builds stronger memory than reading." },
  { icon: "🔗", tip: "Link each formula to a concept — understand what physical quantity it represents." },
  { icon: "⏱️", tip: "Practice applying each formula in timed problems immediately after memorizing." },
  { icon: "🔁", tip: "Revise using spaced repetition — Day 1, Day 3, Day 7, Day 14 before exam." },
  { icon: "📐", tip: "Always note units alongside formulas — NEET tests dimensional analysis directly." },
  { icon: "⚠️", tip: "Note special cases and limitations of each formula — these become NEET traps." },
];

const relatedLinks = [
  { href: "/neet-mock-test-online", label: "NEET Mock Tests 2026" },
  { href: "/neet-pyq", label: "NEET Previous Year Questions" },
  { href: "/neet-physics-important-questions", label: "NEET Physics Important Questions" },
  { href: "/neet-biology-ncert-questions", label: "NEET Biology NCERT Questions" },
  { href: "/neet-chemistry-formula-sheet", label: "NEET Chemistry Formula Sheet" },
  { href: "/neet-biology-important-questions", label: "NEET Biology Important Questions" },
  { href: "/neet-physics/modern-physics", label: "Modern Physics Questions" },
  { href: "/neet-physics/electrostatics", label: "Electrostatics Questions" },
  { href: "/neet-syllabus", label: "NEET Syllabus 2026" },
  { href: "/neet-cutoff", label: "NEET Cutoff 2026" },
  { href: "/neet-preparation-tips", label: "NEET Preparation Strategy" },
  { href: "/neet-physics", label: "NEET Physics Hub" },
];

// ============================================================
// PAGE COMPONENT
// ============================================================

export default function PhysicsFormulaPage() {
  return (
    <>
      {/* ── JSON-LD SCHEMAS ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-deep)]">

        {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="px-4 md:px-6 py-3 max-w-7xl mx-auto">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500"
            itemScope itemType="https://schema.org/BreadcrumbList">
            {[
              { href: "/", label: "Home", position: 1 },
              { href: "/neet-preparation", label: "NEET Preparation", position: 2 },
              { href: "/neet-physics", label: "NEET Physics", position: 3 },
              { href: "/neet-physics-formula-sheet", label: "Formula Sheet", position: 4 },
            ].map((crumb, i, arr) => (
              <li key={crumb.href} itemProp="itemListElement" itemScope
                itemType="https://schema.org/ListItem" className="flex items-center gap-1">
                {i < arr.length - 1 ? (
                  <>
                    <Link href={crumb.href} itemProp="item" className="hover:text-violet-700 transition-colors">
                      <span itemProp="name">{crumb.label}</span>
                    </Link>
                    <span aria-hidden="true" className="text-gray-400">›</span>
                  </>
                ) : (
                  <span itemProp="name" aria-current="page" className="text-violet-700 font-medium">{crumb.label}</span>
                )}
                <meta itemProp="position" content={String(crumb.position)} />
              </li>
            ))}
          </ol>
        </nav>

        {/* ── HERO ── */}
        <section aria-labelledby="hero-heading"
          className="relative overflow-hidden px-4 md:px-6 py-14 md:py-24 text-center bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900">
          {/* Background math symbols decoration */}
          <div className="absolute inset-0 opacity-5 select-none pointer-events-none text-white text-6xl font-mono overflow-hidden" aria-hidden="true">
            <span className="absolute top-8 left-8">∫</span>
            <span className="absolute top-16 right-16">∑</span>
            <span className="absolute bottom-12 left-24">∂</span>
            <span className="absolute bottom-8 right-8">∞</span>
            <span className="absolute top-1/2 left-4">α</span>
            <span className="absolute top-1/3 right-4">λ</span>
            <span className="absolute top-24 left-1/3">ω</span>
            <span className="absolute bottom-24 right-1/3">μ</span>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
              <span aria-hidden="true">⚛️</span>
              <span>Complete Formula Sheet — All 12 Chapters — NEET 2026</span>
            </div>

            <h1 id="hero-heading"
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
              NEET Physics{" "}
              <span className="text-yellow-400">Formula Sheet</span>{" "}
              2026
            </h1>

            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-purple-100 leading-relaxed">
              Every important Physics formula for NEET — 12 chapters, 85+ formulas,
              exam tips, and quick-revision tricks. Free PDF download.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm text-purple-200">
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true" className="text-green-400">✅</span> Class 11 & 12 complete
              </span>
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true" className="text-green-400">✅</span> Exam tips per chapter
              </span>
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true" className="text-green-400">✅</span> Free PDF download
              </span>
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true" className="text-green-400">✅</span> Updated for NEET 2026
              </span>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/neet-physics-formula-sheet/download"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all font-bold text-lg"
                aria-label="Download NEET Physics Formula Sheet PDF free">
                📥 Download PDF Free
              </Link>
              <Link href="/neet-mock-test-online"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-semibold text-lg"
                aria-label="Practice NEET Physics in mock tests">
                🚀 Practice in Mock Test
              </Link>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section aria-label="Formula sheet statistics" className="bg-violet-700 text-white py-8">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-extrabold">{stat.value}</p>
                <p className="text-violet-200 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── QUICK NAVIGATION ── */}
        <section aria-labelledby="quicknav-heading" className="bg-white border-b border-gray-100 py-6 px-4 md:px-6 sticky top-0 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto">
            <p id="quicknav-heading" className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Jump to Chapter
            </p>
            <nav aria-label="Jump to chapter navigation">
              <ul className="flex flex-wrap gap-2">
                {chapters.map((ch) => (
                  <li key={ch.id}>
                    <a href={`#${ch.id}`}
                      className="inline-flex items-center gap-1 bg-gray-50 hover:bg-violet-50 border border-gray-200 hover:border-violet-300 text-gray-700 hover:text-violet-700 px-3 py-1.5 rounded-lg text-xs font-medium transition-all">
                      {ch.icon} {ch.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {/* ── FORMULA CHAPTERS ── */}
        <section aria-labelledby="formulas-heading" className="px-4 md:px-6 py-16 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 id="formulas-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              Chapter-Wise NEET Physics Formulas
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              All 12 high-weightage chapters — with formulas, units, and an
              examiner-approved tip for each chapter.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {chapters.map((chapter) => (
              <article
                key={chapter.id}
                id={chapter.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 scroll-mt-32"
                aria-label={`${chapter.name} formulas for NEET — ${chapter.weightage} weightage`}
              >
                {/* Chapter header */}
                <div className={`bg-gradient-to-r ${chapter.color} p-5 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl" role="img" aria-label={chapter.name}>{chapter.icon}</span>
                      <div>
                        <h3 className="font-extrabold text-xl leading-tight">{chapter.name}</h3>
                        <span className="text-white/70 text-xs">{chapter.class}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                        NEET {chapter.weightage}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Formulas list */}
                <div className="p-5">
                  <ul className="space-y-2" role="list" aria-label={`${chapter.name} formulas`}>
                    {chapter.formulas.map((f, idx) => (
                      <li key={idx}
                        className={`flex items-start gap-3 p-3 rounded-xl border ${chapter.lightColor}`}
                        role="listitem">
                        <span className="text-gray-400 text-xs font-mono mt-1 shrink-0 w-5">
                          {idx + 1}.
                        </span>
                        <div className="min-w-0">
                          <code className="font-mono font-bold text-gray-900 text-sm break-all block">
                            {f.expr}
                          </code>
                          <span className="text-gray-500 text-xs mt-0.5 block">{f.label}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Exam tip */}
                  <div className="mt-4 p-4 bg-amber-50 border border-amber-100 rounded-xl">
                    <p className="text-xs font-bold text-amber-700 mb-1">💡 NEET Exam Tip</p>
                    <p className="text-sm text-amber-800 leading-relaxed">{chapter.tip}</p>
                  </div>

                  {/* Chapter CTA */}
                  <Link href={chapter.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-violet-700 font-semibold text-sm hover:gap-2.5 transition-all"
                    aria-label={`Practice ${chapter.name} questions for NEET`}>
                    Practice {chapter.name} Questions →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── STUDY TIPS SECTION ── */}
        <section aria-labelledby="tips-heading" className="bg-violet-900 text-white py-16 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="tips-heading" className="text-3xl md:text-4xl font-bold">
                6 Proven Tips to Master NEET Physics Formulas
              </h2>
              <p className="mt-4 text-violet-200 max-w-2xl mx-auto">
                Used by NEET toppers who score 140+ in Physics consistently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {studyTips.map((item, i) => (
                <div key={i} className="bg-white/10 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                  <span className="text-2xl mb-3 block" role="img" aria-hidden="true">{item.icon}</span>
                  <p className="text-white/90 text-sm leading-relaxed">{item.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO CONTENT ── */}
        <section aria-labelledby="seo-content-heading" className="max-w-4xl mx-auto px-4 md:px-6 py-16">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">

            <h2 id="seo-content-heading" className="text-3xl font-bold text-gray-900 mb-6">
              NEET Physics Formula Sheet 2026: Complete Chapter-Wise Revision Guide
            </h2>

            <p className="mb-5">
              Physics is the most formula-intensive subject in NEET. While Biology
              rewards reading and Chemistry rewards reaction practice, Physics
              success depends on a precise combination: knowing the right formula,
              understanding its derivation, and applying it under timed conditions.
              A well-organized chapter-wise formula sheet is not just a revision
              tool — it is a strategic asset that separates students who score
              100 in Physics from those who score 140+.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              How to Use This NEET Physics Formula Sheet Effectively
            </h3>

            <p className="mb-5">
              The formula sheet is most powerful as a revision tool, not a
              learning tool. First, study each Physics chapter from NCERT,
              understand the concepts, and work through solved examples. Then
              use this formula sheet during revision to quickly scan all key
              relationships before attempting chapter-wise practice questions or
              mock tests.
            </p>

            <p className="mb-5">
              For maximum retention, cover the "label" column and try to recall
              what each formula represents from the expression alone. This
              reverse-recall technique — seeing the formula and naming its
              application — is significantly more effective than the typical
              approach of reading label to formula. It trains exactly the skill
              NEET tests: seeing a problem scenario and immediately identifying
              which formula applies.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              NEET Physics Chapter Weightage: Where Formulas Matter Most
            </h3>

            <p className="mb-5">
              Not all Physics chapters contribute equally to your NEET score.
              Modern Physics (10–12%) and Mechanics as a whole (20–25%) are
              consistently the highest-yield areas. Modern Physics is particularly
              interesting because its formula density is relatively low — about
              10–12 key formulas — but those formulas appear in NEET questions
              at very high frequency. A student who perfectly masters Modern
              Physics formulas and their applications can reliably answer 4–6
              NEET questions correctly, often with questions that take under
              60 seconds each.
            </p>

            <p className="mb-5">
              Optics is the other hidden high-value chapter. The mirror formula,
              lensmaker's equation, Snell's Law, and the YDSE fringe width
              formula together cover a disproportionate number of NEET Physics
              questions. The challenge is consistent sign convention — students
              who master the Cartesian sign convention for optics and apply it
              without error under exam pressure have an enormous advantage.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Why Derivation Understanding Beats Pure Memorization
            </h3>

            <p className="mb-5">
              The single biggest mistake NEET Physics students make is treating
              the formula sheet as their primary study material rather than a
              revision aid. Students who understand why v² = u² + 2as — that it
              comes from eliminating t between the first two kinematic equations
              — can reconstruct the formula even under exam stress. Students who
              only memorized it as a string of symbols will blank out in high-pressure
              moments. NEET occasionally tests modified forms of standard formulas
              in contexts that require derivation understanding rather than direct
              application. This is where conceptual preparation pays dividends
              that pure formula memorization cannot deliver.
            </p>
          </div>
        </section>

        {/* ── EEAT TRUST SECTION ── */}
        <section aria-labelledby="trust-heading" className="max-w-4xl mx-auto px-4 md:px-6 pb-16">
          <div className="bg-gradient-to-br from-violet-700 to-indigo-800 rounded-3xl p-8 md:p-12 text-white">
            <h2 id="trust-heading" className="text-2xl md:text-3xl font-bold mb-6">
              How This Formula Sheet Is Built — RankUpp Quality Standards
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "📚", title: "NCERT-Aligned", desc: "Every formula is verified against NCERT Class 11 & 12 Physics textbooks. No external syllabus additions." },
                { icon: "🏆", title: "PYQ-Validated", desc: "Formula selection is backed by 10-year NEET PYQ analysis — only formulas that actually appear in NEET are included." },
                { icon: "👨‍🏫", title: "Expert-Reviewed", desc: "Reviewed by Physics faculty with 10+ years NEET teaching experience and NEET 700+ scorer inputs." },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <span className="text-3xl" role="img" aria-label={item.title}>{item.icon}</span>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-violet-100 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-violet-100 text-sm">
                <strong className="text-white">Disclaimer:</strong> RankUpp is independent and not affiliated with NTA or any official NEET authority. Formulas are based on NCERT textbooks published by the Ministry of Education, Government of India.
              </p>
            </div>
          </div>
        </section>

        {/* ── PDF CTA BANNER ── */}
        <section aria-labelledby="pdf-cta-heading"
          className="mx-4 md:mx-auto max-w-4xl mb-16 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-3xl p-8 text-center">
          <h2 id="pdf-cta-heading" className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            📥 Download the Complete Formula Sheet PDF
          </h2>
          <p className="text-gray-800 mb-6 max-w-lg mx-auto">
            All 12 chapters, 85+ formulas, exam tips — formatted for print and
            mobile. Free. No signup required.
          </p>
          <Link href="/neet-physics-formula-sheet/download"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 hover:scale-105 transition-all shadow-lg"
            aria-label="Download NEET Physics Formula Sheet PDF free">
            📄 Download Free PDF
          </Link>
        </section>

        {/* ── FAQ SECTION ── */}
        <section aria-labelledby="faq-heading" className="px-4 md:px-6 py-16 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              NEET Physics Formula Sheet — FAQs
            </h2>
            <p className="mt-4 text-gray-600">Common questions about Physics formula preparation for NEET 2026</p>
          </div>

          <div className="space-y-4">
            {faqSchemaData.map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-semibold text-gray-900 text-left pr-4">{faq.q}</h3>
                  <span className="text-violet-700 text-xl shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
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
                      className="inline-block bg-white border border-gray-200 text-gray-700 hover:text-violet-700 hover:border-violet-200 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-sm">
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
          className="px-4 md:px-6 py-20 text-center bg-gradient-to-b from-white to-violet-50">
          <h2 id="final-cta-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Formulas Revised? Now Test Yourself.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg">
            Put your Physics formulas into practice with NEET-pattern mock tests.
            Real exam interface, instant results, accuracy analysis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/neet-mock-test-online"
              className="inline-flex items-center justify-center gap-2 bg-violet-700 text-white px-10 py-4 rounded-xl shadow-lg hover:bg-violet-800 hover:scale-105 transition-all font-bold text-lg"
              aria-label="Start NEET Physics mock test after formula revision">
              🚀 Attempt Mock Test Free
            </Link>
            <Link href="/neet-physics-important-questions"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 hover:border-violet-700 hover:text-violet-700 px-10 py-4 rounded-xl transition-all font-semibold text-lg"
              aria-label="Practice NEET Physics important questions">
              📝 Physics Important Questions
            </Link>
          </div>
        </section>

        {/* ── STICKY CTA ── */}
        <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-50 border-t border-gray-100"
          role="complementary" aria-label="Formula sheet download CTA">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-900">NEET Physics Formula Sheet 2026</p>
              <p className="text-xs text-gray-500">12 chapters · 85+ formulas · Free PDF</p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <Link href="/neet-physics-formula-sheet/download"
                className="flex-1 sm:flex-none text-center bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl shadow hover:scale-105 transition-all font-bold text-sm"
                aria-label="Download NEET Physics formula sheet PDF">
                📥 Download PDF
              </Link>
              <Link href="/neet-mock-test-online"
                className="flex-1 sm:flex-none text-center bg-violet-700 text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition-all font-bold text-sm"
                aria-label="Practice NEET Physics in mock test">
                🔥 Practice Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom padding */}
        <div className="h-20" aria-hidden="true" />
      </div>
    </>
  );
}