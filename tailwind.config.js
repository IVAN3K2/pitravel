/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A3D62",
        secondary: "#FBC531",
        light: "#FFFFFF",
      },
    },
  },
  plugins: [],
}