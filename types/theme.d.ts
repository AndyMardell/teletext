import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      family: {
        body: string
        heading: string
      }
    }
    colors: {
      background: string
      primary: string
      secondary: string
      yellow: string
    }
  }
}
