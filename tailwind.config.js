/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        xs: '480px',
      },
      colors: {
        'navy': {
          700: '#1e3a5c',
          800: '#0f2744',
          900: '#0a1929',
        },
        'coral': {
          400: '#ff8e6e',
        },
        'blue': {
          450: '#3b4bf5', // Add a custom shade (e.g., bg-blue-450)
        },
        customBlue: '#3b4bf5',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
      fontFamily: {
        'neue-haas': ['"Neue Haas Grotesk"', 'Arial', 'sans-serif'], // Add Satoshi font family here
      },
    },
  },
  plugins: [],
}

