/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./data/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme with blue/neon accents
        primary: {
          DEFAULT: "#3b82f6", // Blue
          light: "#60a5fa",
          dark: "#2563eb",
        },
        accent: {
          DEFAULT: "#06b6d4", // Cyan/Neon
          light: "#22d3ee",
          dark: "#0891b2",
        },
        dark: {
          bg: "#0f172a", // Dark slate background
          card: "#1e293b", // Card background
          border: "#334155", // Border color
          text: "#e2e8f0", // Text color
          muted: "#94a3b8", // Muted text
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.12)",
        glow: "0 0 20px rgba(59, 130, 246, 0.3)",
        "glow-lg": "0 0 30px rgba(59, 130, 246, 0.4)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
