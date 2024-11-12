/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    
      colors: {
        brandred: "#E74040",
        brandredyellow: "#FFC938",
        brandvlue: "#23A6F0",
        lightgray: "#23A6F0",
        darkblue: "#252b42",
        emerald: "#23856D",
      },
      extend: {
        textColor: ['visited'],
        backgroundColor:['active', 'disabled', 'checked'],
        borderColor:['active', 'disable', 'checked', 'focus'],
        backgroundImage: {
          firstshow: 'url(./src/assets/images/logos/card-cover-5.svg)'
        }
    },
  },
  plugins: [],
};
