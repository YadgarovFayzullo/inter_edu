/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",

      md: "769px",

      lg: "1024px",

      xl: "1280px",
    },
    fontFamily: {
      Header: ["Oswald", "sans-serif"],
      Arimo: ["Arimo", "serif"],
    },
  },
  plugins: [],
};
