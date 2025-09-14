/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          500: '#FF6B35', // A vibrant orange for primary actions
          600: '#ea580c',
        },
        'secondary': {
          500: '#2E4057', // A deep blue for accents and backgrounds
          900: '#1a202c', // Even darker blue for cards and surfaces
        },
        'accent': {
          400: '#FFE66D', // A bright yellow for highlights
        },
        'background': '#111827', // A dark gray for the main background
        'surface': '#1f2937', // A slightly lighter gray for cards and panels
        'text-primary': '#F9FAFB', // Off-white for primary text
        'text-secondary': '#D1D5DB', // A softer gray for secondary text
      },
      fontFamily: {
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

