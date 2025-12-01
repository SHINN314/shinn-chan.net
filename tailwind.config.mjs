/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        black: "#000000",

        // gray colors
        gray: {
          900: "#333",
          800: "#666",
          700: "#999",
          600: "#ccc",
          100: "#eee",
        },
        white: "#ffffff",
      },
      fontFamily: {
        sans: ['"NotoSansJP"', "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.03em" }],
        sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.03em" }],
        base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0.03em" }],
        lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "0.03em" }],
        xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "0.03em" }],
        "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "0.03em" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem", letterSpacing: "0.03em" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "0.03em" }],
        "5xl": ["3rem", { lineHeight: "1", letterSpacing: "0.03em" }],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
