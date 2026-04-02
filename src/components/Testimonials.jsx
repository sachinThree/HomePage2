import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import carlrowan from "../assets/carl-rowan.png";

const title = "What Our Patients Are saying";

const testimonials = [
  {
    text: "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    name: "Carl Rowan",
    company: "Aglets Inc",
    image: carlrowan,
  },
  {
    text: "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    name: "John Doe",
    company: "Health Corp",
    image: carlrowan,
  },
  {
    text: "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    name: "Sarah Smith",
    company: "Wellness Inc",
    image: carlrowan,
  },
  {
    text: "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    name: "Mike Ross",
    company: "LegalTech",
    image: carlrowan,
  },
  {
    text: "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    name: "Carl Rowan",
    company: "Aglets Inc",
    image: carlrowan,
  },
  {
    text: "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    name: "Sarah Smith",
    company: "Wellness Inc",
    image: carlrowan,
  },
  {
    text: "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    name: "Mike Ross",
    company: "LegalTech",
    image: carlrowan,
  },
  {
    text: "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    name: "Carl Rowan",
    company: "Aglets Inc",
    image: carlrowan,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section className="bg-[#faf4e6] py-20 overflow-hidden">

      {/* Heading */}
      <h2 className="font-wulkandisplay text-center text-[#1B1B1B] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[40px] font-[700] mb-14">
        {title}
      </h2>

      {/* Slider */}
      <Swiper
        modules={[Autoplay]}
        onSwiper={setSwiperRef}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        loop={true}
        centeredSlides={true}
        slidesPerView={1.2}
        spaceBetween={20}

        breakpoints={{
          768: {
            slidesPerView: 1.5,
            spaceBetween: 35,
          },
          1024: {
            slidesPerView: 2.2,
            spaceBetween: 45,
          },
          1280: {
            slidesPerView: 1.9,
            spaceBetween: 45,
          },
        }}

        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}

        grabCursor={true}

        className="!px-4 md:!px-10"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="!h-auto">

            {/* Card */}
            <div className="bg-[#F7EED9] rounded-[24px] overflow-hidden flex flex-col h-full min-h-[320px] md:min-h-[450px]">

              {/* Content */}
              <div className="p-8 flex-1">
                <div className="text-[50px] md:text-[80px] mb-4 font-wulkandisplay font-[900] h-[50px] md:h-[70px]">“</div>
                <p className="text-[#1B1B1B] text-[16px] md:text-[24px] font-[400] md:leading-[38px] font-worksans">
                  {item.text}
                </p>
              </div>

              {/* Bottom */}
              <div className="bg-[#C18C2C] text-white flex items-center justify-center gap-4 px-6 py-4 mt-auto md:h-[122px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[60px] h-[60px] rounded-full border border-white"
                />
                <div>
                  <p className="font-[600] text-[20px] font-worksans text-white">{item.name}</p>
                  <p className="text-[16px] font-[400] font-worksans text-white">{item.company}</p>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ SVG Pagination */}
      <div className="flex justify-center gap-3 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef?.slideToLoop(index)}
            className="transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 20">
              <polygon
                points="6,1 18,1 23,10 18,19 6,19 1,10"
                fill={activeIndex === index ? "#C18C2C" : "none"}
                stroke="#C18C2C"
                strokeWidth="2"
              />
            </svg>
          </button>
        ))}
      </div>

      {/* Cursor Style */}
      <style>
        {`
          .swiper {
            cursor: grab;
          }
          .swiper:active {
            cursor: grabbing;
          }
        `}
      </style>
    </section>
  );
}