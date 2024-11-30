export interface CardItemProps {
  id?: number
  name: string
  category: string
  quantity: number
  price: number
  onEdit?: (() => void) | undefined
  onDelete?: (() => void) | undefined
}
