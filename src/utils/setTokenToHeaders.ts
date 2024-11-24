import { getPersistData } from './localstorage/localStorage.utils'

export const setTokenToHeaders = (headers: Headers) => {
  const token = getPersistData('token', true)

  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }

  return headers
}
