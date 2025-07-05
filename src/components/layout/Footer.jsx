/** @format */

import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import useInViewAnimate from "../../hooks/useInViewAnimate";

const Footer = () => {
  const { darkMode } = useTheme();
  const [ref, inView] = useInViewAnimate();

  return (
    <footer
      ref={ref}
      className={`w-full py-10 px-6 transform transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      } ${
        darkMode
          ? "bg-[#1a2e42e3] text-[#b1c9e1]"
          : "bg-[#0D1B2A] text-[#E0E1DD]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-2xl font-bold tracking-wide">
            <span
              className={`${darkMode ? "text-[#778DA9]" : "text-[#415A77]"}`}
            >
              Rahi.
            </span>
            <span
              className={`${darkMode ? "text-[#415A77]" : "text-[#778DA9]"}`}
            >
              Dev
            </span>
          </div>

          {/* Links */}
          <nav className="flex gap-6 text-lg font-medium">
            <a
              href="#about"
              className="hover:text-[#778DA9] transition duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-[#778DA9] transition duration-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-[#778DA9] transition duration-300"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-[#778DA9] transition duration-300"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div
          className={`border-t ${
            darkMode ? "border-[#415A77]" : "border-gray-300"
          }`}
        ></div>

        {/* Bottom Section */}
        <div className="text-xs text-center text-[#8e969f]">
          © {new Date().getFullYear()} Rahi.Dev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
