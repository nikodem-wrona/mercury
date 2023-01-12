import { Button, Input } from "@/_shared/components"
import { FC } from "react"

import styles from "./AddExpenseForm.module.scss"
import { AddExpenseFormFields } from "./hooks"
import { ExpenseFormValues } from "../EditExpenseForm/hooks"

type AddExpenseFormComponentProps = {
  onSave: () => void
  onEditField: (field: AddExpenseFormFields, value: unknown) => void
  values: ExpenseFormValues
}

export const AddExpenseFormComponent: FC<AddExpenseFormComponentProps> = ({
  onSave,
  onEditField,
  values,
}) => {
  return (
    <div className={styles.addExpenseFormWrapper}>
      <div className={styles.sectionBody}>
        <div className={styles.row}>
          <Input
            type="input"
            label="Title"
            value={values.title}
            onChange={(value) => onEditField(AddExpenseFormFields.Title, value)}
          />
        </div>
        <div className={styles.row}>
          <Input
            type="textarea"
            label="Description"
            value={values.description}
            onChange={(value) =>
              onEditField(AddExpenseFormFields.Description, value)
            }
          />
        </div>
        <div className={styles.row}>
          <Input
            type="number"
            label="Title"
            value={values.amount}
            onChange={(value) =>
              onEditField(AddExpenseFormFields.Amount, Number(value))
            }
          />
          <div className={styles.gap} />
          <Input
            type="input"
            label="Currency"
            value={values.currency}
            onChange={(value) =>
              onEditField(AddExpenseFormFields.Currency, value)
            }
          />
        </div>
        <div className={styles.row}>
          <Input
            type="date"
            label="Paid at"
            value={values.paid_at}
            onChange={(value) =>
              onEditField(AddExpenseFormFields.PaidAt, value)
            }
          />
        </div>
        <div className={styles.footer}>
          <Button onClick={onSave} color="secondary">
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}
