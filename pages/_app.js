import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GoogleFonts } from 'use-google-fonts'
import { theme, GlobalStyle } from '../style'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GoogleFonts
          fonts={[
            ['Press Start 2P', '400'],
            ['Ubuntu Mono', '400,700'],
          ]}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
