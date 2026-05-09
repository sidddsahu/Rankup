// export const metadata = {
//   title: "NEET Chemistry Short Notes 🔥 Organic, Inorganic & Physical",
//   description:
//     "Download NEET Chemistry short notes for quick revision. Chapter-wise Organic, Inorganic and Physical Chemistry notes to boost your NEET score.",
//   keywords: [
//     "neet chemistry notes",
//     "neet chemistry short notes",
//     "organic chemistry notes neet",
//     "inorganic chemistry notes neet",
//     "physical chemistry notes neet",
//   ],
// };

// export default function ChemistryNotesPage() {
//   const sections = [
//     {
//       title: "🧪 Physical Chemistry",
//       points: [
//         "Mole Concept formulas",
//         "Thermodynamics laws",
//         "Chemical equilibrium basics",
//       ],
//     },
//     {
//       title: "⚗️ Organic Chemistry",
//       points: [
//         "Reaction mechanisms (SN1, SN2)",
//         "Important name reactions",
//         "Functional group conversions",
//       ],
//     },
//     {
//       title: "🧬 Inorganic Chemistry",
//       points: [
//         "Periodic table trends",
//         "Coordination compounds basics",
//         "Chemical bonding rules",
//       ],
//     },
//   ];

//   const faqs = [
//     {
//       q: "Are short notes enough for NEET Chemistry?",
//       a: "Short notes help in revision, but concept clarity and practice are also required.",
//     },
//     {
//       q: "Which part of Chemistry is most scoring?",
//       a: "Inorganic and Physical Chemistry are generally more scoring in NEET.",
//     },
//     {
//       q: "How to revise Chemistry fast?",
//       a: "Use short notes and practice questions regularly.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-deep)]">

//       {/* HERO */}
//       <section className="px-6 py-16 text-center">
//         <h1 className="text-3xl md:text-5xl mt-10 font-bold">
//           NEET Chemistry Short Notes 🔥
//         </h1>

//         <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
//           Quick revision notes for Organic, Inorganic and Physical Chemistry.
//         </p>

//         <a
//           href="#"
//           className="inline-block mt-8 bg-[var(--color-accent)] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
//         >
//           📥 Download Notes PDF
//         </a>
//       </section>

//       {/* NOTES SECTIONS */}
//       <section className="px-6 py-16 max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold mb-10 text-center">
//           📚 Chapter-wise Chemistry Notes
//         </h2>

//         <div className="space-y-8">
//           {sections.map((sec, i) => (
//             <div key={i} className="bg-white p-6 rounded-xl shadow">
//               <h3 className="text-xl font-semibold mb-4">
//                 {sec.title}
//               </h3>

//               <ul className="list-disc pl-6 space-y-2">
//                 {sec.points.map((p, idx) => (
//                   <li key={idx}>{p}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SEO CONTENT */}
//       <section className="max-w-4xl mx-auto px-6 py-16 text-gray-700">
//         <h2 className="text-2xl font-bold mb-4">
//           NEET Chemistry Short Notes for Quick Revision
//         </h2>

//         <p className="mb-4">
//           Chemistry short notes are essential for quick revision before NEET exams.
//           They help in revising important concepts, formulas, and reactions efficiently.
//         </p>

//         <p className="mb-4">
//           Focus on Organic reactions, Inorganic memorization, and Physical formulas
//           to maximize your score.
//         </p>

//         <h3 className="text-xl font-semibold mt-6 mb-2">
//           How to use Chemistry notes effectively?
//         </h3>

//         <ul className="list-disc pl-6 space-y-2">
//           <li>Revise notes daily</li>
//           <li>Practice MCQs after revision</li>
//           <li>Focus on weak areas</li>
//         </ul>

//         <p className="mt-6">
//           Also solve{" "}
//           <a href="/neet-pyq" className="text-blue-600 underline">
//             NEET PYQs
//           </a>{" "}
//           to strengthen your preparation.
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


