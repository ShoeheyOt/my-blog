import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
        success: "#45676F",
        light: "#fafafa",
        dark: "#333",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
