/** @format */
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import useInViewAnimate from "../../hooks/useInViewAnimate";
import ContactHeader from "./ContactHeader";
import ContactImage from "./ContactImage";
import ContactFormSection from "./ContactFormSection";

const ContactUs = () => {
  const { darkMode } = useTheme();
  const [ref, inView] = useInViewAnimate();

  return (
    <motion.section
      ref={ref}
      id="contact"
      className={`min-h-screen py-24 px-6 md:px-12 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
      } transition-colors duration-300`}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto">
        <ContactHeader inView={inView} />

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <ContactImage inView={inView} />

          <ContactFormSection inView={inView} />
        </div>
      </div>
    </motion.section>
  );
};

export default ContactUs;
