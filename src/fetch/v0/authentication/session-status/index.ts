import { fetchJSON } from '#lib/fetch'
import { type User, isUser } from '#models'

type SessionStatusResponse = {
  sessionExists: boolean
  user: User | null
}

const isSessionStatusResponse = (
  value: unknown
): value is SessionStatusResponse =>
  typeof value === 'object' &&
  value !== null &&
  'sessionExists' in value &&
  typeof value.sessionExists === 'boolean' &&
  'user' in value &&
  (value.user === null || isUser(value.user))

export const getSessionStatus = async () => {
  return fetchJSON<SessionStatusResponse>(
    '/api/v0/authentication/session-status',
    {},
    isSessionStatusResponse
  )
}
