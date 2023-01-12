const requiredEnv = (value: string | undefined, envVariableName: string): string => {
  if (!value) {
    throw new Error(`Missing required environment variable: ${envVariableName}`)
  }

  return value
}

export const config = {
  apiUrl: requiredEnv(process.env.API_URL, 'API_URL'),
  sentry: {
    dsn: process.env.SENTRY_DSN,
    env: process.env.SENTRY_ENV
  },
  auth0: {
    domain: requiredEnv(process.env.AUTH0_DOMAIN, 'AUTH0_DOMAIN'),
    clientId: requiredEnv(process.env.AUTH0_CLIENT_ID, 'AUTH0_CLIENT_ID'),
    audience: requiredEnv(process.env.AUTH0_AUDIENCE, 'AUTH0_AUDIENCE')
  }
}

