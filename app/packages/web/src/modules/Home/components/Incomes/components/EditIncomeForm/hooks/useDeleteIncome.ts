import useSWRMutation from "swr/mutation"

import { useApiClient } from "@/infrastructure"
import { IncomeId } from "@/types"

type UseDeleteIncome = (onSuccess: () => void) => {
  deleteIncome: (incomeId: IncomeId) => void
  isLoading: boolean
  error?: string
}

export const useDeleteIncome: UseDeleteIncome = (onSuccess) => {
  const apiClient = useApiClient()
  
  const { trigger, isMutating, error } = useSWRMutation<
    void,
    string,
    string,
    { incomeId: IncomeId }
  >(`income/delete`, (_, { arg: data }) => apiClient.deleteIncome(data.incomeId), { onSuccess })

  const deleteIncome = (incomeId: IncomeId) => {
    trigger({ incomeId })
  }

  return {
    deleteIncome,
    isLoading: isMutating,
    error,
  }
}
