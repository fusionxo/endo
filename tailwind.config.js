module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // Optional, supports dark mode toggling
  theme: {
    extend: {
      colors: {
        'primary': '#f7ad32',         // Main accent orange/yellow
        'primary-dark': '#a85611',    // Deep orange for hover
        'bg-main': '#181818',         // Almost black background
        'bg-card': '#232323',         // Card backgrounds (very dark gray)
        'surface':  '#232323',        // Use throughout for panels/cards
        'text-main': '#fff',
        'text-secondary': '#fcfcfc',
        'text-muted': '#B2B2B2',
      },
    },
  },
  plugins: [],
}
