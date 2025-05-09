/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        orange: {
          50: '#fff8f5',
          100: '#fff0e9',
          200: '#fed9c1',
          300: '#fdb792',
          400: '#ff8f57',
          500: '#FF5C00', // LPU Orange
          600: '#ea5502',
          700: '#c24502',
          800: '#993809',
          900: '#7c3010',
        },
      },
      boxShadow: {
        'strong': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}