/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#061033',
          900: '#0A1A4A',
          800: '#0F2461',
          700: '#142E78',
          600: '#1A3A8F',
        },
        gold: {
          300: '#F5D98A',
          400: '#F2CB5B',
          500: '#D4A62A',
          600: '#B8871A',
        },
        'off-white': '#EAEFFB',
      },
      fontFamily: {
        heading: ['Cinzel', 'Playfair Display', 'serif'],
        body: ['Inter', 'Poppins', 'sans-serif'],
        accent: ['Great Vibes', 'cursive'],
      },
      maxWidth: {
        '7xl': '1280px',
      },
    },
  },
  plugins: [],
};

