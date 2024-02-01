import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      'black': '#000',
      'white': '#fff',
      'error': '#d7373d',
      'discount': '#d7373d',
      'input_border': '#c8c6c5',
      'product_card_text': '#696969',
      'text_strikeout': '#696969',
      'lightGray': '#dbd8d6'
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
export default config


