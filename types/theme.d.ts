import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      family: {
        body: string
        heading: string
        subheading: string
      }
      lineHeight: number
      size: {
        base: {
          min: string
          max: string
        }
        massive: string
        large: string
      }
    }
    colors: any
  }
}
