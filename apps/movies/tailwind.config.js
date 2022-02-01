module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: [
    "./apps/movies/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Source Sans Pro', 'sans-serif'],
    },
    extend: {      
      colors: {
        'dark-blue': 'rgba(3, 37, 65, 1)',
      },
      spacing: {
        '1/5-1': 'calc( 100%/5 - 1rem )',
        '1/4-1': 'calc( 100%/4 - 1rem )',
        '1/3-1': 'calc( 100%/3 - 1rem )',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
