import { Transaction } from "@/types"
import { useState } from "react"
import { useAddTransaction } from "./useAddTransaction"

type TransactionFormValues = Omit<
  Transaction,
  "id" | "created_at" | "updated_at" | "created_by" 
>

type UseAddTransactionForm = {
  editField: (fieldName: AddTransactionFormFields, fieldValue: unknown) => void
  save: () => void
  transactionToDisplay: TransactionFormValues
}

export enum AddTransactionFormFields {
  Title = "title",
  Description = "description",
  Currency = "currency",
  Amount = "amount",
  PaidAt = "paid_at",
  UsersWithAccess = "users_with_access",
  IsRecurring = "is_recurring",
  Type = "type",
}

export const useAddTransactionForm = (): UseAddTransactionForm => {
  const { addTransaction } = useAddTransaction()

  const [formValues, setFormValues] = useState<TransactionFormValues>({
    title: "",
    description: "",
    currency: "",
    amount: 0,
    paid_at: "",
    is_recurring: false,
    users_with_access: [],
    type: "expense",
  })

  const editField = (
    fieldName: AddTransactionFormFields,
    fieldValue: unknown
  ): void => {
    setFormValues({
      ...formValues,
      [fieldName]: fieldValue,
    })
  }

  const save = () => {
    console.log("formValues", formValues)
    addTransaction(formValues)
  }

  return {
    editField,
    save,
    transactionToDisplay: formValues,
  }
}
