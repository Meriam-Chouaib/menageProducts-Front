/* eslint-disable @typescript-eslint/no-explicit-any */
import aes from 'crypto-js/aes'
import { CONFIG } from '../../config/config'

export const encryptData = (data: any) => {
  const encryptedData = aes
    .encrypt(
      JSON.stringify(data),
      CONFIG.APP_SECRET_KEY ||
        '3c6e0b8a9c15224a8228b9a98ca1531d48f4a9b8c6e1a8f5c8b9a1234567890b'
    )
    .toString()
  return encryptedData
}
