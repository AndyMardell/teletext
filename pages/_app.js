import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { ContextProvider } from '../context'
import { theme } from '../style'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </ThemeProvider>
    )
  }
}
