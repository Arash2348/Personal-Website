/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        myIndigo: "#5D5FEF",
        strongGray: "#3A395E",
        blackGray : "#1E1E1E",
        gradientIndigo: "#481FEA",
        gradientCyan: "#00A3FF",
        strokeGray: "#F6F4F4"
      
      },
      fontFamily: {
        plusJakarta: ["Plus Jakarta Sans"],
        myCabin: ["Cabin"]
      },
    },
  },
  plugins: [],
}
