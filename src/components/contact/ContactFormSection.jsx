/** @format */

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import emailjs from "@emailjs/browser";
import SocialLinks from "./SocialLinks";

const ContactFormSection = ({ inView }) => {
  const { darkMode } = useTheme();
  const formRef = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      formRef.current.reset();
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setSending(false);
    }
  };

  const inputClasses = `w-full p-3 rounded-lg ${
    darkMode
      ? "bg-gray-800 text-gray-200 border border-gray-700 focus:border-blue-500"
      : "bg-gray-100 text-gray-800 border border-gray-300 focus:border-blue-500"
  } focus:outline-none transition duration-300`;

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="flex-1 w-full max-w-lg"
      variants={formVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`p-6 rounded-2xl ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-lg`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              className={`block mb-2 font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              name="name"
              required
              placeholder="Your name"
              className={inputClasses}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className={`block mb-2 font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              name="email"
              required
              placeholder="Your email"
              className={inputClasses}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            className={`block mb-2 font-medium ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Phone
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="text"
            name="subject"
            required
            placeholder="Phone"
            className={inputClasses}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className={`block mb-2 font-medium ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Message
          </label>
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            name="message"
            required
            rows="2.5"
            placeholder="Tell me more about your project..."
            className={inputClasses}
            onChange={handleChange}
          ></motion.textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={sending || sent}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-300 ${
            darkMode
              ? "bg-yellow-500 hover:bg-yellow-600 text-gray-900"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          } ${sending || sent ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {sending ? "Sending..." : sent ? "Message Sent!" : "Send Message"}
        </motion.button>
        <SocialLinks />
      </form>
    </motion.div>
  );
};

export default ContactFormSection;
