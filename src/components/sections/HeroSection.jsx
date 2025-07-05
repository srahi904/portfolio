/** @format */

import useInViewAnimate from "../../hooks/useInViewAnimate";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/motionVariants";
import { useTypewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";

const HeroSection = () => {
  const [ref, inView] = useInViewAnimate();
  const [text] = useTypewriter({
    words: [
      "🚀 I'm a Programmer.",
      "🛠️ I'm web Developer.",
      "⚔️ I'm Backend Developer.",
      "✨ I love clean code.",
    ],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <motion.section
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-12 px-4 text-primary transition-colors duration-300" // reduced py and px
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section - Typing Text */}
        <div className="flex-1 text-center md:text-left space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-secondary">
            Hi There, <br /> I'm{" "}
            <span className="text-accent hover:text-secondary transition duration-300">
              Shashi Ranjan{" "}
              <span className="text-primary hover:text-accent">Rahi</span>
            </span>
          </h2>
          <p className="text-xl md:text-2xl font-mono min-h-[2.5rem] text-secondary drop-shadow-md">
            <span className="transition-all duration-300">{text}</span>
            <span className="animate-pulse text-accent">|</span>
          </p>
          <div className="pt-2">
            <a href="#about">
              <button className="mt-2 px-5 py-1.5 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition duration-300 font-medium text-sm md:text-base">
                About Me
              </button>
            </a>
          </div>
        </div>

        {/* Right Section - Model Box */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Tilt className="py-0">
            <img
              src="/adb.svg"
              alt="3D Model"
              className="w-[16rem] h-[16rem] object-contain transition-transform duration-500 hover:scale-105"
            />
          </Tilt>
        </div>
      </div>

      {/* Scroll Down Mouse Icon */}
      <div className="mt-8 flex justify-center">
        <motion.a
          href="#about"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center group"
        >
          <div className="w-[22px] h-[34px] rounded-full border-2 border-[#A78BFA] flex items-start justify-center p-1">
            <motion.span
              className="w-[5px] h-[5px] rounded-full bg-[#A78BFA] mb-1"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>
          <span className="text-xs text-[#A78BFA] mt-1 group-hover:underline">
            Scroll
          </span>
        </motion.a>
      </div>
    </motion.section>
  );
};

export default HeroSection;
