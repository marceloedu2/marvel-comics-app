import React from 'react'
import { AppProps } from 'next/app'
import router from 'next/router'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import AppProvider from '@/hooks'
import Nprogress from 'nprogress'

router.events.on('routeChangeStart', () => {
  Nprogress.start()

  return false
})
router.events.on('routeChangeComplete', () => Nprogress.done())
router.events.on('routeChangeError', () => Nprogress.done())

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Marvel Comics</title>
        <link rel="icon" href="/img/marvel.png" />
        <link rel="shortcut" href="/img/marvel.png" />
        <link rel="apple-touch-icon" href="/img/marvel.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" type="text/css" href="/css/nprogress.css" />
        <link rel="stylesheet" type="text/css" href="/css/slick.min.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/slick-theme.min.css"
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
