/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#7C9A7E',
          dark: '#4A7C59',
          light: '#A8C5AA',
          pale: '#D4E6D5',
          faint: '#EDF4EE',
        },
        cream: {
          DEFAULT: '#F5F0E8',
          dark: '#EDE8DC',
          deeper: '#E3DDD0',
        },
        charcoal: {
          DEFAULT: '#2C2C2C',
          light: '#3D3D3D',
          muted: '#6B6B6B',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        dm: ['"DM Sans"', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(circle, rgba(124,154,126,0.2) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '28px 28px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px rgba(44, 44, 44, 0.08)',
        'card-hover': '0 12px 40px rgba(44, 44, 44, 0.14)',
        'sage': '0 8px 32px rgba(74, 124, 89, 0.2)',
      },
    },
  },
  plugins: [],
};

