/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6', // blue
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#f1f5f9',
          foreground: '#0f172a',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#0f172a',
        },
        muted: {
          DEFAULT: '#f1f5f9',
          foreground: '#64748b',
        },
        ring: '#3b82f6',
      },
      backgroundImage: {
        'gradient-blue-purple': 'linear-gradient(to right, #3b82f6, #8b5cf6)',
      },
    },
  },
  plugins: [],
}