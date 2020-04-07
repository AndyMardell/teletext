import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  h1 {
    opacity: 0.5;
  }

  body {
    background-color: ${({ theme }) => theme.colors.secondary};
    background-color: pink;
  }
`

export { GlobalStyle }
