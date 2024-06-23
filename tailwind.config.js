/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#004d99", // Default color for primary elements
        },
        button: {
          DEFAULT: "#ff8c00", // Default color for buttons
          hover: "#e68000", // Secondary color for button hover effect
        },
        background: {
          DEFAULT: "#f0f0f0", // Default background color
        },
        accent: {
          DEFAULT: "#4caf50", // Default accent color
        },
      },
    },
  },
  plugins: [],
};
