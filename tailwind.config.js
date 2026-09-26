/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', '"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
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
        },
        warm: {
          dark: '#121110',
          muted: '#8c867e',
          accent: '#c9b99a'
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
