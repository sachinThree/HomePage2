import React from "react";

import humanbrain from "../assets/human-brain.png";
import hospital from "../assets/hospital.png";
import mentalhealth from "../assets/mental-health.png";
import brain from "../assets/brain.png";
import GradientButton from "./GradientButton";
import { services } from "../data/servicesData.json";

const title = "Our Services";

const iconMap = {
  humanbrain,
  hospital,
  mentalhealth,
  brain,
};

const Services = () => {
  return (
    <section className="bg-[#faf4e6] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-[24px] md:text-[30px] lg:text-[36px] xl:text-[40px] font-wulkandisplay text-[#1B1B1B] mb-14 font-[700]">
          {title}
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-6 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-[140px]"
            >

              {/* Icon Circle */}
              <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full bg-[#f7eed9] mb-4">
                <img
                  src={iconMap[service.icon]}
                  alt={service.title}
                  className="w-14 h-14 object-contain"
                />
              </div>

              {/* Text */}
              <p className="text-[16px] md:text-[20px] text-[#1B1B1B] leading-[28px] font-[700] font-wulkandisplay">
                {service.title}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 flex items-center justify-center">
          <GradientButton
            text="View our services"
            fullWidth
            className="min-w-[298px] h-[62px] font-[600] text-[16px] text-[#232020]"
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
        </div>
      </div>
    </section>
  );
};

export default Services;