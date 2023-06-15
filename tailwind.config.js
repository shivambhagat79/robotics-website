/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      brightness: {
        25: ".25",
      },
      zIndex: {
        0.1: "-10",
      },
    },
    fontFamily: {
      oswald: ['"Oswald"', "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
