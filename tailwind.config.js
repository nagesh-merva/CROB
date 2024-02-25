/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#005AA7',
        customTan: '#FFFDE4',
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
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

