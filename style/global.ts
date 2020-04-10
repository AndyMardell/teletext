import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  @font-face {
    font-family: 'modeseven';
    src: url('/fonts/modeseven-l3n5-webfont.woff2') format('woff2'),
        url('/fonts/modeseven-l3n5-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'teletekst';
    src: url('/fonts/teletekst-8ex0-webfont.woff2') format('woff2'),
        url('/fonts/teletekst-8ex0-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
 
  @font-face {
    font-family: 'shpinscher';
    src: url('/fonts/shpinscher-regular-webfont.woff2') format('woff2'),
         url('/fonts/shpinscher-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: ${({ theme }) => theme.font.family.body};
    font-size:  ${({ theme }) => theme.font.size.regular};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: 0.1em;
  }

  h1, h2, h3, h4, h5,
  .h1, .h2, .h3, .h4, .h5 {
    font-family: ${({ theme }) => theme.font.family.heading};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export { GlobalStyle }
