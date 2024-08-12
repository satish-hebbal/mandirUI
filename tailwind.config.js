/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./App/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        giloryReg: ['gilory-reg', 'sans-serif'],
        gilorySemiBold: ['gilory-semibold', 'sans-serif'],
        giloryBold: ['gilory-bold', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'baseSaf': '#FFE6A9',
        'textBoxBG': '#FFFFF4',
        'buttonBG': '#FF9933',
      },
    },
  },
  plugins: [],
}