// app/neet-chemistry-short-notes/page.jsx
// ✅ Next.js App Router | ✅ Server Component | ✅ Full SEO 2026

import Link from "next/link";
import Script from "next/script";

// ============================================================
// 1. METADATA — CTR-optimized, semantic, rich snippet ready
// ============================================================
export const metadata = {
  title: "NEET Chemistry Short Notes 2026 – Organic, Inorganic & Physical Chemistry PDF",
  description:
    "Download NEET Chemistry short notes 2026 chapter-wise — Organic, Inorganic & Physical Chemistry. Formula sheets, reaction mechanisms, quick revision notes trusted by 50,000+ students. Free PDF.",
  keywords: [
    "NEET chemistry short notes 2026",
    "NEET chemistry notes PDF download",
    "organic chemistry notes for NEET",
    "inorganic chemistry notes NEET",
    "physical chemistry notes NEET",
    "NEET chemistry chapter wise notes",
    "chemistry quick revision notes NEET",
    "NEET chemistry formula sheet",
    "name reactions for NEET chemistry",
    "coordination compounds notes NEET",
    "chemical equilibrium notes NEET",
    "NEET 2026 chemistry preparation",
  ],
  alternates: {
    canonical: "https://www.rankupp.in/neet-chemistry-short-notes",
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
    title: "NEET Chemistry Short Notes 2026 – Organic, Inorganic & Physical Chemistry",
    description:
      "Chapter-wise NEET Chemistry short notes for quick revision. Organic reactions, Inorganic trends, Physical formulas — all in one place. Free for all NEET aspirants.",
    url: "https://www.rankupp.in/neet-chemistry-short-notes",
    siteName: "RankUpp",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://www.rankupp.in/og/neet-chemistry-short-notes.jpg",
        width: 1200,
        height: 630,
        alt: "NEET Chemistry Short Notes 2026 – RankUpp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEET Chemistry Short Notes 2026 – Chapter-wise Free PDF",
    description:
      "Quick revision notes for NEET Chemistry 2026 — Organic, Inorganic & Physical. Free chapter-wise notes with formulas and reactions.",
    images: ["https://www.rankupp.in/og/neet-chemistry-short-notes.jpg"],
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
const sections = [
  {
    title: "Physical Chemistry",
    icon: "⚛️",
    color: "blue",
    weightage: "Very High",
    questions: "25–28",
    chapters: [
      {
        name: "Mole Concept & Stoichiometry",
        slug: "mole-concept",
        points: [
          "1 mole = 6.022 × 10²³ particles (Avogadro's number)",
          "Molar mass = mass of 1 mole in grams",
          "Molarity (M) = moles of solute / litres of solution",
          "Molality (m) = moles of solute / kg of solvent",
          "Limiting reagent determines maximum product yield",
        ],
        formula: "n = m/M = V(L) × M = N/Nₐ",
      },
      {
        name: "Chemical Equilibrium",
        slug: "chemical-equilibrium",
        points: [
          "Kc = [products] / [reactants] at equilibrium",
          "Kp = Kc(RT)^Δn where Δn = moles of gaseous products − reactants",
          "Le Chatelier's Principle: system opposes applied stress",
          "Higher Kc = more products at equilibrium",
          "Temperature change is the only factor affecting Kc",
        ],
        formula: "Kp = Kc(RT)^Δn",
      },
      {
        name: "Thermodynamics",
        slug: "thermodynamics",
        points: [
          "ΔG = ΔH − TΔS (Gibbs free energy)",
          "Spontaneous: ΔG < 0; Non-spontaneous: ΔG > 0",
          "ΔH < 0 → exothermic; ΔH > 0 → endothermic",
          "First law: ΔU = q + w (energy conservation)",
          "Standard enthalpy of formation of elements = 0",
        ],
        formula: "ΔG = ΔH − TΔS",
      },
      {
        name: "Electrochemistry",
        slug: "electrochemistry",
        points: [
          "Nernst equation: E = E° − (RT/nF)lnQ",
          "Higher SRP → better oxidizing agent",
          "Faraday's law: mass deposited ∝ charge passed",
          "Kohlrausch's law for limiting molar conductance",
          "EMF = E°cathode − E°anode",
        ],
        formula: "E = E° − (0.0592/n)logQ at 298K",
      },
    ],
  },
  {
    title: "Organic Chemistry",
    icon: "🧪",
    color: "green",
    weightage: "High",
    questions: "18–22",
    chapters: [
      {
        name: "Reaction Mechanisms",
        slug: "reaction-mechanisms",
        points: [
          "SN1: 2 steps, carbocation intermediate, racemisation",
          "SN2: 1 step, backside attack, inversion of configuration",
          "E1: unimolecular elimination, carbocation intermediate",
          "E2: bimolecular, anti periplanar arrangement required",
          "Markovnikov's rule: H adds to carbon with more H",
        ],
        formula: "SN2 rate = k[substrate][nucleophile]",
      },
      {
        name: "Important Name Reactions",
        slug: "name-reactions",
        points: [
          "Aldol condensation: β-hydroxy carbonyl compound formed",
          "Cannizzaro reaction: aldehydes without α-H, NaOH",
          "Friedel-Crafts: electrophilic aromatic substitution",
          "Hoffmann bromamide: RCONH₂ → RNH₂ (degradation)",
          "Reimer-Tiemann: phenol → salicylaldehyde with CHCl₃",
        ],
        formula: "Most tested: Aldol, Cannizzaro, Williamson, Hofmann",
      },
      {
        name: "Functional Group Conversions",
        slug: "functional-group-conversions",
        points: [
          "Alcohol → Aldehyde: mild oxidation (PCC/CrO₃·py)",
          "Aldehyde → Acid: strong oxidation (KMnO₄, K₂Cr₂O₇)",
          "Carboxylic acid → Amine: via amide + Hofmann",
          "Alkene → Diol: OsO₄ or KMnO₄ (cold, dilute)",
          "Nitrobenzene → Aniline: Fe/HCl or H₂/Ni reduction",
        ],
        formula: "Always track oxidation state change in conversions",
      },
      {
        name: "Biomolecules & Polymers",
        slug: "biomolecules-polymers",
        points: [
          "Glucose: open chain (Fischer) vs ring form (Haworth)",
          "Sucrose = glucose + fructose (non-reducing sugar)",
          "α-helix and β-pleated sheet: secondary protein structure",
          "DNA: A=T (2 H-bonds), G≡C (3 H-bonds)",
          "Nylon-6,6: condensation polymer from hexamethylenediamine",
        ],
        formula: "Reducing sugars: free aldehyde or ketone group",
      },
    ],
  },
  {
    title: "Inorganic Chemistry",
    icon: "🧬",
    color: "purple",
    weightage: "Very High",
    questions: "20–25",
    chapters: [
      {
        name: "Periodic Table Trends",
        slug: "periodic-table-trends",
        points: [
          "Atomic radius: increases down group, decreases across period",
          "Ionisation energy: increases across period, decreases down group",
          "Electronegativity: F is highest (3.98 Pauling scale)",
          "Electron affinity: Cl has highest (not F, due to size)",
          "Anomalous properties: Be, B, N, O due to small size/half-filled",
        ],
        formula: "IE₁ < IE₂ < IE₃ (always increases for same element)",
      },
      {
        name: "Coordination Compounds",
        slug: "coordination-compounds",
        points: [
          "IUPAC: ligands alphabetical, then metal, then oxidation state",
          "Strong field ligands: CN⁻, CO, NO₂⁻ (large CFSE, low spin)",
          "Weak field ligands: F⁻, Cl⁻, H₂O, OH⁻ (high spin)",
          "Square planar: d⁸ complexes (Ni²⁺, Pd²⁺, Pt²⁺)",
          "EAN rule = atomic number − electrons lost + 2 × ligands donated",
        ],
        formula: "Δo(octahedral) > Δt(tetrahedral) by factor of 2.22",
      },
      {
        name: "Chemical Bonding",
        slug: "chemical-bonding",
        points: [
          "VSEPR: lone pairs > bonding pairs in repulsion",
          "Bond order = (bonding − antibonding electrons) / 2",
          "sp³d²: octahedral; sp³d: trigonal bipyramidal",
          "Resonance structures: delocalization lowers energy",
          "Fajan's rules: higher charge/smaller cation → more covalent",
        ],
        formula: "Bond order of O₂ = 2, O₂⁺ = 2.5, O₂⁻ = 1.5",
      },
      {
        name: "s-Block & p-Block Elements",
        slug: "s-p-block-elements",
        points: [
          "Li resembles Mg (diagonal relationship)",
          "Be resembles Al; anomalous due to small size, high charge density",
          "Boron family: +3 oxidation state, Lewis acid character",
          "Carbon family: +4/+2 states; inert pair effect in Pb, Sn",
          "Nitrogen family: N₂ inert due to triple bond (bond energy 946 kJ/mol)",
        ],
        formula: "Inert pair effect: increases down group 13, 14, 15",
      },
    ],
  },
];

const faqs = [
  {
    q: "Which part of Chemistry is most scoring in NEET 2026?",
    a: "Inorganic Chemistry is the most scoring section for most students because it relies heavily on factual recall from NCERT. Physical Chemistry rewards students who are strong in numericals and formulas. Organic Chemistry requires understanding reaction mechanisms but also offers consistent marks once patterns are mastered.",
  },
  {
    q: "Are short notes enough for NEET Chemistry preparation?",
    a: "Short notes are powerful for revision — not for first-time learning. Start with NCERT, build concept clarity, then use chapter-wise short notes for rapid revision in the final 2–3 months. Combine with PYQ practice for maximum effectiveness.",
  },
  {
    q: "How many Chemistry questions appear in NEET 2026?",
    a: "NEET 2026 has 45 Chemistry questions — split across Physical, Organic, and Inorganic Chemistry. Each correct answer carries +4 marks and each wrong answer carries -1 mark, making accuracy critical in Chemistry.",
  },
  {
    q: "How many name reactions should I memorize for NEET Chemistry?",
    a: "Focus on the 20–25 most frequently tested name reactions: Aldol Condensation, Cannizzaro, Reimer-Tiemann, Hoffmann Bromamide, Friedel-Crafts, Williamson Synthesis, Hell-Volhard-Zelinsky, Clemmensen Reduction, Wolff-Kishner, and Kolbe's reaction. These cover 90%+ of name reaction questions in NEET.",
  },
  {
    q: "What is the best strategy to revise Chemistry for NEET in 30 days?",
    a: "Days 1–10: Inorganic Chemistry (periodic table, p-block, d-f block, coordination compounds). Days 11–20: Organic Chemistry (mechanisms, name reactions, functional groups, biomolecules). Days 21–30: Physical Chemistry (numericals, thermodynamics, electrochemistry, equilibrium). Practice 30–40 Chemistry MCQs daily throughout.",
  },
  {
    q: "Which Physical Chemistry chapters are most important for NEET?",
    a: "The most important Physical Chemistry chapters for NEET are: Mole Concept (high numerical frequency), Chemical Equilibrium and Ionic Equilibrium (2–3 questions each), Thermodynamics and Thermochemistry, Electrochemistry, Chemical Kinetics, and Solutions. Together these account for 15–18 of the 45 Chemistry questions.",
  },
];

const stats = [
  { value: "45", label: "Chemistry Questions in NEET" },
  { value: "180", label: "Total Marks (Chemistry)" },
  { value: "25+", label: "Name Reactions to Know" },
  { value: "3", label: "Core Branches Covered" },
];

const relatedPages = [
  { title: "NEET Biology Important Questions", href: "/neet-biology-important-questions", icon: "🧬" },
  { title: "NEET Physics Important Questions", href: "/neet-physics-important-questions", icon: "⚡" },
  { title: "NEET Mock Test Online", href: "/neet-mock-test-online", icon: "📝" },
  { title: "NEET Previous Year Questions", href: "/neet-pyq", icon: "📅" },
  { title: "NEET Chemistry Important Questions", href: "/neet-chemistry-important-questions", icon: "🧪" },
  { title: "NEET Chapter-wise Weightage", href: "/neet-chapter-wise-weightage", icon: "📊" },
];

const colorMap = {
  blue: {
    badge: "bg-blue-100 text-blue-700",
    border: "border-blue-200",
    bg: "bg-blue-50",
    icon: "text-blue-600",
    btn: "bg-blue-600 hover:bg-blue-700",
    formula: "bg-blue-50 border-blue-300 text-blue-800",
  },
  green: {
    badge: "bg-green-100 text-green-700",
    border: "border-green-200",
    bg: "bg-green-50",
    icon: "text-green-600",
    btn: "bg-green-600 hover:bg-green-700",
    formula: "bg-green-50 border-green-300 text-green-800",
  },
  purple: {
    badge: "bg-purple-100 text-purple-700",
    border: "border-purple-200",
    bg: "bg-purple-50",
    icon: "text-purple-600",
    btn: "bg-purple-600 hover:bg-purple-700",
    formula: "bg-purple-50 border-purple-300 text-purple-800",
  },
};

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
      name: "NEET Chemistry Short Notes",
      item: "https://www.rankupp.in/neet-chemistry-short-notes",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "NEET Chemistry Short Notes 2026 – Organic, Inorganic & Physical Chemistry",
  description:
    "Chapter-wise NEET Chemistry short notes for quick revision. Organic reactions, Inorganic trends, Physical formulas — free for all aspirants.",
  author: { "@type": "Organization", name: "RankUpp", url: "https://www.rankupp.in" },
  publisher: {
    "@type": "Organization",
    name: "RankUpp",
    logo: { "@type": "ImageObject", url: "https://www.rankupp.in/logo.png" },
  },
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  mainEntityOfPage: "https://www.rankupp.in/neet-chemistry-short-notes",
  image: "https://www.rankupp.in/og/neet-chemistry-short-notes.jpg",
  keywords: "NEET chemistry short notes, NEET 2026, organic chemistry notes, physical chemistry notes NEET",
  about: { "@type": "Thing", name: "NEET Chemistry Preparation" },
  audience: { "@type": "Audience", audienceType: "Medical entrance exam students" },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NEET Chemistry Short Notes – Chapter-wise List",
  description: "Chapter-wise short notes for NEET Chemistry 2026",
  numberOfItems: sections.reduce((acc, s) => acc + s.chapters.length, 0),
  itemListElement: sections.flatMap((s, si) =>
    s.chapters.map((ch, ci) => ({
      "@type": "ListItem",
      position: si * 4 + ci + 1,
      name: `${ch.name} – NEET Chemistry Notes`,
      url: `https://www.rankupp.in/neet-chemistry-short-notes/${ch.slug}`,
    }))
  ),
};

const educationalSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "RankUpp",
  url: "https://www.rankupp.in",
  description:
    "RankUpp is India's trusted NEET preparation platform offering chapter-wise notes, mock tests, and PYQs for 50,000+ medical aspirants.",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "NEET Chemistry Study Resources",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Course", name: "NEET Chemistry Short Notes" } },
      { "@type": "Offer", itemOffered: { "@type": "Course", name: "NEET Full Mock Tests" } },
    ],
  },
};

