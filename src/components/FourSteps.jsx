import React from "react";

import schedule from "../assets/schedule.png";
import connect from "../assets/connect.png";
import discuss from "../assets/discuss.png";
import plan from "../assets/plan.png";
import GradientButton from "./GradientButton";

const title = "Four Simple Steps To Get Started";

const steps = [
  {
    id: 1,
    title: "Schedule an appointment",
    icon: schedule
  },
  {
    id: 2,
    title: "Connect with your provider",
    icon: connect,
  },
  {
    id: 3,
    title: "Discuss your comprehensive assessment",
    icon: discuss,
  },
  {
    id: 4,
    title: "Receive your individualized treatment plan",
    icon: plan,
  },
];

export default function FourSteps() {
  return (
    <>
      <span className="w-full h-1 bg-[linear-gradient(90deg,#C18C2C_0%,#FCF38A_50.52%,#C18C2C_100%)] block"></span>
      <section className="bg-black text-white py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[24px] md:text-[30px] lg:text-[36px] xl:text-[40px] font-[900] w-full md:w-[450px] m-auto font-wulkandisplay bg-clip-text text-transparent bg-[linear-gradient(90deg,#C18C2C_0%,#FCF38A_50.52%,#C18C2C_100%)] mb-10">
            {title}
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={index} className="flex flex-col items-center  text-center relative w-full">

                  {/* Top dashed line (only desktop) */}
                  {index !== 0 && (
                    <div className="hidden md:block absolute top-6 left-0 -translate-x-1/2 w-[50%] border-t border-dashed border-white"></div>
                  )}

                  {/* Icon */}
                  <div className="mb-4">
                    <img src={Icon} alt={step.title} className="w-[50px] h-[50px]" />
                  </div>

                  {/* Number */}
                  <h3 className="text-[28px] font-[900] mb-2 bg-clip-text text-transparent bg-[linear-gradient(90deg,#C18C2C_0%,#FCF38A_50.52%,#C18C2C_100%)] font-wulkandisplay">
                    {String(step.id).padStart(2, "0")}
                  </h3>

                  {/* Text */}
                  <p className="text-[12px] md:text-[14px] font-[400] text-white max-w-[200px] font-worksans">
                    {step.title}
                  </p>
                </div>
              );
            })}

          </div>

          <div className="mt-15 mb-8 flex items-center justify-center">
            <GradientButton
              text="Schedule a Call"
              fullWidth
              className="min-w-[298px] h-[62px] font-[600] text-[16px] text-black"
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
      <span className="w-full h-1 bg-[linear-gradient(90deg,#C18C2C_0%,#FCF38A_50.52%,#C18C2C_100%)] block"></span>
    </>

  );
}