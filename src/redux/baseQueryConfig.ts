import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CONFIG } from '../config/config'
import { setTokenToHeaders } from '../utils/setTokenToHeaders'

interface ApiArgs {
  url: string
  method?: string
  body?: any
  headers?: Headers | Record<string, string>
  requiresAuth?: boolean
}

export const apiBaseQuery = (
  prefix?: string
): BaseQueryFn<ApiArgs, unknown, unknown> => {
  return async (args, api, extraOptions) => {
    const { requiresAuth, headers, ...restArgs } = args

    const normalizedHeaders =
      headers instanceof Headers ? headers : new Headers(headers)

    const updatedHeaders = requiresAuth
      ? setTokenToHeaders(normalizedHeaders)
      : normalizedHeaders

    const baseQuery = fetchBaseQuery({
      baseUrl: `${CONFIG.BASE_URL_API}${prefix}`,
    })

    return baseQuery(
      { ...restArgs, headers: updatedHeaders },
      api,
      extraOptions
    )
  }
}
