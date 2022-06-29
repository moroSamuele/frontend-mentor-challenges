/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryModerateCyan: 'hsl(176, 50%, 47%)',
        primaryDarkCyan: 'hsl(176, 72%, 28%)',
        darkGrey: 'hsl(0, 0%, 48%)',
      },
      fontFamily: {
        commissioner : ['Commissioner', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
