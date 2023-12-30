/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        hoverColor: "#FFC000",
        brightColor: "#FF6000",
        backgroundColor: "#36ae9a",
        tColor: "#A9A9A9",
        fullbackground: "#1C5A4F",
        height:"50vh"
      }
    },
  },
  plugins: [],
}

