import { CardItemProps } from './CardItem.type'
import { Stack, Typography } from '@mui/material'
import { CardImage, Icon, StackButtons, StackItem } from './CardItem.style'
import ButtonIcon from '../Buttons/ButtonIcon/ButtonIcon'
import IconEdit from '../../assets/icons/iconEdit.png'
import IconDelete from '../../assets/icons/iconDelete.png'
import { useAppSelector } from '../../redux/hooks'
import { selectUserId } from '../../redux/slices/auth.slice'
import { Carousel } from 'components/Carousel/Carousel'

const CardItem = ({
  name,
  price,
  quantity,
  category,
  userId,
  images,
  onDelete,
  onEdit,
}: CardItemProps) => {
  const userIdConnected = useAppSelector(selectUserId)
  return (
    <StackItem>
      <Typography variant='h2' color='secondary'>
        {name}
      </Typography>
      <Typography variant='h3' color='secondary'>
        Price: {price}
      </Typography>
      <Typography variant='h3' color='secondary'>
        Quantity: {quantity}
      </Typography>
      <Typography variant='h3' color='secondary'>
        Category: {category}
      </Typography>
      <>
        <Carousel images={images} />
      </>

      {userIdConnected === userId && (
        <StackButtons>
          <ButtonIcon icon={<Icon src={IconEdit} />} onClick={onEdit} />
          <ButtonIcon icon={<Icon src={IconDelete} />} onClick={onDelete} />
        </StackButtons>
      )}
    </StackItem>
  )
}

export default CardItem
