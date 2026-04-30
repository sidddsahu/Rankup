export const metadata = {
  title: "NEET Biology Important Questions 🔥 Chapter-wise Most Expected 2026",
  description:
    "Practice NEET Biology important questions chapter-wise for 2026. Most expected and repeated questions with answers to boost your score.",
  keywords: [
    "neet biology important questions",
    "neet biology questions 2026",
    "most important biology questions neet",
    "neet chapter wise biology questions",
    "neet biology practice questions",
  ],
};

export default function ImportantQuestionsPage() {
  const chapters = [
    "Cell: The Unit of Life",
    "Biomolecules",
    "Human Physiology",
    "Genetics and Evolution",
    "Ecology",
  ];

  const faqs = [
    {
      q: "Are important questions enough for NEET Biology?",
      a: "Important questions cover high-weightage topics, but combine with NCERT for best results.",
    },
    {
      q: "How many Biology questions should I practice daily?",
      a: "At least 80–100 questions daily for strong preparation.",
    },
    {
      q: "Is Biology easy to score in NEET?",
      a: "Yes, Biology is the most scoring subject if NCERT is mastered properly.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-deep)]">

      {/* HERO */}
      <section className="px-6 py-16 text-center">
        <h1 className="text-3xl md:text-5xl mt-10 font-bold">
          NEET Biology Important Questions 🔥
        </h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
          Practice most expected and high-weightage Biology questions for NEET 2026.
        </p>

        <a
          href="/neet-mock-test-online"
          className="inline-block mt-8 bg-[var(--color-accent)] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
        >
          🚀 Start Practice
        </a>
      </section>

      {/* CHAPTER LIST */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          📚 Chapter-wise Important Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {chapters.map((chapter, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="font-semibold text-lg">{chapter}</h3>

              <a
                href="/neet-pyq"
                className="mt-4 inline-block text-[var(--color-primary)] font-medium"
              >
                Practice Questions →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SAMPLE QUESTIONS (IMPORTANT FOR SEO) */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">
          🔥 Sample NEET Biology Important Questions
        </h2>

        <div className="space-y-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="font-semibold mb-3">
              Q1. Which organelle is known as the powerhouse of the cell?
            </p>
            <p className="text-gray-600">Answer: Mitochondria</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="font-semibold mb-3">
              Q2. DNA is located in which part of the cell?
            </p>
            <p className="text-gray-600">Answer: Nucleus</p>
          </div>

        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">
          NEET Biology Important Questions 2026
        </h2>

        <p className="mb-4">
          NEET Biology important questions are selected based on previous year trends,
          NCERT weightage, and frequently asked concepts. Practicing these questions
          improves accuracy and boosts confidence.
        </p>

        <p className="mb-4">
          Focus on chapters like Genetics, Human Physiology, and Ecology as they carry
          high weightage in NEET exams.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          How to prepare using important questions?
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Revise NCERT before solving</li>
          <li>Practice daily chapter-wise questions</li>
          <li>Analyze mistakes carefully</li>
        </ul>

        <p className="mt-6">
          Also solve{" "}
          <a href="/neet-mock-test-online" className="text-blue-600 underline">
            NEET Mock Tests
          </a>{" "}
          to improve your score.
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
          🔥 Practice Now
        </a>
      </div>

    </div>
  );
}