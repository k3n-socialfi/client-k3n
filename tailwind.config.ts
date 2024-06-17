/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import fromPlugin from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constant/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinThenBounce: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(90deg)" },
          "50%": { transform: "rotate(180deg)" },
          "75%": { transform: "rotate(60deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        zoomThenSpin: {
          "0%": { transform: "scale(0)" },
          "20%": { transform: "scale(1.2)" },
          "30%": { transform: "scale(1)" },
          "40%": { transform: "rotate(180deg)" },
          "50%": { transform: "rotate(360deg)" },
          "60%": { transform: "rotate(180deg)" },
          "70%": { transform: "scale(1.2)" },
          "80%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        rotateX: {
          from: { transform: "rotateX(0)" },
          to: { transform: "rotateX(360deg)" },
        },
        rotateY: {
          from: { transform: "rotateY(0)" },
          to: { transform: "rotateY(360deg)" },
        },
        rotateZ: {
          from: { transform: "rotateZ(0)" },
          to: { transform: "rotateZ(360deg)" },
        },
        slideFromBottom: {
          from: {
            transform: "translateY(100%)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideFromTop: {
          from: {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideFromLeft: {
          from: {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slideFromRight: {
          from: {
            transform: "translateX(100%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        // bounceThenSpin: {
        //   '0%, 100%': {}
        // }
      },
      animation: {
        spinThenBounce: "spinThenBounce 10s ease-in-out infinite",
        zoomThenSpin: "zoomThenSpin 5s ease-in-out infinite",
        fadeIn: "fadeIn 1s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out",
        slideFromBottom: "slideFromBottom .7s ease-in-out",
        slideFromTop: "slideFromTop .7s ease-in-out",
        slideFromLeft: "slideFromLeft .7s ease-in-out",
        slideFromRight: "slideFromRight .7s ease-in-out",
        rotateX: "rotateX 1s ease-in-out",
        rotateY: "rotateY 1s ease-in-out",
        rotateZ: "rotateZ 1s ease-in-out",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        kode: ["Kode Mono", "sans-serif"],
      },
      colors: {
        darkblack: {
          100: "#666666",
          200: "#4D4D4D",
          300: "#333333",
          400: "#1A1A1A",
          500: "#0D0D0D",
          600: "#080a0c",
        },
        success: {
          50: "#FDE4EB",
          100: "#FBC5D8",
          200: "#F986B1",
          300: "#F23581",
          400: "#CC2666",
        },
        warning: {
          100: "#FDE047",
          200: "#FACC15",
          300: "#EAB308",
        },
        error: {
          50: "#FCDEDE",
          100: "#FF7171",
          200: "#FF4747",
          300: "#DD3333",
        },
        bgray: {
          50: "#FAFAFA",
          100: "#F7FAFC",
          200: "#EDF2F7",
          300: "#E2E8F0",
          400: "#CBD5E0",
          500: "#A0AEC0",
          600: "#718096",
          700: "#4A5568",
          800: "#2D3748",
          900: "#1A202C",
        },
        orange: "#FF784B",
        bamber: {
          50: "#FFFBEB",
          100: "#FFC837",
          500: "#F6A723",
        },
        primary: "#F23581",
        secondary: "#82EBFF",
        stablecoin: "#FFEEF3",
      },
    },
  },
  plugins: [
    fromPlugin,
    plugin(function ({ addVariant }) {
      addVariant("current", "&.active");
    }),
    require("@tailwindcss/line-clamp"),
  ],
};
export default config;
