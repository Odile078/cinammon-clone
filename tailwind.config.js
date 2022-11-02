/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true
      },
      colors:{
        brandBlack:{
          DEFAULT:"RGB(34,34,34)",
          dark:"#1C1C1C"
          
        }
      },
      spacing:{
        '118':'7.375rem',//118px
      },
      fontSize:{
        '80':'5rem',//80px
        '46':'2.875rem',//46px
      },
      lineHeight:{
        '30':'1.875rem',//30px
      },
      backgroundImage:{
        heroBackground:"url('/images/hero-background.png')"
      }
    },
  },
  plugins: [],
}
