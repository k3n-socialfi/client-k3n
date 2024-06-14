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
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        kode: ["Kode Mono", "sans-serif"],
      },
      colors: {
        darkblack: {
          100: '#666666',
          200: '#4D4D4D',
          300: '#333333',
          400: '#1A1A1A',
          500: '#0D0D0D',
          600: '#080a0c',
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
  ],
};

export default config;
