/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}', './public/index.html',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'mauve': '#EBC2FF',
      'lavender': '#A385E5',
      'glaucous': '#5D7BD5',
      'iceberg': '#73AED3',
      'middle': '#75DBCD',
      'alice': '#F2F7FF',
    },
  },
  plugins: [],
}
