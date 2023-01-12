import useSWRMutation from "swr/mutation"

import { AddExpenseDTO, useApiClient } from "@/infrastructure"
import { Expense } from "@/types"

type UseAddExpense = () => {
  addExpense: (expense: AddExpenseDTO) => void
  isLoading: boolean
  error?: string
}

export const useAddExpense: UseAddExpense = () => {
  const apiClient = useApiClient()
  const { trigger, isMutating, error } = useSWRMutation<
    Expense,
    string,
    string,
    AddExpenseDTO
  >(`expense/add`, (_, { arg: data }) => apiClient.addExpense(data))

  const addExpense = (expense: AddExpenseDTO) => {
    trigger(expense)
  }

  return {
    addExpense,
    isLoading: isMutating,
    error,
  }
}
