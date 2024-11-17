import { Stack, Typography } from '@mui/material'
import { AddButtonProps } from './AddButton.type'
import { ButtonStyled, StackButton } from './AddButton.style'

function AddButton({ label, onClick }: AddButtonProps) {
  return (
    <ButtonStyled color='secondary' onClick={onClick}>
      {label}
    </ButtonStyled>
  )
}

export default AddButton
