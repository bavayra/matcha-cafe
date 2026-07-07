/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        matcha: {
          50: '#f2f7f2',
          100: '#e0ede1',
          200: '#c3dcc5',
          300: '#96c29a',
          400: '#63a46a',
          500: '#4a7c59',
          600: '#3a6347',
          700: '#2f4f38',
          800: '#26402e',
          900: '#1a2e1a',
        },
        cream: {
          50: '#fdfcf8',
          100: '#f9f5eb',
          200: '#f3edd6',
          300: '#e8ddb8',
        },
      },
      fontFamily: {
        iosevka: ['IosevkaCharon', 'ui-monospace', 'monospace'],
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
}
