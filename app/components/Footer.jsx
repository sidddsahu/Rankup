import { FaInstagram, FaYoutube, FaFacebook, FaGooglePlay, FaApple } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1c3b52] text-white pt-16 pb-8 relative overflow-hidden">

      {/* BG Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl top-20 left-10"></div>
        <div className="absolute w-64 h-64 bg-blue-300/10 rounded-full blur-3xl bottom-20 right-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
               <div className="flex items-center gap-2">
<a href="/">
          <img
            src="/logoss.webp"
            alt="Rankup Logo"
            className="h-10  object-contain"
          />
          </a>

        </div>

            {/* <h2 className="text-3xl font-bold tracking-wide">Rankup</h2> */}
            <p className="text-blue-100 mt-3 leading-relaxed">
              Smarter revision for NEET-UG, NEET-PG & FMGE students using Flashcards, Q-banks & AI-driven analytics.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-5">
              {[FaInstagram, FaYoutube, FaFacebook].map((Icon, i) => (
                <a key={i} href="#" className="text-2xl hover:text-blue-300 transition">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Study Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Study Tools</h3>
            <ul className="space-y-3 text-blue-100">
              <li><a href="#" className="hover:text-white transition">Flashcards (Spaced Repetition)</a></li>
              <li><a href="#" className="hover:text-white transition">Q-Bank (Topic Wise)</a></li>
              <li><a href="#" className="hover:text-white transition">Grand Tests + Mini Tests</a></li>
              <li><a href="#" className="hover:text-white transition">AI Performance Analytics</a></li>
              <li><a href="#" className="hover:text-white transition">Revision Planner</a></li>
            </ul>
          </div>

          {/* Student Types */}
          <div>
            <h3 className="text-xl font-semibold mb-4">For Students</h3>
            <ul className="space-y-3 text-blue-100">
              <li><a href="#" className="hover:text-white transition">NEET-UG</a></li>
              <li><a href="#" className="hover:text-white transition">NEET-PG</a></li>
              <li><a href="#" className="hover:text-white transition">FMGE</a></li>
              <li><a href="#" className="hover:text-white transition">Last-Minute Revision Decks</a></li>
              <li><a href="#" className="hover:text-white transition">Subject-wise Syllabus</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-blue-100">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="/refund" className="hover:text-white transition">Refund</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-12 mb-8"></div>

        {/* App Download Buttons */}
        <div className="flex  items-center justify-between gap-6">

          {/* Play Store */}
          <a
            href="#"
            className="group flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-md
              px-2 py-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300
              hover:-translate-y-1 hover:bg-white/20"
          >
            <FaGooglePlay className="text-white text-2xl group-hover:scale-110 transition" />
            <div>
              <p className="text-xs text-blue-100">GET IT ON</p>
              <p className="text-white font-semibold text-sm md:text-xl">Google Play</p>
            </div>
          </a>

          {/* Apple Store */}
          <a
            href="#"
            className="group flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-md
              px-6 py-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300
              hover:-translate-y-1 hover:bg-white/20"
          >
            <FaApple className="text-white text-2xl group-hover:scale-110 transition" />
            <div>
              <p className="text-xs text-blue-100">Download on the</p>
              <p className="text-sm md:text-xl">App Store</p>
            </div>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-blue-200 mt-10 text-sm">
          © {new Date().getFullYear()} Rankup • All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
