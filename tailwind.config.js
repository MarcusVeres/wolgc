const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'xs': '0.75rem',     // 12px
        'sm': '0.875rem',    // 14px
        'base': ['1rem', { lineHeight: '1.5' }],      // 16px
        'lg': ['1.625rem', { lineHeight: '1.615' }],  // 26px (p.bigger), line height 42px (42/26 ≈ 1.615)
        'xl': ['2.625rem', { lineHeight: '1.2' }],    // 42px (h4)
        '2xl': ['4.5rem', { lineHeight: '1.16' }],    // 72px (h3)
        '3xl': ['6.85rem', { lineHeight: '1', letterSpacing: '0.01em' }],    // 109.7px (h2)
        '4xl': ['13.3125rem', { lineHeight: '0.84', letterSpacing: '-0.02em' }], // 213px (h1)
      },
    },
  },
  plugins: [],
}