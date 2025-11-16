import {
  FaBookOpen,
  FaBrain,
  FaChartLine,
  FaCloudDownloadAlt,
  FaListAlt,
  FaLayerGroup,
  FaCheckCircle,
  FaClipboardList
} from "react-icons/fa";

export default function Features() {
  const primary = "#295176";

  const features = [
    {
      icon: <FaLayerGroup size={26} />,
      title: "Major & Minor Test-Series",
      desc: "Full-length mock tests + micro tests to strengthen weak topics."
    },
    {
      icon: <FaBookOpen size={26} />,
      title: "A–Z Important Topics",
      desc: "High-yield flashcards for faster & deeper revision."
    },
    {
      icon: <FaListAlt size={26} />,
      title: "Flashcards",
      desc: "Topic-wise curated sets specially designed for NEET-UG."
    },
    {
      icon: <FaBrain size={26} />,
      title: "Smart QBank",
      desc: "Practice 20,000+ questions with instant accuracy & solutions."
    },
    {
      icon: <FaChartLine size={26} />,
      title: "AI Performance Analytics",
      desc: "Rank prediction, strong/weak analysis & improvement graphs."
    },
    {
      icon: <FaCloudDownloadAlt size={26} />,
      title: "Offline Mode",
      desc: "Download important packs & test sets for offline revision."
    }
  ];

  return (
    <section
      className="
        relative py-20
        bg-gradient-to-br from-white via-[#f3f9ff] to-[#e7f3ff]
        overflow-hidden
      "
    >

      {/* PREMIUM MEDICAL BG SHAPES */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]">

        {/* Soft DNA New Shape */}
        <div className="absolute w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(41,81,118,0.25),transparent_70%)]
          -top-40 -left-40 blur-3xl"></div>

        {/* Curve ECG wave pattern */}
        <svg
          className="absolute bottom-0 right-0 w-[550px] opacity-40"
          viewBox="0 0 500 500"
          fill="none"
        >
          <path
            d="M0 300 C150 250 200 350 260 330 C310 310 330 260 380 275 C430 290 470 260 500 270"
            stroke={primary}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="10 12"
          />
        </svg>

        {/* Blur gradient bubble */}
        <div className="absolute w-[350px] h-[350px] bg-blue-200/30 rounded-full blur-2xl top-20 right-20"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading Section */}
        <div className="max-w-3xl mb-14">
          <h2
            className="text-4xl font-extrabold leading-snug drop-shadow-sm"
            style={{ color: primary }}
          >
            Everything You Need to Crack NEET-UG —
            <span className="text-purple-600"> Inside One App</span>
          </h2>

          <p className="text-lg text-gray-600 mt-4">
            RankUp brings you test-series, smart QBanks, flashcards and AI analytics —
            built to boost your NEET-UG score faster.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((f, i) => (
            <div
              key={i}
              className="
                p-6 bg-white/80 backdrop-blur-xl shadow-xl rounded-xl
                border border-white/40
                hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
              "
            >

              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-md"
                style={{ background: primary + "15", color: primary }}
              >
                {f.icon}
              </div>

              <h3 className="font-bold text-lg" style={{ color: primary }}>
                {f.title}
              </h3>

              <p className="text-sm text-gray-700 mt-2">{f.desc}</p>

              <div
                className="mt-4 flex items-center text-xs gap-2 font-semibold"
                style={{ color: primary }}
              >
                <FaCheckCircle size={14} />
                Included in RankUp
              </div>
            </div>
          ))}

        </div>

        {/* Smart Daily Plan Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">

          <div className="max-w-lg">
            <h3 className="text-3xl font-extrabold" style={{ color: primary }}>
              Daily Smart Revision Plan
            </h3>

            <p className="mt-4 text-gray-700">
              AI-powered daily targets, weak-area suggestions & personalized
              chapter-wise revision — designed to make your preparation smarter.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="mt-1" style={{ color: primary }} />
                Auto-generated study plan based on your performance
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="mt-1" style={{ color: primary }} />
                Important chapters selected from weak areas
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="mt-1" style={{ color: primary }} />
                Test suggestions matched with your previous accuracy
              </li>
            </ul>
          </div>

          <div
            className="
              bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-6
              border border-white/40 max-w-sm mx-auto
            "
          >
            <h4 className="font-bold" style={{ color: primary }}>
              Smart Daily Plan
            </h4>

            <p className="text-sm text-gray-600 mt-2">
              AI-powered revision path for consistent improvement.
            </p>

            <div
              className="mt-6 h-64 rounded-xl border flex flex-col items-center justify-center"
              style={{
                background: primary + "10",
                borderColor: primary + "30"
              }}
            >
              <FaClipboardList size={42} style={{ color: primary }} />
              <p className="text-sm mt-2" style={{ color: primary }}>
                Mobile preview area
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
