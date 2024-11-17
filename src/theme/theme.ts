import { createTheme } from '@mui/material/styles'
import palette from './palette'

const generateTheme = () => {
  const theme = createTheme(palette)

  return theme
}

export default generateTheme
