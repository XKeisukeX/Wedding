import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
      extend: {
        colors: {
          "color-primary": "#90deb8",
          "color-secondary": "#7286a0",
          "color-wedding": "#fee7aa",
        }
      },
    container: {
        center: true,
        padding: {
          DEFAULT: "20px",
        md: "50px",
      }
    }
  },
  plugins: []
};