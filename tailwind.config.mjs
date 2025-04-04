/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#C75300",
        s: {
          primary: "#F5F5F5",
          secondary: "#2C3E50",
          inverse: "#000",
        },
        f: {
          primary: "#1C1C14",
          inverse: "#e5e7eb",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(0deg,rgba(0,0,0,.6),rgba(0,0,0,.6)),radial-gradient(at 24% 52%, hsla(210,27%,24%,0.1) 0px, transparent 50%),radial-gradient(at 15% 23%, hsla(24,100%,40%,0.1) 0px, transparent 50%),radial-gradient(at 77% 71%, hsla(24,100%,40%,0.1) 0px, transparent 50%),radial-gradient(at 72% 39%, hsla(210,27%,24%,0.1) 0px, transparent 50%),radial-gradient(at 43% 40%, hsla(24,100%,40%,0.1) 0px, transparent 50%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({
        h1: {
          "@apply font-bold text-[4rem] leading-normal md:text-[5rem] lg:text-[6rem]":
            {},
        },
        h2: {
          "@apply font-medium text-[3rem] md:text-[4rem] lg:text-[5rem] tracking-tight leading-tight":
            {},
        },
        h3: {
          "@apply font-medium text-lg": {},
        },
        p: {
          "@apply font-medium text-[1.125rem] leading-relaxed": {},
        },
      });
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-4 lg:px-8": {},
        },
        ".page-title": {
          "@apply font-medium text-[3rem] md:text-[4rem] lg:text-[5rem] tracking-tight leading-tight":
            {},
        },
        ".project-title": {
          "@apply font-medium text-[2rem] lg:text-[3rem] tracking-tight leading-tight mb-8 lg:mb-8":
            {},
        },
        ".title": {
          "@apply text-2xl lg:text-[2.5rem] leading-tight mb-8 lg:mb-16": {},
        },
        ".eyebrow": {
          "@apply font-semibold text-f-primary/40 whitespace-nowrap leading-relaxed text-base":
            {},
        },
      });
    }),
  ],
};
