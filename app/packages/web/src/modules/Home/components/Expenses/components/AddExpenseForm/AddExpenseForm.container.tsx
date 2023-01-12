import { FC } from "react"
import { AddExpenseFormComponent } from "./AddExpenseForm.component"
import { useAddExpenseForm } from "./hooks"

export const AddExpenseFormContainer: FC = () => {
  const { save, editField, expenseToDisplay } = useAddExpenseForm()

  return (
    <AddExpenseFormComponent
      values={expenseToDisplay}
      onSave={save}
      onEditField={editField}
    />
  )
}
