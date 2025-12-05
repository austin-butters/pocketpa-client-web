import { fetchJSON } from '#lib/fetch'

type CheckRegistrationAvailabilityResponse = {
  emailAvailable: boolean
  usernameAvailable: boolean
}

const isCheckRegistrationAvailabilityResponse = (
  value: unknown
): value is CheckRegistrationAvailabilityResponse => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'emailAvailable' in value &&
    typeof value.emailAvailable === 'boolean' &&
    'usernameAvailable' in value &&
    typeof value.usernameAvailable === 'boolean'
  )
}

export const postCheckRegistrationAvailability = async (options: {
  email: string
  username: string
}) => {
  return fetchJSON<CheckRegistrationAvailabilityResponse>(
    '/api/v0/authentication/check-registration-availability',
    { method: 'POST', body: JSON.stringify(options) },
    isCheckRegistrationAvailabilityResponse
  )
}
