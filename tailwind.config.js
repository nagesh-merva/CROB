/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#005AA7',
        customTan: '#FFFDE4',
        customblack: '#020205',
        customborder: '#524e3e'
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        terminator: ['Terminator', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      const newComponents = {
        '.item': {
          left: 'calc(50% - 110px)',
        },
      };
      addComponents(newComponents);
    }),
  ],
}

