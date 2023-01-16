import { FC } from "react"

import { Button, Checkbox, Input } from "@/_shared/components"

import styles from "./EditTransactionForm.module.scss"
import { EditTransactionFormFields, TransactionFormValues } from "./hooks"
import { TransactionId } from "@/types"
import { stringToArray } from '@/_shared/helpers'

type EditTransactionFormComponentProps = {
  transactionId: TransactionId
  values: TransactionFormValues
  onSave: (transactionId: TransactionId) => void
  onDelete: (transactionId: TransactionId) => void
  onEditField: (field: EditTransactionFormFields, value: unknown) => void
}

export const EditTransactionFormComponent: FC<EditTransactionFormComponentProps> = ({
  transactionId,
  values,
  onSave,
  onDelete,
  onEditField,
}) => {
  return (
    <div className={styles.editTransactionFormWrapper}>
      <div className={styles.sectionBody}>
        <div className={styles.row}>
          <Input
            label={"ID"}
            type={"input"}
            onChange={() => null}
            value={transactionId}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Title"}
            type={"input"}
            onChange={(value) => onEditField(EditTransactionFormFields.Title, value)}
            value={values.title}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Description"}
            type={"textarea"}
            onChange={(value) =>
              onEditField(EditTransactionFormFields.Description, value)
            }
            value={values.description}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Amount"}
            type={"number"}
            onChange={(value) =>
              onEditField(EditTransactionFormFields.Amount, value)
            }
            value={values.amount}
          />

          <div className={styles.gap} />
          <Input
            label={"Currency"}
            type={"input"}
            onChange={(value) =>
              onEditField(EditTransactionFormFields.Currency, value)
            }
            value={values.currency}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Paid at"}
            type={"date"}
            onChange={(value) =>
              onEditField(EditTransactionFormFields.PaidAt, value)
            }
            value={values.paid_at}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Type"}
            type={"input"}
            onChange={(value) =>
              onEditField(EditTransactionFormFields.Type, value)
            }
            value={values.type}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Users with access"}
            type={"textarea"}
            onChange={(value) =>
              onEditField(EditTransactionFormFields.UsersWithAccess, stringToArray(value as string))
            }
            value={values.users_with_access.toString()}
          />
        </div>
        <div className={styles.row}>
          <Checkbox
            label={"Is recurring"}
            onChange={() =>
              onEditField(
                EditTransactionFormFields.IsRecurring,
                !values.is_recurring
              )
            }
            checked={values.is_recurring}
          />
        </div>
        <div className={styles.footer}>
          <Button onClick={() => onDelete(transactionId)} color="error">
            Delete
          </Button>
          <Button onClick={() => onSave(transactionId)} color="secondary">
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}
