import React from 'react'
import { Link, Typography } from '@mui/material'

const QuestionAuth = ({
  onClick,
  question,
  goTo,
  children,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  question: string
  goTo: string
  children: React.ReactNode
}) => {
  return (
    <>
      {children}
      <Typography variant='body2' sx={{ mt: 2, textAlign: 'center' }}>
        {question}
        <Link
          component='button'
          variant='body2'
          onClick={onClick}
          sx={(theme) => ({
            color: theme.palette.primary.dark,
            paddingX: 3,
            '&:hover': {
              color: theme.palette.primary.light,
            },
          })}
        >
          {goTo}
        </Link>
      </Typography>
    </>
  )
}

export default QuestionAuth
