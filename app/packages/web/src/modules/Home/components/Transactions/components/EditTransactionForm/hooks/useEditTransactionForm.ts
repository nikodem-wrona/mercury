import { Transaction, TransactionId } from "@/types"
import { useEffect, useState } from "react"
import { useEditTransaction } from "./useEditTransaction"

export type TransactionFormValues = Omit<
  Transaction,
  "id" | "created_at" | "updated_at" | "created_by"
>

export enum EditTransactionFormFields {
  Title = "title",
  Description = "description",
  Currency = "currency",
  Amount = "amount",
  PaidAt = "paid_at",
  CreatedBy = "created_by",
  UsersWithAccess = "users_with_access",
  IsRecurring = "is_recurring",
  Type = 'type',
}

type UseEditTransactionFormPayload = {
  transaction?: Transaction
  onSuccess: () => void
}


type UseEditTransactionForm = (payload: UseEditTransactionFormPayload) => {
  transactionToDisplay: TransactionFormValues
  editField: (fieldName: EditTransactionFormFields, fieldValue: unknown) => void
  save: (transactionId: TransactionId) => void
}

export const useEditTransactionForm: UseEditTransactionForm = ({ transaction, onSuccess }) => {
  const { editTransaction } = useEditTransaction(onSuccess)

  const [formValues, setFormValues] = useState<TransactionFormValues>({
    title: transaction?.title || "",
    description: transaction?.description || "",
    currency: transaction?.currency || "",
    amount: Number(transaction?.amount) || 0,
    paid_at: transaction?.paid_at || "",
    is_recurring: transaction?.is_recurring || false,
    users_with_access: transaction?.users_with_access || [],
    type: transaction?.type || 'expense',
  });

  useEffect(() => {
    if (transaction) {
      setFormValues({
        title: transaction?.title || "",
        description: transaction?.description || "",
        currency: transaction?.currency || "",
        amount: Number(transaction?.amount) || 0,
        paid_at: transaction?.paid_at || "",
        is_recurring: transaction?.is_recurring || false,
        users_with_access: transaction?.users_with_access || [],
        type: transaction?.type || 'expense',
      })
    }
  }, [transaction])

  const editField = (
    fieldName: EditTransactionFormFields,
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

  const save = (transactionId: TransactionId) => {
    console.log("saving", transactionId, formValues);
    editTransaction(transactionId, formValues)
  }


  return {
    editField,
    save,
    transactionToDisplay: formValues,
  }
}
