"use client";

import { motion } from "framer-motion";
import {
  FaMedal,
  FaTrophy,
  FaUserMd,
  FaStar,
  FaHeartbeat,
  FaGratipay,
  FaBookOpen,
  FaArrowRight,
} from "react-icons/fa";

export default function FounderSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Left Side — Images Grid */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/founder-main.jpg"
              alt="Founder portrait"
              className="rounded-3xl shadow-xl border-4 border-white object-cover w-full h-56"
            />
            <img
              src="/gold-12th.jpg"
              alt="12th gold medal"
              className="rounded-3xl shadow-xl border-4 border-white object-cover w-full h-56"
            />
            <img
              src="/gold-mbbs.jpg"
              alt="MBBS gold medal"
              className="rounded-3xl shadow-xl border-4 border-white object-cover w-full h-56"
            />
            <img
              src="/neetpg-1731.jpg"
              alt="NEET PG rank certificate"
              className="rounded-3xl shadow-xl border-4 border-white object-cover w-full h-56"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-2xl px-6 py-3 flex items-center gap-3 whitespace-nowrap">
            <FaUserMd className="text-blue-600 text-2xl" />
            <p className="font-semibold text-gray-700 text-lg">MBBS Gold Medalist | NEET PG AIR 1731</p>
          </div>
        </motion.div>

        {/* Right Side — Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Meet Our Founder — <span className="text-blue-700">Your RankUp Mentor</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Hi, I'm the founder of RankUp. My journey started with winning a gold medal in Class 12th.
            Then I joined <span className="font-semibold">Shyam Shah Medical College, Rewa</span> for MBBS,
            where I worked hard and earned another <span className="font-semibold">Gold Medal</span> for
            being the top performer. Right after finishing MBBS, I cleared <span className="font-semibold">NEET PG
            with AIR 1731</span> and also qualified the <span className="font-semibold">UPSC Combined Medical
            Services (CMS)</span> exam. This journey taught me what really works when it comes to
            competitive exams, and now I want to help you do the same.
          </p>

          {/* Achievements List */}
          <div className="space-y-4">
            <Achievement
              icon={<FaStar className="text-yellow-500 text-2xl" />}
              title="Gold Medal in Class 12th"
              desc="Scored Physics 95, Chemistry 90, Biology 85. Also won the inter-school Quick Quiz competition."
            />

            <Achievement
              icon={<FaMedal className="text-red-500 text-2xl" />}
              title="MBBS Gold Medal (SSMC, Rewa)"
              desc="Top performer in MBBS. This was possible because of consistent daily study and smart revision techniques."
            />

            <Achievement
              icon={<FaTrophy className="text-blue-600 text-2xl" />}
              title="NEET PG — All India Rank 1731"
              desc="Cleared NEET PG right after completing MBBS. Focused preparation and regular mock tests made this possible."
            />

            <Achievement
              icon={<FaGratipay className="text-pink-600 text-2xl" />}
              title="UPSC (CMS) Qualified"
              desc="Cleared the UPSC Combined Medical Services exam alongside NEET PG preparation."
            />

            <Achievement
              icon={<FaHeartbeat className="text-indigo-600 text-2xl" />}
              title="Rank 41 in Madhya Pradesh"
              desc="One of the top scorers in MP for NEET PG. Proof that state-level excellence is achievable with the right strategy."
            />
          </div>

          {/* How I Did It Box */}
          <div className="mt-6 bg-white p-6 shadow-lg rounded-2xl border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">How I Achieved All This</h3>
            <div className="grid gap-3">
              <RoadmapStep
                number={1}
                title="Strong Foundation (Class 12)"
                desc="I focused on understanding concepts deeply, not just memorizing. Daily practice and revision became my habit."
              />
              <RoadmapStep
                number={2}
                title="Consistent Study During MBBS"
                desc="I studied every single day. Made notes, practiced questions, and never skipped revision. This helped me win the gold medal."
              />
              <RoadmapStep
                number={3}
                title="Smart NEET PG Preparation"
                desc="Created a proper study schedule, focused on high-yield topics, gave regular mock tests, and analyzed my mistakes."
              />
              <RoadmapStep
                number={4}
                title="Time Management & Discipline"
                desc="The secret? Simple. Show up every day. Even when you don't feel like it. Consistency beats talent."
              />
              <RoadmapStep
                number={5}
                title="Learn from Mistakes"
                desc="Every test, every mistake taught me something. I kept improving my strategy based on what worked and what didn't."
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#join"
              className="inline-flex items-center gap-3 bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-800 hover:shadow-xl transition"
            >
              <FaBookOpen /> Join RankUp Today <FaArrowRight />
            </a>
            <p className="text-gray-600 text-sm">
              Want my exact study schedule and the strategy I used? Join RankUp and get everything inside.
            </p>
          </div>

          {/* Summary Box */}
          <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 p-6 shadow-xl rounded-2xl border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Why RankUp?</h3>
            <p className="text-gray-700 leading-relaxed text-base">
              I've walked the path you're on right now. From gold medals to clearing NEET PG and UPSC,
              I know what works and what doesn't. RankUp isn't just another coaching program — it's
              the exact system I used, broken down into simple steps anyone can follow. If I can do it,
              so can you. Let me show you how.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Certificates Grid */}
      <div className="max-w-6xl mx-auto mt-16">
        <h4 className="text-3xl font-bold text-gray-900 mb-6 text-center">Awards & Certificates</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CertificateCard
            img="/cert-12th.jpg"
            title="Class 12th Gold Medal"
            subtitle="Academic Excellence"
          />
          <CertificateCard
            img="/cert-mbbs.jpg"
            title="MBBS Gold Medal"
            subtitle="SSMC Rewa — Top Performer"
          />
          <CertificateCard
            img="/cert-neetpg.jpg"
            title="NEET PG — AIR 1731"
            subtitle="All India Rank"
          />
          <CertificateCard
            img="/cert-cms.jpg"
            title="UPSC CMS Qualified"
            subtitle="Combined Medical Services"
          />
          <CertificateCard
            img="/cert-quiz.jpg"
            title="Quick Quiz Champion"
            subtitle="Inter-School Competition"
          />
          <CertificateCard
            img="/cert-achieve.jpg"
            title="Consistent High Scores"
            subtitle="Physics 95 | Chemistry 90 | Biology 85"
          />
        </div>
      </div>

    </section>
  );
}

function Achievement({ icon, title, desc }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="p-3 bg-white rounded-xl shadow-md">{icon}</div>
      <div>
        <h4 className="font-semibold text-lg text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function RoadmapStep({ number, title, desc }) {
  return (
    <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 text-white font-bold flex-shrink-0">
        {number}
      </div>
      <div>
        <div className="font-semibold text-gray-900 mb-1">{title}</div>
        <div className="text-sm text-gray-600 leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

function CertificateCard({ img, title, subtitle }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition flex gap-4 items-center">
      <img
        src={img}
        alt={title}
        className="w-20 h-20 object-cover rounded-lg border-2 border-gray-200"
      />
      <div>
        <div className="font-semibold text-gray-900 mb-1">{title}</div>
        <div className="text-sm text-gray-600">{subtitle}</div>
      </div>
    </div>
  );
}