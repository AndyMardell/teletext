import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ContextProvider } from '@/context'
import { theme } from '@/styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </ThemeProvider>
  )
}
