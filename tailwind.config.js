/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        olive: {
          50:  '#f2f9f0',
          100: '#e1f2db',
          200: '#c4e5b8',
          300: '#9dd18a',
          400: '#72b85e',
          500: '#4e9c3d',
          600: '#3a7d2d',
          700: '#2f6325',
          800: '#284f1f',
          900: '#1e3d1a',
        },
      },
      fontFamily: {
        // Nunito = the thick round black font in the reference screenshot
        display: ['"Nunito"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}
