/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FFC06D",
        gray: "#878787",
        dark: {
          200: "#313840",
          400: "#212130",
          DEFAULT: "#191927",
        },
      },
      screens: {
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
