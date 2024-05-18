/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        bg: '#daf5f0',
        main: '#7fbc8c',
        mainAccent: '#58a769', // not needed for shadcn
      },
      borderRadius: {
        base: '5px'
      },
      boxShadow: {
        base: '4px 4px 0px 0px rgba(0,0,0,1)',
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '4px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
