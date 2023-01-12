import { FC} from "react"

import { Expense, ExpenseId } from "@/types"

import { AddExpense, EditExpense } from "./components"

import { Table } from "@/_shared/components"

type ExpensesComponentProps = {
  expenses: Expense[]
}

export const ExpensesComponent: FC<ExpensesComponentProps> = ({ expenses }) => {
  const headers = ["Id", "Title", "Description", "Currency", "Amount", "Paid at", "Created at", "Updated at"]

  return (
    <Table<Expense>
      headers={headers}
      header="Expenses"
      items={expenses}
      addItemModalPayload={{
        header: "Add expense",
        renderContent: () => <AddExpense />,
      }}
      editItemModalPayload={{
        header: "Edit expense",
        renderContent: (expenseId, onClose) => (
          <EditExpense expenseId={expenseId as ExpenseId} onClose={onClose} />
        ),
      }}
    />
  )
}

