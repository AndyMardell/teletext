import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      family: {
        body: string
        heading: string
        subheading: string
      }
      size: {
        massive: string
        large: string
        regular: string
      }
    }
    colors: any
  }
}
