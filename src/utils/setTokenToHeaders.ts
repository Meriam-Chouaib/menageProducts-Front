import { getPersistData } from './localstorage/localStorage.utils'

export function setTokenToHeaders(headers: Headers): Headers {
  const token = getPersistData('token', true)
  console.log('🚀 ~ setTokenToHeaders ~ token:', token)
  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }
  return headers
}
