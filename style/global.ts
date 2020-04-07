import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.font.family.body};
    font-size: 25px;
    letter-spacing: 0.1em;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
  }

  h1, h2, h3, h4, h5,
  .h1, .h2, .h3, .h4, .h5 {
    font-family: ${({ theme }) => theme.font.family.heading};
  }
`

export { GlobalStyle }
