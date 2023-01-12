import { Expense, ExpenseId } from "@/types"
import { useEffect, useState } from "react"
import { useEditExpense } from "./useEditExpense"

export type ExpenseFormValues = Omit<
  Expense,
  "id" | "created_at" | "updated_at" | "user_id"
>

export enum EditExpenseFormFields {
  Title = "title",
  Description = "description",
  Currency = "currency",
  Amount = "amount",
  PaidAt = "paid_at",
}

type UseEditExpenseFormPayload = {
  expense?: Expense
  onSuccess: () => void
}


type UseEditExpenseForm = (payload: UseEditExpenseFormPayload) => {
  expenseToDisplay: ExpenseFormValues
  editField: (fieldName: EditExpenseFormFields, fieldValue: unknown) => void
  save: (expenseId: ExpenseId) => void
}

export const useEditExpenseForm: UseEditExpenseForm = ({ expense, onSuccess }) => {
  const { editExpense } = useEditExpense(onSuccess)

  const [formValues, setFormValues] = useState<ExpenseFormValues>({
    title: expense?.title || "",
    description: expense?.description || "",
    currency: expense?.currency || "",
    amount: Number(expense?.amount) || 0,
    is_recurring: expense?.is_recurring || false,
    paid_at: expense?.paid_at || "",
  });

  useEffect(() => {
    if (expense) {
      setFormValues({
        title: expense?.title || "",
        description: expense?.description || "",
        currency: expense?.currency || "",
        amount: Number(expense?.amount) || 0,
        is_recurring: expense?.is_recurring || false,
        paid_at: expense?.paid_at || "",
      })
    }
  }, [expense])

  const editField = (
    fieldName: EditExpenseFormFields,
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

  const save = (expenseId: ExpenseId) => {
    console.log("saving", expenseId, formValues);
    editExpense(expenseId, formValues)
  }


  return {
    editField,
    save,
    expenseToDisplay: formValues,
  }
}
