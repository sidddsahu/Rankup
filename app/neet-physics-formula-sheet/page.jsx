export const metadata = {
  title: "NEET Physics Formula Sheet PDF 📄 Chapter-wise Quick Revision",
  description:
    "Download NEET Physics formula sheet PDF for quick revision. Chapter-wise important formulas for Class 11 & 12 Physics to boost your NEET score.",
  keywords: [
    "neet physics formula sheet",
    "physics formulas pdf neet",
    "class 11 physics formulas",
    "class 12 physics formulas",
    "neet physics revision notes",
  ],
};

export default function PhysicsFormulaPage() {
  const chapters = [
    {
      name: "Kinematics",
      formulas: [
        "v = u + at",
        "s = ut + 1/2 at²",
        "v² = u² + 2as",
      ],
    },
    {
      name: "Laws of Motion",
      formulas: [
        "F = ma",
        "Momentum = mv",
        "Impulse = Force × Time",
      ],
    },
    {
      name: "Work, Energy & Power",
      formulas: [
        "Work = Force × Distance",
        "K.E = 1/2 mv²",
        "Power = Work / Time",
      ],
    },
    {
      name: "Electrostatics",
      formulas: [
        "F = kq₁q₂ / r²",
        "V = kq / r",
        "E = F / q",
      ],
    },
  ];

  const faqs = [
    {
      q: "Are formulas enough for NEET Physics?",
      a: "Formulas are essential, but concept understanding is also required.",
    },
    {
      q: "How to revise Physics formulas fast?",
      a: "Revise daily and practice questions based on formulas.",
    },
    {
      q: "Which chapters are most important in NEET Physics?",
      a: "Mechanics, Electrostatics, and Modern Physics carry high weightage.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-deep)]">

      {/* HERO */}
      <section className="px-6 py-16 text-center">
        <h1 className="text-3xl md:text-5xl mt-10 font-bold">
          NEET Physics Formula Sheet 📄
        </h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
          Quick revision of important Physics formulas for NEET 2026.
        </p>

        <a
          href="#"
          className="inline-block mt-8 bg-[var(--color-accent)] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
        >
          📥 Download PDF
        </a>
      </section>

      {/* FORMULA SECTIONS */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          ⚡ Chapter-wise Physics Formulas
        </h2>

        <div className="space-y-8">
          {chapters.map((chapter, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-4">
                {chapter.name}
              </h3>

              <ul className="list-disc pl-6 space-y-2">
                {chapter.formulas.map((f, idx) => (
                  <li key={idx} className="font-mono">{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">
          NEET Physics Formula Sheet for Quick Revision
        </h2>

        <p className="mb-4">
          Physics formulas play a crucial role in NEET preparation. A strong grip
          on formulas helps in solving numerical questions quickly and accurately.
        </p>

        <p className="mb-4">
          This chapter-wise formula sheet is designed for quick revision before
          exams and mock tests.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          How to use Physics formula sheet effectively?
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Revise formulas daily</li>
          <li>Apply formulas in practice questions</li>
          <li>Focus on weak chapters</li>
        </ul>

        <p className="mt-6">
          Also attempt{" "}
          <a href="/neet-mock-test-online" className="text-blue-600 underline">
            NEET Mock Tests
          </a>{" "}
          to improve your speed and accuracy.
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