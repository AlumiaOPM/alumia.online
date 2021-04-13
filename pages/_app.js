import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core';

import LGPDDrawer from '../components/LGPDDrawer';

import '../styles/globals.css';

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
    p: {
      fontFamily: 'Roboto',
    },
    fontFamily: [
      'Josefin Sans',
      'Roboto',
      'sans-serif'
    ].join(','),
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <LGPDDrawer />
    </ThemeProvider>
  )
}

export default MyApp
