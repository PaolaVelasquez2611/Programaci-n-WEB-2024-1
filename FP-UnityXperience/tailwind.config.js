/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      '--blue-cian' : '#13BFD9',
      '--blue-purple' : '#757EE5',
      '--mint' : '#5DCAC4',
      '--white40' : '#ffffff40',
      '---gray' : '#999999',
    },
    extend: {},
  },
  plugins: [],
}

