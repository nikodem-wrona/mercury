import useSWRMutation from "swr/mutation"

import { useApiClient } from "@/infrastructure"
import { ExpenseId } from "@/types"

type UseDeleteExpense = (onSuccess: () => void) => {
  deleteExpense: (expenseId: ExpenseId) => void
  isLoading: boolean
  error?: string
}

export const useDeleteExpense: UseDeleteExpense = (onSuccess) => {
  const apiClient = useApiClient()
  
  const { trigger, isMutating, error } = useSWRMutation<
    void,
    string,
    string,
    { expenseId: ExpenseId }
  >(`expense/delete`, (_, { arg: data }) => apiClient.deleteExpense(data.expenseId), { onSuccess })

  const deleteExpense = (expenseId: ExpenseId) => {
    trigger({ expenseId })
  }

  return {
    deleteExpense,
    isLoading: isMutating,
    error,
  }
}
