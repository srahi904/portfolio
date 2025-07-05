/** @format */
import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";

const SocialLinks = () => {
  const { darkMode } = useTheme();

  const iconStyle = `p-3 rounded-full ${
    darkMode
      ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
  }`;

  return (
    <div className="mt-8">
      <p
        className={`mb-4 text-center ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Or connect with me on:
      </p>
      <div className="flex justify-center space-x-4">
        <motion.a
          href="https://x.com/srahi904"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          className={iconStyle}
        >
          <FaTwitter size={20} />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/srahi904/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          className={iconStyle}
        >
          <FaInstagram size={20} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/srahi904/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          className={iconStyle}
        >
          <FaLinkedin size={20} />
        </motion.a>
        <motion.a
          href="https://github.com/srahi904"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          className={iconStyle}
        >
          <FaGithub size={20} />
        </motion.a>
      </div>
    </div>
  );
};

export default SocialLinks;
