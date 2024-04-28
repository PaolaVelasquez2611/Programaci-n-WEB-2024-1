/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orange-red' : '#E93E30',
        'light-blue' : '#33A9DC',
        'yellow-bright' : '#FFDE24',
        

      }
    },
  },
  plugins: [],
}

