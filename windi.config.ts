import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

const makeSafe = (prefix: string, values: string | string[]): string => {
  let valuesArray: string[]
  if (typeof values === 'string')
    valuesArray = values.split(' ')
  else valuesArray = values

  return valuesArray.map(each => `${prefix}-${each}`).join(' ')
}

const safeText = 'text-white text-Brown text-grey-light'
const safeBorder = 'border-blue-b100 border-[#AACAE9] border-[#FFCECB] border-[#98521E] border-[#F3F3F3]'
const safeBg = makeSafe('bg', 'textbox-Other textbox-Pat textbox-Gera textbox-Vichagarn textbox-SilpVat footer-SilpVat footer-Pat footer-default footer-Other footer-Gera footer-Vichagarn')
const safePlaceholder = makeSafe('placeholder', 'blue-b100 [#FFCECB] LightBrown grey-light+')

export default defineConfig({
  safelist: `${safeBg} ${safeText} ${safeBorder} ${safePlaceholder}`,
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,

  plugins: [
    typography(),
  ],
  theme: {
    extend: {
      fontFamily: {
        Mitr: ['Mitr', 'Arial', 'sans'],
        Roboto: ['Roboto', 'sans-serif'],
        Retro: ['Retro Gaming', 'Mitr', 'Arial', 'sans'],
      },
      colors: {
        Yellow: '#F4AF23',
        red: '#DF322A',
        Red: '#DF322A',
        navy: '#0C233F',
        Navy: '#0C233F',
        streetLight: '#8DB4DA',
        StreetLight: '#8DB4DA',
        Brown: '#5B3112',
        LightBrown: '#98521E',
        brown: {
          primary: '#5B3112',
          light: '#98521E',
        },
        MainBlack: 'linear-gradient(137.77deg, #130000 6.66%, #343434 50.91%, #130000 95.54%)',
        buttonLogin: 'linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)), linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, #242323 26.04%, #4B4A4A 50%, #242323 75%, rgba(0, 0, 0, 0.8) 100%)',
        purple: {
          '400': '#6E459B',
          '500': '#633E8B',
          '600': '#5C3A87',
          '700': '#52317C',
          '900': '#391E67',
          'a100': '#AB8ACE',
          '900+': '#240F46',
          '900++': '#1B0D31',
          '900+++': '#100423',
          'a400': '#7427D2',
        },
        gradient: {
          1: 'linear-gradient(103.46deg, #492B75 12.75%, #DE3228 94.12%)',
          3: 'linear-gradient(103.46deg, #DE3228 12.75%, #492B75 94.12%)',
        },
        blue: {
          b100: '#AACAE9',
        },
        background: {
          DarkPurple: '#1F0A41',
        },
        grey: {
          'primary': '#BBBBBB',
          'light': '#F5F5F5',
          'light+': '#F3F3F3',
        },
        yellow: {
          primary: '#F4AF23',
          300: '#F4CF58',
          400: '#F4C437',
          500: '#F5BB26',
          700: '#F29A22',
          800: '#F38C23',
          900: '#F16A1F',
        },
        Sport: {
          SteelPlate: 'linear-gradient(40.99deg, #606060 2.59%, #CDCDCD 24.51%, #A0A0A0 28.53%, #5A5A5A 46.62%, #9E9E9E 73.76%, #C8C8C8 78.29%, #606060 99.1%)',
          Crimson: 'linear-gradient(148.99deg, #770000 0%, #C80000 34.94%, #770000 69.5%)',
          crimson2: 'linear-gradient(138.79deg, #770000 52.98%, #9E0000 80.65%, #770000 100%)',
          Crimson2: 'linear-gradient(138.79deg, #770000 52.98%, #9E0000 80.65%, #770000 100%)',
        },
        Steel: {
          900: '#2F4C7A',
          800: '#516E8E',
          700: '#5D81A3',
          600: '#6791B4',
          500: '#709FC3',
          400: '#7EAAC5',
          300: '#8ADDF8',
          1000: '#2D3656',
        },
        textbox: {
          SilpVat: 'rgba(31, 10, 65, 0.75)',
          Vichagarn: 'rgba(12, 35, 63, 0.5)',
          Gera: 'rgba(223, 49, 42, 0.25)',
          Pat: 'rgba(254, 184, 41, 0.5)',
          Other: 'rgba(112, 159, 195, 0.25)',
        },
        footer: {
          default: '#0C0C0C',
          SilpVat: '#1B0D31',
          Vichagarn: '#0C233F',
          Gera: '#560000',
          Pat: '#914D1A',
          Other: '#000D39',
        },
        darkPurple: '#1F0A41',
      },
      backgroundImage: {
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
