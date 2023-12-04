import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '700px': '700px',
      },
      fontFamily: {
        'lobster': ['Lobster', 'cursive'],
      },
      outline: {
        none: 'none',
      },
      borderColor: {
        'custom-gray': 'rgb(96, 92, 91)',
      },
      colors: {
        customGray: 'rgb(88, 98, 96)',
      },
      boxShadow: {
        customShadow: '0px 4px 24px 0px rgba(96, 92, 91, 0.12)',
      },
    },
  },
  plugins: [],
}
export default config
