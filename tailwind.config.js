/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#626F47", // Add your custom color here
        lightGreen: "#798645",
        lightText: "#FEFAE0",
        darkText: "#F2EED7",
      },
    },
  },
  plugins: [],
};
