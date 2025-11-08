/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        wellness: {
          purple: '#764ba2',
          blue: '#667eea',
          pink: '#ff6db3',
          teal: '#20c997',
          yellow: '#ffd166',
        },
      },
    },
  },
  plugins: [],
}


