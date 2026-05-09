// ============================================================
// FILE: app/neet-biology-ncert-questions/page.tsx
// RANKUPP.IN — Full SEO Optimized NEET Biology NCERT Page
// ============================================================



import Link from "next/link";
import Image from "next/image";

// ============================================================
// SECTION 1: METADATA — Maximum CTR + Semantic SEO + Rich Snippets
// ============================================================

export const metadata = {
  // Primary keyword front-loaded. Power word "Free" + number hook + year.
  title:
    "NCERT Line-by-Line Biology Questions for NEET 2026 | Free Chapter-Wise Practice",

  description:
    "Practice 1000+ NCERT line-by-line Biology questions for NEET 2026. Chapter-wise MCQs for Class 11 & 12 Biology — Cell, Genetics, Ecology, Human Physiology & more. Trusted by 2 lakh+ NEET aspirants. Start Free.",

  keywords: [
    "ncert line by line biology questions",
    "neet biology ncert questions",
    "ncert biology mcq for neet",
    "class 11 biology ncert questions neet",
    "class 12 biology ncert questions neet",
    "neet biology chapter wise questions",
    "ncert based biology questions for neet 2026",
    "biology mcq for neet from ncert",
    "cell the unit of life ncert questions neet",
    "biomolecules ncert questions neet",
    "genetics and evolution ncert questions",
    "human physiology ncert neet questions",
    "ecology ncert questions for neet",
    "neet biology preparation 2026",
    "ncert important questions biology neet",
  ],

  alternates: {
    canonical: "https://www.rankupp.in/neet-biology-ncert-questions",
  },

  openGraph: {
    type: "website",
    url: "https://www.rankupp.in/neet-biology-ncert-questions",
    title:
      "NCERT Line-by-Line Biology Questions for NEET 2026 | Free Chapter-Wise Practice",
    description:
      "1000+ NCERT-based Biology MCQs for NEET 2026. Chapter-wise practice for Class 11 & 12. Free, trusted by 2 lakh+ students. Start now on RankUpp.",
    siteName: "RankUpp",
    images: [
      {
        url: "https://www.rankupp.in/og/neet-biology-ncert-questions.jpg",
        width: 1200,
        height: 630,
        alt: "NCERT Line-by-Line Biology Questions for NEET 2026 – RankUpp",
      },
    ],
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    site: "@rankupp_in",
    creator: "@rankupp_in",
    title:
      "NCERT Line-by-Line Biology Questions for NEET 2026 | Free Chapter-Wise Practice",
    description:
      "Practice 1000+ NCERT Biology MCQs chapter-wise. Free for NEET 2026 aspirants. Cell, Genetics, Ecology, Physiology & more.",
    images: ["https://www.rankupp.in/og/neet-biology-ncert-questions.jpg"],
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
    "theme-color": "#1a56db",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "RankUpp NEET Biology",
    "application-name": "RankUpp",
    "msapplication-TileColor": "#1a56db",
    "format-detection": "telephone=no",
    "og:locale:alternate": "hi_IN",
    rating: "general",
    revisit: "7 days",
    language: "en-IN",
    "geo.region": "IN",
    "geo.placename": "India",
  },
};

