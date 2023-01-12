import { createContext, useContext } from 'react'
import { ApiClient } from './ApiClient';

export const ApiClientContext = createContext<ApiClient | null>(null)

export const useApiClient = (): ApiClient => {
  const apiClient = useContext(ApiClientContext)

  if (!apiClient) {
    throw new Error('ApiClient has not been configured')
  }

  return apiClient
}
