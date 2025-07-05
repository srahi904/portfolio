/** @format */
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

const ContactImage = ({ inView }) => {
  const { darkMode } = useTheme();

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="flex-1 max-w-xl"
      variants={imageVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div
        className={`relative h-full rounded-2xl overflow-hidden ${
          darkMode ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <img
          src="https://picsum.photos/600/400"
          alt="Contact Visual"
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center ${
            darkMode
              ? "bg-gray-900/60 text-gray-300"
              : "bg-white/80 text-gray-800"
          }`}
        >
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="mb-6 max-w-md">
            Have a project in mind? Let's create something amazing!
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              <span>contact@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactImage;
