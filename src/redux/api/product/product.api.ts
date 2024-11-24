import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CONFIG } from '../../../config/config'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${CONFIG.BASE_URL_API}products`,
  }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) =>
        `/?page=${Number(params.page)}&rowsPerPage=${params.rowsPerPage}`,

      providesTags: ['Products'],
    }),
    getProductById: builder.query({
      query: (id: number) => `/${id}`,
    }),
    getProductsByKeyword: builder.query({
      query: (keyword: string) => `/search/${keyword}`,
      providesTags: ['Products'],
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: '/',
        method: 'POST',
        body: newProduct,
      }),
      invalidatesTags: ['Products'],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `?id=${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Products'],
    }),
    deleteProduct: builder.mutation({
      query: (id: number) => ({
        url: `?id=${id}`,
        method: 'DELETE',
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
