/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
         fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      
       animation: {
        sparkle: 'sparkle 1.5s linear infinite',
      },
      keyframes: {
        sparkle: {
          '0%, 34%, 71%, 100%': { transform: 'scale(1)' },
          '17%': { transform: 'scale(1.2)' },
          '49%': { transform: 'scale(1.2)' },
          '83%': { transform: 'scale(1.2)' },
        },
      },


    },
  },
  plugins: [],
}