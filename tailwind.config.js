/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll-reverse 40s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-52.5%)' },
        },
        'infinite-scroll-reverse': {
          from: { transform: 'translateX(-52.5%)' },
          to: { transform: 'translateX(0)' },
        }
      },
      colors: {
        'primary-dark': '#0e1011',
        'primary-dark-accent': '#16191d',
        'gray-50': '#DEDEDE',
        'w3m-grey-8': '#141414',
        'w3m-grey-24': '#3b4040',
        'w3m-grey-50': '#798686',
        'w3m-grey-60': '#949e9e',
        'w3m-grey-70': '#9ea9a9',
        'w3m-grey-80': '#c9cfcf',
        'w3m-grey-90': '#e4e7e7',
        'w3m-grey-95': '#f1f3f3',
        'w3m-grey-100': '#fff',
        'w3m-blue-100': '#3396ff',
        'w3m-blue-125': '#66b1ff',
        'w3m-grey-gradient-start': '#272a2a',
        'w3m-grey-gradient-end': '#141414',
        'w3m-light-gradient-start': '#f1f3f3',
        'w3m-highlight': 'hsla(0,0%,100%,.1)',
        'w3m-blue': '#47a1ff',
        'w3m-blue-dark': '#1d242c',
        'w3m-blue-highlight': '#273b54',
        'w3m-blue-light': '#f0f6fe',
        'w3m-dark-blue': '#516dfb',
        'w3m-dark-blue-dark': '#1d1f2b',
        'w3m-dark-blue-highlight': '#21232f',
        'w3m-dark-blue-light': '#f0f2fd',
        'w3m-magenta': '#cb4d8c',
        'w3m-magenta-dark': '#261f22',
        'w3m-magenta-highlight': '#2a2326',
        'w3m-magenta-light': '#f9f2f5',
        'w3m-pink': '#e87de8',
        'w3m-orange': '#ffa64c',
        'w3m-orange-dark': '#29231d',
        'w3m-orange-highlight': '#4d3925',
        'w3m-orange-light': '#fcf6ef',
        'w3m-green': '#1dc956',
        'w3m-green-dark': '#1d2620',
        'w3m-green-highlight': '#212a24',
        'w3m-green-light': '#f0f9f3',
        'w3m-purple': '#794cff',
        'w3m-purple-dark': '#201e2b',
        'w3m-purple-highlight': '#24222f',
        'w3m-purple-light': '#f4f1fe',
        'w3m-teal': '#36e2e2',
        'w3m-teal-dark': '#1d2626',
        'w3m-teal-highlight': '#212a2a',
        'w3m-teal-light': '#f0f9f9',
        'w3m-cyan': '#00ace5',
      },
    },
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text|border)-w3m-(blue|dark-blue|magenta|orange|green|purple|teal)/
  }]
}