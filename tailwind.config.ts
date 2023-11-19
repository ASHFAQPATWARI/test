import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'light-gray': 'var(--light-gray)',
      white: 'var(--white)',
      yellow: 'var(--yellow)',
      'yellow-dark': 'var(--yellow-dark)',
      lavendar: 'var(--lavendar)',
      primary: {
        50: 'var(--primary-50)',
        100: 'var(--primary-100)',
        200: 'var(--primary-200)',
        300: 'var(--primary-300)',
        400: 'var(--primary-400)',
        500: 'var(--primary-500)',
        600: 'var(--primary-600)',
        700: 'var(--primary-700)',
        800: 'var(--primary-800)',
        900: 'var(--primary-900)',
        DEFAULT: 'var(--primary)',
      },
      secondary: {
        50: 'var(--secondary-50)',
        100: 'var(--secondary-100)',
        200: 'var(--secondary-200)',
        300: 'var(--secondary-300)',
        400: 'var(--secondary-400)',
        500: 'var(--secondary-500)',
        600: 'var(--secondary-600)',
        700: 'var(--secondary-700)',
        800: 'var(--secondary-800)',
        900: 'var(--secondary-900)',
        DEFAULT: 'var(--secondary)',
      },
      neutral: {
        50: 'var(--neutral-50)',
        100: 'var(--neutral-100)',
        200: 'var(--neutral-200)',
        300: 'var(--neutral-300)',
        400: 'var(--neutral-400)',
        500: 'var(--neutral-500)',
        600: 'var(--neutral-600)',
        700: 'var(--neutral-700)',
        800: 'var(--neutral-800)',
        900: 'var(--neutral-900)',
        DEFAULT: 'var(--neutral)',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-primary)', 'var(--font-secondary)'],
      },
      boxShadow: {
        card: '0px 0px 8px 5px rgba(0, 0, 0, 0.04)',
        container: '0px 0px 10px 4px rgba(0, 0, 0, 0.04)',
        'card-footer': '4px 0px 10px 0px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
export default config;
