const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ".flowbite-react\\class-list.json"],
  theme: {
    extend: {
      fontFamily: {
        fugazOne: ['"Fugaz One", sans-serif'],
        freeman: '"Freeman", sans-serif',
      },
    },
  },
  plugins: [flowbiteReact],
};