import { getPersistData } from './localstorage/localStorage.utils'

export function setTokenToHeaders(headers: Headers): Headers {
  const token = getPersistData('token', true)
  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }
  return headers
}
