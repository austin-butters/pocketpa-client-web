import { fetchJSON } from '#lib/fetch'

interface ExpectedResponse {
  sessionExists: boolean
  user: {
    id: string
    createdAt: string
    updatedAt: string
    email: string | null
    username: string | null
    emailVerified: boolean
  } | null
}

const getSessionStatus = async () => {
  const response = await fetchJSON<ExpectedResponse>(
    '/api/v0/athentication/session-status',
    {},
    (response): response is ExpectedResponse => {
      return (
        typeof response === 'object' &&
        response !== null &&
        'sessionExists' in response &&
        typeof response.sessionExists === 'boolean' &&
        'user' in response &&
        typeof response.user === 'object' &&
        (response.user === null ||
          ('id' in response.user &&
            typeof response.user.id === 'string' &&
            'createdAt' in response.user &&
            typeof response.user.createdAt === 'string' &&
            'updatedAt' in response.user &&
            typeof response.user.updatedAt === 'string' &&
            'email' in response.user &&
            (typeof response.user.email === 'string' ||
              response.user.email === null) &&
            'username' in response.user &&
            (typeof response.user.username === 'string' ||
              response.user.username === null) &&
            'emailVerified' in response.user &&
            typeof response.user.emailVerified === 'boolean'))
      )
    }
  )

  if (response.user === null) return response
  const {
    sessionExists,
    user: { createdAt, updatedAt, ...rest },
  } = response
  return {
    sessionExists,
    user: {
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
      ...rest,
    },
  }
}
