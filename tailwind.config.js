/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#89A8B2',
        secondary: '#B3C8CF',
        third:'#E5E1DA',
        fourth:'#F1F0E8'
      }
    },
  },
  plugins: [],
}