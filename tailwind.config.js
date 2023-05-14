/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {},
      colors: {
        "primary-color": {
          100: "#8094a9",
          200: "#345376",
          400: "#4d6987",
          900: "#022954",
        },
        "primary-color-dark": {
          100: "#efeae4",
          200: "#d8cabb",
          400: "#c1ab93",
        },
        "visualization-color": {
          100: "#a9adff",
          200: "#565200",
          400: "#565200",
          900: "#565200",
        },
        "sorted-bar-color": {
          color: "rgb(68, 136, 34)",
        },

        "visualization-color-dark": {
          100: "#dcdeff",
          200: "#cbcdff",
          400: "#a9adff",
        },

        "sort-button-color": {
          100: "#a881af",
        },
      },
    },
  },
  plugins: [],
};
