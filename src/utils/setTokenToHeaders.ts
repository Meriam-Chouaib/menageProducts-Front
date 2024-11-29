import { getPersistData } from './localstorage/localStorage.utils'

export function setTokenToHeaders(headers: Headers): Headers {
  const token = localStorage.getItem('token')
  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }
  return headers
}
