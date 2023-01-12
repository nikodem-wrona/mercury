import { ExpenseId } from "@/types"
import { FC } from "react"
import { EditExpenseFormComponent } from "./EditExpenseForm.component"
import { useDeleteExpense, useEditExpenseForm, useExpense } from "./hooks"

type EditExpenseFormContainerProps = {
  expenseId: ExpenseId
  onClose: () => void
}

export const EditExpenseFormContainer: FC<EditExpenseFormContainerProps> = ({
  expenseId,
  onClose,
}) => {
  const expense = useExpense(expenseId)
  const { deleteExpense } = useDeleteExpense(onClose)

  const { save, editField, expenseToDisplay } = useEditExpenseForm({
    expense,
    onSuccess: onClose,
  })

  return (
    <EditExpenseFormComponent
      expenseId={expenseId}
      values={expenseToDisplay}
      onSave={save}
      onDelete={deleteExpense}
      onEditField={editField}
    />
  )
}
