import { postCheckRegistrationAvailability } from '#fetch/v0/authentication/check-registration-availability'
import { postRegisterAnonymous } from '#fetch/v0/authentication/register-anonymous'
import { getSessionStatus } from '#fetch/v0/authentication/session-status'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useSessionStatus = () => {
  return useSuspenseQuery({
    queryKey: ['/api/v0/authentication/session-status'],
    queryFn: getSessionStatus,
  })
}

export const useCheckRegistrationAvailability = (options: {
  email: string
  username: string
}) => {
  return useSuspenseQuery({
    queryKey: ['/api/v0/authentication/check-registration-availability'],
    queryFn: () => postCheckRegistrationAvailability(options),
  })
}

export const useRegisterAnonymous = () => {
  return useSuspenseQuery({
    queryKey: ['/api/v0/authentication/register-anonymous'],
    queryFn: postRegisterAnonymous,
  })
}
