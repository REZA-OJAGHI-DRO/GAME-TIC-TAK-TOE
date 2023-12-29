/** @type {import(‘tailwindcss’).Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
  extend: {
    fontFamily: {
      txtsemi: "txtproject",
      primary: "google",
    },
    animation:{
      'myanime':"identifier 3s linear infinite",
    }
  },
  },
  plugins: [],
  }