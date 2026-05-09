/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        card: "#F9F3ED",
        accent: "#8B4513",
        primary: "#1A1A1A",
        secondary: "#7D6557",
        border: "#E5D5C5",
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
