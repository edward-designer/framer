const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "hsl(0 0% 11%)",
        light: "hsl(0 0% 96%)",
        primary: "hsl(316 49% 48%)",
        primaryDark: "hsl(175 74% 62%)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(#00000060 2px, #f5f5f5 5px, #f5f5f5 100px);",
      },
    },
  },
  plugins: [],
};
