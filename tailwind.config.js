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
      }
    },
  },
  plugins: [],
}
