export const metadata = {
  title: "NEET Biology NCERT Line-by-Line Questions 🔥 Class 11 & 12",
  description:
    "Practice NCERT line-by-line Biology questions for NEET 2026. Chapter-wise important questions with answers. Boost accuracy and score high in NEET Biology.",
  keywords: [
    "ncert line by line biology",
    "neet biology questions",
    "ncert biology questions neet",
    "class 11 biology questions",
    "class 12 biology questions",
  ],
};

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
        <h1 className="text-3xl md:text-5xl font-bold">
          NCERT Line-by-Line Biology Questions 🔥
        </h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
          Master NEET Biology by practicing NCERT-based questions chapter-wise.
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
          📚 Important Chapters
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

      {/* SEO CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">
          NEET Biology NCERT Line-by-Line Questions
        </h2>

        <p className="mb-4">
          NCERT line-by-line Biology questions are extremely important for NEET
          preparation. Most NEET Biology questions are directly based on NCERT
          concepts, diagrams, and examples.
        </p>

        <p className="mb-4">
          Practicing NCERT-based questions helps in understanding key topics
          thoroughly and improves accuracy in exams.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Why NCERT is important for NEET Biology?
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Most questions are NCERT-based</li>
          <li>Concept clarity improves</li>
          <li>High scoring section</li>
          <li>Repeated questions pattern</li>
        </ul>

        <p className="mt-6">
          Also practice{" "}
          <a href="/neet-mock-test-online" className="text-blue-600 underline">
            NEET Mock Tests
          </a>{" "}
          to improve your performance.
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