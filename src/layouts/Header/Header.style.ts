import { Box, styled } from '@mui/material'
import { Link } from 'react-router-dom'

export const BoxHeader = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.dark,
  backgroundColor: theme.palette.primary.light,
  height: '50px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const LinkStyled = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.dark,
  textDecoration: 'none',
  fontFamily: 'arial',
  fontWeight: 500,
}))
