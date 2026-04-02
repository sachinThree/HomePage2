import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import hero from "../assets/hero.png";
import GradientButton from "./GradientButton";
import { slides } from "../data/heroData.json";

const imageMap = {
  hero: hero
};


export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-screen min-h-[500px] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={800}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          window.heroSwiper = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="!h-full">
            <div className="relative w-full h-full">

              {/* Background Image */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${imageMap[slide.image]})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#000000_0%,rgba(0,0,0,0)_56%)]" />

              {/* Content */}
              <div className="relative z-10 flex items-center h-full px-6 md:px-16 lg:px-24 xl:px-[160px]">
                <div className="max-w-[550px] text-white">

                  {/* Title */}
                  <h1 className="font-wulkandisplay font-[600] uppercase leading-[36px] text-[24px] md:text-[30px] lg:text-[36px] xl:text-[48px] md:leading-[56px]">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="mt-4 text-[16px] md:text-[20px] font-wulkandisplay font-[600]">
                    {slide.subtitle}
                  </p>

                  {/* Description */}
                  <p className="w-[300px] md:w-[380px] mt-3 text-[14px] md:text-[18px] leading-[22px] md:leading-[28px] text-white/90 font-playfairdisplay font-[400]  ">
                    {slide.description}
                  </p>

                  {/* Button */}
                  <GradientButton
                    text="Learn More"
                    fullWidth
                    className="min-w-[163px] h-[50px] font-[500] mt-12"
                    icon={
                      <svg
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3.22656 11.5H17.252" stroke="black" strokeWidth="1.38889" />
                        <path d="M10.0898 5.11133C10.0898 5.11133 10.9493 11.4884 17.7345 11.4884" stroke="black" strokeWidth="1.38889" />
                        <path d="M10.0898 17.8888C10.0898 17.8888 10.9493 11.5117 17.7345 11.5117" stroke="black" strokeWidth="1.38889" />
                      </svg>
                    }
                  />

                  {/* Pagination */}
                  <div className="flex gap-3 mt-20">
                    {slides.map((_, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          if (window.heroSwiper) {
                            window.heroSwiper.slideToLoop(i);
                          }
                        }}
                        className="cursor-pointer"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 20">
                          <defs>
                            <linearGradient id={`grad-${i}`}>
                              <stop offset="0%" stopColor="#C18C2C" />
                              <stop offset="50%" stopColor="#FCF38A" />
                              <stop offset="100%" stopColor="#C18C2C" />
                            </linearGradient>
                          </defs>

                          <polygon
                            points="6,1 18,1 23,10 18,19 6,19 1,10"
                            fill={activeIndex === i ? `url(#grad-${i})` : "transparent"}
                            stroke="#C18C2C"
                            strokeWidth="1"
                          />
                        </svg>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}