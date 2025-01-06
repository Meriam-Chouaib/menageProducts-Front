import { Box, Stack, styled } from '@mui/material'

export const ImgSlider = styled('img')(() => ({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
}))
export const BoxImages = styled(Box)(({ theme }) => ({
  boxShadow: `1px 1px 8px -2.5px ${theme.palette.grey[700]}`,

  height: '20rem',

  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.down(850)]: {
    height: '15rem',
  },
  [theme.breakpoints.down(700)]: {
    height: '10rem',
  },
}))
export const StackCarousel = styled(Stack)(() => ({
  width: '100%',
  margin: 'auto',
}))
