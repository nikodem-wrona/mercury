import useSWR from 'swr';

import { Expense, UserId } from '@/types';
import { useApiClient } from '@/infrastructure';

export const useGetUserExpenses = (userId: UserId): Expense[] | undefined=> {
  const apiClient = useApiClient();
  
  const { data, error } = useSWR(`expenses/${userId}`, () => apiClient.getExpenses(), {
    refreshInterval: 3000,
  });

  if (error) {
    // TODO: Add error handling
    throw new Error(error)
  }

  return data
}

