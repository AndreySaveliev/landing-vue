/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      pink: "#FE5F5F",
      white: "#FFFFFF",
      black: "#000000",
      gray: "#F1F2F2",
      blue: "#3865A7",
      darkGray: "#2F2F2F",
    },
    screens: {
      mobile: "320px",
      tablet: "768px",
      desktop: "1024px",
    },
    fontFamily: {
      circe: ["circe"],
    },
    extend: {},
  },
  plugins: [],
};
