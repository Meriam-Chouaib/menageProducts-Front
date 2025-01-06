import { Paginator } from './../../types/interfaces/common.interfaces'
import { useState, useEffect } from 'react'
import { IProduct, Product } from '../../types/models/Product'
import { useDebounce } from './useDebounce'
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductsByKeywordQuery,
  useGetProductsQuery,
  useUpdateProductMutation,
} from '../../redux/api/product/product.api'

export const useProducts = (search: string, paginator: Paginator) => {
  const [productsToShow, setProductsToShow] = useState<Product[]>([])
  const debouncedSearch = useDebounce(search, 800)

  const { data: productsResponse, isLoading: isLoadingProducts } =
    useGetProductsQuery(paginator)

  const { data: productsSearched, isLoading: isSearching } =
    useGetProductsByKeywordQuery(debouncedSearch, {
      skip: !debouncedSearch,
    })

  const [updateProduct] = useUpdateProductMutation()
  const [deleteProduct] = useDeleteProductMutation()
  const [createProduct] = useCreateProductMutation()

  useEffect(() => {
    if (debouncedSearch && productsSearched) {
      setProductsToShow(productsSearched)
    } else if (productsResponse && productsResponse != undefined) {
      setProductsToShow(productsResponse.products)
    }
  }, [debouncedSearch, productsSearched, productsResponse])

  const handleDelete = async (id: number) => {
    console.log('🚀 ~ handleDelete ~ id:', id)
    try {
      const result = await deleteProduct(id).unwrap()
      console.log('result:', result)
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }

  const handleUpdate = async (product: FormData, selectedProductId: number) => {
    try {
      await updateProduct({ id: selectedProductId, ...product }).unwrap()
    } catch (error) {
      console.error('Error updating product:', error)
    }
  }

  const handleCreate = async (product: FormData) => {
    try {
      await createProduct(product).unwrap()
    } catch (error) {
      console.error('Error creating product:', error)
    }
  }

  return {
    productsToShow,
    isLoading: isLoadingProducts || isSearching,
    handleDelete,
    handleUpdate,
    handleCreate,
    productsResponse,
  }
}
