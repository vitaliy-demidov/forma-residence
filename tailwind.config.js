/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        amethyst: {
          dark: '#160B1C',
          DEFAULT: '#23122B',
          light: '#351B42',
          surface: '#1D0E24'
        },
        petrol: {
          dark: '#14282A',
          DEFAULT: '#1F3A3D',
          light: '#2B4E52'
        },
        gold: {
          antique: '#B98A4B',
          accent: '#C5A069',
          soft: '#D9BC8B',
          light: '#E8D4B0'
        },
        ivory: {
          warm: '#F7F4EF',
          sand: '#EFECE4',
          muted: '#D8D4CA'
        },
        stone: {
          950: '#0c0c0e',
          900: '#141417',
          850: '#1a1a1f',
          800: '#232328',
          700: '#32323a',
          400: '#8e8e99',
          200: '#d7d5d0',
          100: '#f1f0eb',
          50: '#faf9f6'
        }
      },
      letterSpacing: {
        widest: '0.22em',
        ultra: '0.35em'
      }
    },
  },
  plugins: [],
}
