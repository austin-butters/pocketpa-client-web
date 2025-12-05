import { fetchJSON } from '#lib/fetch'
import { type User, isUser } from '#models'

type RegisterAnonymousResponse = {
  user: User
}

const isRegisterAnonymousResponse = (
  value: unknown
): value is RegisterAnonymousResponse => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'user' in value &&
    isUser(value.user)
  )
}

export const postRegisterAnonymous = async () => {
  return fetchJSON<RegisterAnonymousResponse>(
    '/api/v0/authentication/register-anonymous',
    { method: 'POST' },
    isRegisterAnonymousResponse
  )
}
