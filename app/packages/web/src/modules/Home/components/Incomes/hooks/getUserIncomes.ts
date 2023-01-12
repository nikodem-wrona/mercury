import useSWR from 'swr';

import { Income, UserId } from '@/types';
import { useApiClient } from '@/infrastructure';

export const useGetUserIncomes = (userId: UserId): Income[]=> {
  const apiClient = useApiClient();
  
  const { data, error } = useSWR(`incomes/${userId}`, () => apiClient.getIncomes(), {
    refreshInterval: 3000,
  });

  if (error) {
    // TODO: Add error handling
    throw new Error(error)
  }

  return data || [];
}

