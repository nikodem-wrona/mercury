import useSWR from 'swr';

import { Expense, ExpenseId, UserId } from '@/types';
import { useApiClient } from '@/infrastructure';

type UseExpense = (userId: UserId) => Expense | undefined

export const useExpense: UseExpense = (expenseId: ExpenseId)=> {
  const apiClient = useApiClient();
  
  const { data, error } = useSWR(`expense/${expenseId}`, () => apiClient.getExpense(expenseId), {
    refreshInterval: 3000,
  });

  if (error) {
    // TODO: Add error handling
    console.log(error);
  }

  return data
}

