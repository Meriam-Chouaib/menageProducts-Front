export interface Product {
  id?: number
  name: string
  price: number
  quantity: number
  category: string
  description: string
  userId: number
  images?: any
}
export interface IProduct {
  name: string
  price: number
  quantity: number
  category: string
  description: string
  images?: any
  userId: number
}
export interface IImage {
  url: string
}
