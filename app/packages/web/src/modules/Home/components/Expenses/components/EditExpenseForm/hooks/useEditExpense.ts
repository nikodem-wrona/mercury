import useSWRMutation from "swr/mutation"

import { EditExpenseDTO, useApiClient } from "@/infrastructure"
import { Expense, ExpenseId } from "@/types"

type UseEditExpense = (onSuccess: () => void) => {
  editExpense: (expenseId: ExpenseId, expenseDTO: EditExpenseDTO) => void
  isLoading: boolean
  error?: string
}

export const useEditExpense: UseEditExpense = (onSuccess) => {
  const apiClient = useApiClient()
  
  const { trigger, isMutating, error } = useSWRMutation<
    Expense,
    string,
    string,
    { expenseId: ExpenseId, payload: EditExpenseDTO }
  >(`expense/edit`, (_, { arg: data }) => apiClient.editExpense(data.expenseId, data.payload), { onSuccess })

  const editExpense = (expenseId: ExpenseId, expenseDTO: EditExpenseDTO) => {
    console.log(expenseDTO)
    trigger({ expenseId, payload: expenseDTO })
  }

  return {
    editExpense,
    isLoading: isMutating,
    error,
  }
}
