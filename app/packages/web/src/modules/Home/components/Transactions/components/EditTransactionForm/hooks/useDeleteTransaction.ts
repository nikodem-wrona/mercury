import useSWRMutation from "swr/mutation"

import { useApiClient } from "@/infrastructure"
import { TransactionId } from "@/types"

type UseDeleteTransaction = (onSuccess: () => void) => {
  deleteTransaction: (transactionId: TransactionId) => void
  isLoading: boolean
  error?: string
}

export const useDeleteTransaction: UseDeleteTransaction = (onSuccess) => {
  const apiClient = useApiClient()
  
  const { trigger, isMutating, error } = useSWRMutation<
    void,
    string,
    string,
    { transactionId: TransactionId }
  >(`transaction/delete`, (_, { arg: data }) => apiClient.deleteTransaction(data.transactionId), { onSuccess })

  const deleteTransaction = (transactionId: TransactionId) => {
    trigger({ transactionId })
  }

  return {
    deleteTransaction,
    isLoading: isMutating,
    error,
  }
}
