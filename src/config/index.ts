export const SERVER_URL: string = (() => {
  const { PA_WEB_SERVER_URL } = import.meta.env
  if (!PA_WEB_SERVER_URL) {
    throw new Error('PA_WEB_SERVER_URL is not set')
  }
  if (typeof PA_WEB_SERVER_URL !== 'string') {
    throw new Error('PA_WEB_SERVER_URL is not a string')
  }
  return PA_WEB_SERVER_URL
})()
