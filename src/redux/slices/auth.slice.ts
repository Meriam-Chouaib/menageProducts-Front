import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authApi } from '../api/auth/auth.api'
import { RootState } from '../store'
import { persistData } from '../../utils/localstorage/localStorage.utils'
import { CONSTANTS } from '../../config/constants/constants'
import { UserState } from './auth.type'

const initialState: UserState = {
  email: '',
  username: '',
  statut: 'OFFLINE',
  role: 'VISITOR',
  image: '',
  isLogged: false,
  isActive: false,
  phone: '',
  id: 0,
  isConnected: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signinUser(state, action: PayloadAction<UserState>) {
      return { ...state, ...action.payload, isLogged: true, isConnected: true }
    },
    signoutUser() {
      localStorage.removeItem('token')
      return { ...initialState }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.signin.matchFulfilled,
      (state, { payload }) => {
        const user = payload.user
        state.email = user.email
        state.username = user.username
        state.statut = user.statut
        state.role = user.role
        state.image = user.image
        state.isLogged = user.isLogged
        state.isActive = user.isActive
        state.phone = user.phone
        state.id = user.id
        state.isConnected = true
        persistData(CONSTANTS.TOKEN, payload.token)
      }
    )
  },
})
export const selectRole = (state: RootState) => state.user.role
export const selectIsActive = (state: RootState) => state.user.isActive
export const selectUsername = (state: RootState) => state.user.username
export const selectUserId = (state: RootState) => state.user.id
export const selectUser = (state: RootState) => state.user
export const selectIsConnected = (state: RootState) => state.user.isConnected

export const { signinUser, signoutUser } = userSlice.actions

export default userSlice.reducer
