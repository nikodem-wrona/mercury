import useSWRMutation from "swr/mutation"

import { EditTransactionDTO, useApiClient } from "@/infrastructure"
import { Transaction, TransactionId } from "@/types"

type UseEditTransaction = (onSuccess: () => void) => {
  editTransaction: (transactionId: TransactionId, transactionDTO: EditTransactionDTO) => void
  isLoading: boolean
  error?: string
}

export const useEditTransaction: UseEditTransaction = (onSuccess) => {
  const apiClient = useApiClient()
  
  const { trigger, isMutating, error } = useSWRMutation<
    Transaction,
    string,
    string,
    { transactionId: TransactionId, payload: EditTransactionDTO }
  >(`transaction/edit`, (_, { arg: data }) => apiClient.editTransaction(data.transactionId, data.payload), { onSuccess })

  const editTransaction = (transactionId: TransactionId, transactionDTO: EditTransactionDTO) => {
    console.log(transactionDTO)
    trigger({ transactionId, payload: transactionDTO })
  }

  return {
    editTransaction,
    isLoading: isMutating,
    error,
  }
}
