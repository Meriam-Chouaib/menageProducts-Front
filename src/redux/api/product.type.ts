import { Product } from '../../types/models/Product'

export interface ResponseProducts {
  products: Product[]
  nbPages: number
  currentPage: number
}
