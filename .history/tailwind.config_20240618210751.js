/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--accent-ligh)",
        accent_light: "var(--accent)",
      },
      textColor: {
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)",
        tertiary: "var(--font-tertiary)",
      },
    },
  },
  plugins: [],
};
