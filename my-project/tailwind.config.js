/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // REQUIRED for manual theme switching
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#93C5FD", // light backgrounds, hover states
          DEFAULT: "#3B82F6", // primary actions
          dark: "#1E40AF", // dark mode accents
        },
        surface: {
          light: "#FFFFFF",
          dark: "#0F172A", // slate-900 style
        },
        text: {
          light: "#0F172A",
          dark: "#E5E7EB",
        },
      },
      screens: {
        sm: "640px", // phones
        md: "768px", // tablets
        lg: "1024px", // laptops
        xl: "1280px", // desktops
      },
    },
  },
  plugins: [],
};
