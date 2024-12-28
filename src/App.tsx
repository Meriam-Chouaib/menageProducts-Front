import { ThemeProvider } from '@mui/material/styles'

import theme from './theme/theme'
import Router from './routes/Router'
import generateTheme from './theme/theme'

function App() {
  const theme = generateTheme()

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Router />
      </div>
    </ThemeProvider>
  )
}

export default App
