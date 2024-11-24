import { Box, styled } from '@mui/material'
export const BoxStyled = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  border: '2px solid #ccc',
  backgroundColor: theme.palette.background.paper,
  padding: '40px 0px',
  borderRadius: 10,
  [theme.breakpoints.down('md')]: {
    width: 400,
  },
  [theme.breakpoints.down('sm')]: {
    width: 350,
  },
}))
