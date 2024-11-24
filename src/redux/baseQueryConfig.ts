import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CONFIG } from '../config/config'
import { setTokenToHeaders } from '../utils/setTokenToHeaders'

export const apiBaseQuery = fetchBaseQuery({
  baseUrl: `${CONFIG.BASE_URL_API}auth`,
  prepareHeaders: (headers: Headers) => {
    return setTokenToHeaders(headers)
  },
})
