import { IncomeId } from "@/types"
import { FC } from "react"
import { EditIncomeFormComponent } from "./EditIncomeForm.component"
import { useDeleteIncome, useEditIncomeForm, useIncome } from "./hooks"

type EditIncomeFormContainerProps = {
  incomeId: IncomeId
  onClose: () => void
}

export const EditIncomeFormContainer: FC<EditIncomeFormContainerProps> = ({
  incomeId,
  onClose,
}) => {
  const income = useIncome(incomeId)
  const { deleteIncome } = useDeleteIncome(onClose)

  const { save, editField, incomeToDisplay } = useEditIncomeForm({
    income,
    onSuccess: onClose,
  })

  return (
    <EditIncomeFormComponent
      incomeId={incomeId}
      values={incomeToDisplay}
      onSave={save}
      onDelete={deleteIncome}
      onEditField={editField}
    />
  )
}
