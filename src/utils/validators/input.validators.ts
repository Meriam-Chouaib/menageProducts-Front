export const isString = (word: unknown) => {
  return typeof word === 'string' || word instanceof String
}
export const isNumber = (value: unknown): boolean => {
  return typeof value === 'number' && !isNaN(value)
}
