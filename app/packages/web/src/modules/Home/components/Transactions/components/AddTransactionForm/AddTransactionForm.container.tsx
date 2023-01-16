import { FC } from 'react'
import { AddTransactionFormComponent } from './AddTransactionForm.component'
import { useAddTransactionForm } from './hooks';

export const AddTransactionFormContainer: FC = () => {
  const { save, editField, transactionToDisplay } = useAddTransactionForm();

  return (
    <AddTransactionFormComponent values={transactionToDisplay} onSave={save} onEditField={editField} />
  )
}
