/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#edf6f2",
        secondary: "#8ac243",
        tertiary: "#222222",
        secondaryRed: "#fc4237",
        secondaryYellow: "#fdde62",
        secondaryGreen: "#2dcc6f",
        secondaryBlue: "#113764",
        secondaryWhite: "#eeeeee",
        customBg: "rgb(237, 241, 201)",
        gray: {
          10: "#EEEEEE",
          30: "#A2A2A2",
          50: "#787B7B",
          70: "#545858",
          90: "#141414",
        },
      },
      screens: {
        xxs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      backgroundImage: {
        hero: "url('/src/assets/bg.png')",
      },
    },
  },
  plugins: [],
};
