import { ThemeOptions } from '@mui/material/styles'
import typography from './typography'
import breakpoints from './breakpoints'

const palette: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#f5f5f5',
      dark: '#36054a',
      light: '#7ED7C1',
      contrastText: '#110835',
    },
    secondary: {
      main: '#36054a',
      light: '#9EE6CF',
      dark: '#4BA2AC',
      contrastText: '#7bbfc3',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#b5b8b9',
      400: '#bdbdbd',
      500: '#9e9e9e',
    },
    error: {
      main: '#e02f2f',
    },
    success: {
      main: '#23810a',
    },

    background: {
      paper: '#FFFFFF',
      default: '#FFFFFF',
    },
    text: {
      primary: '#110835',
      secondary: '#110835',
    },
  },
  typography,
  breakpoints,
}

export default palette
