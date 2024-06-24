/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#004d99", // Default color for primary elements
          Secondary: "#CCCCCC",
        },
        button: {
          DEFAULT: "#79B8FF", // Default color for buttons
          hover: "#0070F3", // Secondary color for button hover effect
        },
        background: {
          DEFAULT: "#f0f0f0", // Default background color
        },
        text: {
          DEFAULT: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
