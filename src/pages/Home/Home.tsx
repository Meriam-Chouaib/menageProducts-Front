import { useGetProductsQuery } from '../../redux/api/product.api'
import { Typography } from '@mui/material'
import ListProducts from '../../features/Products/ListProducts/ListProducts'
import AddButton from '../../components/Buttons/AddButton/AddButton'

const Home = () => {
  return (
    <>
      <Typography variant='h1' textAlign={'center'} paddingY={5}>
        Product List
      </Typography>
      <ListProducts />
    </>
  )
}

export default Home
