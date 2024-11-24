import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './api/product/product.api'
import { authApi } from './api/auth/auth.api'
import { userSlice } from './slices/auth.slice'
import userReducer from './slices/auth.slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    userSlice: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
