import { FC } from "react"

import { Button, Input } from "@/_shared/components"

import styles from "./EditExpenseForm.module.scss"
import { EditExpenseFormFields, ExpenseFormValues } from "./hooks"
import { ExpenseId } from "@/types"

type EditExpenseFormComponentProps = {
  expenseId: ExpenseId
  values: ExpenseFormValues
  onSave: (expenseId: ExpenseId) => void
  onDelete: (expenseId: ExpenseId) => void
  onEditField: (field: EditExpenseFormFields, value: unknown) => void
}

export const EditExpenseFormComponent: FC<EditExpenseFormComponentProps> = ({
  expenseId,
  values,
  onSave,
  onDelete,
  onEditField,
}) => {
  return (
    <div className={styles.editExpenseFormWrapper}>
      <div className={styles.sectionBody}>
        <div className={styles.row}>
          <Input
            type="input"
            label="ID"
            value={expenseId}
            onChange={() => null}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Title"}
            type={"input"}
            onChange={(value) =>
              onEditField(EditExpenseFormFields.Title, value)
            }
            value={values.title}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Description"}
            type={"textarea"}
            onChange={(value) =>
              onEditField(EditExpenseFormFields.Description, value)
            }
            value={values.description}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Amount"}
            type={"number"}
            onChange={(value) =>
              onEditField(EditExpenseFormFields.Amount, value)
            }
            value={values.amount}
          />
          <div className={styles.gap} />
          <Input
            label={"Currency"}
            type={"input"}
            onChange={(value) =>
              onEditField(EditExpenseFormFields.Currency, value)
            }
            value={values.currency}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Paid at"}
            type={"date"}
            onChange={(value) =>
              onEditField(EditExpenseFormFields.PaidAt, value)
            }
            value={values.paid_at}
          />
        </div>
        <div className={styles.footer}>
          <Button onClick={() => onDelete(expenseId)} color="error">
            Delete
          </Button>
          <Button onClick={() => onSave(expenseId)} color="secondary">
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}
