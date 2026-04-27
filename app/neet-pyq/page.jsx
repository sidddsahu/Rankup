"use client";

import { motion } from "framer-motion";

export default function NeetPYQPage() {
  const stats = [
    { label: "Years Covered", value: "1988–2025" },
    { label: "Questions", value: "20,000+" },
    { label: "Subjects", value: "3" },
    { label: "Accuracy Boost", value: "95%" },
  ];

  const subjects = [
    {
      title: "🧬 Biology",
      color: "green",
      topics: ["Class 11 PYQ", "Class 12 PYQ", "NCERT Based Questions"],
      btn: "bg-green-500",
    },
    {
      title: "🧪 Chemistry",
      color: "blue",
      topics: ["Organic PYQ", "Inorganic PYQ", "Physical PYQ"],
      btn: "bg-blue-500",
    },
    {
      title: "⚡ Physics",
      color: "purple",
      topics: ["Mechanics PYQ", "Modern Physics", "Electrostatics"],
      btn: "bg-purple-500",
    },
  ];

  const faqs = [
    {
      q: "Are NEET PYQs enough for 600+?",
      a: "Yes, but combine with NCERT revision for best results.",
    },
    {
      q: "How many years PYQs should I solve?",
      a: "At least 10–15 years.",
    },
    {
      q: "Are questions repeated in NEET?",
      a: "Yes, many concepts are repeated frequently.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-deep)]">

      {/* HERO */}
      <section className="px-6 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl mt-10 font-bold leading-tight"
        >
          NEET PYQ Chapter-wise{" "}
          <span className="text-[var(--color-accent)]">(1988–2025)</span>
        </motion.h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
          Practice the most repeated NEET questions with detailed solutions. Boost your score faster 🚀
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
            📥 Download PDF
          </button>

          <button className="border border-[var(--color-primary)] px-6 py-3 rounded-xl hover:bg-[var(--color-primary)] hover:text-white transition">
            🧠 Start Practice
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-12 max-w-5xl mx-auto">
        {stats.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-[var(--color-primary)]">{item.value}</h3>
            <p className="text-gray-500">{item.label}</p>
          </div>
        ))}
      </section>

      {/* SUBJECTS */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          📚 Chapter-wise PYQ Practice
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {subjects.map((sub, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition">
              <h3 className={`text-xl font-semibold mb-4 text-${sub.color}-600`}>
                {sub.title}
              </h3>

              <ul className="space-y-2 text-gray-600">
                {sub.topics.map((t, idx) => (
                  <li key={idx}>{t}</li>
                ))}
              </ul>

              <button className={`mt-6 w-full ${sub.btn} text-white py-2 rounded-lg hover:opacity-90`}>
                Start Practice
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* STRATEGY */}
      <section className="bg-[var(--color-primary)] text-white px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">🚀 How to Use PYQs Effectively</h2>

        <div className="max-w-3xl mx-auto space-y-4 text-lg">
          <p>✔ Solve chapter-wise first</p>
          <p>✔ Analyze mistakes deeply</p>
          <p>✔ Revise weak concepts</p>
          <p>✔ Attempt full mock tests</p>
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
          🔥 Start Practicing Now
        </button>
      </div>

    </div>
  );
}