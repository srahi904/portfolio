/** @format */

import React from "react";
import { motion } from "framer-motion";
import useInViewAnimate from "../../hooks/useInViewAnimate";
import Tilt from "react-parallax-tilt";
import { useTheme } from "../../contexts/ThemeContext";
// import resume from "../../assets/resume.pdf";

// Animation Variants
const imageVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, duration: 0.8 },
  },
};

const textVariant = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, duration: 0.8, delay: 0.4 },
  },
};

const AboutMe = () => {
  const [ref, inView] = useInViewAnimate();
  const { darkMode } = useTheme();

  return (
    <motion.section
      ref={ref}
      id="about"
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 transition-colors duration-300 ${
        darkMode
          ? "bg-[#1a2e42e3] text-[#b1c9e1]"
          : "bg-[#0D1B2A] text-[#E0E1DD]"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        {/* Left - Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end mr-20"
          variants={imageVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Tilt>
            <img
              src="/about1.png"
              alt="Profile"
              className="w-44 sm:w-60 md:w-72 lg:w-80 h-auto rounded-lg object-cover shadow-md"
            />
          </Tilt>
        </motion.div>

        {/* Right - Text */}
        <motion.div
          className="w-full md:w-1/2 space-y-4 text-center md:text-left"
          variants={textVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold sm:font-bold">
            About Me
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            I'm a passionate developer who loves building clean, responsive, and
            accessible web apps. I specialize in React and enjoy transforming
            ideas into elegant UIs.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            Beyond code, I explore new technologies, contribute to open-source,
            and actively share learnings with the dev community.
          </p>

          <motion.button
            className={`${
              darkMode
                ? "bg-[#b1c9e1] text-[#1a2e42]"
                : "bg-yellow-400 text-black"
            } px-5 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={"#"} download>
              ➡️ Download Resume
            </a>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
