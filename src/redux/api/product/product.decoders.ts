import { Product } from 'types/models/Product'
import { convertIImageToFiles } from 'utils/helpers/convertImageToFile'

export const decodeGetProducts = async (
  dataServer: IserverResponse
): Promise<IDecodedResponse> => {
  const products = await Promise.all(
    dataServer.products.map(async (product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      category: product.category,
      description: product.description,
      userId: product.userId,
      images: await convertIImageToFiles(product.images), // Resolve the Promise
    }))
  )

  return {
    products,
    nbPages: dataServer.nbPages,
    currentPage: dataServer.currentPage,
  }
}
export interface IServerProduct {
  id: number
  name: string
  price: number
  quantity: number
  description: string
  userId: number
  category: string
  createdAt: string
  updatedAt: string
  images: IServerImage[]
}

export interface IServerImage {
  id: number
  url: string
  productId: number
}

interface IserverResponse {
  products: IServerProduct[]
  nbPages: number
  currentPage: number
}

interface IDecodedResponse {
  products: Product[]
  nbPages: number
  currentPage: number
}
