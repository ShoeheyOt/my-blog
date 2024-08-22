import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/features/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        D_notes: "1rem",
        D_text: "1.5rem",
        D_title: "2.25rem",
        D_logo: "3rem",
        M_notes: "0.875rem",
        M_text: "1rem",
        M_title: "1.5rem",
        M_logo: "2rem",
      },
      colors: {
        primary: "#E5E2CD",
        secondary: "#1C1F38",
        warning: "#CEA716",
        danger: "#E07A69",
        info: "#8CA598",
        success: "45676F",
        light: "#ffafa",
        dark: "#333",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
