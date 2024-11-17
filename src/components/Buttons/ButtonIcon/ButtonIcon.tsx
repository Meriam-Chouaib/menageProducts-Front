import { Button } from '@mui/material'
import React from 'react'
import { ReactNode } from 'react'
import { ButtonIconProps } from './ButtonIcon.types'

const ButtonIcon = ({ icon, onClick }: ButtonIconProps) => {
  return (
    <Button sx={{}} onClick={onClick}>
      {icon}
    </Button>
  )
}

export default ButtonIcon
