// tailwind.config.js
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial':
          'radial-gradient(circle, rgba(64,121,143,1) 0%, rgba(21,61,34,1) 0%, rgba(99,95,138,1) 100%)',
      },
    },
    keyframes: {
      orbit: {
        '0%': { transform: 'rotate(0deg) translateX(40px) rotate(0deg)' },
        '100%': {
          transform: 'rotate(360deg) translateX(40px) rotate(-360deg)',
        },
      },
    },
    animation: {
      orbit: 'orbit 4s linear infinite',
    },
  },
  plugins: [],
};
