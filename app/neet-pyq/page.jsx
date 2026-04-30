export const metadata = {
  title: "NEET PYQ Chapter-wise (1988–2026) 📚 Free PDF + Solutions 🔥",
  description:
    "Download NEET previous year questions chapter-wise with detailed solutions (1988–2026). Practice most repeated PYQs and boost your NEET score fast.",
  keywords: [
    "neet pyq",
    "neet previous year questions",
    "neet pyq chapter wise",
    "neet pyq pdf",
    "neet questions with solutions",
  ],
};

export default function NeetPYQPage() {
  const stats = [
    { label: "Years Covered", value: "1988–2026" },
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

  const colorMap = {
    green: "text-green-600",
    blue: "text-blue-600",
    purple: "text-purple-600",
  };

  const faqs = [
    {
      q: "Are NEET PYQs enough for 600+?",
      a: "Yes, but combine PYQs with NCERT for best results.",
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
        <h1 className="text-3xl md:text-5xl mt-10 font-bold leading-tight">
          NEET PYQ Chapter-wise{" "}
          <span className="text-[var(--color-accent)]">(1988–2026)</span>
        </h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
          Practice the most repeated NEET questions with detailed solutions. Boost your score faster 🚀
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="#"
            className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            📥 Download PDF
          </a>

          <a
            href="/neet-mock-test-online"
            className="border border-[var(--color-primary)] px-6 py-3 rounded-xl hover:bg-[var(--color-primary)] hover:text-white transition"
          >
            🧠 Start Practice
          </a>
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
              <h3 className={`text-xl font-semibold mb-4 ${colorMap[sub.color]}`}>
                {sub.title}
              </h3>

              <ul className="space-y-2 text-gray-600">
                {sub.topics.map((t, idx) => (
                  <li key={idx}>{t}</li>
                ))}
              </ul>

              <a
                href="/neet-mock-test-online"
                className={`mt-6 block text-center w-full ${sub.btn} text-white py-2 rounded-lg hover:opacity-90`}
              >
                Start Practice
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">
          NEET Previous Year Questions (PYQ) Chapter-wise
        </h2>

        <p className="mb-4">
          NEET previous year questions (PYQs) are one of the most powerful resources
          for exam preparation. By solving chapter-wise NEET PYQs, students can
          understand the exam pattern, identify important topics, and improve accuracy.
        </p>

        <p className="mb-4">
          Practicing NEET PYQs from 1988 to 2026 helps in mastering frequently asked
          concepts in Biology, Chemistry, and Physics.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Why NEET PYQs are important?
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Understand real exam pattern</li>
          <li>Identify most repeated questions</li>
          <li>Improve speed and accuracy</li>
          <li>Strengthen concept clarity</li>
        </ul>

        <p className="mt-6">
          Try our{" "}
          <a href="/neet-mock-test-online" className="text-blue-600 underline">
            NEET Mock Test
          </a>{" "}
          to test your preparation level.
        </p>
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

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        }}
      />

      {/* STICKY CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 flex justify-center">
        <a
          href="/neet-mock-test-online"
          className="bg-[var(--color-accent)] text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition"
        >
          🔥 Start Practicing Now
        </a>
      </div>

    </div>
  );
}