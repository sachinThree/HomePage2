import React, { useState } from "react";
import psychiatry from "../assets/psychiatry.png";
import FAQList from "./FAQList";

const Choose = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const title = "Why Should You Choose Ada Psychiatry?";


  const faqs = [
    {
      question: "Convenient access",
      answer:
        "We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.",
    },
    {
      question: "Concierge approach",
      answer:
        "Personalized care tailored to each patient with dedicated attention and flexible communication. Personalized care tailored to each ",
    },
    {
      question: "High quality service",
      answer:
        "We ensure top-tier psychiatric care with evidence-based practices and modern treatment approaches. We ensure top-tier psychiatric ",
    },
    {
      question: "Trusted and empathic providers",
      answer:
        "Our providers are experienced, compassionate, and committed to understanding your needs. Our providers are experienced,",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-[#f7eed9] py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">

        {/* LEFT IMAGE */}
        <div className="w-full">

          {/* Offset Border (desktop only) */}
          <div className=" md:block w-full h-full"></div>

          {/* Image */}
          <img
            src={psychiatry}
            alt="therapy"
            className="w-full h-[280px] sm:h-[350px] md:h-[480px] lg:h-[520px]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="min-h-[480px] flex flex-col">

          {/* Title */}
          <h2 className="text-[24px] md:text-[30px] lg:text-[36px] xl:text-[40px] font-wulkandisplay text-black leading-tight mb-6 font-[700]">
            {title}
          </h2>

          {/* Accordion */}
          <FAQList faqs={faqs} borderColor="border-[#DAA520]" />
        </div>

      </div>
    </section>
  );
};

export default Choose;