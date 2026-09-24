/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2874F0",
        accent: "#FFE11B",
        rating: "#388E3C",
        cart: "#FF9F00",
        buy: "#FB641B",
        footer: "#172337",
        page: "#F1F3F6",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.08)",
        hover: "0 8px 24px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};

