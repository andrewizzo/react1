/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary: {
          main:'#427EEB',
          light:'#6198FF',
          supp:'#1C4A9E'
        },
        secondary:{
          main:'#9E700D',
          light:'#EBB542',
        },
        
      },
    },
  },
  plugins: [],
}

