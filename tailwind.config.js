/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kumbh': ['"Kumbh Sans"', 'sans-serif'],
      },
      colors: {
        'Orange': 'hsl(26, 100%, 55%)',
        'Paleorange': 'hsl(25, 100%, 94%)',
        'Verydarkblue': 'hsl(220, 13%, 13%)',
        'Darkgrayishblue': 'hsl(219, 9%, 45%)',
        'Grayishblue': 'hsl(220, 14%, 75%)',
        'Lightgrayishblue': 'hsl(223, 64%, 98%)',
        'White': 'hsl(0, 0%, 100%)',
        'Black' : 'hsl(0, 0%, 0%)',
      },
      boxShadow: {
        'darkfill': 'inset 0 1000px rgba(0,0,0,.75)',
        'navdarkfill': '0 0 0 1000px rgba(0,0,0,.75)',
      }
    },
    screens: {
      'mobile': {'max': '800px'},
      'desktop': {'max': '1440px'},
    },
  },
  plugins: [],
}

