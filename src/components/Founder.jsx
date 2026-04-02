import React from "react";
import data from "../data/founderData.json";
import founder from "../assets/founder.png";
import pattern from "../assets/pattern.png";
import GradientButton from "./GradientButton";

const Founder = () => {
  return (
    <>

      <section className="bg-[#F7EED9] pt-24 px-4 md:px-10">

        <div className="max-w-6xl mx-auto relative flex flex-col md:flex-row items-center">

          {/* Image */}
          <div className="relative z-30 md:-mr-24">
            <img
              src={data.founderImage || founder}
              alt={data.name}
              className="w-[100%] md:w-[509px] h-[240px] md:h-[330px] object-cover rounded-[20px] shadow-md mb-[-50px] md:mb-0"
            />
          </div>

          {/* Card */}
          <div className="
          relative z-10
          w-full md:w-[722px] 
          h-full md:h-[520px] lg:h-[410px]
          border-2 border-[#c89b2c]
          rounded-[20px]
          bg-[#e9e1cf]
          pl-6 md:pl-32
          pr-6 md:pr-10
          pt-6 md:pt-10
          pb-6 md:pb-10
          mt-0 md:mt-0

        ">

            <h2 className="text-[24px] md:text-[30px] text-black lg:text-[36px] xl:text-[40px] font-wulkandisplay font-[700] mb-4 mt-15 md:mt-0">
              {data.title}
            </h2>

            <h3 className="text-[20px] md:text-[24px] text-black font-wulkandisplay font-[600]">
              {data.name}
            </h3>

            <p className="text-[16px] md:text-[20px] text-black tracking-wide font-[500] mb-4 font-worksans">
              {data.designation}
            </p>

            <p className="text-black leading-[26px] mb-6 text-[16px] md:text-[20px] max-w-xl font-worksans font-[400]">
              “{data.quote}”
              — {data.author}
            </p>


            <GradientButton
              text="Learn More"
              fullWidth
              className="min-w-[163px] h-[50px] font-[500]"
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
      <img src={pattern} alt="Pattern" className="object-cover pointer-events-none w-full h-[60px] md:h-full bg-[#F7EED9]" />

    </>
  );
};

export default Founder;