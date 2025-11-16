"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const data = [
    {
      name: "Asha R.",
      text: "RankUp improved my accuracy and helped me retain complex topics with ease.",
      img: "/profile.png"
    },
    {
      name: "Rohit K.",
      text: "Spaced repetition flashcards are the best I’ve used. Perfect for medical prep!",
      img: "/profile.png"
    },
    {
      name: "Sarita P.",
      text: "Mock analytics showed exactly where I was losing marks. Huge confidence boost.",
      img: "/profile.png"
    },
     {
      name: "Rohit K.",
      text: "Spaced repetition flashcards are the best I’ve used. Perfect for medical prep!",
      img: "/profile.png"
    },
    {
      name: "Sarita P.",
      text: "Mock analytics showed exactly where I was losing marks. Huge confidence boost.",
      img: "/profile.png"
    }
  ];

  return (
    <section className="py-20 bg-[#295176]">
      <div className="container mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-white tracking-tight">
          Trusted by NEET-PG & FMGE Students
        </h2>
        <p className="text-center text-gray-200 mt-3 max-w-2xl mx-auto text-lg">
          RankUp helps aspirants retain what they study so they feel fully prepared.
        </p>

        {/* Slider */}
        <div className="mt-14">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2600 }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 }
            }}
          >
            {data.map((t, i) => (
              <SwiperSlide key={i}>

                <div className="
                  bg-white
                  rounded-2xl
                  p-8
                  shadow-xl
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  border border-gray-100
                  h-full
                ">

                  {/* Profile */}
                  <div className="flex flex-col items-center">
                    <div className="
                      w-20 h-20
                      rounded-full
                      overflow-hidden
                      mb-5
                      ring-4 ring-[#295176]/30
                      shadow-md
                    ">
                      <Image
                        src={t.img}
                        alt={t.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>

                    {/* Feedback */}
                    <p className="text-center text-gray-700 leading-relaxed text-[15px]">
                      “{t.text}”
                    </p>

                    {/* Name */}
                    <p className="mt-4 font-semibold text-[#295176] text-lg">
                      — {t.name}
                    </p>
                  </div>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
