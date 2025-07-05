/** @format */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useInViewAnimate from "../../hooks/useInViewAnimate";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import data from "../../data/data.json";

const projects = data.projects;

const slideVariants = {
  enter: (direction) => ({
    y: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    y: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

const ProjectsSection = () => {
  const [ref, inView] = useInViewAnimate();
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const projectsPerView = 3;

  const nextProject = () => {
    const newIndex =
      (currentIndex + 1) % Math.ceil(projects.length / projectsPerView);
    setCurrentIndex([newIndex, 1]);
  };

  const prevProject = () => {
    const newIndex =
      currentIndex === 0
        ? Math.ceil(projects.length / projectsPerView) - 1
        : currentIndex - 1;
    setCurrentIndex([newIndex, -1]);
  };

  const currentProjects = projects.slice(
    currentIndex * projectsPerView,
    Math.min((currentIndex + 1) * projectsPerView, projects.length)
  );

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="py-20 px-6 bg-gray-950 text-white overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-yellow-400">Projects</h2>
        <p className="text-gray-400 mb-12">
          Here are some of the projects I've worked on recently.
        </p>

        <div className="relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10 ">
            <motion.button
              onClick={prevProject}
              className="bg-yellow-400 mx-4 text-black p-3 rounded-full hover:bg-yellow-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous project"
            >
              <FaArrowLeft size={20} />
            </motion.button>
          </div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10">
            <motion.button
              onClick={nextProject}
              className="bg-yellow-400 mx-4 text-black p-3 rounded-full hover:bg-yellow-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next project"
            >
              <FaArrowRight size={20} />
            </motion.button>
          </div>

          <div className="mx-12">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  y: { type: "spring", stiffness: 100, damping: 20 },
                  opacity: { duration: 0.3 },
                }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {currentProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6 text-left">
                      <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:underline"
                      >
                        View Project →
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({
            length: Math.ceil(projects.length / projectsPerView),
          }).map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-yellow-400" : "bg-gray-600"
              }`}
              onClick={() =>
                setCurrentIndex([index, index > currentIndex ? 1 : -1])
              }
              aria-label={`Go to project set ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
