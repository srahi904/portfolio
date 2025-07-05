/** @format */

import React, { useState, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { darkMode } = useTheme(); // Get the current theme

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        id="cursor"
        className={darkMode ? "cursor-dark" : "cursor-light"}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
      <div
        id="cursor-ring"
        className={darkMode ? "cursor-ring-dark" : "cursor-ring-light"}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
