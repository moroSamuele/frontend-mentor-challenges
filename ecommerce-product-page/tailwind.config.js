/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryOrange: 'hsl(26, 100%, 55%)',
        primaryNotToMuchOrange: 'hsl(26, 100%, 85%)',
        primaryPaleOrange: 'hsl(25, 100%, 94%)',
        veryVarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayishBlue: 'hsl(223, 64%, 98%)',
      },
      fontFamily: {
        kumbhSans : ['Kumbh Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
