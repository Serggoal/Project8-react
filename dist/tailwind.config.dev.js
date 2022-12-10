"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0000ff',
        'secondary': '#5efc8d',
        'light-gray': '#cccccc'
      },
      boxShadow: {
        '333xl': '1px 1px 1px rgba(0, 0, 0, 0.2)',
        '222xl': '0 0px rgba(0, 0, 0, 0.2)'
      }
    }
  },
  plugins: []
};