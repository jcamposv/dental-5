/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        olive: { DEFAULT: "#4A5D23", light: "#5C7330", dark: "#3A4A1B" },
        cream: { DEFAULT: "#F5F0E8", dark: "#E8E0D0", light: "#FAF7F2" },
        terracotta: { DEFAULT: "#C75B39", light: "#D4785C", dark: "#A84A2D" },
        sand: { DEFAULT: "#D4C5A9", light: "#E8DCC8", dark: "#B8A88A" },
        forest: { DEFAULT: "#2C3E1F", light: "#3A5229" },
        dark: { DEFAULT: "#1A1A1A", light: "#2A2A2A", lighter: "#4A4A4A" },
        muted: "#7A7A7A",
      },
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        display: ['"Playfair Display"', "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
