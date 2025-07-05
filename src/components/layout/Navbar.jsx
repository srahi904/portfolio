/** @format */

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Skills", href: "#skills" },
];

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 z-50 w-full shadow-md transition-colors duration-300 ${
        darkMode ? "bg-[#0D1B2A] text-[#E0E1DD]" : "bg-[#E0E1DD] text-[#0D1B2A]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-bold text-2xl tracking-wide">
          <span className="text-[#415A77]">Rahi.</span>
          <span className="text-[#778DA9]">Dev</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <a
                href={item.href}
                className="transition-colors duration-300 hover:text-[#778DA9]"
              >
                {item.name}
              </a>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#778DA9] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-4 text-sm px-3 py-1 rounded transition hover:scale-105 bg-[#415A77] text-[#E0E1DD]"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-2xl focus:outline-none"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`fixed inset-0 z-40 flex flex-col justify-between p-6 ${
              darkMode
                ? "bg-[#0D1B2A] text-[#E0E1DD]"
                : "bg-[#E0E1DD] text-[#0D1B2A]"
            }`}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">
                <span className="text-[#415A77]">Rahi.</span>
                <span className="text-[#778DA9]">Dev</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="text-3xl">
                <FiX />
              </button>
            </div>

            <ul
              ref={menuRef}
              className="flex flex-col gap-6 mt-12 text-xl font-medium"
            >
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block transition-colors duration-300 hover:text-[#778DA9]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <button
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className="w-full py-3 mt-8 rounded-lg bg-[#415A77] text-white font-semibold hover:scale-105 transition"
              >
                {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