// ============================================================
// SECTION 2: JSON-LD SCHEMA DATA — All required schemas
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
      urlTemplate:
        "https://www.rankupp.in/search?q={search_term_string}",
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
    "RankUpp is India's trusted NEET preparation platform offering NCERT line-by-line Biology questions, mock tests, PYQs, and chapter-wise MCQs for Class 11 and 12 students.",
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
    "NEET Biology Preparation",
    "NCERT Biology Questions",
    "Medical Entrance Exam",
    "Class 11 Biology",
    "Class 12 Biology",
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.rankupp.in/neet-biology-ncert-questions#webpage",
  url: "https://www.rankupp.in/neet-biology-ncert-questions",
  name: "NCERT Line-by-Line Biology Questions for NEET 2026 | Free Chapter-Wise Practice",
  description:
    "Practice 1000+ NCERT line-by-line Biology questions for NEET 2026. Chapter-wise MCQs for Class 11 & 12 Biology. Trusted by 2 lakh+ students.",
  inLanguage: "en-IN",
  isPartOf: { "@id": "https://www.rankupp.in/#website" },
  about: {
    "@type": "Thing",
    name: "NEET Biology NCERT Questions",
  },
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  breadcrumb: {
    "@id": "https://www.rankupp.in/neet-biology-ncert-questions#breadcrumb",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.rankupp.in/neet-biology-ncert-questions#breadcrumb",
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
      name: "NEET Biology",
      item: "https://www.rankupp.in/neet-biology",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "NCERT Line-by-Line Biology Questions",
      item: "https://www.rankupp.in/neet-biology-ncert-questions",
    },
  ],
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "NCERT Line-by-Line Biology for NEET 2026",
  description:
    "Comprehensive NCERT-based Biology question bank for NEET 2026 aspirants. Covers all Class 11 and Class 12 Biology chapters with MCQs, answers, and explanations.",
  provider: {
    "@type": "Organization",
    name: "RankUpp",
    sameAs: "https://www.rankupp.in",
  },
  url: "https://www.rankupp.in/neet-biology-ncert-questions",
  courseMode: "online",
  educationalLevel: "Higher Secondary",
  inLanguage: "en-IN",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    instructor: {
      "@type": "Organization",
      name: "RankUpp Academic Team",
    },
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "NEET Aspirants, Class 11-12 Students",
  },
  teaches: [
    "Cell Biology",
    "Biomolecules",
    "Human Physiology",
    "Genetics and Evolution",
    "Ecology",
    "Reproduction in Organisms",
    "Plant Kingdom",
    "Animal Kingdom",
  ],
  isAccessibleForFree: true,
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NEET Biology NCERT Chapter-Wise Questions",
  description:
    "Complete list of NCERT Biology chapters with line-by-line questions for NEET 2026 preparation",
  numberOfItems: 16,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Cell: The Unit of Life — NCERT Questions for NEET",
      url: "https://www.rankupp.in/neet-biology/cell-unit-of-life",
      description:
        "Practice NCERT-based MCQs on Cell structure, organelles, cell wall, plasma membrane for NEET Biology.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Biomolecules — NCERT Questions for NEET",
      url: "https://www.rankupp.in/neet-biology/biomolecules",
      description:
        "NCERT line-by-line questions on carbohydrates, proteins, lipids, enzymes and nucleic acids for NEET.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Human Physiology — NCERT Questions for NEET",
      url: "https://www.rankupp.in/neet-biology/human-physiology",
      description:
        "Chapter-wise NCERT questions on digestion, breathing, circulation, excretion and neural control for NEET.",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Genetics and Evolution — NCERT Questions for NEET",
      url: "https://www.rankupp.in/neet-biology/genetics-evolution",
      description:
        "Important NCERT questions on Mendelian genetics, molecular basis of inheritance, and evolution for NEET.",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Ecology — NCERT Questions for NEET",
      url: "https://www.rankupp.in/neet-biology/ecology",
      description:
        "NCERT-based MCQs on organisms and populations, ecosystem, biodiversity, and environmental issues for NEET.",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Reproduction — NCERT Questions for NEET",
      url: "https://www.rankupp.in/neet-biology/reproduction",
      description:
        "NCERT questions on sexual and asexual reproduction in organisms and reproductive health for NEET.",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Plant Kingdom — NCERT Questions for NEET",
      url: "https://www.rankupp.in/neet-biology/plant-kingdom",
      description:
        "NCERT-based MCQs covering algae, bryophytes, pteridophytes, gymnosperms and angiosperms for NEET.",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "Animal Kingdom — NCERT Questions for NEET",
      url: "https://www.rankupp.in/neet-biology/animal-kingdom",
      description:
        "Practice NCERT questions on classification, phyla characteristics, and animal diversity for NEET.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are NCERT line-by-line questions enough for NEET Biology 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, for NEET Biology, NCERT is the primary and most important source. Over 90% of NEET Biology questions in recent years have been directly or indirectly based on NCERT Class 11 and 12 textbooks. Practicing line-by-line NCERT questions ensures you cover every concept, example, diagram label, and exception that NEET examiners test. Supplementing with previous year questions (PYQs) and mock tests further strengthens your preparation.",
      },
    },
    {
      "@type": "Question",
      name: "How many questions are asked from Biology in NEET 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In NEET 2026, Biology (Botany + Zoology) has 100 questions worth 400 marks out of the total 720 marks. Biology is the highest-scoring section in NEET and accounts for more than 55% of the total marks. Class 11 Biology and Class 12 Biology are weighted almost equally, so thorough NCERT preparation for both classes is essential.",
      },
    },
    {
      "@type": "Question",
      name: "Which Biology chapters have the most questions in NEET?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Based on NEET previous year question analysis, the chapters with the highest weightage in NEET Biology are: Human Physiology (15–20% weightage), Genetics and Evolution (12–15%), Ecology (10–12%), Cell Biology and Cell Cycle (8–10%), Biomolecules (7–9%), Reproduction (8–10%), and Plant Kingdom and Animal Kingdom (10–12%). Focusing NCERT line-by-line practice on these chapters gives maximum return on study time.",
      },
    },
    {
      "@type": "Question",
      name: "How to study NCERT Biology effectively for NEET?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most effective strategy for NCERT Biology NEET preparation is: (1) Read each line of NCERT carefully, including examples, exceptions, and footnotes. (2) Highlight keywords, scientific names, definitions, and numerical values. (3) After each topic, solve NCERT line-by-line questions to reinforce understanding. (4) Revise diagrams — including label positions — since NEET asks diagram-based questions. (5) Solve PYQs chapter-wise to understand the pattern. (6) Take full-length mock tests to build speed and accuracy.",
      },
    },
    {
      "@type": "Question",
      name: "Is Class 11 or Class 12 Biology more important for NEET?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both classes are equally important for NEET Biology. Class 11 Biology covers foundational chapters like Cell Biology, Plant Kingdom, Animal Kingdom, Structural Organization, and Biomolecules. Class 12 Biology covers high-weightage chapters like Genetics, Reproduction, Ecology, and Biotechnology. Historically, NEET papers maintain a 45–55% split between Class 11 and Class 12 Biology. Neglecting either class significantly reduces your Biology score.",
      },
    },
    {
      "@type": "Question",
      name: "How is RankUpp different from other NEET Biology apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RankUpp provides NCERT line-by-line Biology questions mapped exactly to textbook content — not generic MCQ banks. Every question is tagged to the specific NCERT line it comes from, with detailed explanations referencing the original source. The platform also offers NEET PYQ analysis, chapter-wise mock tests, and a personalized progress tracker. It's designed specifically for NEET 2026 aspirants who want concept-level mastery, not just rote question practice.",
      },
    },
    {
      "@type": "Question",
      name: "Can I practice NCERT Biology questions for free on RankUpp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, RankUpp offers free access to a large portion of its NCERT line-by-line Biology question bank. Students can practice chapter-wise questions, attempt mini-mock tests, and view answer explanations at no cost. Premium plans unlock the full question bank, detailed performance analytics, and advanced mock tests with AI-driven weak-area targeting.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best time to start NCERT Biology preparation for NEET?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ideally, NCERT Biology preparation for NEET should begin at the start of Class 11. This gives two full years for thorough reading, revision, and practice. For students in Class 12 or dropper years, beginning NCERT line-by-line revision in April and completing it by October — leaving November to May for mock tests and PYQ practice — is a proven strategy that consistently produces top scores.",
      },
    },
  ],
};

