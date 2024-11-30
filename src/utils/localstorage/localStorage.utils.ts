/* eslint-disable @typescript-eslint/no-explicit-any */

import { encryptData } from './encrypt'
import { deCryptData } from './decrypt'
import { CONSTANTS } from '../../config/constants/constants'

// Extract data from local storage buy a key
export const getPersistData = (key: string, parse: boolean) => {
  try {
    const value = localStorage.getItem(key)
    if (value) {
      const valueDecrypted = deCryptData(value)
      return parse
        ? JSON.parse(valueDecrypted || CONSTANTS.EmptyJsonString)
        : valueDecrypted
    }
  } catch (error) {
    return undefined
  }
}

export const persistData = (key: string, data: any) => {
  if (typeof data === CONSTANTS.Undefined) {
    return
  }
  const dataString: string = encryptData(data)
  localStorage.setItem(key, dataString)
}
export const updatePersistedData = (key: string, updateData: any) => {
  const existingData = getPersistData(key, true)
  const newData = { ...existingData, ...updateData }
  persistData(key, newData)
}
