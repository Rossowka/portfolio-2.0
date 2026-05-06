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
        accent: "#A35139",
        accentDark: "#A34400",
        sandyBrown: "#FFB162",
        reddishBrown: "#A35139",
        charchoalBlue: "#2C3B4D",
        jetBlack: "#1B2632",
        linen: "#EEE9DF",
        paleOak: "#C9C1B1",
        s: {
          primary: "#FAFAFA",
          secondary: "#1B2632",
          inverse: "#000",
          brand: "#29140E",
        },
        f: {
          primary: "#1C1C14",
          secondary: "#665C47",
          brandLight: "#9B7B6B",
          brandDark: "#6B5248",
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
