export interface CardItemProps {
  id?: number
  name: string
  category: string
  quantity: number
  price: number
  key: string
  onEdit?: (() => void) | undefined
  onDelete?: (() => void) | undefined
}
