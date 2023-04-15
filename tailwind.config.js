/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'charcoal': '#233D4D',
      'orange': '#FE7F2D',
      'rose': '#ED217C',
      'blue': '#5398BE',
      'gray': '#D4D2D5',
      'navy': '#1B1F3B',
      'yellow': '#F9DC5C',
      'peach': '#ED6A5A',
    },
  },
  plugins: [],
}
