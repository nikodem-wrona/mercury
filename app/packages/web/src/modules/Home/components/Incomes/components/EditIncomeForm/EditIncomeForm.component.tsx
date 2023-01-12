import { FC } from "react"

import { Button, Input } from "@/_shared/components"

import styles from "./EditIncomeForm.module.scss"
import { EditIncomeFormFields, IncomeFormValues } from "./hooks"
import { IncomeId } from "@/types"

type EditIncomeFormComponentProps = {
  incomeId: IncomeId
  values: IncomeFormValues
  onSave: (incomeId: IncomeId) => void
  onDelete: (incomeId: IncomeId) => void
  onEditField: (field: EditIncomeFormFields, value: unknown) => void
}

export const EditIncomeFormComponent: FC<EditIncomeFormComponentProps> = ({
  incomeId,
  values,
  onSave,
  onDelete,
  onEditField,
}) => {
  return (
    <div className={styles.editIncomeFormWrapper}>
      <div className={styles.sectionBody}>
        <div className={styles.row}>
          <Input
            label={"ID"}
            type={"input"}
            onChange={() => null}
            value={incomeId}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Title"}
            type={"input"}
            onChange={(value) => onEditField(EditIncomeFormFields.Title, value)}
            value={values.title}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Description"}
            type={"textarea"}
            onChange={(value) =>
              onEditField(EditIncomeFormFields.Description, value)
            }
            value={values.description}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Amount"}
            type={"number"}
            onChange={(value) =>
              onEditField(EditIncomeFormFields.Amount, value)
            }
            value={values.amount}
          />

          <div className={styles.gap} />
          <Input
            label={"Currency"}
            type={"input"}
            onChange={(value) =>
              onEditField(EditIncomeFormFields.Currency, value)
            }
            value={values.currency}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Paid at"}
            type={"date"}
            onChange={(value) =>
              onEditField(EditIncomeFormFields.PaidAt, value)
            }
            value={values.paid_at}
          />
        </div>
        <div className={styles.footer}>
          <Button onClick={() => onDelete(incomeId)} color="error">
            Delete
          </Button>
          <Button onClick={() => onSave(incomeId)} color="secondary">
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}
