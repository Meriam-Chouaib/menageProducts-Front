export interface Product {
  id?: number
  name: string
  price: number
  quantity: number
  category: string
  description: string
  userId: number
  images?: File[]
}
export interface IProduct {
  name: string
  price: number
  quantity: number
  category: string
  description: string
  images?: File[]
  userId: number
}
