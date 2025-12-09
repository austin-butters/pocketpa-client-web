interface EndpointIndex {
  [key: string]: EndpointIndex | ((options: Record<string, unknown>) => string)
}

const endpointIndex = {
  api: {
    v0: {
      authentication: {
        sessionStatus: () => '/api/v0/authentication/session-status',
        registerAnonymous: () => '/api/v0/authentication/register-anonymous',
        checkRegistrationAvailability: () =>
          '/api/v0/authentication/check-registration-availability',
        register: () => '/api/v0/authentication/register',
        login: () => '/api/v0/authentication/login',
        logout: () => '/api/v0/authentication/logout',
        forgotPassword: () => '/api/v0/authentication/forgot-password',
        resetPassword: () => '/api/v0/authentication/reset-password',
      },
    },
  },
} satisfies EndpointIndex
