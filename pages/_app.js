import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText}
  }
  html, body{
    min-height: 100vh;
  }
  #__next{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{(db.title)}</title>
        <meta property="og:title" content={(db.title)} key="title" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
