/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cdi: {
          black: '#050505',
          dark: '#0D0D0D',
          graphite: '#171717',
          surface: '#1F1F1F',
          border: '#282828',
          'border-light': '#3A3A3A',
          silver: '#D8D8D8',
          'silver-muted': '#A3A3A3',
          white: '#F5F5F5',
          gold: '#D6A33A',
          'gold-light': '#F2C45A',
          'gold-dark': '#8C651A',
          'gold-subtle': 'rgba(214, 163, 58, 0.12)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'metallic-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #D8D8D8 45%, #8E8E8E 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F2C45A 0%, #D6A33A 50%, #9B701E 100%)',
        'dark-glass': 'linear-gradient(180deg, rgba(23, 23, 23, 0.75) 0%, rgba(13, 13, 13, 0.9) 100%)',
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(214, 163, 58, 0.08) 0%, transparent 70%)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(214, 163, 58, 0.2))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(214, 163, 58, 0.5))' },
        }
      }
    },
  },
  plugins: [],
}
