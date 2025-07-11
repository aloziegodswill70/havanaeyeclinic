/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}', // optional if you ever use `/pages`
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#ED1C24', // from Havana logo
        },
        blue: {
          DEFAULT: '#0051C3', // from Havana logo
        },
      },
    },
  },
  plugins: [],
}
