import useSWR from 'swr';

import { Transaction, TransactionId, UserId } from '@/types';
import { useApiClient } from '@/infrastructure';

type UseTransaction = (userId: UserId) => Transaction | undefined

export const useTransaction: UseTransaction = (transactionId: TransactionId)=> {
  const apiClient = useApiClient();
  
  const { data, error } = useSWR(`transaction/${transactionId}`, () => apiClient.getTransaction(transactionId), {
    refreshInterval: 3000,
  });

  if (error) {
    // TODO: Add error handling
    console.log(error);
  }

  return data
}