// ============================================================
// SECTION 3: PAGE DATA
// ============================================================

const chapters = [
  {
    id: "cell-unit-of-life",
    name: "Cell: The Unit of Life",
    class: "Class 11",
    questions: 120,
    weightage: "8-10%",
    difficulty: "Medium",
    icon: "🔬",
    topics: ["Cell organelles", "Cell wall", "Plasma membrane", "Endomembrane system"],
    href: "/neet-biology/cell-unit-of-life",
  },
  {
    id: "biomolecules",
    name: "Biomolecules",
    class: "Class 11",
    questions: 95,
    weightage: "7-9%",
    difficulty: "Hard",
    icon: "⚗️",
    topics: ["Carbohydrates", "Proteins", "Enzymes", "Nucleic acids"],
    href: "/neet-biology/biomolecules",
  },
  {
    id: "human-physiology",
    name: "Human Physiology",
    class: "Class 11",
    questions: 180,
    weightage: "15-20%",
    difficulty: "Hard",
    icon: "🫀",
    topics: ["Digestion", "Breathing", "Circulation", "Excretion", "Neural control"],
    href: "/neet-biology/human-physiology",
  },
  {
    id: "genetics-evolution",
    name: "Genetics and Evolution",
    class: "Class 12",
    questions: 150,
    weightage: "12-15%",
    difficulty: "Hard",
    icon: "🧬",
    topics: ["Mendelian genetics", "Molecular inheritance", "Evolution", "Human evolution"],
    href: "/neet-biology/genetics-evolution",
  },
  {
    id: "ecology",
    name: "Ecology",
    class: "Class 12",
    questions: 110,
    weightage: "10-12%",
    difficulty: "Medium",
    icon: "🌿",
    topics: ["Organisms & Populations", "Ecosystem", "Biodiversity", "Environmental issues"],
    href: "/neet-biology/ecology",
  },
  {
    id: "reproduction",
    name: "Reproduction in Organisms",
    class: "Class 12",
    questions: 130,
    weightage: "8-10%",
    difficulty: "Medium",
    icon: "🌸",
    topics: ["Sexual reproduction", "Reproductive health", "Embryology", "Fertilization"],
    href: "/neet-biology/reproduction",
  },
  {
    id: "plant-kingdom",
    name: "Plant Kingdom",
    class: "Class 11",
    questions: 85,
    weightage: "5-7%",
    difficulty: "Medium",
    icon: "🌱",
    topics: ["Algae", "Bryophytes", "Pteridophytes", "Gymnosperms", "Angiosperms"],
    href: "/neet-biology/plant-kingdom",
  },
  {
    id: "animal-kingdom",
    name: "Animal Kingdom",
    class: "Class 11",
    questions: 100,
    weightage: "5-8%",
    difficulty: "Medium",
    icon: "🐾",
    topics: ["Classification", "Phyla characteristics", "Non-chordates", "Chordates"],
    href: "/neet-biology/animal-kingdom",
  },
];

