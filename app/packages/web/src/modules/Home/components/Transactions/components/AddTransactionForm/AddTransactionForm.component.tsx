import { Button, Checkbox, Input } from "@/_shared/components"
import { FC } from "react"

import styles from "./AddTransactionForm.module.scss"
import { AddTransactionFormFields } from "./hooks"
import { TransactionFormValues } from "../EditTransactionForm/hooks"
import { stringToArray } from '@/_shared/helpers'

type AddTransactionFormComponentProps = {
  onSave: () => void
  onEditField: (field: AddTransactionFormFields, value: unknown) => void
  values: TransactionFormValues
}

export const AddTransactionFormComponent: FC<
  AddTransactionFormComponentProps
> = ({ onSave, onEditField, values }) => {
  return (
    <div className={styles.addTransactionFormWrapper}>
      <div className={styles.sectionBody}>
        <div className={styles.row}>
          <Input
            label={"Title"}
            type={"input"}
            onChange={(value) =>
              onEditField(AddTransactionFormFields.Title, value)
            }
            value={values.title}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Description"}
            type={"textarea"}
            onChange={(value) =>
              onEditField(AddTransactionFormFields.Description, value)
            }
            value={values.description}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Amount"}
            type={"number"}
            onChange={(value) =>
              onEditField(AddTransactionFormFields.Amount, value)
            }
            value={values.amount}
          />

          <div className={styles.gap} />
          <Input
            label={"Currency"}
            type={"input"}
            onChange={(value) =>
              onEditField(AddTransactionFormFields.Currency, value)
            }
            value={values.currency}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Paid at"}
            type={"date"}
            onChange={(value) =>
              onEditField(AddTransactionFormFields.PaidAt, value)
            }
            value={values.paid_at}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Type"}
            type={"input"}
            onChange={(value) =>
              onEditField(AddTransactionFormFields.Type, value)
            }
            value={values.type}
          />
        </div>
        <div className={styles.row}>
          <Input
            label={"Users with access"}
            type={"textarea"}
            onChange={(value) =>
              onEditField(AddTransactionFormFields.UsersWithAccess, stringToArray(value as string))
            }
            value={values.users_with_access.toString()}
          />
        </div>
        <div className={styles.row}>
          <Checkbox
            label={"Is recurring"}
            onChange={() =>
              onEditField(
                AddTransactionFormFields.IsRecurring,
                !values.is_recurring
              )
            }
            checked={values.is_recurring}
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
