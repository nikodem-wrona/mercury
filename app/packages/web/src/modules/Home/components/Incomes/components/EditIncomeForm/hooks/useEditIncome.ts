import useSWRMutation from "swr/mutation"

import { EditIncomeDTO, useApiClient } from "@/infrastructure"
import { Income, IncomeId } from "@/types"

type UseEditIncome = (onSuccess: () => void) => {
  editIncome: (incomeId: IncomeId, incomeDTO: EditIncomeDTO) => void
  isLoading: boolean
  error?: string
}

export const useEditIncome: UseEditIncome = (onSuccess) => {
  const apiClient = useApiClient()
  
  const { trigger, isMutating, error } = useSWRMutation<
    Income,
    string,
    string,
    { incomeId: IncomeId, payload: EditIncomeDTO }
  >(`income/edit`, (_, { arg: data }) => apiClient.editIncome(data.incomeId, data.payload), { onSuccess })

  const editIncome = (incomeId: IncomeId, incomeDTO: EditIncomeDTO) => {
    console.log(incomeDTO)
    trigger({ incomeId, payload: incomeDTO })
  }

  return {
    editIncome,
    isLoading: isMutating,
    error,
  }
}
