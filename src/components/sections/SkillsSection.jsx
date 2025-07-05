/** @format */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useInViewAnimate from "../../hooks/useInViewAnimate";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import data from "../../data/data.json";

const skills = data.skills;

const SkillsSection = () => {
  const [ref, inView] = useInViewAnimate();
  const [currentPage, setCurrentPage] = useState(0);
  const skillsPerPage = 10;
  const totalPages = Math.ceil(skills.length / skillsPerPage);
  const currentSkills = skills.slice(
    currentPage * skillsPerPage,
    (currentPage + 1) * skillsPerPage
  );

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="bg-[#0d1117] text-white py-20 px-4 sm:px-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-yellow-400 text-4xl font-bold mb-4">What I do</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          I am a passionate developer currently working with modern frontend and
          backend technologies to build immersive web experiences.
        </p>

        <div className="relative flex justify-center items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 xs:gap-2 sm:gap-4 md:gap-6 w-full"
            >
              {currentSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-[#161b22] p-2 xs:p-2.5 sm:p-3 md:p-4 rounded-xl shadow-lg hover:shadow-yellow-400/20 transition duration-300 hover:scale-105 flex flex-col items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain mb-2"
                  />
                  <p className="text-xs xs:text-sm text-gray-300 font-medium text-center">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-10">
            <motion.button
              onClick={goToPreviousPage}
              className="bg-yellow-400 text-black p-2 sm:p-3 rounded-full hover:bg-yellow-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous skills"
            >
              <FaArrowUp size={18} />
            </motion.button>

            <motion.button
              onClick={goToNextPage}
              className="bg-yellow-400 text-black p-2 sm:p-3 rounded-full hover:bg-yellow-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next skills"
            >
              <FaArrowDown size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
