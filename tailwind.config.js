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
          DEFAULT:"rgb(34,34,34)",
          dark:"#1C1C1C",
          light:"#CFCFCF"       
        },
        brandGray:{
          DEFAULT:"rgb(102,102,102)",
          dark:"rgb(82,82,82)",//#525252
          light:"rgb(207,207,207)",//#CFCFCF
        },
        brandWhite:{
          DEFAULT:"#F6F6F6"
        },
        brandViolet:{
          DEFAULT:"#50227D"
        },
        brandYellow:{
          DEFAULT:"#FFCB47"
        }
      },
      spacing:{
        '118':'7.375rem',//118px
        '7':'0.4375rem',//7px
        '10px':'0.625rem',//10px
        '18':'1.125rem',//18px
        '30':'1.875rem',//30px
        '50':'3.125rem',//50px
        '90':'5.625rem',//90px
        '120':'7.5rem',//120px
        '15':'0.9375rem',//15px
      },
      fontSize:{
        '80':'5rem',//80px
        '32':'2rem',//32px
        '40':'2.5rem',//40px
        '46':'2.875rem',//46px
        '54':'3.375rem',//54px
      },
      lineHeight:{
        '26':'1.625rem',//26px
        '30':'1.875rem',//30px
        '44':'2.75rem',//44px
        '56':'3.5rem',//56px
        '58':'3.625rem',//58px
        '72':'4.5rem',//72px
      },
      backgroundImage:{
        heroBackground:"url('/images/hero-background.png')"
      },
      fontFamily:{
        mont:['Mont','sans-serif'],
        montHeavy:['MontHeavy','sans-serif'],
        montBold:['MontBold','sans-serif'],
        montSemibold:['MontSemibold','sans-serif'],      
      },
      
    },
  },
  plugins: [],
}
