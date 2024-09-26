/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      keyframes: {
        loading: {
          '0%': { left: '-40%' },
          '50%': { left: '20%', width: '80%' },
          '100%': { left: '100%', width: '100%' },
        }
      },
      animation: {
        loading: 'loading 1s linear infinite',
      }
    },
    boxShadow: {
      'hard-1': '0 0 0 1px rgba(0, 0, 0, 1)',
    }
  },
  plugins: [],
}

