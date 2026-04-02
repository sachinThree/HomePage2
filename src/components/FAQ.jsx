import React from "react";
import GradientButton from "./GradientButton";
import FAQList from "./FAQList";
import { faqs } from "../data/faqsdata.json";

const title = "Frequently asked questions";

export default function FAQ() {
  return (
    <section className="bg-[#faf4e6] pt-16 md:pt-4 pb-16 md:pb-24 px-4">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-center font-wulkandisplay text-[24px] md:text-[30px] lg:text-[36px] xl:text-[40px] font-[700] text-black mb-12">
          {title}
        </h2>

        {/* ✅ Reusable Component */}
        <FAQList faqs={faqs} />

        <div className="flex justify-center mt-12">
          <GradientButton
            text="See all FAQ"
            fullWidth
            className="min-w-[298px] h-[62px] font-[600] bg-[linear-gradient(90deg,#CEA341_0%,#E8D16B_49.79%,#F0DF78_100%)]"
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
}