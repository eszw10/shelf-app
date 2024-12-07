/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        main: "#fe6061",
        ground: "#f5f3f2",
        "ground-light": "#ece8e8",
        secondary: "#99dfff",
        tertiary: "#ffdd80",
        "main-light": "#feeeef",
        "secondary-light": "#eef7fe",
        "tertiary-light": "#fffdd2",
      },
      backgroundImage: {
        pattern: "url('/src/images/pattern.png')",
      },
    },
  },
  plugins: [],
};
