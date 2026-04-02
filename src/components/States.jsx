import React from "react";

import arizona from "../assets/arizona.png";
import washington from "../assets/washington.png";
import oregon from "../assets/oregon.png";

const title = "Now Accepting Patients In The Following States";

const states = [
  {
    name: "Arizona",
    desc: "In-person and Virtual appointment",
    image: arizona,
  },
  {
    name: "Washington",
    desc: "Virtual appointment",
    image: washington,
  },
  {
    name: "Oregon",
    desc: "Virtual appointment",
    image: oregon,
  },
];

export default function States() {
  return (
    <section className="bg-[#faf4e6] py-14 md:py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-[24px] md:text-[30px] lg:text-[36px] xl:text-[40px] w-full md:w-[650px] m-auto font-wulkandisplay font-[700] text-[#1B1B1B] leading-tight mb-12">
          {title}
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 place-items-center">
          {states.map((item, index) => (
            <div key={index} className="text-center w-full max-w-[320px]">

              {/* Semi-circle Image */}
              <div className="w-full aspect-[2/1] overflow-hidden rounded-t-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-[18px] sm:text-[20px] md:text-[22px] font-wulkandisplay font-[700] text-[#2b2b2b]">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-[12px] sm:text-[13px] md:text-[14px] text-black mt-1 px-2 font-worksans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}