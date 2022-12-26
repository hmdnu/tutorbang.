/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1C20",
        secondary: "#3B67C3",
        grey: "#696969",
        dimBrown: "rgba(73, 73, 73, 0.6)",
      },
      backgroundImage: {
        "bg-programming": "./src/assets/courseProgramming.png",
        "bg-writing": "./src/assets/courseWriting.png",
        "bg-camerea": "./src/assets/coursePhoto.png",
      },
      fontFamily: {
        hanken: ["Hanken Grotesk", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
