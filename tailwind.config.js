/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
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

