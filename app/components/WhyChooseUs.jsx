"use client";

import {
  FaBookOpen,
  FaBrain,
  FaChartLine,
  FaLayerGroup,
} from "react-icons/fa";
import Script from "next/script";

export default function WhyChooseUs() {
  // ================================
  // 🔥 ADVANCED SEO SCHEMA (JSON-LD)
  // ================================
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Why Choose RankUp Features",
    "description": "Top NEET-UG preparation features including flashcards, QBank, AI analytics and test tracking.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": "Smart Flashcards",
          "operatingSystem": "Android, iOS, Web",
          "applicationCategory": "EducationApplication",
          "description": "NEET-UG flashcards using spaced repetition and active recall.",
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "SoftwareApplication",
          "name": "Smart QBank",
          "operatingSystem": "Android, iOS, Web",
          "applicationCategory": "EducationApplication",
          "description": "20,000+ NEET high-yield questions with explanations.",
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "SoftwareApplication",
          "name": "Test Score Tracking",
          "operatingSystem": "Android, iOS, Web",
          "applicationCategory": "EducationApplication",
          "description": "AI-powered analytics for accuracy, weak topics, and growth tracking.",
        }
      }
    ]
  };

  // ================================
  // 🔥 FAQ SCHEMA (SEO FOR RICH SNIPPETS)
  // ================================
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why should I choose RankUp for NEET-UG preparation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RankUp uses scientifically proven active recall and spaced repetition, helping students memorize faster and retain longer."
        }
      },
      {
        "@type": "Question",
        "name": "Does RankUp offer high-yield NEET questions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, RankUp provides 20,000+ NEET-UG level questions with detailed explanations."
        }
      },
      {
        "@type": "Question",
        "name": "Can RankUp track my test performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, RankUp's AI Test Tracker gives deep insights into accuracy, weak topics, and score growth."
        }
      }
    ]
  };

  return (
    <section className="relative py-20 overflow-hidden bg-[#0A192F] text-white" itemScope itemType="https://schema.org/WebPage">

      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-40 h-40 bg-white/10 rounded-xl rotate-12 top-10 left-10 blur-xl"></div>
        <div className="absolute w-56 h-56 bg-white/10 rounded-xl -rotate-6 bottom-16 right-16 blur-xl"></div>
        <div className="absolute w-24 h-24 bg-white/10 rounded-xl rotate-12 bottom-10 left-1/4 blur-lg"></div>
        <div className="absolute w-32 h-32 bg-white/10 rounded-xl rotate-45 top-24 right-1/4 blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14" itemScope itemProp="mainEntity" itemType="https://schema.org/Article">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" itemProp="headline">
            Why Choose <span className="text-white">RankUp</span> for NEET-UG?
          </h2>
          <p className="mt-4 text-lg text-gray-200" itemProp="description">
            Backed by research: spaced repetition + active recall boost memory retention
            and help NEET-UG aspirants remember concepts faster & longer.
          </p>
        </div>

        {/* 3 Big Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8" itemScope itemProp="mainEntity" itemType="https://schema.org/ItemList">

          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-xl" itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
            <div className="text-white mb-4"><FaBrain size={42} aria-hidden="true" /></div>
            <h3 className="text-2xl font-bold mb-2" itemProp="name">Smart Flashcards</h3>
            <p className="text-gray-200 leading-relaxed" itemProp="description">
              Master all NEET-UG chapters using spaced-repetition flashcards with active recall technology.
            </p>
            <meta itemProp="position" content="1" />
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-xl" itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
            <div className="text-white mb-4"><FaBookOpen size={42} aria-hidden="true" /></div>
            <h3 className="text-2xl font-bold mb-2" itemProp="name">Smart QBank</h3>
            <p className="text-gray-200 leading-relaxed" itemProp="description">
              20,000+ curated questions with explanations. Improve accuracy & cover every high-yield topic.
            </p>
            <meta itemProp="position" content="2" />
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-xl" itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
            <div className="text-white mb-4"><FaChartLine size={42} aria-hidden="true" /></div>
            <h3 className="text-2xl font-bold mb-2" itemProp="name">Test Score Tracking</h3>
            <p className="text-gray-200 leading-relaxed" itemProp="description">
              Track minor/major tests, accuracy, weak topics & growth graph with AI-powered insights.
            </p>
            <meta itemProp="position" content="3" />
          </div>

        </div>

        {/* Additional Explanation Box */}
        <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg max-w-4xl mx-auto" itemScope itemType="https://schema.org/Article">
          <h3 className="text-3xl font-bold text-white mb-4" itemProp="headline">
            Backed by Science
          </h3>
          <p className="text-gray-200 leading-relaxed" itemProp="description">
            Research from early 20th-century cognitive science shows that
            <strong className="font-semibold text-white mx-1"> spaced repetition </strong>
            and
            <strong className="font-semibold text-white mx-1"> active recall </strong>
            dramatically improve memory retention.
            RankUp uses these proven frameworks so NEET-UG students learn smarter — not harder.
          </p>
        </div>

      </div>

      {/* Inject SEO JSON-LD Schemas */}
      <Script
        type="application/ld+json"
        id="why-choose-us-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Script
        type="application/ld+json"
        id="faq-schema-why-choose-us"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}