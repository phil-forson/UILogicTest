/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Matter", "sans-serif"],
      },
      colors: {
        primary2: "#AAAFAE",
        primary3: "#808785",
        primary4: "#55605C",
        primary5: "#F3F4F6",
        primary6: "#00100B",
        primary7: "#E5E5E4",
        primary8: "#A6A6A5",
        green1: "#004741",
        gray1: "#F2F2F2",
        gray2: "#CCCFCE3D",
        gray3: "#ECECEB",
        gray4: "#F3F3F4",
        black1: "#00100B",
        black2: "#404040",
      },
    },
  },
  plugins: [],
};
