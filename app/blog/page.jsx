import Link from "next/link";

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      slug: "how-to-score-650-plus-in-neet",
      title: "How to Score 650+ in NEET – Complete Strategy",
      desc: "A proven roadmap to improve your NEET score using smart revision and mock test planning.",
      date: "Nov 2024",
      author: "RankUp Team",
      category: "NEET Tips",
      cover: "/blog1.jpg",
    },
    {
      id: 2,
      slug: "biology-important-diagrams-for-neet",
      title: "Top 20 Biology Diagrams You Must Revise",
      desc: "These diagrams are repeatedly asked in NEET. Learn smart tricks to remember them.",
      date: "Nov 2024",
      author: "RankUp Experts",
      category: "Biology",
      cover: "/blog2.jpg",
    },
  ];

  return (
    <section className="min-h-screen mt-10 bg-gradient-to-br from-[#F7FAFF] to-[#EFF4FB] py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F3B57]">
          RankUp Blog
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Expert articles to boost your NEET preparation.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.slug}`}>
            <div className="cursor-pointer rounded-3xl overflow-hidden shadow-xl bg-white/70 backdrop-blur-xl border border-white/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="h-52 overflow-hidden">
                <img
                  src={blog.cover}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <span className="inline-block mb-3 text-sm px-3 py-1 bg-[#1F3B57] text-white rounded-full">
                  {blog.category}
                </span>

                <h3 className="text-xl font-bold text-[#1F3B57] leading-snug mb-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">{blog.desc}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 pt-3 border-t">
                  <span>🗓 {blog.date}</span>
                  <span>✍️ {blog.author}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
