import { TransactionId } from "@/types"
import { FC } from "react"
import { EditTransactionFormComponent } from "./EditTransactionForm.component"
import { useDeleteTransaction, useEditTransactionForm, useTransaction } from "./hooks"

type EditTransactionFormContainerProps = {
  transactionId: TransactionId
  onClose: () => void
}

export const EditTransactionFormContainer: FC<EditTransactionFormContainerProps> = ({
  transactionId,
  onClose,
}) => {
  const transaction = useTransaction(transactionId)
  const { deleteTransaction } = useDeleteTransaction(onClose)

  const { save, editField, transactionToDisplay } = useEditTransactionForm({
    transaction,
    onSuccess: onClose,
  })

  return (
    <EditTransactionFormComponent
      transactionId={transactionId}
      values={transactionToDisplay}
      onSave={save}
      onDelete={deleteTransaction}
      onEditField={editField}
    />
  )
}