const stats = [
  { value: "1000+", label: "NCERT-based Questions" },
  { value: "2L+", label: "Students Practicing" },
  { value: "16", label: "Chapters Covered" },
  { value: "90%+", label: "NEET Questions from NCERT" },
];

const faqs = [
  {
    q: "Are NCERT line-by-line questions enough for NEET Biology 2026?",
    a: "Yes, for NEET Biology, NCERT is the primary and most important source. Over 90% of NEET Biology questions in recent years have been directly or indirectly based on NCERT Class 11 and 12 textbooks. Practicing line-by-line NCERT questions ensures you cover every concept, example, diagram label, and exception that NEET examiners test. Supplementing with previous year questions (PYQs) and mock tests further strengthens your preparation.",
  },
  {
    q: "How many questions are asked from Biology in NEET 2026?",
    a: "In NEET 2026, Biology (Botany + Zoology) has 100 questions worth 400 marks out of the total 720 marks. Biology is the highest-scoring section in NEET and accounts for more than 55% of the total marks. Class 11 Biology and Class 12 Biology are weighted almost equally, so thorough NCERT preparation for both classes is essential.",
  },
  {
    q: "Which Biology chapters have the most questions in NEET?",
    a: "Based on NEET previous year question analysis, the chapters with the highest weightage in NEET Biology are: Human Physiology (15–20%), Genetics and Evolution (12–15%), Ecology (10–12%), Cell Biology (8–10%), Biomolecules (7–9%), Reproduction (8–10%), and Plant & Animal Kingdom (10–12%). Focusing NCERT line-by-line practice on these chapters gives maximum return on study time.",
  },
  {
    q: "How to study NCERT Biology effectively for NEET?",
    a: "The most effective strategy: (1) Read each NCERT line carefully, including examples, exceptions, and footnotes. (2) Highlight keywords, scientific names, definitions, and numerical values. (3) After each topic, solve NCERT line-by-line questions to reinforce understanding. (4) Revise diagrams thoroughly — including label positions. (5) Solve PYQs chapter-wise to understand the question pattern. (6) Take full-length mock tests to build speed and accuracy.",
  },
  {
    q: "Is Class 11 or Class 12 Biology more important for NEET?",
    a: "Both classes are equally important. Class 11 covers foundational chapters like Cell Biology, Plant Kingdom, Animal Kingdom, and Biomolecules. Class 12 covers high-weightage chapters like Genetics, Reproduction, Ecology, and Biotechnology. NEET papers maintain a roughly 45–55% split between Class 11 and Class 12 Biology. Neglecting either significantly reduces your Biology score.",
  },
  {
    q: "Can I practice NCERT Biology questions for free on RankUpp?",
    a: "Yes, RankUpp offers free access to a large portion of its NCERT line-by-line Biology question bank. Students can practice chapter-wise questions, attempt mini-mock tests, and view answer explanations at no cost. Premium plans unlock the full question bank, detailed performance analytics, and AI-driven weak-area targeting.",
  },
  {
    q: "How is RankUpp different from other NEET Biology apps?",
    a: "RankUpp provides NCERT line-by-line Biology questions mapped exactly to textbook content — not generic MCQ banks. Every question is tagged to the specific NCERT line it comes from, with detailed explanations referencing the original source. The platform also offers NEET PYQ analysis, chapter-wise mock tests, and a personalized progress tracker designed specifically for NEET 2026 aspirants.",
  },
  {
    q: "What is the best time to start NCERT Biology preparation for NEET?",
    a: "Ideally, start NCERT Biology preparation at the beginning of Class 11, giving two full years for thorough reading, revision, and practice. For Class 12 students or droppers, begin NCERT line-by-line revision in April and complete it by October — leaving November to May for mock tests and PYQ practice. This proven strategy consistently produces high NEET scores.",
  },
];

