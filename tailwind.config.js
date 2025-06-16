// @ts-check
/** @type {import("tailwindcss").Config } */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        helveticaNeue: ['var(--font-helvetica-neue)'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '25%': { opacity: 0 },
          '50%': { opacity: 0.7 },
          '75%': { opacity: 0.3 },
        },
      },
      animation: {
        blink: 'blink 3s infinite',
      },
    },
  },
}
