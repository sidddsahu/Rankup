"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function Faq() {
  const items = [
    {
      q: "What is RankUp?",
      a: "RankUp is India’s modern NEET-UG preparation platform offering AI-powered flashcards, smart revision, daily capsules, performance analytics, and personalized study guidance."
    },
    {
      q: "How does RankUp improve my NEET-UG score?",
      a: "RankUp uses Active Recall + Spaced Repetition to boost long-term memory. You revise smarter, retain more, and reduce last-minute stress with structured daily revision."
    },
    {
      q: "What are Flashcards and why are they useful?",
      a: "Flashcards help you actively recall key NEET concepts instead of passively reading notes. This boosts retention by 70–80% and speeds up revision."
    },
    {
      q: "What is Spaced Repetition?",
      a: "Spaced Repetition revises topics at scientifically optimized intervals to strengthen memory and eliminate forgetting—perfect for the NEET-UG syllabus."
    },
    {
      q: "What is Active Recall?",
      a: "Active Recall forces the brain to retrieve information instead of re-reading. Research shows it's the #1 method for high-score NEET-UG preparation."
    },
    {
      q: "Does RankUp offer Daily Capsules?",
      a: "Yes! RankUp provides daily revision capsules covering high-yield Biology, Physics & Chemistry topics."
    },
    {
      q: "Is RankUp based on the latest NEET-UG syllabus?",
      a: "Absolutely. All flashcards and revisions follow the updated NTA NEET-UG syllabus."
    },
    {
      q: "Is RankUp free?",
      a: "RankUp offers a free basic version. Premium unlocks advanced flashcards, AI-smart revision, and mastery analytics."
    },
    {
      q: "Can I use RankUp offline?",
      a: "Yes. You can download flashcard decks and study completely offline anytime."
    },
    {
      q: "Who is RankUp for?",
      a: "RankUp is designed for dedicated NEET-UG aspirants preparing for 2025–2026 exams."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  // SEO Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(it => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a
      }
    }))
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-[#1E3A5F]">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-10 max-w-2xl mx-auto">
          Clear all your doubts about RankUp – flashcards, revision,
          daily capsules, syllabus coverage, offline mode, and preparation strategy.
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
                <h4 className="text-lg font-semibold text-[#1E3A5F]">{it.q}</h4>

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
  );
}
