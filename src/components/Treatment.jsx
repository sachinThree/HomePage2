import React from "react";
import mentalHealthImg from "../assets/mental-health2.png";
import addictionImg from "../assets/addiction.png";
import weightLossImg from "../assets/supervised.png";
import GradientButton from "./GradientButton";

const title = "Our Treatment Focus";


const data = [
  {
    title: "Mental Health",
    desc: `Mental health is our emotional, psychological, and social well-being. It affects how we feel, think, and act. It also helps determine how we handle stress, build relationships, relate to others, and make healthy life decisions. Mental health is vital at every stage of life.`,
    img: mentalHealthImg,
    reverse: false,
  },
  {
    title: "Addiction And Recovery",
    desc: `Addiction is a chronic dysfunction of the brain system. An individual experiencing addiction will have difficulty staying away from the addictive behavior, display a lack of self-control, and lack an emotional response.`,
    img: addictionImg,
    reverse: true,
  },
  {
    title: "Supervised Medical Weight Loss",
    desc: `The primary indicator of obesity is when a person's body mass index (BMI) is 30 or higher. Medically supervised weight loss is a program designed for individuals who are obese and are having difficulty losing weight.`,
    img: weightLossImg,
    reverse: false,
  },
];

const Treatment = () => {
  return (
    <section className="bg-[#faf4e6] py-16 md:py-24 px-4 md:px-10">
      {/* Heading */}
      <h2 className="text-center text-[24px] md:text-[30px] lg:text-[36px] xl:text-[40px] font-wulkandisplay mb-12 md:mb-20 text-[#1B1B1B] font-[700]">
        {title}
      </h2>

      <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 h-auto md:h-[200px] ${item.reverse ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <div className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Content */}
            <div className="max-w-md text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-wulkandisplay font-[600] mb-4 text-black">
                {item.title}
              </h3>
              <p className="text-sm md:text-[16px] leading-[26px] text-[#4A4A4A] mb-6 font-wulkandisplay">
                {item.desc}
              </p>
              {/* Button */}

              <GradientButton
                text="Learn More"
                fullWidth
                className="min-w-[161px] h-[38px] font-[500] m-auto md:m-0"
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
        ))}
      </div>
    </section>
  );
};

export default Treatment;