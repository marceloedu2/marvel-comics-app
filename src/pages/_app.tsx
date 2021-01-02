import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import AppProvider from '@/hooks'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Marvel Comics</title>
        <link rel="icon" href="/img/marvel.png" />
        <link rel="shortcut" href="/img/marvel.png" />
        <link rel="apple-touch-icon" href="/img/marvel.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJs And Styled Components"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Component {...pageProps} />
          <GlobalStyles />
        </AppProvider>
      </ThemeProvider>
    </>
  )
}

export default App
