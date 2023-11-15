/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f3e6d1",
          200: "#e8cca3",
          300: "#dcb376",
          400: "#d19948",
          500: "#c5801a",
          600: "#9e6615",
          700: "#764d10",
          800: "#4f330a",
          900: "#271a05",
        },
        secondary: {
          100: "#f3ecd1",
          200: "#e8d8a3",
          300: "#dcc576",
          400: "#d1b148",
          500: "#c59e1a",
          600: "#9e7e15",
          700: "#765f10",
          800: "#4f3f0a",
          900: "#272005",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        smaller: "0.75rem",
      },
    },
  },
  plugins: [],
};

