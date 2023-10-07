/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./gameline.html"],
  theme: { 
    extend: { 
      colors: {
        ...colors,
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),  
  ]
}

