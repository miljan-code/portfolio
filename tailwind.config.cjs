/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2DD4BF',
        primaryDark: '#12554c',
        bgcol: '#111827',
        bgcolLight: '#1e293b',
      },
      fontFamily: {
        open: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        light: '0px 1px 3px rgba(255,255,255,.1);',
        dark: '0px 1px 3px rgba(0,0,0,.1);',
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      ms: '1000px',
      md: '1080px',
      lg: '1150px',
      xl: '1700px',
    },
  },
  plugins: [],
};
