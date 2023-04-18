/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        primary: "#270F59",
        secondary: "#6732D9",
        third: "#854AD9",
        fourth: "#ED85FF",
        fifth: "#4BE2F2",
        footer: "#150930",
      },
      lineHeight: {
        90: "90px",
      },
      fontSize: {
        xs: "0.5rem",
        sm: "0.6rem",
        base: "0.8rem",
        lg: "1rem",
        xl: "1.300rem",
        "2xl": "1.400rem",
        "3xl": "2.500rem",
        "4xl": "3rem",
      },
    },
  },
  plugins: [],
};
