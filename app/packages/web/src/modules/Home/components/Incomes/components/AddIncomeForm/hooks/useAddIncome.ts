import useSWRMutation from "swr/mutation"

import { AddIncomeDTO, useApiClient } from "@/infrastructure"
import { Income } from "@/types"

type UseAddIncome = () => {
  addIncome: (income: AddIncomeDTO) => void
  isLoading: boolean
  error?: string
}

export const useAddIncome: UseAddIncome = () => {
  const apiClient = useApiClient()
  const { trigger, isMutating, error } = useSWRMutation<
    Income,
    string,
    string,
    AddIncomeDTO
  >(`income/add`, (_, { arg: data }) => apiClient.addIncome(data))

  const addIncome = (income: AddIncomeDTO) => {
    trigger(income)
  }

  return {
    addIncome,
    isLoading: isMutating,
    error,
  }
}
