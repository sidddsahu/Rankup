import Image from "next/image";

export default function BlogDetail({ params }) {
  const { slug } = params;

  // Dummy content - replace later with CMS or database
  const blog = {
    id: 1,
     slug: "how-to-score-650-plus-in-neet",
    title: "How to Score 650+ in NEET – Complete Strategy",
    cover: "https://targetpublications.org/_next/image?url=https%3A%2F%2Fcdn.targetpublications.org%2Fstudent-data-mining%2Fposts%2Fv5bSRQZqqaPlM5UXJJta0YOotz0etcVSYJ7ydBLV.webp&w=3840&q=75",
    date: "Nov 2024",
    author: "RankUp Team",
    readTime: "8 min read",
    content: `
      Scoring 650+ in NEET requires consistency, smart planning, and daily revision.
      The key is not studying more... but studying **smart**.

      ### 1. Follow a strict daily revision cycle
      Revise Physics, Chemistry, and Biology every day using short notes, mind maps, and flashcards.

      ### 2. Attempt mock tests regularly
      Minimum 2 full-length tests per week.

      ### 3. Analyse your mistakes
      Improvement only happens when mistakes are tracked and corrected.

      ### 4. Improve speed + accuracy
      Use RankUp's flashcards & high-yield question bank for practice.

      ### Final Advice
      Trust the process. Improvement is guaranteed when you stay consistent.
    `,
  };

  return (
    <section className="min-h-screen mt-20 bg-gradient-to-br from-[#F7FAFF] to-[#EDF3FB] py-12 px-6">

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-10 bg-white/70 backdrop-blur-xl border border-white/40">
        <div className="h-[260px] md:h-[380px] overflow-hidden">
          <img
            src={blog.cover}
            alt={blog.title}
            className="w-full h-full"
          />
        </div>

        <div className="p-8">
          <span className="text-[#1F3B57] font-semibold">{blog.date}</span>

          <h1 className="text-3xl md:text-4xl font-bold text-[#1F3B57] mt-3 leading-tight">
            {blog.title}
          </h1>

          <div className="mt-4 flex items-center gap-4 text-gray-500 text-sm">
            <span>✍️ {blog.author}</span>
            <span>⏱ {blog.readTime}</span>
          </div>
        </div>
      </div>


      {/* Blog Content Box */}
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-xl border border-white/40 prose prose-lg prose-headings:text-[#1F3B57] prose-p:text-gray-600">
        <article dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>


      {/* Related Blogs */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-[#1F3B57] mb-6">
          Related Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((n) => (
            <div
              key={n}
              className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/40 hover:-translate-y-2 transition"
            >
              <h3 className="font-semibold text-lg text-[#1F3B57]">
                Related Blog {n}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                A short description of another high-value NEET preparation article.
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
