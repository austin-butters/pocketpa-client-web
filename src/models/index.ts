export type User = {
  id: string
  createdAt: string
  updatedAt: string
  email: string | null
  username: string | null
  emailVerified: boolean
}

export const isUser = (value: unknown): value is User => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    typeof value.id === 'string' &&
    'createdAt' in value &&
    typeof value.createdAt === 'string' &&
    'updatedAt' in value &&
    typeof value.updatedAt === 'string' &&
    'email' in value &&
    (typeof value.email === 'string' || value.email === null) &&
    'username' in value &&
    (typeof value.username === 'string' || value.username === null) &&
    'emailVerified' in value &&
    typeof value.emailVerified === 'boolean'
  )
}
