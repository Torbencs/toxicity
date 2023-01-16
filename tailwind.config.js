/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      minhbp: { raw: "(min-height: 780px)" },
    },
    extend: {},
  },
  plugins: [],
};
