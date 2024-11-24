import { Typography } from '@mui/material'
import ListProducts from '../../features/Products/ListProducts/ListProducts'

const Products = () => {
  return (
    <>
      <Typography variant='h1' textAlign={'center'} paddingY={5}>
        Product List
      </Typography>
      <ListProducts />
    </>
  )
}

export default Products
