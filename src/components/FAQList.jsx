import React, { useState } from "react";

const FAQList = ({ faqs, borderColor = "border-[#C18C2C]/20" }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`pb-4 ${index !== faqs.length - 1
                ? `border-b ${borderColor}`
                : ""
              }`}
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-start gap-4 text-left cursor-pointer"
            >
              {/* Icon */}
              <span className="relative w-[20px] h-[20px] flex items-center justify-center mt-1">
                <span className="absolute w-[14px] h-[1.5px] bg-[#2b2b2b]" />
                <span
                  className={`absolute w-[1.5px] h-[14px] bg-[#2b2b2b] transition-all duration-300 ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                    }`}
                />
              </span>

              {/* Question */}
              <span className="font-wulkandisplay text-[18px] md:text-[20px] lg:text-[24px] font-[700] text-[#1B1B1B]">
                {faq.question}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                }`}
            >
              <div className="overflow-hidden">
                <p className="text-[14px] md:text-[16px] lg:text-[20px] text-black leading-relaxed pl-10 font-worksans font-[400]">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQList;