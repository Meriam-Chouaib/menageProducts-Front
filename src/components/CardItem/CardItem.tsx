import { CardItemProps } from './CardItem.type'
import { Stack, Typography } from '@mui/material'
import { Icon, StackButtons, StackItem } from './CardItem.style'
import ButtonIcon from '../Buttons/ButtonIcon/ButtonIcon'
import IconEdit from '../../assets/icons/iconEdit.png'
import IconDelete from '../../assets/icons/iconDelete.png'

const CardItem = ({
  name,
  price,
  quantity,
  category,
  onDelete,
  onEdit,
}: CardItemProps) => {
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
      <StackButtons>
        <ButtonIcon icon={<Icon src={IconEdit} />} onClick={onEdit} />
        <ButtonIcon icon={<Icon src={IconDelete} />} onClick={onDelete} />
      </StackButtons>
    </StackItem>
  )
}

export default CardItem