const studyTips = [
  {
    step: "01",
    title: "Read Every NCERT Line",
    desc: "Don't skip examples, footnotes, or intext questions. NEET examiners frequently test information hidden in examples and margin notes.",
  },
  {
    step: "02",
    title: "Master Diagrams & Labels",
    desc: "Biology diagrams — cell structure, heart, nephron, flower — appear directly in NEET. Know every label, its position, and associated functions.",
  },
  {
    step: "03",
    title: "Practice Line-by-Line Questions",
    desc: "After each NCERT paragraph, solve corresponding MCQs. This reinforces recall and trains your brain to identify NEET-style question patterns.",
  },
  {
    step: "04",
    title: "Analyse PYQs Chapter-Wise",
    desc: "Previous year questions reveal examiner preferences. Map each PYQ to its exact NCERT line — most map perfectly, confirming NCERT supremacy.",
  },
  {
    step: "05",
    title: "Revise Scientific Names & Values",
    desc: "NEET tests specific numerical values (RBC lifespan, tidal volume, etc.) and scientific names directly from NCERT. Create a dedicated revision list.",
  },
  {
    step: "06",
    title: "Attempt Chapter-Wise Mock Tests",
    desc: "After completing each chapter, take a timed chapter test. Track accuracy and time per question to identify weak areas before the final exam.",
  },
];

const relatedLinks = [
  { href: "/neet-mock-test-online", label: "NEET Mock Tests 2026" },
  { href: "/neet-pyq", label: "NEET Previous Year Questions" },
  { href: "/neet-physics-ncert-questions", label: "NEET Physics NCERT Questions" },
  { href: "/neet-chemistry-ncert-questions", label: "NEET Chemistry NCERT Questions" },
  { href: "/neet-biology/human-physiology", label: "Human Physiology Questions" },
  { href: "/neet-biology/genetics-evolution", label: "Genetics & Evolution Questions" },
  { href: "/neet-biology/ecology", label: "Ecology Questions" },
  { href: "/neet-cutoff", label: "NEET Cutoff 2026" },
  { href: "/neet-syllabus", label: "NEET Syllabus 2026" },
  { href: "/neet-preparation-tips", label: "NEET Preparation Tips" },
];

// ============================================================
// SECTION 4: PAGE COMPONENT
// ============================================================

