import { Box, styled } from '@mui/material'

export const BoxFooter = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  height: '50px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))
