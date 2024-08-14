/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins:'"Poppins", sans-serif',
        Montserrat: '"Montserrat", sans-serif',
        Prata: '"Prata", serif'
      }
    },
  },
  plugins: [flowbite.plugin()],

}

