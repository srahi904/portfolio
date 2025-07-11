/** @format */

// tailwind.config.js
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

/**
 * @format
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#f59e0b",
        background: "#f9fafb",
        darkBg: "#111827",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [forms, typography, aspectRatio],
};
