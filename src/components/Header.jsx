import { useState } from "react";
import logo from "../assets/logo.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import homeData from "../data/homeData.json";
import GradientButton from "./GradientButton";

const logoText = "Ada Psychiatry";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const lines = [0, 1, 2];

  return (
    <header className="bg-black text-white font-worksans">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-[83px]">

        {/* Logo */}
        <div className="flex items-center gap-3 lg:gap-5">
          <img src={logo} alt="Logo" className="h-auto" />
          <h1 className="text-[14px] lg:text-[16px] font-[600] tracking-[3px] font-worksans">
            {logoText}
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-6 ml-auto px-4 lg:px-10">
          {homeData.navData.map((item) => (
            <div key={item.id} className="relative group">

              {/* Main Link */}
              <a
                href={item.link || "#"}
                className="flex items-center whitespace-nowrap text-xs lg:text-sm font-[500] gap-1 font-worksans"
              >
                {item.label}

                {item.submenu && (
                  <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180 stroke-2" />
                )}
              </a>

              {/* Dropdown */}
              {item.submenu && (
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                  <ul className="bg-white shadow-lg rounded-md min-w-[140px] lg:min-w-[180px] py-2">
                    {item.submenu.map((sub) => (
                      <li
                        key={sub.id}
                        className="px-4 py-2 hover:bg-gray-100 text-black cursor-pointer"
                      >
                        {sub.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <GradientButton text="Book an Appointment" />
        </div>

        {/* Animated Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center w-7 h-6 relative"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`absolute block w-7 h-[2px] bg-white rounded transition-all duration-300 ease-in-out
        ${i === 0 ? "top-0" : ""}
        ${i === 1 ? "top-1/2 -translate-y-1/2" : ""}
        ${i === 2 ? "bottom-0" : ""}
        
        ${menuOpen
                    ? i === 0
                      ? "top-1/2 -translate-y-1/2 rotate-45"
                      : i === 1
                        ? "opacity-0"
                        : "bottom-auto top-1/2 -translate-y-1/2 -rotate-45"
                    : ""
                  }
      `}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-4">
          <nav className="flex flex-col gap-4">

            {homeData.navData.map((item) => (
              <div key={item.id}>

                {/* Main Item */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    setActiveMenu(activeMenu === item.id ? null : item.id)
                  }
                >
                  <span>{item.label}</span>

                  {item.submenu && (
                    <ChevronDownIcon
                      className={`w-4 h-4 transition ${activeMenu === item.id ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </div>

                {/* Submenu */}
                {item.submenu && activeMenu === item.id && (
                  <ul className="pl-4 mt-2 flex flex-col gap-2">
                    {item.submenu.map((sub) => (
                      <li key={sub.id} className="text-sm text-gray-300">
                        {sub.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <GradientButton text="Book an Appointment" fullWidth className="h-[40px] mt-4" />

          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;