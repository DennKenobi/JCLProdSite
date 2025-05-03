/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'labs-dark': '#07120A',
        'labs-green': '#24D441',
        'labs-text': '#E1E3E3',
        'cyber-dark': '#0A0F1F',
        'cyber-blue': '#00C3FF',
        'labs-muted': '#9CA3AF',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'tech-pattern': "url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};