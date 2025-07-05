/** @format */

// src/contexts/MousePositionContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const MousePositionContext = createContext({ x: 0, y: 0 });

export const MousePositionProvider = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);

  return (
    <MousePositionContext.Provider value={position}>
      {children}
    </MousePositionContext.Provider>
  );
};

export const useMousePositionContext = () => useContext(MousePositionContext);
