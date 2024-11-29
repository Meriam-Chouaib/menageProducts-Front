import { createApi } from '@reduxjs/toolkit/query/react'
import { apiBaseQuery } from '../../../redux/baseQueryConfig'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: apiBaseQuery('products'),

  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => {
        return {
          url: `/?page=${Number(params.page)}&rowsPerPage=${
            params.rowsPerPage
          }`,
          requiresAuth: false,
        }
      },
      providesTags: ['Products'],
    }),
    getProductById: builder.query({
      query: (id: number) => {
        return {
          url: `/${id}`,
          requiresAuth: false,
        }
      },
    }),
    getProductsByKeyword: builder.query({
      query: (keyword: string) => {
        return {
          url: `/search/${keyword}`,
          requiresAuth: false,
        }
      },
      providesTags: ['Products'],
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: '/',
        method: 'POST',
        body: newProduct,
        requiresAuth: true,
      }),
      invalidatesTags: ['Products'],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `?id=${id}`,
        method: 'PUT',
        body: data,
        requiresAuth: true,
      }),
      invalidatesTags: ['Products'],
    }),
    deleteProduct: builder.mutation({
      query: (id: number) => ({
        url: `?id=${id}`,
        method: 'DELETE',
        requiresAuth: true,
      }),
      invalidatesTags: ['Products'],
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductsByKeywordQuery,
} = productApi
