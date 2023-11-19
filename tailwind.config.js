/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Unbounded', 'sans-serif'],
      body: ['Unbounded', 'sans-serif']
    },
    extend: {
      screens: {
        desktop: '1440px'
      },
      animation: {
        'loader': 'loader 1s linear infinite alternate;'
      },
      keyframes: {
        loader: {
          "0%": {
            'border-color': 'black rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgba(255, 255, 255, 0)',
          },
          "33%": {
            'border-color': 'black black rgba(255, 255, 255, 0) rgba(255, 255, 255, 0)',
          },
          "66%": {
            'border-color': 'black black black rgba(255, 255, 255, 0)'
          },
          "100%": {
            'border-color': 'black black black black'
          }
        }
      },
    },
    plugins: [],
  }
}