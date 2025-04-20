/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#FAF5F0',
          100: '#F5E9DE',
          200: '#E8D4BE',
          300: '#D9BA9C',
          400: '#C9A07A',
          500: '#B78B5F',
          600: '#A67549',
          700: '#8B5A2B',
          800: '#704825',
          900: '#52341B',
        },
        pink: {
          50: '#FEF2F5',
          100: '#FDE6EB',
          200: '#FBCCD8',
          300: '#F8B9C6',
          400: '#F58DA3',
          500: '#E63946',
          600: '#D41E2D',
          700: '#B01625',
          800: '#8D121E',
          900: '#6A0D16',
        },
        cream: {
          50: '#FCF8F3',
          100: '#F8F1E7',
          200: '#F1E3D0',
          300: '#E8D4B9',
          400: '#DFC5A2',
          500: '#D6B78B',
          600: '#C9A06C',
          700: '#BB894D',
          800: '#9F743E',
          900: '#7A5830',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};