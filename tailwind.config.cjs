/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [ "./index.html","./src/**/*.{vue,js,ts,jsx,tsx}", ],
  darkmode:false,
  mode:'jit',
  theme: {
    container:{
      center:true,
      padding:{
        default:'1rem',
        sm:'3rem',
        lg:'4rem',
      },
    },
    extend:{
      colors:{
        primary:{
              100:'#06C2AE',
              200:'#02889B'
        },
        secondary:'#FF693A'
      }
    },
  },
  variants:{

  },

  plugins: [],
}
