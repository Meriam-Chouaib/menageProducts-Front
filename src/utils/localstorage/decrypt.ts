import aes from 'crypto-js/aes'
import { enc } from 'crypto-js'
import { clearLocalStorage } from './clearLoalStorage'
import { CONFIG } from '../../config/config'
export const deCryptData = (encryptedData: string) => {
  try {
    const decryptedData = aes
      .decrypt(
        encryptedData === null ? '' : encryptedData,
        CONFIG.APP_SECRET_KEY
      )
      .toString(enc.Utf8)
    return decryptedData
  } catch (error) {
    clearLocalStorage()
  }
}
