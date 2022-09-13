/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#E5E5E5',
        backgroundButton: '#2CC3D5',
        colorTitle: '#56616E',
        colorSubTitle: '#607B99',
        dividerColor: '#D2DFE6'

      }
    }
  },
  plugins: []
}
