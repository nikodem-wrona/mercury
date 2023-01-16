import { FC } from "react"

import { Transaction, TransactionId } from "@/types"

import { AddTransaction, EditTransaction } from "./components"

import { Table } from "@/_shared/components"

type TransactionsComponentProps = {
  transactions: Transaction[]
}

export const TransactionsComponent: FC<TransactionsComponentProps> = ({
  transactions,
}) => {
  const itemsSchema = [
    {
      key: "id",
      label: "Id",
    },
    {
      key: "title",
      label: "Title",
    },
    {
      key: "description",
      label: "Description",
    },
    {
      key: "currency",
      label: "Currency",
    },
    {
      key: "amount",
      label: "Amount",
    },

    {
      key: "paid_at",
      label: "Paid at",
    },
    {
      key: "created_at",
      label: "Created at",
    },
    {
      key: "updated_at",

      label: "Updated at",
    },
    {
      key: "created_by",
      label: "Created by",
    },
    {
      key: "users_with_access",
      label: "Users with access",
    },
    {
      key: "is_recurring",
      label: "Is recurring",
    },

    {
      key: "type",
      label: "Type",
    },
  ]

  return (
    <Table<Transaction>
      header="Transactions"
      schema={itemsSchema}
      items={transactions}
      addItemModalPayload={{
        header: "Add transaction",
        renderContent: () => <AddTransaction />,
      }}
      editItemModalPayload={{
        header: "Edit transaction",
        renderContent: (transactionId, onClose) => (
          <EditTransaction
            transactionId={transactionId as TransactionId}
            onClose={onClose}
          />
        ),
      }}
    />
  )
}
