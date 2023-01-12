import { useAuth0 } from '@auth0/auth0-react'
import { AccessTokenProvider } from './httpClient'

export const useAuth0AccessTokenProvider = (): AccessTokenProvider => {
  const { getAccessTokenSilently } = useAuth0()

  return getAccessTokenSilently
}
