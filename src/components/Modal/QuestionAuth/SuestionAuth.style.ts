import { Link, styled } from '@mui/material'

export const LinkStyled = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.main,
  paddingX: 3,
}))
