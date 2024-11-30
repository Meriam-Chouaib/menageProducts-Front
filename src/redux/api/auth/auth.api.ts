import { createApi } from '@reduxjs/toolkit/query/react' // Ensure the 'react' module is used
import { Isignin, IUser } from './auth.api.type'
import { RouteIdEnum } from '../../../config/enums/routes.enum'
import { apiBaseQuery } from '../../baseQueryConfig'
import { decodeSigninResponse } from './auth.decoders'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: apiBaseQuery('auth'),
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: ({ email, password }: Isignin) => ({
        url: RouteIdEnum.SIGNIN,
        method: 'POST',
        body: { email, password },
      }),
      transformResponse: decodeSigninResponse,
    }),
    signup: builder.mutation({
      query: (user: IUser) => ({
        url: RouteIdEnum.SIGNUP,
        method: 'POST',
        body: user,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: RouteIdEnum.LOGOUT,
        method: 'POST',
      }),
    }),
  }),
})

export const { useSigninMutation, useSignupMutation, useLogoutMutation } =
  authApi
