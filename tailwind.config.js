/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/shared/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: "#020202",
        green: "#13242C",
        slate: "#F1F1F1",
        gray: {
          50: "#383838",
          100: "#797979",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        "4xl": "32px"
      },
      animation: {
        'action-arrow': 'action-arrow 1.5s ease-in infinite',
      },
      keyframes: {
        "action-arrow": {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(0.12em, -0.12em)' },
        }
      }
    },
  },
  plugins: [],
}
