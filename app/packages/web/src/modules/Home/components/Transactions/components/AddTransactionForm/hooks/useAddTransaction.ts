import useSWRMutation from "swr/mutation"

import { AddTransactionDTO, useApiClient } from "@/infrastructure"
import { Transaction } from "@/types"

type UseAddTransaction = () => {
  addTransaction: (transaction: AddTransactionDTO) => void
  isLoading: boolean
  error?: string
}

export const useAddTransaction: UseAddTransaction = () => {
  const apiClient = useApiClient()
  const { trigger, isMutating, error } = useSWRMutation<
    Transaction,
    string,
    string,
    AddTransactionDTO
  >(`transaction/add`, (_, { arg: data }) => apiClient.addTransaction(data))

  const addTransaction = (transaction: AddTransactionDTO) => {
    trigger(transaction)
  }

  return {
    addTransaction,
    isLoading: isMutating,
    error,
  }
}
