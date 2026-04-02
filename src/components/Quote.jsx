import React from "react";
import Topwave from "../assets/top-wave.png";
import Bottomwave from "../assets/bottom-wave.png";

const title = "We help people living with and experiencing difficult times";

const Quote = () => {
  return (
    <section className=" bg-black">
      <img src={Topwave} alt="Top Wave" className="w-full h-auto mb-2 bg-[#faf4e6]" />
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-[#C18C2C] text-7xl md:text-8xl font-wulkandisplay font-[900] h-[50px] md:h-[60px]">
          &#8220;
        </div>
        <p className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-white font-wulkandisplay leading-[36px] md:leading-[40px] font-[700] pl-5 pr-5">
          {title}
        </p>
      </div>
      <img src={Bottomwave} alt="Bottom Wave" className="w-full h-auto mt-8 bg-[#faf4e6]" />
    </section>
  );
};

export default Quote;