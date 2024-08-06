/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./gameline.html"],
  theme: { 
    extend: { 
      // Remove the colors spread as it's unnecessary
    }
  },
  plugins: [
    require('@tailwindcss/typography'),  
  ]
}
