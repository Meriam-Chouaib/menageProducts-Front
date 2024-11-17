import { Stack, styled } from '@mui/material'

export const StackItem = styled(Stack)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.primary.main,
  padding: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '180px',
  borderRadius: '30px 0px 30px 0px',
}))
export const StackButtons = styled(Stack)(({ theme }) => ({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  padding: '20px 0px',
}))
export const Icon = styled('img')(({ theme }) => ({
  height: '20px',
  width: 'auto',
}))
