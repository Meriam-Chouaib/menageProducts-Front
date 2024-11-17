import { ButtonProps } from '@mui/material'
import { ReactNode } from 'react'

export interface ButtonIconProps extends ButtonProps {
  icon: ReactNode
  onClick?: () => void
}
