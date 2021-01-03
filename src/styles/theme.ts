import { rgba } from 'polished'

const theme = {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.8rem'
  },
  font: {
    family: 'roboto, sans-serif',
    light: 400,
    normal: 500,
    bord: 700,
    sizes: {
      xxsmall: '1rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      xxxlarge: '4.2rem'
    }
  },
  colors: {
    Primary: '#9b2c2c',
    Default: '#000000',

    Background: '#121214',
    BackgroundLight: '#ffffff',

    Text: '#020306',
    TextLight: '#ffffff',

    Success: '#1cc88a',
    Info: '#36b9cc',
    Warning: '#f6c23e',
    Danger: '#e74a3b',
    Light: '#f8f9fc',
    Dark: '#433a3a',

    Shark: '#202024',
    // marvel Palette
    Cinnabar: '#e23636',
    Back: '#000000',
    Emperor: '#504a4a',
    Danube: '#518cca',
    Jaffa: '#f78f3f',

    Shadow: rgba(0, 0, 0, 0.2)
  },
  spacings: {
    xxxsmall: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysONTop: 50
  }
}

export default theme
