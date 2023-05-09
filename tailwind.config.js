/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": {
          100: "#8094a9",
          200: "#345376",
          400: "#4d6987",
          900: "#022954",
        },
        "visualization-color": {
          100: "#baf6d6",
          200: "#8cf0bb",
          400: "#5eeaa0",
          900: "#8cf0bb",
        },
        "sort-button-color": {
          100: "#a881af",
        },
      },
    },
  },
  plugins: [],
};
