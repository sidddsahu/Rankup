"use client";

import { motion } from "framer-motion";

export default function BiologyNCERTPage() {

  const chapters = [
    "Cell: The Unit of Life",
    "Biomolecules",
    "Human Physiology",
    "Genetics and Evolution",
    "Ecology",
  ];

  const faqs = [
    {
      q: "Are NCERT line-by-line questions enough for NEET?",
      a: "Yes, most NEET Biology questions are directly based on NCERT.",
    },
    {
      q: "How to study NCERT effectively?",
      a: "Read line by line and solve questions after each topic.",
    },
    {
      q: "Is Biology scoring in NEET?",
      a: "Yes, Biology is the highest scoring section.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-deep)]">

      {/* HERO */}
      <section className="px-6 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl mt-10 font-bold"
        >
          NCERT Line-by-Line Biology Questions 🔥
        </motion.h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
          Master NEET Biology by practicing NCERT-based questions chapter-wise.
        </p>

        <button className="mt-8 bg-[var(--color-accent)] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
          🚀 Start Practice
        </button>
      </section>

      {/* CHAPTER LIST */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          📚 Important Chapters
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {chapters.map((chapter, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="font-semibold text-lg">{chapter}</h3>
              <button className="mt-4 text-[var(--color-primary)] font-medium">
                Practice Questions →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* STRATEGY */}
      <section className="bg-[var(--color-primary)] text-white px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">🧠 Study Strategy</h2>

        <div className="max-w-2xl mx-auto space-y-4">
          <p>✔ Read NCERT line by line</p>
          <p>✔ Solve questions after each paragraph</p>
          <p>✔ Revise diagrams and examples</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">❓ FAQs</h2>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg">{faq.q}</h3>
              <p className="text-gray-600 mt-2">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STICKY CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 flex justify-center">
        <button className="bg-[var(--color-accent)] text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition">
          🔥 Practice Now
        </button>
      </div>

    </div>
  );
}