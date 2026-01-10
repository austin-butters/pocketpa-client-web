export const ENVIRONMENT: 'production' | 'development' = (() => {
  const { PROD, DEV } = import.meta.env
  if (PROD === DEV) {
    throw new Error(
      'import.meta.env contains PROD and DEV as both true or both false. Expected different values'
    )
  }
  return PROD ? 'production' : 'development'
})()
