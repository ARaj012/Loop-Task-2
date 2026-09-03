/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: { DEFAULT: '#F7F6F3', dark: '#0B0E14' },
        surface: { DEFAULT: '#FFFFFF', dark: '#12151C' },
        border: { DEFAULT: '#E7E4DD', dark: '#232833' },
        ink: {
          DEFAULT: '#181A1F',
          soft: '#5B5F6B',
          faint: '#8B8F9B',
          'dark-DEFAULT': '#F2F1ED',
          'dark-soft': '#A7ABB6',
          'dark-faint': '#6C7078',
        },
        cobalt: { DEFAULT: '#3457D5', dark: '#2846B8', soft: '#EAEFFC' },
        ember: { DEFAULT: '#FF7A45', dark: '#E9642F', soft: '#FFEDE3' },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        xl2: '20px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
