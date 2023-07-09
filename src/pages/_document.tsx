import { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export function getInitialProps({ renderPage }: { renderPage: any }) {
  const sheet = new ServerStyleSheet()
  const page = renderPage(
    (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
  )
  const styleTags = sheet.getStyleElement()
  return { ...page, styleTags }
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