export default function BiologyNCERTPage() {
  return (
    <>
      {/* ── JSON-LD Schemas ── */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen mt-16 bg-[var(--color-paper)] text-[var(--color-deep)]">

        {/* ── BREADCRUMB NAVIGATION ── */}
        <nav
          aria-label="Breadcrumb"
          className="px-4 md:px-6 py-3 max-w-7xl mx-auto"
        >
          <ol
            className="flex flex-wrap items-center gap-1 text-sm text-gray-500"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            {[
              { href: "/", label: "Home", position: 1 },
              { href: "/neet-preparation", label: "NEET Preparation", position: 2 },
              { href: "/neet-biology", label: "NEET Biology", position: 3 },
              {
                href: "/neet-biology-ncert-questions",
                label: "NCERT Line-by-Line Questions",
                position: 4,
              },
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
                      className="hover:text-[var(--color-primary)] transition-colors"
                    >
                      <span itemProp="name">{crumb.label}</span>
                    </Link>
                    <span aria-hidden="true" className="text-gray-400">›</span>
                  </>
                ) : (
                  <span
                    itemProp="name"
                    aria-current="page"
                    className="text-[var(--color-primary)] font-medium"
                  >
                    {crumb.label}
                  </span>
                )}
                <meta itemProp="position" content={String(crumb.position)} />
              </li>
            ))}
          </ol>
        </nav>

        {/* ── HERO SECTION ── */}
        <section
          aria-labelledby="hero-heading mt-10"
          className="px-4 md:px-6 py-12 md:py-20 text-center bg-gradient-to-b from-blue-50 to-white"
        >
          {/* Trust badge */}
          <div className="inline-flex items-center  gap-2 bg-blue-100 text-blue-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            <span aria-hidden="true">⭐</span>
            <span>Trusted by 2 Lakh+ NEET Aspirants</span>
          </div>

          <h1
            id="hero-heading"
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 max-w-4xl mx-auto leading-tight"
          >
            NCERT Line-by-Line{" "}
            <span className="text-[var(--color-primary)]">Biology Questions</span>{" "}
            for NEET 2026
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Practice 1000+ NCERT-based Biology MCQs chapter-wise — Class 11 &
            12 Biology fully covered. Every question mapped to its exact NCERT
            source. Start free. Score higher.
          </p>

          {/* Social proof */}
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <span aria-hidden="true">✅</span> Free to start
            </span>
            <span className="flex items-center gap-1">
              <span aria-hidden="true">✅</span> All 16 chapters covered
            </span>
            <span className="flex items-center gap-1">
              <span aria-hidden="true">✅</span> Detailed answer explanations
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/neet-mock-test-online"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all font-semibold text-lg"
              aria-label="Start practicing NEET Biology NCERT questions for free"
            >
              🚀 Start Practicing Free
            </Link>
            <Link
              href="/neet-pyq"
              className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-xl hover:bg-blue-50 transition-all font-semibold text-lg"
              aria-label="Practice NEET previous year questions"
            >
              📋 NEET PYQs
            </Link>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section
          aria-label="Platform statistics"
          className="bg-[var(--color-primary)] text-white py-8"
        >
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-extrabold">{stat.value}</p>
                <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CHAPTER LIST SECTION ── */}
        <section
          aria-labelledby="chapters-heading"
          className="px-4 md:px-6 py-16 max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2
              id="chapters-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Chapter-Wise NCERT Biology Questions for NEET
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Every NEET Biology chapter from Class 11 and 12 — with question
              counts, weightage, and difficulty level to guide your study plan.
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
            role="list"
            aria-label="NEET Biology chapters with NCERT questions"
          >
            {chapters.map((chapter) => (
              <article
                key={chapter.id}
                role="listitem"
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all group"
                aria-label={`${chapter.name} — ${chapter.questions} NCERT questions for NEET`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-3xl"
                      role="img"
                      aria-label={chapter.name}
                    >
                      {chapter.icon}
                    </span>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-[var(--color-primary)] transition-colors">
                        {chapter.name}
                      </h3>
                      <span className="text-xs text-gray-500 font-medium">
                        {chapter.class}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap ${
                      chapter.difficulty === "Hard"
                        ? "bg-red-50 text-red-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {chapter.difficulty}
                  </span>
                </div>

                {/* Topics */}
                <div
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label="Topics covered"
                >
                  {chapter.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Stats row */}
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500 border-t border-gray-50 pt-4">
                  <span>
                    <strong className="text-gray-800">{chapter.questions}</strong> questions
                  </span>
                  <span>
                    NEET weightage:{" "}
                    <strong className="text-[var(--color-primary)]">
                      {chapter.weightage}
                    </strong>
                  </span>
                </div>

                <Link
                  href={chapter.href}
                  className="mt-4 inline-flex items-center gap-1 text-[var(--color-primary)] font-semibold text-sm hover:gap-2 transition-all"
                  aria-label={`Practice ${chapter.name} NCERT questions for NEET`}
                >
                  Practice Questions →
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/neet-biology"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline"
              aria-label="View all NEET Biology chapters"
            >
              View All 16 Chapters →
            </Link>
          </div>
        </section>

        {/* ── MAIN SEO CONTENT SECTION ── */}
        <section
          aria-labelledby="seo-content-heading"
          className="max-w-4xl mx-auto px-4 md:px-6 py-16"
        >
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">

            <h2
              id="seo-content-heading"
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Why NCERT Line-by-Line Questions Are the Key to Cracking NEET
              Biology
            </h2>

            <p className="mb-5">
              Every year, NEET Biology surprises students with questions that
              seem obscure — until you trace them back to a single NCERT line,
              a diagram label, or a footnote example. This is not a coincidence.
              The National Testing Agency (NTA) designs NEET Biology questions
              to test whether students have read their NCERT textbooks with
              genuine understanding, not just surface-level coverage. That is
              exactly why practicing NCERT line-by-line questions for NEET is
              the single highest-ROI study activity for any Biology aspirant.
            </p>

            <p className="mb-5">
              Analysis of NEET papers from 2016 to 2024 consistently shows that
              over 85–90% of Biology MCQs can be answered correctly by a student
              who has thoroughly mastered NCERT Class 11 and Class 12 Biology
              textbooks. This figure is far higher than Physics or Chemistry,
              which demand more application-based preparation. For Biology,
              NCERT is not just important — it is nearly sufficient when studied
              at depth.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              What "Line-by-Line" NCERT Practice Actually Means
            </h3>

            <p className="mb-5">
              Many students claim to have "finished NCERT" when they have read
              the main content of each chapter. True NCERT line-by-line
              preparation means something much more rigorous. It means reading
              every sentence — including the introductory paragraphs, intext
              activities, chapter summaries, worked examples, and the exceptions
              buried in a single subordinate clause — and then being able to
              answer a question constructed from any of those sentences.
            </p>

            <p className="mb-5">
              NEET examiners frequently construct questions from:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
              <li>
                <strong>Specific numerical values</strong> — RBC lifespan (120
                days), tidal volume (500 mL), cardiac output figures, enzyme
                Km values
              </li>
              <li>
                <strong>Scientific names</strong> — organism names used in
                examples and case studies throughout NCERT chapters
              </li>
              <li>
                <strong>Diagram labels</strong> — exact names of structures
                shown in NCERT diagrams, including unlabeled components
                students often overlook
              </li>
              <li>
                <strong>Exception statements</strong> — sentences like "except
                in," "unlike," or "however" that signal the kind of contrast
                NEET examiners love to test
              </li>
              <li>
                <strong>Intext questions and activities</strong> — NCERT places
                mini-questions within chapters; NEET frequently converts these
                into MCQs
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Class 11 vs Class 12 Biology: Which Is More Important for NEET?
            </h3>

            <p className="mb-5">
              The honest answer is that both are equally indispensable, and
              neglecting either is a strategic mistake. NEET Biology papers
              historically maintain a roughly 45–55% balance between Class 11
              and Class 12 content, meaning you cannot afford to skip an entire
              year of the syllabus.
            </p>

            <p className="mb-5">
              Class 11 Biology builds the conceptual foundation — Cell Biology,
              Structural Organization, Plant Kingdom, Animal Kingdom, and
              Biomolecules. These chapters appear foundational but contribute
              significantly to NEET marks. Human Physiology (Class 11) alone
              accounts for 15–20% of Biology marks, making it the single
              highest-weightage unit in the entire paper.
            </p>

            <p className="mb-5">
              Class 12 Biology contains chapters with the most direct
              application marks — Genetics and Evolution (12–15%), Reproduction
              (8–10%), Ecology (10–12%), and Biotechnology (5–7%). Genetics
              questions are particularly popular for testing conceptual
              understanding through numerical and pedigree problems, all of
              which originate from NCERT examples.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              How RankUpp's NCERT Line-by-Line Questions Are Structured
            </h3>

            <p className="mb-5">
              RankUpp's Biology question bank is designed around a simple but
              powerful principle: every question traces back to a specific
              textbook source. Questions are tagged to their exact NCERT
              chapter, section, paragraph, and in many cases the specific
              sentence or diagram they originate from. This granularity gives
              students something generic MCQ apps cannot — the ability to
              pinpoint exactly which NCERT content they haven't fully absorbed.
            </p>

            <p className="mb-5">
              The platform organizes questions into three difficulty levels.
              Foundation questions test direct NCERT recall. Application
              questions test understanding through slightly modified scenarios.
              Integration questions combine concepts from multiple NCERT sections
              — mirroring the style of the toughest NEET questions that seem
              "tricky" but are actually deeply NCERT-based.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              NEET Biology Scoring Strategy: Maximize Marks in 90 Minutes
            </h3>

            <p className="mb-5">
              Biology in NEET carries 400 marks out of 720 — more than Physics
              and Chemistry combined. A student who scores 340+ in Biology can
              comfortably compensate for an average performance in the other
              two subjects. This makes Biology the highest-leverage subject for
              most NEET aspirants, and NCERT mastery is the direct path to
              that score.
            </p>

            <p className="mb-5">
              The recommended exam strategy is to attempt Biology first in the
              NEET paper, as it requires the least calculation time. Spending
              35–40 minutes on Biology and targeting 90+ correct answers out of
              100 is achievable with thorough NCERT preparation. Students who
              practice NCERT line-by-line questions regularly report higher
              accuracy and faster question-solving speed on exam day.
            </p>

          </div>
        </section>

        {/* ── HOW TO STUDY SECTION ── */}
        <section
          aria-labelledby="study-tips-heading"
          className="bg-blue-50 py-16 px-4 md:px-6"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2
                id="study-tips-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900"
              >
                How to Study NCERT Biology for NEET: 6-Step Method
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                A structured approach used by NEET toppers to extract maximum
                marks from NCERT Biology textbooks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyTips.map((tip) => (
                <div
                  key={tip.step}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-4xl font-black text-blue-100 block mb-2">
                    {tip.step}
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EEAT TRUST / ABOUT SECTION ── */}
        <section
          aria-labelledby="trust-heading"
          className="max-w-4xl mx-auto px-4 md:px-6 py-16"
        >
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white">
            <h2
              id="trust-heading"
              className="text-2xl md:text-3xl font-bold mb-6"
            >
              Why 2 Lakh+ NEET Aspirants Choose RankUpp for Biology Practice
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "NCERT-Source Tagged",
                  desc: "Every question is tagged to its exact NCERT chapter, section, and line. No guesswork, no generic MCQs.",
                },
                {
                  icon: "📊",
                  title: "Performance Analytics",
                  desc: "Real-time accuracy tracking by chapter, topic, and question type. Know exactly where you lose marks.",
                },
                {
                  icon: "🏆",
                  title: "Topper-Verified Content",
                  desc: "Questions reviewed and validated by NEET 700+ scorers and experienced Biology faculty.",
                },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <span className="text-3xl" role="img" aria-label={item.title}>
                    {item.icon}
                  </span>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-blue-500">
              <p className="text-blue-100 text-sm leading-relaxed">
                <strong className="text-white">Disclaimer:</strong> RankUpp is
                an independent educational platform and is not affiliated with
                NTA or any official NEET authority. All content is created by
                our academic team for NEET preparation purposes. Questions are
                based on NCERT textbooks published by NCERT, Ministry of
                Education, Government of India.
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
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600">
              Everything NEET aspirants ask about NCERT Biology preparation
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm group"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-semibold text-gray-900 text-left pr-4">
                    {faq.q}
                  </h3>
                  <span
                    className="text-[var(--color-primary)] text-xl shrink-0 group-open:rotate-45 transition-transform"
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

        {/* ── RELATED INTERNAL LINKS SECTION ── */}
        <section
          aria-labelledby="related-links-heading"
          className="bg-gray-50 py-12 px-4 md:px-6"
        >
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
                      className="inline-block bg-white border border-gray-200 text-gray-700 hover:text-[var(--color-primary)] hover:border-blue-200 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {/* ── FINAL CTA SECTION ── */}
        <section
          aria-labelledby="final-cta-heading"
          className="px-4 md:px-6 py-20 text-center bg-gradient-to-b from-white to-blue-50"
        >
          <h2
            id="final-cta-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Start Your NEET Biology NCERT Practice Today
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg">
            Join 2 lakh+ NEET aspirants who practice NCERT line-by-line Biology
            questions on RankUpp. Free to start. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/neet-mock-test-online"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] text-white px-10 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all font-bold text-lg"
              aria-label="Start free NEET Biology practice on RankUpp"
            >
              🔥 Start Free Practice
            </Link>
            <Link
              href="/neet-pyq"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] px-10 py-4 rounded-xl transition-all font-semibold text-lg"
              aria-label="Practice NEET previous year Biology questions"
            >
              📚 View NEET PYQs
            </Link>
          </div>
        </section>

        {/* ── STICKY BOTTOM CTA ── */}
        {/*
          IMPORTANT: Use client component for sticky CTA if using useScrollPosition.
          Simple version without JS shown here for server-component compatibility.
        */}
        <div
          className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-50 border-t border-gray-100"
          role="complementary"
          aria-label="Quick access practice CTA"
        >
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-900">
                NEET Biology NCERT Questions
              </p>
              <p className="text-xs text-gray-500">1000+ questions · Free access</p>
            </div>
            <Link
              href="/neet-mock-test-online"
              className="w-full sm:w-auto text-center bg-[var(--color-accent)] text-white px-8 py-3 rounded-xl shadow hover:scale-105 transition-all font-bold"
              aria-label="Practice NEET Biology NCERT questions now"
            >
              🚀 Practice Now — Free
            </Link>
          </div>
        </div>

        {/* Bottom padding for sticky CTA */}
        <div className="h-20" aria-hidden="true" />
      </div>
    </>
  );
}
