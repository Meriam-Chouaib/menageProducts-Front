import { Button, Stack } from '@mui/material'
import { styled } from '@mui/system'

export const StackButton = styled(Stack)({
  cursor: 'pointer',
  paddingTop: 0,
})
export const ButtonStyled = styled(Button)(({ theme }) => ({
  cursor: 'pointer',
  margin: '20px',
  backgroundColor: theme.palette.secondary.light,
}))
