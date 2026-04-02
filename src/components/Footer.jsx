import React from "react";
import logo from "../assets/logo.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import tiktok from "../assets/tik-tok.png";
import twitter from "../assets/twitter.png";
import { footerData } from "../data/footerData.json";

export default function Footer() {

  return (  
    <footer className="bg-black text-gray-300 px-6 md:px-16 pt-20 pb-20 md:pb-26">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between md:justify-start gap-y-10">
        {footerData.map((section, index) => (
          <div key={index} className={section.width}>
            {!section.custom ? (
              <>
                <h3 className="text-[#DAA520] font-[600] text-[18px] mb-4 font-wulkandisplay">
                  {section.title}
                </h3>
                <ul className="space-y-4 text-white font-[400] text-[14px] font-worksans">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.url} className="hover:text-[#DAA520] transition">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : section.title === "Business Hours" ? (
              <>
                <h3 className="text-[#DAA520] font-[600] text-[18px] mb-4 font-wulkandisplay">
                  {section.title}
                </h3>
                <p className="text-white text-[14px] font-worksans">Monday - Thursday</p>
                <p className="text-white text-[14px] mt-3">
                  09:00 am - 4:00 pm
                </p>

                <h3 className="text-[#DAA520] font-[600] text-[18px] mt-6 mb-2 font-wulkandisplay">
                  For Careers
                </h3>
                <p className="text-white text-[14px] font-worksans">
                  Interested in joining the ADA Team?
                </p>
                <a
                  href="mailto:Career@adapsychiatry.com"
                  className="text-white text-[14px] mt-1 block hover:text-[#DAA520] font-worksans"
                >
                  Career@adapsychiatry.com
                </a>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <img src={logo} alt="Logo" className="h-auto" />
                  <h2 className="text-[14px] lg:text-[18px] font-[700] tracking-[3px] text-white font-worksans">
                    ADA PSYCHIATRY
                  </h2>
                </div>

                <h4 className="text-[#DAA520] font-[600] text-[18px] mb-2 font-wulkandisplay">
                  {section.title}
                </h4>
                <a
                  href="https://maps.google.com/?q=1820+E+Ray+Road,+Chandler,+AZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[14px] hover:text-[#DAA520] font-worksans"
                >
                  1820 E Ray Road, STE A107, Chandler, Arizona 85225
                </a>
                <p className="text-white text-[14px] mt-1">
                  <a href="tel:4805269292" className="hover:text-[#DAA520]">
                    Phone: 480-526-9292
                  </a>
                </p>

                <h4 className="text-[#DAA520] font-[600] text-[18px] mt-4 mb-2 font-wulkandisplay">
                  Follow us
                </h4>
                <div className="flex items-center gap-4">
                  <a href="#"><img src={instagram} alt="Instagram" className="h-[20px] w-[20px]" /></a>
                  <a href="#"><img src={facebook} alt="Facebook" className="h-[20px] w-[20px]" /></a>
                  <a href="#"><img src={linkedin} alt="LinkedIn" className="h-[16px] w-[16px]" /></a>
                  <a href="#"><img src={tiktok} alt="TikTok" className="h-[16px] w-[16px]" /></a>
                  <a href="#"><img src={twitter} alt="Twitter" className="h-[20px] w-[20px]" /></a>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
}
