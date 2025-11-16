import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-[#fefcfc] py-20">

      {/* White Water-Drop Glass Shapes */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-white/40 backdrop-blur-xl rounded-full shadow-lg"></div>
      <div className="absolute -bottom-5 -right-5 w-60 h-60 bg-white/20 backdrop-blur-xl rounded-full shadow-lg"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/bg-lines.svg')] bg-cover bg-center pointer-events-none"></div>

      <div className="container shadow-lg  mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-14 relative z-10">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug text-[#1E3A5F] tracking-tight">
            Boost Your NEET-UG Score
            <br />
            <span className="text-[#1E3A5F]">With RankUp — Guaranteed</span>
          </h2>

          <p className="mt-4 text-lg text-gray-700 max-w-md leading-relaxed">
            Study smarter with <strong className="text-[#1E3A5F]">RankUp</strong> — daily revision boosters,
            flashcards, test practice & AI learning tools crafted for NEET-UG aspirants.
          </p>

          {/* DOWNLOAD BADGES */}

               {/* App Download Buttons */}
               <div className="flex flex-wrap items-center justify-btween mt-4 gap-6">

                 {/* Play Store */}
                 <a
                   href="#"
                   className="group flex items-center gap-3 bg-black border border-white/20 backdrop-blur-md
                     px-6 py-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300
                     hover:-translate-y-1 hover:bg-[#295176]"
                 >
                   <FaGooglePlay className="text-white text-2xl group-hover:scale-110 transition" />
                   <div>
                     <p className="text-xs text-blue-100">GET IT ON</p>
                     <p className="text-white font-semibold text-lg">Google Play</p>
                   </div>
                 </a>

                 {/* Apple Store */}
                 <a
                   href="#"
                   className="group flex items-center gap-3 bg-black border border-white/20 backdrop-blur-md
                     px-6 py-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300
                     hover:-translate-y-1 hover:bg-[#295176]"
                 >
                   <FaApple className="text-white text-2xl group-hover:scale-110 transition" />
                   <div>
                     <p className="text-xs text-blue-100">Download on the</p>
                     <p className="text-white font-semibold text-lg">App Store</p>
                   </div>
                 </a>
               </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <img
            src="/screen1.png"
            alt="RankUp App"
            className="w-[390px] md:w-[600px] drop-shadow-2xl rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
