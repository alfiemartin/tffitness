import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        red: {
          DEFAULT: '#ED1C25',
          50: '#FAC6C8',
          100: '#F9B3B6',
          200: '#F68D92',
          300: '#F3686E',
          400: '#F04249',
          500: '#ED1C25',
          600: '#C20F17',
          700: '#8E0B11',
          800: '#5A070B',
          900: '#260304',
          950: '#0C0101'
        },
      },
    },
  },
  plugins: [],
}
export default config
