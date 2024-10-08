const customColors = {
  'brand-red':    { DEFAULT: '#D3023B', alt: '#FF0047' },
  'brand-orange': { DEFAULT: '#EA3A00', alt: '#EB5400' },
  'brand-yellow': { DEFAULT: '#F09B00', alt: '#FAAF03' },
  'brand-green':  { DEFAULT: '#188D37', alt: '#0AB036' },
  'brand-blue':   { DEFAULT: '#1459A8', alt: '#105EB8' },
  'brand-purple': { DEFAULT: '#6D02A8', alt: '#3E005E' },
  'brand-violet': { DEFAULT: '#B0006B', alt: '#870052' },
  'brand-pink':   { DEFAULT: '#DC0086', alt: '#B0006B' },
};

const defaultTheme = require('tailwindcss/defaultTheme')

const XS = '320px';
const SM = '480px';
const MD = '540px';
const LG = '640px';
const XL = '768px';
const XL2 = '900px';
const XL3 = '1150px';
const XL4 = '1400px';
const XL5 = '1750px';
const XL6 = '2150px';
const XL7 = '2500px';
const XL8 = '3750px';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    breakpointsInspector: {
      position: ['top', 'right'],
    },
    extend: {
      colors: customColors,
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
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
        '4xl': ['8.3125rem', { lineHeight: '0.84', letterSpacing: '-0.02em' }], // 213px (h1)
        '5xl': ['10.3125rem', { lineHeight: '0.84', letterSpacing: '-0.02em' }], // 213px (h1)
        '6xl': ['13.3125rem', { lineHeight: '0.84', letterSpacing: '-0.02em' }], // 213px (h1)
      },
      maxWidth: {
        'xs': XS,
        'sm': SM,
        'md': MD,
        'lg': LG,
        'xl': XL,
        '2xl': XL2,
        '3xl': XL3,
        '4xl': XL4,
        '5xl': XL5,
        '6xl': XL6,
        '7xl': XL7,
        '8xl': XL8,
      },
      screens: {
        'xs': XS,
        'sm': SM,
        'md': MD,
        'lg': LG,
        'xl': XL,
        '2xl': XL2,
        '3xl': XL3,
        '4xl': XL4,
        '5xl': XL5,
        '6xl': XL6,
        '7xl': XL7,
        '8xl': XL8,
      },
    },
  },
  plugins: [
    require('tailwindcss-breakpoints-inspector'),

    // LLM Code to allow customColors to affect SVGs 
    // TODO / Move to its own file. 
    function({ addUtilities, theme }) {
      const newUtilities = Object.entries(theme('colors')).reduce((acc, [name, value]) => {
        if (typeof value === 'object') {
          Object.entries(value).forEach(([key, color]) => {
            acc[`.fill-${name}${key === 'DEFAULT' ? '' : `-${key}`}`] = { fill: color };
            acc[`.stroke-${name}${key === 'DEFAULT' ? '' : `-${key}`}`] = { stroke: color };
          });
        }
        return acc;
      }, {});
      addUtilities(newUtilities, ['responsive', 'hover', 'dark']);
    },
  ],
}