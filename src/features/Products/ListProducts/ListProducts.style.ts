import { Stack, styled } from '@mui/material'

export const StackStyled = styled(Stack)(
  ({ theme }) =>
    ({ justifyContent }: { justifyContent?: string }) => ({
      color: theme.palette.primary.main,

      display: 'flex',
      justifyContent: justifyContent ? justifyContent : 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row',
      padding: '20px 0px',
      flexWrap: 'wrap',
      gap: '20px',
    })
)
