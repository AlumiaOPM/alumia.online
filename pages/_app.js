import '../styles/globals.css';
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F15A22'
    },
    secondary: {
      main: '#F5F1F9'
    }
  },
  typography: {
    fontFamily: [
      'Hammersmith One', 
      'sans-serif'
    ],
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
