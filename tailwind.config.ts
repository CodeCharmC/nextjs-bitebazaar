import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 3s ease infinite',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
    },
    keyframes: {
      text: {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      },
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
