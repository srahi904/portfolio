/** @format */
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

const ContactHeader = ({ inView }) => {
  const { darkMode } = useTheme();

  return (
    <div className="text-center mb-16">
      <motion.h2
        className={`text-4xl md:text-5xl font-bold mb-4 ${
          darkMode ? "text-yellow-400" : "text-blue-600"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.7 }}
      >
        Get In Touch
      </motion.h2>
      <motion.p
        className={`max-w-2xl mx-auto text-lg ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Have a project in mind or want to collaborate? Feel free to reach out!
      </motion.p>
    </div>
  );
};

export default ContactHeader;
