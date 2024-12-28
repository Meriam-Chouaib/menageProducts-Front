import aes from 'crypto-js/aes'
import { enc } from 'crypto-js'
import { clearLocalStorage } from './clearLoalStorage'
import { CONFIG } from '../../config/config'
export const deCryptData = (encryptedData: string) => {
  try {
    const decryptedData = aes
      .decrypt(
        encryptedData === null ? '' : encryptedData,
        CONFIG.APP_SECRET_KEY ||
          '3c6e0b8a9c15224a8228b9a98ca1531d48f4a9b8c6e1a8f5c8b9a1234567890b'
      )
      .toString(enc.Utf8)
    return decryptedData
  } catch (error) {
    clearLocalStorage()
  }
}
