import { Income } from "@/types"
import { useState } from "react"
import { useAddIncome } from "./useAddIncome"

type IncomeFormValues = Omit<
  Income,
  "id" | "created_at" | "updated_at" | "user_id"
>

type UseAddIncomeForm = {
  editField: (fieldName: AddIncomeFormFields, fieldValue: unknown) => void
  save: () => void
  incomeToDisplay: IncomeFormValues
}

export enum AddIncomeFormFields {
  Title = "title",
  Description = "description",
  Currency = "currency",
  Amount = "amount",
  PaidAt = "paid_at",
}

export const useAddIncomeForm = (): UseAddIncomeForm => {
  const { addIncome } = useAddIncome()

  const [formValues, setFormValues] = useState<IncomeFormValues>({
    title: "",
    description: "",
    currency: "",
    amount: 0,
    paid_at: "",
  })

  const editField = (
    fieldName: AddIncomeFormFields,
    fieldValue: unknown
  ): void => {
    setFormValues({
      ...formValues,
      [fieldName]: fieldValue,
    })
  }

  const save = () => {
    console.log("formValues", formValues)
    addIncome(formValues)
  }

  return {
    editField,
    save,
    incomeToDisplay: formValues,
  }
}
