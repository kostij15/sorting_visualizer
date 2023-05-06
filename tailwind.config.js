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
        "sort-button-color": {
          100: "#a881af",
        },
      },
    },
  },
  plugins: [],
};
