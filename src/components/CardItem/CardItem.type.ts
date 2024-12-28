import { IImage } from 'utils/helpers/convertImage.type'

export interface CardItemProps {
  id?: number
  name: string
  category: string
  quantity: number
  price: number
  userId: number
  images?: File[]
  onEdit?: (() => void) | undefined
  onDelete?: (() => void) | undefined
}
