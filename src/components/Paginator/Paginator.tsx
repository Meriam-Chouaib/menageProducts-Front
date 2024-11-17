import React from 'react'
import { StackStyled } from '../../features/Products/ListProducts/ListProducts.style'
import { Pagination } from '@mui/material'

const Paginator = ({
  nbPages,
  onChange,
}: {
  nbPages: number
  onChange:
    | ((event: React.ChangeEvent<unknown>, page: number) => void)
    | undefined
}) => {
  return (
    <StackStyled justifyContent={'center'}>
      <Pagination count={nbPages} color='primary' onChange={onChange} />
    </StackStyled>
  )
}

export default Paginator
