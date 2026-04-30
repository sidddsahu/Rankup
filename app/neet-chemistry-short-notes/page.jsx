export const metadata = {
  title: "NEET Chemistry Short Notes 🔥 Organic, Inorganic & Physical",
  description:
    "Download NEET Chemistry short notes for quick revision. Chapter-wise Organic, Inorganic and Physical Chemistry notes to boost your NEET score.",
  keywords: [
    "neet chemistry notes",
    "neet chemistry short notes",
    "organic chemistry notes neet",
    "inorganic chemistry notes neet",
    "physical chemistry notes neet",
  ],
};

export default function ChemistryNotesPage() {
  const sections = [
    {
      title: "🧪 Physical Chemistry",
      points: [
        "Mole Concept formulas",
        "Thermodynamics laws",
        "Chemical equilibrium basics",
      ],
    },
    {
      title: "⚗️ Organic Chemistry",
      points: [
        "Reaction mechanisms (SN1, SN2)",
        "Important name reactions",
        "Functional group conversions",
      ],
    },
    {
      title: "🧬 Inorganic Chemistry",
      points: [
        "Periodic table trends",
        "Coordination compounds basics",
        "Chemical bonding rules",
      ],
    },
  ];

  const faqs = [
    {
      q: "Are short notes enough for NEET Chemistry?",
      a: "Short notes help in revision, but concept clarity and practice are also required.",
    },
    {
      q: "Which part of Chemistry is most scoring?",
      a: "Inorganic and Physical Chemistry are generally more scoring in NEET.",
    },
    {
      q: "How to revise Chemistry fast?",
      a: "Use short notes and practice questions regularly.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-deep)]">

      {/* HERO */}
      <section className="px-6 py-16 text-center">
        <h1 className="text-3xl md:text-5xl mt-10 font-bold">
          NEET Chemistry Short Notes 🔥
        </h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
          Quick revision notes for Organic, Inorganic and Physical Chemistry.
        </p>

        <a
          href="#"
          className="inline-block mt-8 bg-[var(--color-accent)] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
        >
          📥 Download Notes PDF
        </a>
      </section>

      {/* NOTES SECTIONS */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          📚 Chapter-wise Chemistry Notes
        </h2>

        <div className="space-y-8">
          {sections.map((sec, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">
                {sec.title}
              </h3>

              <ul className="list-disc pl-6 space-y-2">
                {sec.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">
          NEET Chemistry Short Notes for Quick Revision
        </h2>

        <p className="mb-4">
          Chemistry short notes are essential for quick revision before NEET exams.
          They help in revising important concepts, formulas, and reactions efficiently.
        </p>

        <p className="mb-4">
          Focus on Organic reactions, Inorganic memorization, and Physical formulas
          to maximize your score.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          How to use Chemistry notes effectively?
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Revise notes daily</li>
          <li>Practice MCQs after revision</li>
          <li>Focus on weak areas</li>
        </ul>

        <p className="mt-6">
          Also solve{" "}
          <a href="/neet-pyq" className="text-blue-600 underline">
            NEET PYQs
          </a>{" "}
          to strengthen your preparation.
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