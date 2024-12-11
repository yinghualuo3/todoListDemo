/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
      },
      margin: {
        2: '2px',
        4: '4px',
        8: '8px',
        12: '12px',
        24: '24px',
      },
      padding: {
        12: '12px',
        24: '24px',
      },
      width: {
        8: '8px',
        10: '10px',
        12: '12px',
        24: '24px',
        32: '32px',
        36: '36px',
        48: '48px',
      },
      height: {
        8: '8px',
        10: '10px',
        12: '12px',
        24: '24px',
        32: '32px',
        36: '36px',
        48: '48px',
      },
      colors: {
        // 'light-blue': '#dde8fd', e4ebfc 
        'light-blue': '#d6e3fc',
        'thistle': '#eaecfa',
        'blue-500': '#3b82f6',
        'blue-400': '#59b2e3',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to bottom, #f0fbfe, #ffffff)',
      },
    },
  },
  plugins: [],
};