// ============================================================
// 4. PAGE COMPONENT
// ============================================================
export default function NEETChemistryShortNotesPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="schema-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="schema-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Script id="schema-educational" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalSchema) }} />

      <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-deep)]">

        {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-6 pt-28 pb-2 text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:text-[var(--color-primary)]">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/neet" className="hover:text-[var(--color-primary)]">NEET</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-[var(--color-deep)] font-medium" aria-current="page">Chemistry Short Notes</li>
          </ol>
        </nav>

        {/* ── HERO ── */}
        <section className="px-6 py-14 text-center max-w-4xl mx-auto">
          <div className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            NEET 2026 Chemistry Revision
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-[var(--color-deep)]">
            NEET Chemistry Short Notes 2026{" "}
            <span className="text-[var(--color-accent)]">🔥 Chapter-wise</span>
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Master <strong>Organic, Inorganic &amp; Physical Chemistry</strong> for NEET 2026 with
            concise, exam-focused notes — covering key formulas, reaction mechanisms, periodic
            trends, and name reactions. Curated from <strong>NCERT</strong> and aligned with NTA's
            official NEET syllabus.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link
              href="/neet-mock-test-online"
              className="bg-[var(--color-accent)] text-white px-7 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              🚀 Practice Chemistry MCQs
            </Link>
            <Link
              href="/neet-pyq"
              className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-7 py-3 rounded-xl font-semibold hover:bg-[var(--color-primary)] hover:text-white transition"
            >
              📅 Solve Chemistry PYQs
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-gray-500">
            <span>✅ NCERT-aligned</span>
            <span>✅ Formula sheets included</span>
            <span>✅ Name reactions covered</span>
            <span>✅ Free for all students</span>
          </div>
        </section>

        {/* ── STATS ── */}
        <section aria-label="NEET Chemistry Quick Stats" className="bg-[var(--color-primary)] text-white py-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-extrabold">{s.value}</p>
                <p className="text-sm mt-1 opacity-80">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SEO INTRO CONTENT ── */}
        <section className="max-w-4xl mx-auto px-6 py-14 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-[var(--color-deep)] mb-4">
            Why NEET Chemistry Short Notes Are Essential for 2026
          </h2>
          <p className="mb-4">
            Chemistry carries <strong>180 out of 720 marks</strong> in NEET — with 45 questions
            spanning Physical, Organic, and Inorganic branches. Unlike Biology, Chemistry demands
            a dual approach: conceptual depth for Organic mechanisms and factual accuracy for
            Inorganic recall. Short notes bridge the gap between initial learning and rapid
            pre-exam revision.
          </p>
          <p className="mb-4">
            Our NEET Chemistry notes for 2026 are distilled from{" "}
            <strong>NCERT Class 11 &amp; 12 Chemistry</strong>, supplemented by{" "}
            <Link href="/neet-pyq" className="text-[var(--color-primary)] underline font-medium">
              NEET previous year question analysis (2011–2024)
            </Link>
            . Every key formula, named reaction, periodic trend, and mechanism is presented in a
            scannable format — designed for students who need to retain maximum information in
            minimum time.
          </p>
          <p>
            Inorganic Chemistry alone contributes <strong>20–25 questions</strong> per year and
            is the easiest to score through targeted revision. Physical Chemistry numericals from
            Equilibrium, Thermodynamics, and Electrochemistry appear in <strong>every NEET paper
            without exception</strong>. Organic Chemistry tests mechanisms and name reactions that
            repeat with high frequency.
          </p>
        </section>

        {/* ── MAIN NOTES SECTIONS ── */}
        {sections.map((sec, si) => {
          const c = colorMap[sec.color];
          return (
            <section
              key={si}
              id={sec.title.toLowerCase().replace(/\s+/g, "-")}
              aria-labelledby={`section-heading-${si}`}
              className={`px-6 py-14 ${si % 2 !== 0 ? "bg-gray-50" : ""}`}
            >
              <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{sec.icon}</span>
                      <h2
                        id={`section-heading-${si}`}
                        className="text-2xl md:text-3xl font-extrabold text-[var(--color-deep)]"
                      >
                        {sec.title}
                      </h2>
                    </div>
                    <p className="text-gray-500 text-sm">
                      Expected questions in NEET 2026:{" "}
                      <strong className="text-[var(--color-deep)]">{sec.questions}</strong>
                    </p>
                  </div>
                  <span className={`text-sm font-bold px-3 py-1.5 rounded-full ${c.badge}`}>
                    {sec.weightage} Weightage
                  </span>
                </div>

                {/* Chapter Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  {sec.chapters.map((ch, ci) => (
                    <article
                      key={ci}
                      className={`bg-white rounded-2xl shadow-sm border ${c.border} p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}
                    >
                      <h3 className="font-bold text-lg text-[var(--color-deep)] mb-4">
                        {ch.name}
                      </h3>

                      <ul className="space-y-2 mb-4">
                        {ch.points.map((pt, pi) => (
                          <li key={pi} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className={`mt-0.5 font-bold ${c.icon}`}>✓</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Key Formula */}
                      <div className={`border rounded-lg px-4 py-2.5 mb-4 ${c.formula}`}>
                        <p className="text-xs font-semibold uppercase mb-1 opacity-60">Key Formula / Tip</p>
                        <p className="text-sm font-mono font-semibold">{ch.formula}</p>
                      </div>

                      <Link
                        href={`/neet-chemistry-short-notes/${ch.slug}`}
                        className={`inline-block w-full text-center text-white rounded-lg py-2.5 text-sm font-semibold transition ${c.btn}`}
                        aria-label={`View full ${ch.name} notes for NEET`}
                      >
                        View Full Notes →
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* ── HOW TO USE NOTES ── */}
        <section className="max-w-4xl mx-auto px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-[var(--color-deep)]">
            📋 How to Revise NEET Chemistry Effectively Using Short Notes
          </h2>
          <p className="text-gray-600 mb-8">
            A proven strategy used by NEET Chemistry toppers for rapid, high-retention revision.
          </p>

          <ol className="space-y-5">
            {[
              {
                step: "1",
                title: "Build NCERT Foundation First",
                desc: "Every short note should be revisited alongside your NCERT text. Notes condense information — NCERT provides the context. Never replace NCERT with notes; use notes to accelerate your NCERT revision cycles.",
              },
              {
                step: "2",
                title: "Memorize Formulas with Derivation Context",
                desc: "Don't rote-learn formulas in isolation. Understand where each formula comes from — Nernst equation from thermodynamics, Kp from equilibrium law. This lets you reconstruct formulas under exam pressure.",
              },
              {
                step: "3",
                title: "Create Your Reaction Mechanism Flowcharts",
                desc: "Organic Chemistry clicks when you visualize electron flow. After reading each mechanism, draw it yourself with arrows. SN1/SN2, addition, elimination, and substitution reactions become intuitive with active recall practice.",
              },
              {
                step: "4",
                title: "Revise Inorganic Periodically (Every 3 Days)",
                desc: "Inorganic facts decay fastest in memory. Use spaced repetition — revisit periodic trends, p-block reactions, and coordination compound rules every 3 days during preparation and daily in the final month.",
              },
              {
                step: "5",
                title: "Solve 30+ Chemistry MCQs Daily",
                desc: "Reading notes without application leads to passive knowledge. After each chapter revision, immediately attempt 30–40 NEET-level MCQs. This cements formulas and reveals gaps in your understanding before the exam.",
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
        </section>

        {/* ── TOPICAL AUTHORITY SEO CONTENT ── */}
        <section className="bg-gray-50 px-6 py-14">
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-[var(--color-deep)] mb-4">
              NEET Chemistry 2026 – Chapter-wise Weightage & Most Important Topics
            </h2>

            <p className="mb-4">
              According to NTA's official NEET syllabus and analysis of papers from 2015–2024,
              Chemistry question distribution follows consistent patterns. Here's what every
              NEET 2026 aspirant must know:
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-deep)] mt-6 mb-3">
              Physical Chemistry (25–28 Questions)
            </h3>
            <p className="mb-4">
              Physical Chemistry is the most numerical-heavy section. Mole Concept and
              Stoichiometry appear in virtually every NEET paper (2–3 questions). Chemical
              Equilibrium including ionic equilibrium typically contributes 4–6 questions.
              Thermodynamics, Electrochemistry, and Chemical Kinetics each contribute 2–3
              questions. Students comfortable with numericals can score 90%+ in this section.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-deep)] mt-6 mb-3">
              Organic Chemistry (18–22 Questions)
            </h3>
            <p className="mb-4">
              Organic Chemistry tests both mechanism understanding and memory. General Organic
              Chemistry (GOC) — which covers inductive effects, resonance, hyperconjugation,
              and reaction intermediates — provides the conceptual backbone for all other
              Organic questions. Name reactions from Aldehydes, Ketones, and Carboxylic Acids
              chapters are tested every year. Biomolecules and Polymers contribute 3–4 questions
              that are largely factual and easy to score.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color-deep)] mt-6 mb-3">
              Inorganic Chemistry (20–25 Questions)
            </h3>
            <p className="mb-4">
              Inorganic Chemistry is the most reliable scoring section in NEET Chemistry. The
              d &amp; f block elements, coordination compounds, and p-block elements together
              contribute 12–15 questions per year. Periodic table trends (ionisation energy,
              atomic radius, electronegativity) and chemical bonding (VSEPR, hybridization,
              MO theory) appear consistently. The key to Inorganic is systematic NCERT reading
              — virtually every question traces directly to an NCERT statement, table, or example.
            </p>

            <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mt-6">
              <p className="text-teal-800 font-semibold text-sm">
                💡 Expert Tip: Students who score 130+/180 in Chemistry typically do so by
                maximizing Inorganic (near-perfect) and Physical numericals, compensating for
                any Organic weak spots. Don't skip Inorganic Chemistry — it's the fastest
                path to Chemistry marks in NEET.
              </p>
            </div>
          </div>
        </section>

        {/* ── RELATED PAGES ── */}
        <section className="px-6 py-14">
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
        <section id="faqs" aria-labelledby="faq-heading" className="bg-gray-50 px-6 py-14">
          <div className="max-w-4xl mx-auto">
            <h2
              id="faq-heading"
              className="text-3xl font-extrabold mb-10 text-center text-[var(--color-deep)]"
            >
              ❓ Frequently Asked Questions – NEET Chemistry Notes 2026
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
          </div>
        </section>

        {/* ── EEAT TRUST SECTION ── */}
        <section className="bg-[var(--color-primary)] text-white px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">
              Why RankUpp Chemistry Notes Are Trusted by 50,000+ Students
            </h2>
            <p className="opacity-80 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
              Our Chemistry notes are prepared by experienced NEET faculty with 10+ years of
              teaching and exam analysis experience. All content is cross-verified with NCERT
              textbooks, NTA guidelines, and NEET PYQs from 2011–2024. Updated for NEET 2026.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { icon: "🏆", label: "Expert-curated Content" },
                { icon: "📖", label: "100% NCERT Verified" },
                { icon: "🔢", label: "Formulas Included" },
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
            Ready to Master NEET Chemistry 2026? 🧪
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Use these short notes for revision, then practice MCQs to lock in your learning.
            Join 50,000+ NEET aspirants preparing with RankUpp.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/neet-mock-test-online"
              className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform text-base"
            >
              🚀 Practice Chemistry MCQs Free
            </Link>
            <Link
              href="/neet-pyq"
              className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold hover:bg-[var(--color-primary)] hover:text-white transition text-base"
            >
              📅 Solve NEET PYQs
            </Link>
          </div>
        </section>

        {/* ── STICKY CTA ── */}
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3 flex justify-center z-50">
          <Link
            href="/neet-mock-test-online"
            className="bg-[var(--color-accent)] text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform text-sm md:text-base"
          >
            🔥 Practice NEET Chemistry Now — Free
          </Link>
        </div>

        {/* Bottom padding for sticky CTA */}
        <div className="h-20" aria-hidden="true" />
      </div>
    </>
  );
}