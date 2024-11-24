/* eslint-disable @typescript-eslint/no-explicit-any */
import aes from 'crypto-js/aes'
import { CONFIG } from '../../config/config'

export const encryptData = (data: any) => {
  const encryptedData = aes
    .encrypt(JSON.stringify(data), CONFIG.APP_SECRET_KEY)
    .toString()
  return encryptedData
}
