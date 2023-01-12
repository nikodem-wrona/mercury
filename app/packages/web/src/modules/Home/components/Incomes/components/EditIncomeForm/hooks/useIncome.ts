import useSWR from 'swr';

import { Income, IncomeId, UserId } from '@/types';
import { useApiClient } from '@/infrastructure';

type UseIncome = (userId: UserId) => Income | undefined

export const useIncome: UseIncome = (incomeId: IncomeId)=> {
  const apiClient = useApiClient();
  
  const { data, error } = useSWR(`income/${incomeId}`, () => apiClient.getIncome(incomeId), {
    refreshInterval: 3000,
  });

  if (error) {
    // TODO: Add error handling
    console.log(error);
  }

  return data
}

