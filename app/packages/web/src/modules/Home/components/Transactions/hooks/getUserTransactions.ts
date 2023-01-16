import useSWR from 'swr';

import { Transaction, UserId } from '@/types';
import { useApiClient } from '@/infrastructure';

export const useGetUserTransactions = (userId: UserId): Transaction[]=> {
  const apiClient = useApiClient();
  
  const { data, error } = useSWR(`transactions/${userId}`, () => apiClient.getTransactions(), {
    refreshInterval: 3000,
  });

  if (error) {
    // TODO: Add error handling
    throw new Error(error)
  }

  return data || [];
}

