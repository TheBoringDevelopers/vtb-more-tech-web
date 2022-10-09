/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      lineHeight: {
        130: '130%'
      }
    },
  },
  plugins: [
    require("tailwindcss-radix")(),
  ],
};
