import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  font: {
    family: {
      body: "'modeseven', Courier, Monaco, monospace",
      heading: "'teletekst', Courier, Monaco, monospace",
      subheading: "'shpinscher', Courier, Monaco, monospace",
    },
    size: {
      massive: '5.5em',
      large: '2.2em',
      regular: '25px',
    },
  },
  colors: {
    background: 'black',
    primary: 'white',
    secondary: 'magenta',

    white: '#FFFFFF',
    yellow: '#FFFF01',
    blue: '#0000FE',
    lightblue: '#74B7D4',
    green: '#26E22B',
    red: '#FF0000',
  },
}

export { theme }
