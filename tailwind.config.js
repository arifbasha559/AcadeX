/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
    "*",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // 🌙 Dark Theme
        "primary": "#0F172A", // Dark background
        "secondary": "#1E293B", // Card/Panel background
        accent: {
          DEFAULT: "#6366F1", // Indigo
          pink: "#EC4899", // Pink
        },
        
        status: {
          success: "#22C55E", // Green
          danger: "#EF4444", // Red
          neutral: "#6B7280", // Gray
        },

        // ☀️ Light Theme (prefix with l-)
        "l-primary": "#FFFfff66", // Background
        "l-secondary": "#ffffff", // Card background
        "l-border": "#E2E8F0", // Border around cards
        "l-status-success": "#22C55E",
        "l-status-danger": "#EF4444",
        "l-status-neutral": "#6B7280",
      },
    },
  },
  plugins: [],
};
