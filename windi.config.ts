import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,

  plugins: [
    typography(),
  ],
  theme: {
    extend: {
      fontFamily: {
        Mitr: ["Mitr", "Arial", "sans"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        red: "#DF322A",
        navy: "##0C233F",
        streetLight: "##8DB4DA",
        purple: {
          400: "#6E459B",
          500: "#633E8B",
          600: "#5C3A87",
          700: "#52317C",
          900: "#391E67",
          "900p": "#240F46",
          "900++": "#1B0D31",
          "a400": "#7427D2",
          "textBox": "#3F2964",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.75,
              'fontWeight': '500',
              'textDecoration': 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
})
