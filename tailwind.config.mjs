/** @type {import('tailwindcss').Config} */

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
        accentDark: "#A34400",
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
};
