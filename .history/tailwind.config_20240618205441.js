/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "var(--color_secondary)",
      },
      textColor{
        primary: "var(--color_primary)",
        secondary: "var(--color_secondary)",
      }
    },
  },
  plugins: [],
};
