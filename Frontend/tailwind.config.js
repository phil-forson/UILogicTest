/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary2': '#AAAFAE',
      'primary3': '#808785',
      'primary4': '#55605C',
      'primary5': '#F3F4F6',
      'primary6': '#00100B',
      'primary7': '#E5E5E4',
      'primary8': '#A6A6A5',
      'green1': '#004741',
      'gray': '#F2F2F2',
      'black1': '#404040'
    },
    extend: {
      fontFamily: {
        'custom': ['Matter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

