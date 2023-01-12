import { Income, IncomeId } from "@/types"
import { useEffect, useState } from "react"
import { useEditIncome } from "./useEditIncome"

export type IncomeFormValues = Omit<
  Income,
  "id" | "created_at" | "updated_at" | "user_id"
>

export enum EditIncomeFormFields {
  Title = "title",
  Description = "description",
  Currency = "currency",
  Amount = "amount",
  PaidAt = "paid_at",
}

type UseEditIncomeFormPayload = {
  income?: Income
  onSuccess: () => void
}


type UseEditIncomeForm = (payload: UseEditIncomeFormPayload) => {
  incomeToDisplay: IncomeFormValues
  editField: (fieldName: EditIncomeFormFields, fieldValue: unknown) => void
  save: (incomeId: IncomeId) => void
}

export const useEditIncomeForm: UseEditIncomeForm = ({ income, onSuccess }) => {
  const { editIncome } = useEditIncome(onSuccess)

  const [formValues, setFormValues] = useState<IncomeFormValues>({
    title: income?.title || "",
    description: income?.description || "",
    currency: income?.currency || "",
    amount: Number(income?.amount) || 0,
    paid_at: income?.paid_at || "",
  });

  useEffect(() => {
    if (income) {
      setFormValues({
        title: income?.title || "",
        description: income?.description || "",
        currency: income?.currency || "",
        amount: Number(income?.amount) || 0,
        paid_at: income?.paid_at || "",
      })
    }
  }, [income])

  const editField = (
    fieldName: EditIncomeFormFields,
    fieldValue: unknown
  ): void => {
    const newValues = {
      ...formValues,
      [fieldName]: fieldValue,
    }

    setFormValues({
      ...newValues,
    })
  }

  const save = (incomeId: IncomeId) => {
    console.log("saving", incomeId, formValues);
    editIncome(incomeId, formValues)
  }


  return {
    editField,
    save,
    incomeToDisplay: formValues,
  }
}
