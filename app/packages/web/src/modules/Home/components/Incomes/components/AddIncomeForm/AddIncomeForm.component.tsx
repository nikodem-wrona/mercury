import { Button, Input } from "@/_shared/components"
import { FC } from "react"

import styles from "./AddIncomeForm.module.scss"
import { AddIncomeFormFields } from "./hooks"
import { IncomeFormValues } from "../EditIncomeForm/hooks"

type AddIncomeFormComponentProps = {
  onSave: () => void
  onEditField: (field: AddIncomeFormFields, value: unknown) => void
  values: IncomeFormValues
}

export const AddIncomeFormComponent: FC<AddIncomeFormComponentProps> = ({
  onSave,
  onEditField,
  values,
}) => {
  return (
    <div className={styles.addIncomeFormWrapper}>
      <div className={styles.sectionBody}>
        <div className={styles.row}>
          <Input
            label={"Title"}
            type={"input"}
            onChange={(value) => onEditField(AddIncomeFormFields.Title, value)}
            value={values.title}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Description"}
            type={"textarea"}
            onChange={(value) =>
              onEditField(AddIncomeFormFields.Description, value)
            }
            value={values.description}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Amount"}
            type={"number"}
            onChange={(value) => onEditField(AddIncomeFormFields.Amount, value)}
            value={values.amount}
          />

          <div className={styles.gap} />
          <Input
            label={"Currency"}
            type={"input"}
            onChange={(value) =>
              onEditField(AddIncomeFormFields.Currency, value)
            }
            value={values.currency}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Paid at"}
            type={"date"}
            onChange={(value) => onEditField(AddIncomeFormFields.PaidAt, value)}
            value={values.paid_at}
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
