/** @type {import('tailwindcss').Config} */

const fontFamily = require('./src/styles/fontFamily');
const colors = require('./src/styles/colors');
const fontSize = require('./src/styles/fontSize');
const screens = require('./src/styles/screens');
const letterSpacing = require('./src/styles/letterSpacing');
const backgroundImage = require('./src/styles/backgroundImage');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize,
      screens,
      letterSpacing,
      backgroundImage,
    },
  },
  plugins: [],
};
