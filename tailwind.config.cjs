/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{jsx,js}','./node_modules/tw-elements/dist/js/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        jura: ['jura', 'sans-serif'],
        kumbh: ['kumbh sans', 'sans-serif'],
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}