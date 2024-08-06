/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "340px",

        mdMin: "620px",

        md: "768px",

        lg: "1000px",

        xl: "1980px",

        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
