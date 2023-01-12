import { FC } from 'react'
import { AddIncomeFormComponent } from './AddIncomeForm.component'
import { useAddIncomeForm } from './hooks';

export const AddIncomeFormContainer: FC = () => {
  const { save, editField, incomeToDisplay } = useAddIncomeForm();

  return (
    <AddIncomeFormComponent values={incomeToDisplay} onSave={save} onEditField={editField} />
  )
}
