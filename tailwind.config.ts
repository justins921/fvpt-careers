import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0d2240",
          mid: "#163354",
        },
        teal: {
          DEFAULT: "#1a7a78",
          light: "#22a09d",
          bright: "#2dc4c0",
        },
        gold: "#c9a84c",
        cream: "#f8f5ef",
        "warm-white": "#fdfcfa",
        "text-dark": "#0d1f35",
        "text-mid": "#3d5470",
        "text-light": "#6b85a0",
        border: "#dde4ed",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
