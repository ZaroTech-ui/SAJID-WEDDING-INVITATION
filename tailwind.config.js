/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#064E3B',
        },
        gold: '#D4AF37',
        ivory: '#FFFEF7',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        amiri: ['Amiri', 'serif'],
      },
    },
  },
  plugins: [],
}
