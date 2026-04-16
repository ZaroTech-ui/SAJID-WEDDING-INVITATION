/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#7B4955', // Dark Rose
          900: '#8B5A66',  // Medium Dark Rose
          800: '#9B6B77',  // Medium Rose
          700: '#AB7C88',  // Light Rose
        },
        navy: {
          950: '#6B3945', // Very Dark Rose
          900: '#7B4955', // Dark Rose
          800: '#8B5A66', // Medium Rose
        },
        teal: {
          600: '#F4EDDB', // Cream
          700: '#E8D5C4', // Darker Cream
        },
        pink: {
          950: '#6B3945', // Very Dark Rose
          900: '#7B4955', // Dark Rose
          800: '#8B5A66', // Medium Rose
          700: '#9B6B77', // Light Rose
          600: '#AB7C88', // Lighter Rose
          500: '#BB8D99', // Soft Rose
          400: '#CB9EAA', // Very Light Rose
          300: '#DBAFBB', // Pale Rose
        },
        gold: '#D4AF37',
        ivory: '#F4EDDB', // New cream color
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
