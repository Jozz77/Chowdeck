/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    screens: {
      'xxl': '1350px',
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'sm': '640px',
      'ssm': '420px',
      'lsm': '320px'
    },
    colors: {
      'Primary': '#0C513F',
      'Secondary': '#FFC501',
      "Green": '#0C513F',
      // 'OtherWhite': '#F8F8F8',
      // 'FooterGray': '#F0F0F0',
      // 'Black': '#222222',
      // "Gray": "#4E4E4E",
      // 'transparentDark': 'hsla(0, 0%, 13%, 0.8)',
      // 'borderHash': '#BABABA',
      // 'borderCartActions': '#999999'
    },
    fontFamily: {
      plusJakarta: ['Plus Jakarta Sans', 'sans-serif'],
      // raleway: ['Raleway', 'sans-serif'],
      // clashGrotesk: ['ClashGrotesk'],
      // outfit: ['Outfit', 'sans-serif'],
      // inter: ['Inter', 'sans-serif'],
    },
    boxShadow: {
      'shawdowCart': '0px 1px 2px 0px #1018280D'
    }
  },
};
export const plugins = []; 