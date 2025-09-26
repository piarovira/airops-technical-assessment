/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "20px" }],
        sm: ["13px", { lineHeight: "20px" }],
        base: ["14px", { lineHeight: "20px" }],
        lg: ["30px", { lineHeight: "36px" }],
      },
      colors: {
        brand: "#ADABFF",
        font: {
          primary: "#09090B",
          secondary: "#565656",
          tertiary: "#828282",
          quaternary: "#868686",
          light: "#808593",
        },
        border: {
          black: "#09090B14",
          primary: "#ECEDEF",
          deepBlack: "#00000029",
        },
        button: {
          bg: "#09090B0A",
        },
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      boxShadow: {
        xs: "0px 1px 2px 0px #1018280D",
        sm: "0px 1px 3px 0px #1018281A",
      },
    },
  },
  plugins: [],
};
