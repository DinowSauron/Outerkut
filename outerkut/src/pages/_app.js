import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { OuterkutStyles } from "../lib/outerkutCommons"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    background: linear-gradient(0deg, #dab49a 50%, #ffe2cf 100%);
    font-family: sans-serif;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img, Image {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${OuterkutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
