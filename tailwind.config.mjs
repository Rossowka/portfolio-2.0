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
        accent: "#CC5500",
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
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({
        h1: {
          "@apply font-bold text-[4rem] leading-[1] md:text-[6rem]": {},
        },
        h2: {
          "@apply font-medium text-[3rem] leading-[1.25] md:text-[5rem]": {},
        },
        h3: {
          "@apply font-medium text-lg": {},
        },
        h4: {
          "@apply font-medium text-[1.75rem] leading-[1.15]": {},
        },
        h5: {
          "@apply font-medium text-[0.75rem] md:text-[1rem] leading-[1.05]": {},
        },
        p: {
          "@apply font-medium text-[1.125rem] leading-relaxed": {},
        },
      });
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-4 lg:px-8": {},
        },
      });
    }),
  ],
};
