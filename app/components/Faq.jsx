"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import Head from "next/head";

export default function Faq() {
  const items = [
    {
      q: "What is RankUp?",
      a: "RankUp is India’s modern NEET-UG preparation platform offering AI-powered flashcards, smart revision, daily capsules, performance analytics, and personalized study guidance.",
    },
    {
      q: "How does RankUp improve my NEET-UG score?",
      a: "RankUp uses Active Recall + Spaced Repetition to boost long-term memory. This helps you retain more information and reduces exam stress.",
    },
    {
      q: "What are Flashcards and why are they useful?",
      a: "Flashcards help you actively recall NEET concepts instead of passively reading. This improves retention by up to 80%.",
    },
    {
      q: "What is Spaced Repetition?",
      a: "Spaced Repetition revises topics at optimized intervals to strengthen memory and prevent forgetting—ideal for NEET-UG preparation.",
    },
    {
      q: "What is Active Recall?",
      a: "Active Recall forces your brain to retrieve information instead of re-reading, making it the most effective revision technique.",
    },
    {
      q: "Does RankUp offer Daily Capsules?",
      a: "Yes. RankUp provides high-yield daily revision capsules for Biology, Physics, and Chemistry.",
    },
    {
      q: "Is RankUp based on the latest NEET-UG syllabus?",
      a: "Absolutely. RankUp follows the updated NTA NEET-UG syllabus.",
    },
    {
      q: "Is RankUp free?",
      a: "RankUp has a free basic version. Premium unlocks AI revision, advanced flashcards, and performance analytics.",
    },
    {
      q: "Can I use RankUp offline?",
      a: "Yes. You can download flashcard decks and study offline anytime.",
    },
    {
      q: "Who is RankUp for?",
      a: "RankUp is built for NEET-UG aspirants preparing for 2025–2026 exams.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  // SEO Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };

  return (
    <>
      {/* FULL SEO META TAGS FOR THIS PAGE */}
      <Head>
        <title>RankUp FAQ — All NEET-UG Preparation Questions Answered</title>
        <meta
          name="description"
          content="RankUp FAQ: Learn how RankUp improves NEET-UG scores using flashcards, AI revision, daily capsules, offline mode, and NTA-based syllabus coverage."
        />
        <meta
          name="keywords"
          content="RankUp FAQ, NEET-UG preparation, NEET flashcards, active recall, spaced repetition, AI study app, NEET 2025, NEET 2026 prep"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Social SEO */}
        <meta property="og:title" content="RankUp FAQ — NEET-UG Preparation Doubts Answered" />
        <meta
          property="og:description"
          content="All your NEET-UG preparation doubts about RankUp — flashcards, AI revision, daily capsules, syllabus, offline mode, and more."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rankupp.in/faq" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RankUp FAQ — NEET-UG Prep App" />
        <meta
          name="twitter:description"
          content="Clear your NEET-UG doubts about Flashcards, Active Recall, Spaced Repetition, Daily Capsules, Offline Mode, and more."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.rankupp.in/faq" />
      </Head>

      <section className="py-20 bg-white" aria-label="Frequently Asked Questions about RankUp NEET-UG Preparation App">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Heading */}
          <h1 className="text-4xl font-extrabold text-center text-[#1E3A5F]">
            Frequently Asked Questions
          </h1>

          <p className="text-center text-gray-600 mt-3 mb-10 max-w-2xl mx-auto">
            Get clear answers to all your RankUp-related NEET-UG preparation doubts.
          </p>

          {/* FAQ LIST */}
          <div className="space-y-4">
            {items.map((it, idx) => (
              <div
                key={idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-[#1E3A5F]">{it.q}</h2>

                  <span className="text-[#FF8C5B] text-xl">
                    {openIndex === idx ? <FiMinus /> : <FiPlus />}
                  </span>
                </div>

                {/* Animated Answer */}
                <div
                  className={`mt-3 text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
                    openIndex === idx
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {it.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO MARKUP */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>
    </>
  );
}
